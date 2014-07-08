/********************************************
	 _              _                 _    
	|_)|_  _ _|_ _ |_| | |_    __    | \|/ 
	|  | |(_) |_(_)| | | |_)|_|||| o |_/|\ 

********************************************/
var imglist = [
	{
		img_big: 'http://e.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=a7ef3f74a38b87d64f42af1d3738135b/c2fdfc039245d688c0cc3fe1a6c27d1ed31b24ac.jpg',
		img_small: 'http://e.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=a7ef3f74a38b87d64f42af1d3738135b/c2fdfc039245d688c0cc3fe1a6c27d1ed31b24ac.jpg',
		img_orig: 'http://e.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=a7ef3f74a38b87d64f42af1d3738135b/c2fdfc039245d688c0cc3fe1a6c27d1ed31b24ac.jpg',
		intro: '近日，山东大学一组模仿类恶搞毕业照曝红网络，图片多是模仿电影海报类“对比照”，上传到社交媒体后便迅速获得过万点赞。'
		
	},
	{
		img_big: 'http://www.huabian.com/uploadfile/2014/0411/20140411113108945.jpg',
		img_small: 'http://www.huabian.com/uploadfile/2014/0411/20140411113108945.jpg',
		img_orig: 'http://www.huabian.com/uploadfile/2014/0411/20140411113108945.jpg',
		intro: '组模仿类恶搞毕业照曝红网络，图片多是模仿电影海报类“对比照”，上传到社交媒体后便迅速获得过万点赞。'
	},
	{
		img_big: 'http://d.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=0ed7877579899e51678e3e167297e250/5d6034a85edf8db1f03e28ec0b23dd54564e7421.jpg',
		img_small: 'http://d.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=0ed7877579899e51678e3e167297e250/5d6034a85edf8db1f03e28ec0b23dd54564e7421.jpg',
		img_orig: 'http://d.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=0ed7877579899e51678e3e167297e250/5d6034a85edf8db1f03e28ec0b23dd54564e7421.jpg',
		intro: '日本美女山岸志保桌面壁纸'
	},
	{
		img_big: 'http://b.hiphotos.baidu.com/image/pic/item/eac4b74543a9822636721aca8882b9014b90eba8.jpg',
		img_small: 'http://b.hiphotos.baidu.com/image/pic/item/eac4b74543a9822636721aca8882b9014b90eba8.jpg',
		img_orig: 'http://b.hiphotos.baidu.com/image/pic/item/eac4b74543a9822636721aca8882b9014b90eba8.jpg',
		intro: '2014年夏高级将领调整 兰州军区晋升三位中将'
	},
	{
		img_big: 'http://a.hiphotos.baidu.com/image/pic/item/3bf33a87e950352ad6465dad5143fbf2b2118b6b.jpg',
		img_small: 'http://a.hiphotos.baidu.com/image/pic/item/3bf33a87e950352ad6465dad5143fbf2b2118b6b.jpg',
		img_orig: 'http://a.hiphotos.baidu.com/image/pic/item/3bf33a87e950352ad6465dad5143fbf2b2118b6b.jpg',
		intro: '张德江会默克尔 俞正声会台商 养老金巨亏说法很片面'
	},
	{
		img_big: 'http://e.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=1d5893926259252dbc17190604ab3858/a8773912b31bb0513cb8c2a0347adab44bede09e.jpg',
		img_small: 'http://e.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=1d5893926259252dbc17190604ab3858/a8773912b31bb0513cb8c2a0347adab44bede09e.jpg',
		img_orig: 'http://e.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=1d5893926259252dbc17190604ab3858/a8773912b31bb0513cb8c2a0347adab44bede09e.jpg',
		intro: '明4时直播 德国VS巴西 巴德较量 两大霸主的正面对决'
	},
	{
		img_big: 'http://h.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=b6495242808ba61ec0eecc2d7104ac69/cb8065380cd7912390a1c0fcaf345982b3b780f0.jpg',
		img_small: 'http://h.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=b6495242808ba61ec0eecc2d7104ac69/cb8065380cd7912390a1c0fcaf345982b3b780f0.jpg',
		img_orig: 'http://h.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=b6495242808ba61ec0eecc2d7104ac69/cb8065380cd7912390a1c0fcaf345982b3b780f0.jpg',
		intro: '生平:神纪录助皇马欧冠五连冠 贝利马拉多纳被他折服'
	},
	{
		img_big: 'http://h.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=09955b805143fbf2da2ca221804ef1e3/29381f30e924b89966c807b06c061d950b7bf646.jpg',
		img_small: 'http://h.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=09955b805143fbf2da2ca221804ef1e3/29381f30e924b89966c807b06c061d950b7bf646.jpg',
		img_orig: 'http://h.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=09955b805143fbf2da2ca221804ef1e3/29381f30e924b89966c807b06c061d950b7bf646.jpg',
		intro: '皇马巴萨因他改变百年历史 C罗刷屏哀悼:安息吧大师'
	},
	{
		img_big: 'http://b.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=0ec917b67b310a55db24daf6877578ca/838ba61ea8d3fd1fb8cb2f7f324e251f94ca5fb1.jpg',
		img_small: 'http://b.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=0ec917b67b310a55db24daf6877578ca/838ba61ea8d3fd1fb8cb2f7f324e251f94ca5fb1.jpg',
		img_orig: 'http://b.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=0ec917b67b310a55db24daf6877578ca/838ba61ea8d3fd1fb8cb2f7f324e251f94ca5fb1.jpg',
		intro: '中国报纸刊带蘑菇云日本地图 日外相"无法容忍"(图)'
	},
	{
		img_big: 'http://b.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=bf103f319c510fb367197395e903f3f6/35a85edf8db1cb1310894d9bdf54564e93584b51.jpg',
		img_small: 'http://b.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=bf103f319c510fb367197395e903f3f6/35a85edf8db1cb1310894d9bdf54564e93584b51.jpg',
		img_orig: 'http://b.hiphotos.baidu.com/image/h%3D1200%3Bcrop%3D0%2C0%2C1920%2C1200/sign=bf103f319c510fb367197395e903f3f6/35a85edf8db1cb1310894d9bdf54564e93584b51.jpg',
		intro: '陕西：家属雇急救车运尸返乡 4名陪同男子车内身亡'
	},
	{
		img_big: 'http://d.hiphotos.baidu.com/image/pic/item/b03533fa828ba61e63a719b84334970a314e59d8.jpg',
		img_small: 'http://d.hiphotos.baidu.com/image/pic/item/b03533fa828ba61e63a719b84334970a314e59d8.jpg',
		img_orig: 'http://d.hiphotos.baidu.com/image/pic/item/b03533fa828ba61e63a719b84334970a314e59d8.jpg',
		intro: '庆生祝福竟成送别 皇马官方纪传奇88岁生日'
	},
	{
		img_big: 'http://b.hiphotos.baidu.com/image/pic/item/18d8bc3eb13533fa4bba42b9aad3fd1f41345b1d.jpg',
		img_small: 'http://b.hiphotos.baidu.com/image/pic/item/18d8bc3eb13533fa4bba42b9aad3fd1f41345b1d.jpg',
		img_orig: 'http://b.hiphotos.baidu.com/image/pic/item/18d8bc3eb13533fa4bba42b9aad3fd1f41345b1d.jpg',
		intro: '中组部通报3起干部档案造假案件 '
	},
	{
		img_big: 'http://c.hiphotos.baidu.com/image/pic/item/1ad5ad6eddc451da7386dd7cb4fd5266d0163231.jpg',
		img_small: 'http://c.hiphotos.baidu.com/image/pic/item/1ad5ad6eddc451da7386dd7cb4fd5266d0163231.jpg',
		img_orig: 'http://c.hiphotos.baidu.com/image/pic/item/1ad5ad6eddc451da7386dd7cb4fd5266d0163231.jpg',
		intro: '西藏官方“请进来”借力宣介旅游品牌'
	},
	{
		img_big: 'http://g.hiphotos.baidu.com/image/pic/item/42a98226cffc1e17c4b708bd4890f603738de936.jpg',
		img_small: 'http://g.hiphotos.baidu.com/image/pic/item/42a98226cffc1e17c4b708bd4890f603738de936.jpg',
		img_orig: 'http://g.hiphotos.baidu.com/image/pic/item/42a98226cffc1e17c4b708bd4890f603738de936.jpg',
		intro: '青岛中考改革取消分数改等级 家长质疑更不公平'
	},
	{
		img_big: 'http://g.hiphotos.baidu.com/image/pic/item/c2fdfc039245d688aad8c92ea6c27d1ed31b2465.jpg',
		img_small: 'http://g.hiphotos.baidu.com/image/pic/item/c2fdfc039245d688aad8c92ea6c27d1ed31b2465.jpg',
		img_orig: 'http://g.hiphotos.baidu.com/image/pic/item/c2fdfc039245d688aad8c92ea6c27d1ed31b2465.jpg',
		intro: '青岛司机酒后驾驶酿惨剧 护栏插入司机体内（图）'
	},
	{
		img_big: 'http://g.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d5889e8523f6d55fbb2fbd91f.jpg',
		img_small: 'http://g.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d5889e8523f6d55fbb2fbd91f.jpg',
		img_orig: 'http://g.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d5889e8523f6d55fbb2fbd91f.jpg',
		intro: '青岛两万市民看大熊猫 蜀云卖萌贝贝女王范儿'
	},
	{
		img_big: 'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b366ec19f61a1cc7cd98c109def.jpg',
		img_small: 'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b366ec19f61a1cc7cd98c109def.jpg',
		img_orig: 'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b366ec19f61a1cc7cd98c109def.jpg',
		intro: '一处土地两家争 国土局称是区划调整遗留问题'
	},
	{
		img_big: 'http://h.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3ced4854dbf9045d688d53f20f0.jpg',
		img_small: 'http://h.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3ced4854dbf9045d688d53f20f0.jpg',
		img_orig: 'http://h.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3ced4854dbf9045d688d53f20f0.jpg',
		intro: '青岛两女子马路上拦车追债 欠债男子脱衣逃跑(图)'
	},
	{
		img_big: 'http://c.hiphotos.baidu.com/image/pic/item/6c224f4a20a44623e3bddfe89a22720e0df3d7c1.jpg',
		img_small: 'http://c.hiphotos.baidu.com/image/pic/item/6c224f4a20a44623e3bddfe89a22720e0df3d7c1.jpg',
		img_orig: 'http://c.hiphotos.baidu.com/image/pic/item/6c224f4a20a44623e3bddfe89a22720e0df3d7c1.jpg',
		intro: '日本民众抗议自卫队演习 吁停止“侵略训练”(图) '
	},
	{
		img_big: 'http://d.hiphotos.baidu.com/image/pic/item/7dd98d1001e939010a20f7b479ec54e736d1961d.jpg',
		img_small: 'http://d.hiphotos.baidu.com/image/pic/item/7dd98d1001e939010a20f7b479ec54e736d1961d.jpg',
		img_orig: 'http://d.hiphotos.baidu.com/image/pic/item/7dd98d1001e939010a20f7b479ec54e736d1961d.jpg',
		intro: '新加坡：北京“炮轰”日本 马英九打了助攻'
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
	var parent = subClass.parent = {
		/**
		 * parent construct
		 * @param obj currentObject
		 * @param args
		 */
		'__construct': function(obj, args){
			baseClass.apply(obj, args);
		}
	};

	for(var method in baseClass.prototype){
		parent[method] = baseClass.prototype[method];
		if(! (method in subClass.prototype)){
			subClass.prototype[method] = baseClass.prototype[method];
		}
	}
};

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
			coverImage: '',
			imglist: [],
			albumInfo: {}
		};
		this.options = mix(this.options, options);
		//current pointer to the image
		this.pointer = 0;
		this.total = this.options.imglist.length;
		
		this.listPager = new ListPager(this.totalPage);
		this.panel = $(this.options.container);
		
		this._initUI();

		this._initEvents();
	},
	
	_initUI: function(){
		//初始化标签
		var tags = this.options.albumInfo.current.tags;

		var tagsArray = [];

		for(var i in tags){
			var thtml = '<a href="#">' + tags[i] + '</a>';
			tagsArray.push(thtml);
		}

		this.panel.find('.tags').html(tagsArray.join(' / '));

		//初始化页码

		this.panel.find('.yeshu i').html(this.total);

		//显示图集第一张图片
		this.go(0);
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
		
		this.on('show', function(e){
			self.panel.find('.intro').html(e.imageInfo.intro);
			self.panel.find('.yeshu span').html(e.pointer + 1);
		});
		//绑定列表事件
			//绑定列表内部事件，分别为，显示指定内容，上一个，下一个
	},

	next: function(){
		this.emit('beforenext', {pointer: this.pointer});
		if(this.pointer < this.total - 1){
			this.pointer++;
			this.show(this.pointer);
		}else{
			this.end();
		}
		
		
	},

	prev: function(){
		this.emit('beforeprev', {pointer: this.pointer});
		if(this.pointer > 0){
			this.pointer--;
		}else{
			this.pointer = this.total - 1;
		}
		this.show(this.pointer);
	},
	
	go: function(pointer){
		this.emit('beforego', {pointer: this.pointer});
		this.pointer = pointer;
		
		this.show(this.pointer);
	},

	show: function(pointer){
		var self = this;


		//显示加载动画
		this.showLoading();
		//加载完后显示图片（替换src）
		var imgres = this.options.imglist[pointer];


		// 需要判断是否有图片在加载，如果有的话取消旧的图片，加载新的图片
		if(this.imgLoading){
			this.abortLoading();
		}
		var img = new Image();
		self.imgLoading = true;
		img.onload = function(){
			self.imgLoading = false;
			var size = self.calculateSize(0, 460, this);
			self.panel.find(self.options.coverImage).attr('src', this.src).attr('width', size.width).attr('height', size.height);
			self.hideLoading();
		};
		
		img.onerror = function(){
			self.imgLoading = false;
			self.hideLoading();
		};
		this.emit('show', {
			pointer: pointer,
			imageInfo: imgres,
			image: img
		})
		this.loadingImage = img;
		
		img.src = imgres.img_big;
	},

	calculateSize: function(maxWidth, maxHeight, img){
		var hRatio;
		var wRatio;
		var Ratio = 1;
		var w = img.width;
		var h = img.height;
		wRatio = maxWidth / w;
		hRatio = maxHeight / h;
		if (maxWidth ==0 && maxHeight==0){
			Ratio = 1;
		}else if (maxWidth==0){//
			if (hRatio<1) Ratio = hRatio;
		}else if (maxHeight==0){
			if (wRatio<1) Ratio = wRatio;
		}else if (wRatio<1 || hRatio<1){
			Ratio = (wRatio<=hRatio?wRatio:hRatio);
		}
		if (Ratio<1){
			w = w * Ratio;
			h = h * Ratio;
		}

		return {
			width: w, height: h
		}
	},

	abortLoading: function(){
		if(window.stop !== undefined){
			window.stop();
		}else if(document.execCommand !== undefined){
			document.execCommand("Stop", false);
		}
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

		console.log("END");
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



























