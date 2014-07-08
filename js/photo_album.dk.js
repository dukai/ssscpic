var imglist = [
	{
		img_big: 'http://yeelink-files.b0.upaiyun.com/yeelink/resource/images/qs_1.jpg',
		img_small: 'http://yeelink-files.b0.upaiyun.com/yeelink/resource/images/qs_1.jpg',
		img_orig: 'http://yeelink-files.b0.upaiyun.com/yeelink/resource/images/qs_1.jpg',
		intro: '近日，山东大学一组模仿类恶搞毕业照曝红网络，图片多是模仿电影海报类“对比照”，上传到社交媒体后便迅速获得过万点赞。'
		
	},
	{
		img_big: 'http://yeelink-files.b0.upaiyun.com/yeelink/resource/images/qs_2.jpg',
		img_small: 'http://yeelink-files.b0.upaiyun.com/yeelink/resource/images/qs_2.jpg',
		img_orig: 'http://yeelink-files.b0.upaiyun.com/yeelink/resource/images/qs_2.jpg',
		intro: '组模仿类恶搞毕业照曝红网络，图片多是模仿电影海报类“对比照”，上传到社交媒体后便迅速获得过万点赞。'
	}
];

var albumInfo = {

	current: {
		cover: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/27/095100ij1xjnt8313108zj.jpg',
		url: '',
		length: '2',
		title: '这是当前专题的标题',
		tags: ['摄影师', '肖像', '遗言']
	},
	prev: {
		cover: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/27/095100ij1xjnt8313108zj.jpg',
		url: '',
		length: '12',
		title: ''
	},
	next: {
		cover: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/27/095100ij1xjnt8313108zj.jpg',
		url: '',
		length: '5',
		title: '日本商家促销 女孩穿比基尼免费购物'
	}

};

var extend = function(subClass, baseClass){
	subClass.parentConstructor = baseClass;
	subClass.parent = {};

	baseClass.call(subClass.parent);


	for(var method in baseClass.prototype){
		subClass.prototype[method] = subClass.parent[method] = baseClass.prototype[method];
	}
};

window.extend = extend;

var mix = function(base, child, deep){
    var o = new Object();
    for(var key in base){
        o[key] = base[key];
    }
    for(var key in child){
		if(deep && isPlainObject(o[key])){
			o[key] = mix(o[key], child[key]);
		}else{
			o[key] = child[key];
		}
    }
    return o;
};

var EventEmitter = function(){
	this._initEventEmitter();
};

EventEmitter.prototype = {
	_initEventEmitter: function(){
		this._events = {};
	},
	
	emit: function(type, eventObject){
		if(this._events[type]){
			var events = this._events[type].slice();
			
			for(var i = 0, len = events.length; i < len; i++){
				events[i].listener.call(this, eventObject);
			}
		}
	},
	
	addListener: function(type, listener){
		if(!this._events[type]){
			this._events[type] = [];
		}
		this._events[type].push({
			type: type,
			listener: listener
		});
	},
	
	on: function(type, listener){
		this.addListener(type, listener);
	},
	once: function(type, listener){
		var fired = false;

		function g(eventObject) {
			this.removeListener(type, g);
		
		    if (!fired) {
		    	fired = true;
				listener.apply(this, eventObject);
			}
		}
		
		  g.listener = listener;
		  this.on(type, g);
	},
	removeListener: function(type, listener){
		var events = this._events[type];
		
		for(var i = 0, len = events.length; i < len; i++){
			if(events[i] == listener){
				this._events[type].splice(i, 1);
			}
		}
	},
	removeAllListeners: function(type){
		if(type == undefined){
			this._events = {};
		}else{
			delete this._events[type];
		}
	},
	
};

var PhotoAlbum = function(options){
	this._initPhotoAlbum(options);
};

PhotoAlbum.prototype = {
	_initPhotoAlbum: function(options){
		EventEmitter.call(this);
		this.options = {
			container: '',
			next: '',
			prev: '',
			loading: '',
			imglist: [],
			albumInfo: {}
		};
		this.options = mix(this.options, options);
		//current pointer to the image
		this.pointer = 0;
		this.total = this.options.imglist.length;
		this.totalPage = this.getTotalPage();
		
		this.listPager = new ListPager(this.totalPage);
		this.panel = $(this.options.container);
		
		this._initUI();

		this._initEvents();
	},
	
	_initUI: function(){
		//初始化标签
		
		//显示图集第一张图片
		
		this.show(0);
	},
	
	
	_initEvents: function(){
		var self = this;
		
		//绑定prev事件
		this.panel.find(this.options.prev).click(function(){
			self.prev();
		});
		
		//绑定next事件
		this.panel.find(this.options.next).click(function(){
			self.next();
		});

		this.listPager.on('next', function(e){
			self.updateListUI(e);
		});

		this.listPager.on('prev', function(e){
			self.updateListUI(e);
		});
		
		//绑定列表事件
			//绑定列表内部事件，分别为，显示指定内容，上一个，下一个
	},

	next: function(){
		this.emit('beforenext', {pointer: this.pointer});
		if(this.pointer >= this.total - 1){
			this.pointer++;
		}
		
		this.show(this.pointer);
	},

	prev: function(){
		this.emit('beforeprev', {pointer: this.pointer});
		if(this.pointer > 0)
			this.pointer--;
			
		this.show(this.pointer);
	},
	
	go: function(pointer){
		this.emit('beforego', {pointer: this.pointer});
		this.pointer = pointer;
		
		this.show(this.pointer);
	}

	show: function(pointer){
		var self = this;
		//显示加载动画
		this.showLoading();
		//加载完后显示图片（替换src）
		var imgres = this.options.imglist[pointer];

		//TODO: 需要判断是否有图片在加载，如果有的话取消旧的图片，加载新的图片

		var img = new Image();
		self.imgLoading = true;
		img.onload = function(){
			self.imgLoading = false;
		};
		
		img.onerror = function(){
			self.imgLoading = false;
		};
		
		img.src = "";
	},
	
	showLoading: function(){
		//显示加载动画
		this.panel.find(this.options.loading).show();
	},
	
	hideLoading: function(){
		//隐藏加载动画
		this.panel.find(this.options.loading).hide();
	},

	showList: function(){
		//根据pointer计算位置
		var result = this.listPager.buildResult(this.listPager.getCurrentPage(this.pointer));
		this.updateListUI(result);
	},
	//更新图片列表
	updateListUI: function(result){
		//判断是否显示上一页按钮
		if(result.prev){
			//添加上一页按钮
		}

		//生成列表

		for(var i = result.min; i <= result.max; i++){
			//循环生成列表
		}

		//判断是否显示下一页按钮
		if(result.next){
			//添加下一页按钮
		}

	},

	end: function(){
		//结束
		//显示广告
		//显示上一个下一个
	}

};

extend(PhotoAlbum, EventEmitter);


var ListPager = function(total){
	this.total = total;
	this._initListPager();
};


ListPager.prototype = {
	_initListPager: function(){
		EventEmitter.call(this);
		this.totalPage = this.getTotalPage();
		this.page = 1;
	},
	//获取总页面数目
	getTotalPage: function(){
		var totalPage;
		if(this.total <= 12){
			totalPage = 1;
		}else if(this.total <= 22 && this.total > 12){
			totalPage = 2;
		}else{
			totalPage = Math.ceil((this.total - 22) / 10) + 2;
		}
		return totalPage;
	},

	next: function(){
		if(this.page < this.totalPage){
			this.page ++;
		}
		var result = this.buildResult(this.page);
		this.emit("next", result)
		return result;
	},

	prev: function(){
		if(this.page > 1){
			this.page --;
		}
		var result = this.buildResult(this.page);
		this.emit("next", result)
		return result;
	},

	buildResult: function(page){
		var result = {
			page: page,
			max: -1, 
			min: -1,
			prev: false,
			next: false
		};


		if(this.total <= 12){
			result.page = 1;
			result.max = this.total - 1;
			result.min = 0;
			result.prev = false;
			result.next = false;
		}else{
			if(page >= this.totalPage){
				result.max = this.total - 1;
				result.min = (page - 1) * 10 + 1;
				result.prev = true;
				result.next = false;
			}else if(page == 1){
				result.max = page * 10;
				result.min = 0;
				result.prev = false;
				result.next = true;
			}else{
				result.max = page * 10;
				result.min = (page - 1) * 10 + 1;
				result.prev = true;
				result.next = true;
			}
		}

		return result;
	},
	
	getCurrentPage: function(pointer){
		
		if(this.total <= 12){
			return 1;
		}else{
			var current = Math.floor(Math.abs(pointer - 1) / 10) + 1;
			if(current >= this.totalPage){
				return this.totalPage;
			}else{
				return current;
			}
		}

	}
};

extend(ListPager, EventEmitter);



























