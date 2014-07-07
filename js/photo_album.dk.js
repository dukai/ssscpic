var imglist = [
	{
		img_big: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/24/182254wh2orrkmf11zix1r.jpg',
		img_small: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/24/182254wh2orrkmf11zix1r.jpg',
		img_orig: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/24/182254wh2orrkmf11zix1r.jpg',
		intro: '近日，山东大学一组模仿类恶搞毕业照曝红网络，图片多是模仿电影海报类“对比照”，上传到社交媒体后便迅速获得过万点赞。'
		
	},
	{
		img_big: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/27/095100ij1xjnt8313108zj.jpg',
		img_small: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/27/095100ij1xjnt8313108zj.jpg',
		img_orig: 'http://testattach-scimg-cn.b0.upaiyun.com/album/201406/27/095100ij1xjnt8313108zj.jpg',
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
		this.options = {
			container: '',
			imglist: [],
			albumInfo: {}
		};
		this.options = mix(this.options, options);
		//current pointer to the image
		this.pointer = 0;
		this.length = this.options.imglist.length;
		this.panel = $(this.options.container);
	},
	
	_initUI: function(){
		//初始化标签
		
		//显示图集第一张图片
		
		this.show(0);
	},
	
	_initEvents: function(){
		var self = this;
	},

	next: function(){
		if(this.pointer >= this.length - 1){
			this.pointer++;
		}
		
		this.show(this.pointer);
	},

	prev: function(){
		if(this.pointer > 0)
			this.pointer--;
			
		this.show(this.pointer);
	},

	show: function(){
		//change the image src
	},

	showList: function(){
		//根据pointer计算位置
	},

	end: function(){
		//结束
		//显示广告
		//显示上一个下一个
	}

};































