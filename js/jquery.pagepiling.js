/*!
* pagepiling.js 1.5.4
*
* https://github.com/alvarotrigo/pagePiling.js
* @license MIT licensed
*
* Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
*/(function($,document,window,undefined){'use strict';$.fn.pagepiling=function(custom){var PP=$.fn.pagepiling;var container=$(this);var lastScrolledDestiny;var lastAnimation=0;var isTouch=(('ontouchstart'in window)||(navigator.msMaxTouchPoints>0)||(navigator.maxTouchPoints));var touchStartY=0,touchStartX=0,touchEndY=0,touchEndX=0;var scrollings=[];var scrollDelay=600;var options=$.extend(true,{direction:'vertical',menu:null,verticalCentered:true,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:'easeInQuart',loopBottom:false,loopTop:false,css3:true,navigation:{textColor:'#000',bulletsColor:'#000',position:'right',tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:true,sectionSelector:'.section',animateAnchor:false,afterLoad:null,onLeave:null,afterRender:null},custom);$.extend($.easing,{easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;}});PP.setScrollingSpeed=function(value){options.scrollingSpeed=value;};PP.setMouseWheelScrolling=function(value){if(value){addMouseWheelHandler();}else{removeMouseWheelHandler();}};PP.setAllowScrolling=function(value){if(value){PP.setMouseWheelScrolling(true);addTouchHandler();}else{PP.setMouseWheelScrolling(false);removeTouchHandler();}};PP.setKeyboardScrolling=function(value){options.keyboardScrolling=value;};PP.moveSectionUp=function(){var prev=$('.pp-section.active').prev('.pp-section');if(!prev.length&&options.loopTop){prev=$('.pp-section').last();}
if(prev.length){scrollPage(prev);}};PP.moveSectionDown=function(){var next=$('.pp-section.active').next('.pp-section');if(!next.length&&options.loopBottom){next=$('.pp-section').first();}
if(next.length){scrollPage(next);}};PP.moveTo=function(section){var destiny='';if(isNaN(section)){destiny=$(document).find('[data-anchor="'+section+'"]');}else{destiny=$('.pp-section').eq((section-1));}
if(destiny.length>0){scrollPage(destiny);}};$(options.sectionSelector).each(function(){$(this).addClass('pp-section');});if(options.css3){options.css3=support3d();}
$(container).css({'overflow':'hidden','-ms-touch-action':'none','touch-action':'none'});PP.setAllowScrolling(true);if(!$.isEmptyObject(options.navigation)){addVerticalNavigation();}
var zIndex=$('.pp-section').length;$('.pp-section').each(function(index){$(this).data('data-index',index);$(this).css('z-index',zIndex);if(!index&&$('.pp-section.active').length===0){$(this).addClass('active');}
if(typeof options.anchors[index]!=='undefined'){$(this).attr('data-anchor',options.anchors[index]);}
if(typeof options.sectionsColor[index]!=='undefined'){$(this).css('background-color',options.sectionsColor[index]);}
if(options.verticalCentered&&!$(this).hasClass('pp-scrollable')){addTableClass($(this));}
zIndex=zIndex-1;}).promise().done(function(){if(options.navigation){$('#pp-nav').css('margin-top','-'+($('#pp-nav').height()/2)+'px');$('#pp-nav').find('li').eq($('.pp-section.active').index('.pp-section')).find('a').addClass('active');}
$(window).on('load',function(){scrollToAnchor();});$.isFunction(options.afterRender)&&options.afterRender.call(this);});function addTableClass(element){element.addClass('pp-table').wrapInner('<div class="pp-tableCell" style="height:100%" />');}
function getYmovement(destiny){var fromIndex=$('.pp-section.active').index('.pp-section');var toIndex=destiny.index('.pp-section');if(fromIndex>toIndex){return 'up';}
return 'down';}
function scrollPage(destination,animated){var v={destination:destination,animated:animated,activeSection:$('.pp-section.active'),anchorLink:destination.data('anchor'),sectionIndex:destination.index('.pp-section'),toMove:destination,yMovement:getYmovement(destination),leavingSection:$('.pp-section.active').index('.pp-section')+1};if(v.activeSection.is(destination)){return;}
if(typeof v.animated==='undefined'){v.animated=true;}
if(typeof v.anchorLink!=='undefined'){setURLHash(v.anchorLink,v.sectionIndex);}
v.destination.addClass('active').siblings().removeClass('active');v.sectionsToMove=getSectionsToMove(v);if(v.yMovement==='down'){v.translate3d=getTranslate3d();v.scrolling='-100%';if(!options.css3){v.sectionsToMove.each(function(index){if(index!=v.activeSection.index('.pp-section')){$(this).css(getScrollProp(v.scrolling));}});}
v.animateSection=v.activeSection;}
else{v.translate3d='translate3d(0px, 0px, 0px)';v.scrolling='0';v.animateSection=destination;}
$.isFunction(options.onLeave)&&options.onLeave.call(this,v.leavingSection,(v.sectionIndex+1),v.yMovement);performMovement(v);activateMenuElement(v.anchorLink);activateNavDots(v.anchorLink,v.sectionIndex);lastScrolledDestiny=v.anchorLink;var timeNow=new Date().getTime();lastAnimation=timeNow;}
function performMovement(v){if(options.css3){transformContainer(v.animateSection,v.translate3d,v.animated);v.sectionsToMove.each(function(){transformContainer($(this),v.translate3d,v.animated);});setTimeout(function(){afterSectionLoads(v);},options.scrollingSpeed);}else{v.scrollOptions=getScrollProp(v.scrolling);if(v.animated){v.animateSection.animate(v.scrollOptions,options.scrollingSpeed,options.easing,function(){readjustSections(v);afterSectionLoads(v);});}else{v.animateSection.css(getScrollProp(v.scrolling));setTimeout(function(){readjustSections(v);afterSectionLoads(v);},400);}}}
function afterSectionLoads(v){$.isFunction(options.afterLoad)&&options.afterLoad.call(this,v.anchorLink,(v.sectionIndex+1));}
function getSectionsToMove(v){var sectionToMove;if(v.yMovement==='down'){sectionToMove=$('.pp-section').map(function(index){if(index<v.destination.index('.pp-section')){return $(this);}});}else{sectionToMove=$('.pp-section').map(function(index){if(index>v.destination.index('.pp-section')){return $(this);}});}
return sectionToMove;}
function readjustSections(v){if(v.yMovement==='up'){v.sectionsToMove.each(function(index){$(this).css(getScrollProp(v.scrolling));});}}
function getScrollProp(propertyValue){if(options.direction==='vertical'){return{'top':propertyValue};}
return{'left':propertyValue};}
function silentScroll(section,offset){if(options.css3){transformContainer(section,getTranslate3d(),false);}
else{section.css(getScrollProp(offset));}}
function setURLHash(anchorLink,sectionIndex){if(options.anchors.length){location.hash=anchorLink;setBodyClass(location.hash);}else{setBodyClass(String(sectionIndex));}}
function setBodyClass(text){text=text.replace('#','');$('body')[0].className=$('body')[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,'');$('body').addClass('pp-viewing-'+text);}
function scrollToAnchor(){var value=window.location.hash.replace('#','');var sectionAnchor=value;var section=$(document).find('.pp-section[data-anchor="'+sectionAnchor+'"]');if(section.length>0){scrollPage(section,options.animateAnchor);}}
function isMoving(){var timeNow=new Date().getTime();if(timeNow-lastAnimation<scrollDelay+options.scrollingSpeed){return true;}
return false;}
$(window).on('hashchange',hashChangeHandler);function hashChangeHandler(){var value=window.location.hash.replace('#','').split('/');var sectionAnchor=value[0];if(sectionAnchor.length){if(sectionAnchor&&sectionAnchor!==lastScrolledDestiny){var section;if(isNaN(sectionAnchor)){section=$(document).find('[data-anchor="'+sectionAnchor+'"]');}else{section=$('.pp-section').eq((sectionAnchor-1));}
scrollPage(section);}}}
function getTransforms(translate3d){return{'-webkit-transform':translate3d,'-moz-transform':translate3d,'-ms-transform':translate3d,'transform':translate3d};}
function transformContainer(element,translate3d,animated){element.toggleClass('pp-easing',animated);element.css(getTransforms(translate3d));}
$(document).keydown(function(e){if(options.keyboardScrolling&&!isMoving()){switch(e.which){case 38:case 33:PP.moveSectionUp();break;case 40:case 34:PP.moveSectionDown();break;case 36:PP.moveTo(1);break;case 35:PP.moveTo($('.pp-section').length);break;case 37:PP.moveSectionUp();break;case 39:PP.moveSectionDown();break;default:return;}}});if(options.normalScrollElements){$(document).on('mouseenter',options.normalScrollElements,function(){PP.setMouseWheelScrolling(false);});$(document).on('mouseleave',options.normalScrollElements,function(){PP.setMouseWheelScrolling(true);});}
var prevTime=new Date().getTime();function MouseWheelHandler(e){var curTime=new Date().getTime();e=e||window.event;var value=e.wheelDelta||-e.deltaY||-e.detail;var delta=Math.max(-1,Math.min(1,value));var horizontalDetection=typeof e.wheelDeltaX!=='undefined'||typeof e.deltaX!=='undefined';var isScrollingVertically=(Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta))||(Math.abs(e.deltaX)<Math.abs(e.deltaY)||!horizontalDetection);if(scrollings.length>149){scrollings.shift();}
scrollings.push(Math.abs(value));var timeDiff=curTime-prevTime;prevTime=curTime;if(timeDiff>200){scrollings=[];}
if(!isMoving()){var activeSection=$('.pp-section.active');var scrollable=isScrollable(activeSection);var averageEnd=getAverage(scrollings,10);var averageMiddle=getAverage(scrollings,70);var isAccelerating=averageEnd>=averageMiddle;if(isAccelerating&&isScrollingVertically){if(delta<0){scrolling('down',scrollable);}else if(delta>0){scrolling('up',scrollable);}}
return false;}}
function getAverage(elements,number){var sum=0;var lastElements=elements.slice(Math.max(elements.length-number,1));for(var i=0;i<lastElements.length;i++){sum=sum+lastElements[i];}
return Math.ceil(sum/number);}
function scrolling(type,scrollable){var check;var scrollSection;if(type=='down'){check='bottom';scrollSection=PP.moveSectionDown;}else{check='top';scrollSection=PP.moveSectionUp;}
if(scrollable.length>0){if(isScrolled(check,scrollable)){scrollSection();}else{return true;}}else{scrollSection();}}
function isScrolled(type,scrollable){if(type==='top'){return!scrollable.scrollTop();}else if(type==='bottom'){return scrollable.scrollTop()+1+scrollable.innerHeight()>=scrollable[0].scrollHeight;}}
function isScrollable(activeSection){return activeSection.filter('.pp-scrollable');}
function removeMouseWheelHandler(){if(container.get(0).addEventListener){container.get(0).removeEventListener('mousewheel',MouseWheelHandler,false);container.get(0).removeEventListener('wheel',MouseWheelHandler,false);}else{container.get(0).detachEvent('onmousewheel',MouseWheelHandler);}}
function addMouseWheelHandler(){if(container.get(0).addEventListener){container.get(0).addEventListener('mousewheel',MouseWheelHandler,false);container.get(0).addEventListener('wheel',MouseWheelHandler,false);}else{container.get(0).attachEvent('onmousewheel',MouseWheelHandler);}}
function addTouchHandler(){if(isTouch){var MSPointer=getMSPointer();container.off('touchstart '+MSPointer.down).on('touchstart '+MSPointer.down,touchStartHandler);container.off('touchmove '+MSPointer.move).on('touchmove '+MSPointer.move,touchMoveHandler);}}
function removeTouchHandler(){if(isTouch){var MSPointer=getMSPointer();container.off('touchstart '+MSPointer.down);container.off('touchmove '+MSPointer.move);}}
function getMSPointer(){var pointer;if(window.PointerEvent){pointer={down:'pointerdown',move:'pointermove',up:'pointerup'};}
else{pointer={down:'MSPointerDown',move:'MSPointerMove',up:'MSPointerUp'};}
return pointer;}
function getEventsPage(e){var events=new Array();events.y=(typeof e.pageY!=='undefined'&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY);events.x=(typeof e.pageX!=='undefined'&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX);return events;}
function isReallyTouch(e){return typeof e.pointerType==='undefined'||e.pointerType!='mouse';}
function touchStartHandler(event){var e=event.originalEvent;if(isReallyTouch(e)){var touchEvents=getEventsPage(e);touchStartY=touchEvents.y;touchStartX=touchEvents.x;}}
function touchMoveHandler(event){var e=event.originalEvent;if(!checkParentForNormalScrollElement(event.target)&&isReallyTouch(e)){var activeSection=$('.pp-section.active');var scrollable=isScrollable(activeSection);if(!scrollable.length){event.preventDefault();}
if(!isMoving()){var touchEvents=getEventsPage(e);touchEndY=touchEvents.y;touchEndX=touchEvents.x;if(options.direction==='horizontal'&&Math.abs(touchStartX-touchEndX)>(Math.abs(touchStartY-touchEndY))){if(Math.abs(touchStartX-touchEndX)>(container.width()/100*options.touchSensitivity)){if(touchStartX>touchEndX){scrolling('down',scrollable);}else if(touchEndX>touchStartX){scrolling('up',scrollable);}}}else{if(Math.abs(touchStartY-touchEndY)>(container.height()/100*options.touchSensitivity)){if(touchStartY>touchEndY){scrolling('down',scrollable);}else if(touchEndY>touchStartY){scrolling('up',scrollable);}}}}}}
function checkParentForNormalScrollElement(el,hop){hop=hop||0;var parent=$(el).parent();if(hop<options.normalScrollElementTouchThreshold&&parent.is(options.normalScrollElements)){return true;}else if(hop==options.normalScrollElementTouchThreshold){return false;}else{return checkParentForNormalScrollElement(parent,++hop);}}
function addVerticalNavigation(){$('body').append('<div id="pp-nav"><ul></ul></div>');var nav=$('#pp-nav');nav.css('color',options.navigation.textColor);nav.addClass(options.navigation.position);for(var cont=0;cont<$('.pp-section').length;cont++){var link='';if(options.anchors.length){link=options.anchors[cont];}
if(options.navigation.tooltips!=='undefined'){var tooltip=options.navigation.tooltips[cont];if(typeof tooltip==='undefined'){tooltip='';}}
nav.find('ul').append('<li data-tooltip="'+tooltip+'"><a href="#'+link+'"><span></span></a></li>');}
nav.find('span').css('border-color',options.navigation.bulletsColor);}
$(document).on('click touchstart','#pp-nav a',function(e){e.preventDefault();var index=$(this).parent().index();scrollPage($('.pp-section').eq(index));});$(document).on({mouseenter:function(){var tooltip=$(this).data('tooltip');$('<div class="pp-tooltip '+options.navigation.position+'">'+tooltip+'</div>').hide().appendTo($(this)).fadeIn(200);},mouseleave:function(){$(this).find('.pp-tooltip').fadeOut(200,function(){$(this).remove();});}},'#pp-nav li');function activateNavDots(name,sectionIndex){if(options.navigation){$('#pp-nav').find('.active').removeClass('active');if(name){$('#pp-nav').find('a[href="#'+name+'"]').addClass('active');}else{$('#pp-nav').find('li').eq(sectionIndex).find('a').addClass('active');}}}
function activateMenuElement(name){if(options.menu){$(options.menu).find('.active').removeClass('active');$(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');}}
function support3d(){var el=document.createElement('p'),has3d,transforms={'webkitTransform':'-webkit-transform','OTransform':'-o-transform','msTransform':'-ms-transform','MozTransform':'-moz-transform','transform':'transform'};document.body.insertBefore(el,null);for(var t in transforms){if(el.style[t]!==undefined){el.style[t]='translate3d(1px,1px,1px)';has3d=window.getComputedStyle(el).getPropertyValue(transforms[t]);}}
document.body.removeChild(el);return(has3d!==undefined&&has3d.length>0&&has3d!=='none');}
function getTranslate3d(){if(options.direction!=='vertical'){return 'translate3d(-100%, 0px, 0px)';}
return 'translate3d(0px, -100%, 0px)';}};})(jQuery,document,window);