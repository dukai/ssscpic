    jQuery(".zx_sczg_index_suo .sous").hover(function(){
        jQuery(".zx_sczg_index_suo .sous a").css({background:"#fff url(images/nav_sprite.png) -133px -135px no-repeat",color:"#323840"})
        jQuery("#zx_sczg_index_search").show();
    },function(){
        jQuery(".zx_sczg_index_suo .sous a").css({background:" url(images/nav_sprite.png)  -43px -133px no-repeat",color:""})
        jQuery("#zx_sczg_index_search").hide();
    });
    jQuery(".zx_sczg_index_xinq .set").hover(function(){
        jQuery(".zx_sczg_index_xinq .set").addClass("sethov");
        jQuery(".set .zx_index_xinxbag").show();
    },function(){
        jQuery(".zx_sczg_index_xinq .set").removeClass("sethov");
        jQuery(".set .zx_index_xinxbag").hide();
    });
    jQuery(".zx_sczg_index_xinq .message").hover(function(){
        jQuery(".zx_sczg_index_xinq .message .ico").css({background:"#fff url(images/nav_sprite.png) 15px 16px no-repeat",color:"#323840"})
        jQuery(".message .zx_index_xinxbag").show();
    },function(){
        jQuery(".zx_sczg_index_xinq .message .ico").css({background:"url(images/nav_sprite.png) 15px -68px no-repeat",color:""})
        jQuery(".message .zx_index_xinxbag").hide();
    });
    jQuery(".zx_sczg_lef_wenz").hover(function(){
      jQuery(this).css('background','#f7f7f7');
    },function(){
       jQuery(this).css('background','none');
    }); 
    jQuery(".xuser").hover(function(){
      jQuery(".uselis").show();
    },function(){
      jQuery(".uselis").hide();    
    });
function clos_A(gb){
  jQuery("#ggao").hide();
  jQuery(gb).hide();
};

function quxiao(abs){
jQuery(".zx_ctgli01").hide();
 jQuery(".dawrap").hide();
 jQuery("body,html").css('overflow','visible');
}

jQuery(".xclose_b").click(function(){
 jQuery(".zx_ctgli02").hide();
 jQuery(".dawrap").hide();
 jQuery("body,html").css('overflow','visible');
});

  jQuery(".zxdutpl p").eq(0).show().siblings().hide();
jQuery(".othpic_tit .paixfs").mouseover(function(){
   var indl=jQuery(".othpic_tit .paixfs").index(this);
   jQuery(".othpic_tit .paixfs").eq(indl).addClass("hov").siblings().removeClass("hov");
   jQuery(".othpic_con .scrollzd").eq(indl).show().siblings().hide();
   jQuery(".zxdutpl p").eq(indl).show().siblings().hide();
   
});


jQuery(window).scroll(function(){
  var scrolls = jQuery(window).scrollTop();
  if(scrolls>=310){
  jQuery(".mCbl").removeClass("mCbl_k");
  }else{
    jQuery(".mCbl").addClass("mCbl_k");
  };
});


jQuery(window).scroll(function(){
  var scrolls01 = jQuery(window).scrollTop();
  var ll=document.body.clientHeight;
  var fouhit=jQuery("#bots").height();
  var heigt01=ll-fouhit;
  if(scrolls01>=310){
    jQuery(".rigfloat01").show();
  }else{
    jQuery(".rigfloat01").hide();
  };

  if(scrolls01>=heigt01-750){
  jQuery(".mCbl01").addClass("mCbl_k01");
  }else{
    jQuery(".mCbl01").removeClass("mCbl_k01");
  };
});

jQuery(".tplb").click(function(){
  jQuery("#tuplist").show();
  jQuery("#nyliul").hide();
  jQuery("#qplk").hide();
  jQuery(".dawrap").hide();
});

jQuery(".qpck").click(function(){
  jQuery("#qplk").show();
  jQuery(".dawrap").show();
   jQuery("body,html").css('overflow','hidden');
});

jQuery(".ytck").click(function(){
  jQuery("#tuplist").hide();
  jQuery("#nyliul").show();
  jQuery("#qplk").hide();
  jQuery(".dawrap").hide();
});
jQuery(".sjfx").hover(function(){
   jQuery(this).children(".bdsharebuttonbox01").show();
},function(){
 jQuery(this).children(".bdsharebuttonbox01").hide();
});

jQuery(".tadfens p").mouseover(function(){
  var in_p=jQuery(".tadfens p").index(this);
  jQuery(".tadfens p").eq(in_p).addClass("hov").siblings().removeClass("hov");
  jQuery(".tadfens_con .fenslist").eq(in_p).show().siblings().hide();
});

jQuery(".fens_dl").hover(function(){
   jQuery(this).css('background','#efeeec');
},function(){
   jQuery(this).css('background','none');
});
jQuery(".pics_lef p").hover(function(){
   jQuery(this).addClass("hov");
},function(){
   jQuery(this).removeClass("hov");
});

jQuery(".dpla0a").hover(function(){
  jQuery(this).children(".outwidsc").show();
},function(){
  jQuery(this).children(".outwidsc").hide();   
});

jQuery(".otmn_lef_pas .ps").hover(function(){
  jQuery(this).children(".pichova").show();
},function(){
    jQuery(this).children(".pichova").hide();
});
 
$(".shuax").live("click",function(){
 var obj_temp1 = jQuery(".touxhuan");
    var po1 = obj_temp1.css({ 'top': 0+'px'});
    var ps1 = obj_temp1.css({ 'top': -100+'px' });
        if (ps1) {po1}else{ps1}
});

/*评论字数*/
 function checkLen(obj)
 {
 var maxChars = 200;
 if (obj.value.length > maxChars)
 obj.value = obj.value.substring(0,maxChars);
 var curr = maxChars - obj.value.length;
 document.getElementById("count").innerHTML = curr.toString();
 };

 /*评论字数*/
 function checkLen01(obja)
 {
 var maxChars = 200;
 if (obja.value.length > maxChars)
 obja.value = obja.value.substring(0,maxChars);
 var curr = maxChars - obja.value.length;
 document.getElementById("count01").innerHTML = curr.toString();
 };

  /*评论字数*/
 function checkLen03(obja)
 {
 var maxChars = 200;
 if (obja.value.length > maxChars)
 obja.value = obja.value.substring(0,maxChars);
 var curr = maxChars - obja.value.length;
 document.getElementById("count03").innerHTML = curr.toString();
 };

jQuery(".liclist").hover(function(){
  jQuery(this).children(".toux").show();
  jQuery(this).children(".gbbuts").show();
},function(){
  jQuery(this).children(".toux").hide();
  jQuery(this).children(".gbbuts").hide();
});

jQuery(".gbbuts").click(function(){
   jQuery(this).parent(".liclist").hide();
});
 
    var oIndex = 0;
    var oLeft = jQuery('.leftjiant02');
    var oRight = jQuery('.rightjiant02');
    var oTopnum = jQuery(".yeshu02 span");
    var butsas = jQuery(".yeshu02 i");
    var aA = jQuery(".tWrapper02 li");
    var len = jQuery(".tWrapper02 li").length-1;
    jQuery(butsas).text(len+1);
    jQuery(".rigflsg02").eq(len).hide();
    jQuery(".tWrapper02 li").hover(function(){
        var sy = jQuery(".tWrapper02 li").index(jQuery(this));
          oIndex = sy;
        moveDiv();
    });
    oLeft.bind('click', function(e){
        e.preventDefault();
        oIndex--;
        if(oIndex <0) oIndex =len;
        jQuery(oTopnum).text(oIndex+1);
        jQuery(butsas).text(len+1);
        moveDiv();
    });
    oRight.bind('click', function(e){
        e.preventDefault();
        oIndex++;
        if(oIndex >len) oIndex = 0;
         jQuery(oTopnum).text(oIndex+1);
         jQuery(butsas).text(len+1);
        moveDiv();
    });


 function tancdiv(dsrf){
  jQuery(".zx_ctgli01").show();
  jQuery(".dawrap").show();
   jQuery("body,html").css('overflow','hidden');
 };

    function moveDiv(){
        var i = oIndex;
        aA.removeClass("hov");
        aA.eq(i).addClass('hov');
        jQuery(".comxs02").hide();
        jQuery(".comxs02").eq(i).show();
        jQuery(".pict01_b").hide();
        jQuery(".pict01_b").eq(i).show();
        jQuery(".rigflsg02").hide();
        jQuery(".rigflsg02").eq(i).show();
        jQuery(".tupjtits02").find("a").each(function(index){
          jQuery(this).removeClass("hov");
        });
        jQuery(".tupjtits02").find("a").eq(i).addClass("hov");
        oIndex = i;
    };

    var oIndex = 0;
    var oLeft01 = jQuery('.leftjiant01');
    var oRight01 = jQuery('.rightjiant01');
    var oTopnum01 = jQuery(".yeshu01 span");
    var butsas01 = jQuery(".yeshu01 i");
    var aA = jQuery(".tWrapper01 li");
    var len = jQuery(".tWrapper01 li").length-1;
        jQuery(butsas01).text(len+1);
        jQuery(".rigflsg01").eq(len).hide();
    jQuery(".tWrapper01 li").hover(function(){
        var sy = jQuery(".tWrapper01 li").index(jQuery(this));
          oIndex = sy;
        moveDiv01();
    });
    oLeft01.bind('click', function(e){
        e.preventDefault();
        oIndex--;
        if(oIndex <0) oIndex =len;
        jQuery(oTopnum01).text(oIndex+1);
        jQuery(butsas01).text(len+1);
        moveDiv01();
    });
    oRight01.bind('click', function(e){
        e.preventDefault();
        oIndex++;
        if(oIndex >len) oIndex = 0;
         jQuery(oTopnum01).text(oIndex+1);
         jQuery(butsas01).text(len+1);
        moveDiv01();
    });
    function moveDiv01(){
        var i = oIndex;
        aA.removeClass("hov");
        aA.eq(i).addClass('hov');
        jQuery(".comxs01").hide();
        jQuery(".comxs01").eq(i).show();

jQuery(".ytck").click(function(){
    var cur=jQuery(".comxs01").eq(i).children("a").children("img").attr("src");
    window.location = cur;
    alert(cur)
});
       

        jQuery(".pict01_a").hide();
        jQuery(".pict01_a").eq(i).show();
        jQuery(".rigflsg01").hide();
        jQuery(".rigflsg01").eq(i).show();
        jQuery(".tupjtits01").find("a").each(function(index){
          jQuery(this).removeClass("hov");
        });
        jQuery(".tupjtits01").find("a").eq(i).addClass("hov");
        oIndex = i;
    };


function auto_resize_image(maxWidth,maxHeight,objImg){
var img = new Image();
img.src = objImg.src;
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
objImg.height = h;
objImg.width = w;
};

jQuery(document).ready(function(){(function(jQuery){jQuery.fn.jCarouselLite=function(o){o=jQuery.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:5,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=jQuery(this),ul=jQuery("ul",c),tLi=jQuery("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=jQuery("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)jQuery(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)jQuery(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)jQuery.each(o.btnGo,function(i,a){jQuery(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){jQuery(o.btnPrev+","+o.btnNext).removeClass("disabled");jQuery((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt(jQuery.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
jQuery(".soll_c05").jCarouselLite({
  btnNext: ".r_but05", //控制左移
  btnPrev: ".l_but05", //控制右移
  visible:5, //可见li数量为4，显示4个页面
 // auto: 6000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
  scroll: 1,
  speed:500 //控制滚动速度，删除即默认速度
 });
});

jQuery(document).ready(function(){(function(jQuery){jQuery.fn.jCarouselLite=function(o){o=jQuery.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:5,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=jQuery(this),ul=jQuery("ul",c),tLi=jQuery("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=jQuery("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)jQuery(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)jQuery(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)jQuery.each(o.btnGo,function(i,a){jQuery(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){jQuery(o.btnPrev+","+o.btnNext).removeClass("disabled");jQuery((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt(jQuery.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
jQuery(".soll_c").jCarouselLite({
  btnNext: ".r_but", //控制左移
  btnPrev: ".l_but", //控制右移
  visible:5, //可见li数量为4，显示4个页面
 // auto: 6000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
  scroll: 1,
  speed:500 //控制滚动速度，删除即默认速度
 });
});

jQuery(document).ready(function(){(function(jQuery){jQuery.fn.jCarouselLite=function(o){o=jQuery.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:2,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=jQuery(this),ul=jQuery("ul",c),tLi=jQuery("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=jQuery("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)jQuery(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)jQuery(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)jQuery.each(o.btnGo,function(i,a){jQuery(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){jQuery(o.btnPrev+","+o.btnNext).removeClass("disabled");jQuery((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt(jQuery.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
jQuery(".soll_c01").jCarouselLite({
  btnNext: ".r_but02", //控制左移
  btnPrev: ".l_but02", //控制右移
  visible:2, //可见li数量为4，显示4个页面
 // auto: 6000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
  scroll: 1,
  speed:500 //控制滚动速度，删除即默认速度
 });
});

jQuery(document).ready(function(){(function(jQuery){jQuery.fn.jCarouselLite=function(o){o=jQuery.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=jQuery(this),ul=jQuery("ul",c),tLi=jQuery("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=jQuery("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)jQuery(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)jQuery(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)jQuery.each(o.btnGo,function(i,a){jQuery(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){jQuery(o.btnPrev+","+o.btnNext).removeClass("disabled");jQuery((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt(jQuery.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
jQuery(".soll_c04").jCarouselLite({
  btnNext: ".r_but04", //控制左移
  btnPrev: ".l_but04", //控制右移
  visible:3, //可见li数量为4，显示4个页面
 // auto: 6000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
  scroll: 1,
  speed:500 //控制滚动速度，删除即默认速度
 });
});


    $(document).ready(function(e){
  $(window).scroll(function() {
        var scrolls = $(window).scrollTop();
    var oIframe = $("#mRAdk");
        var oIframe1 = oIframe.offset().top;
    var oIframe2 = $("#tFSrc");
        var oIframe3 = oIframe2.offset().top;
    var mTp = parseInt($(".mRAdk").css("top"));
        var isIE = !!window.ActiveXObject;
        var isIE6 = isIE && !window.XMLHttpRequest;
        var isIE8 = isIE && !!document.documentMode;
        var isIE7 = isIE && !isIE6 && !isIE8;
        if (isIE) {
            if (isIE6) {
        oIframe1 = oIframe1 + 225;
        oIframe3 = oIframe3 + 225;
            } else {
        oIframe1 = oIframe1 + 225;
        oIframe3 = oIframe3 + 225;
            }
        }
    var oIframe4 = oIframe3 - oIframe1;
    var oIframe5 = scrolls - oIframe1+205;
        if (scrolls >= 0 && scrolls < oIframe1) {
            var mstyle = $(".mRAdkB").length;
            if (mstyle == 1) {
                $(".mRAdk").removeClass("mRAdk_hov")
            } else {
                $(".mRAdk").addClass("mRAdkB")
            }
      if (isIE) {
                if (isIE6) {
                    $(".mRAdk").removeAttr("style");
                }else{
                    if (isIE7) {
              $(".mRAdk").removeAttr("style");
            }
          }
        }
        } else {
            if (scrolls >= oIframe1 && scrolls < oIframe3-510) {
                var mstyle = $(".mRAdkB").length;
        if (mstyle == 1) {
                    $(".mRAdk").addClass("mRAdk_hov");
          $(".mRAdk").removeAttr("style");
                } else {
                    $(".mRAdk").removeClass("mRAdk_hov");
          $(".mRAdk").addClass("mRAdkB");
                }
        if (isIE) {
                if (isIE6) {
                      $(".mRAdk").css({top:oIframe5,position:"absolute"});
                }else{
                    if (isIE7) {
              $(".mRAdk").css({top:oIframe5,position:"absolute"});
            }
          }
        }
        
            } else {
                if (mTp == oIframe3 - 510) {
                    return false
                } else {
          $(".mRAdk").css({position:"absolute"});
                    $(".mRAdk").css("top", oIframe4 - 510);
                    $(".mRAdk").removeClass("mRAdk_hov");
                    $(".mRAdk").removeClass("mRAdkB");
          
                }
            }
        }
    }) 
});