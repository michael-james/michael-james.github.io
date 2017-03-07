if (self.CavalryLogger) { CavalryLogger.start_js(["keCnU"]); }

__d('StepperAnimation',['invariant','Animation','mixInEventEmitter'],(function a(b,c,d,e,f,g,h){var i={done:true,go:true},j=function n(o){!o||h(0);};function k(n){'use strict';this.$StepperAnimation1=new (c('Animation'))(n);this.$StepperAnimation1.ondone(this.emit.bind(this,'done'));this.__fired__=false;}k.prototype.from=function(){'use strict';this.$StepperAnimation1.from.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.to=function(){'use strict';this.$StepperAnimation1.to.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.ease=function(){'use strict';this.$StepperAnimation1.ease.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.go=function(){'use strict';j(this.__fired__);this.__fired__=true;this.$StepperAnimation1.go();this.emit('go');return this;};k.prototype.checkpoint=function(){'use strict';this.$StepperAnimation1.checkpoint.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.show=function(){'use strict';this.$StepperAnimation1.show.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.duration=function(){'use strict';this.$StepperAnimation1.duration.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.stop=function(){'use strict';this.$StepperAnimation1.stop.apply(this.$StepperAnimation1,arguments);return this;};function l(n){'use strict';this.$SerialAnimations1=n||[];this.$SerialAnimations2=0;for(var o=0,p=n.length;o<p;o++){var q=n[o+1];if(q)n[o].addListener('done',q.go.bind(q));}if(this.$SerialAnimations1.length){var r=this.emit.bind(this,'go');this.$SerialAnimations1[0].addListener('go',r);var s=this.emit.bind(this,'done');this.$SerialAnimations1.slice(-1)[0].addListener('done',s);}}l.prototype.go=function(){'use strict';j(this.__fired__);this.__fired__=true;this.$SerialAnimations1.length&&this.$SerialAnimations1[0].go();this.emit('go');return this;};l.prototype.stop=function(){'use strict';for(var n=0,o=this.$SerialAnimations1.length;n<o;n++)this.$SerialAnimations1[n].stop.apply(this.$SerialAnimations1[n],arguments);return this;};l.prototype.duration=function(){'use strict';for(var n=0,o=this.$SerialAnimations1.length;n<o;n++)this.$SerialAnimations1[n].duration.apply(this.$SerialAnimations1[n],arguments);return this;};function m(n){'use strict';this.$ParallelAnimations1=n||[];this.$ParallelAnimations2=0;for(var o=0;o<n.length;o++)n[o].addListener('done',this.$ParallelAnimations3.bind(this));}m.prototype.$ParallelAnimations3=function(){'use strict';if(++this.$ParallelAnimations2===this.$ParallelAnimations1.length)this.emit('done');};m.prototype.go=function(){'use strict';j(this.__fired__);this.__fired__=true;for(var n=0;n<this.$ParallelAnimations1.length;n++)this.$ParallelAnimations1[n].go();this.emit('go');return this;};m.prototype.stop=function(){'use strict';for(var n=0,o=this.$ParallelAnimations1.length;n<o;n++)this.$ParallelAnimations1[n].stop.apply(this.$ParallelAnimations1[n],arguments);return this;};m.prototype.duration=function(){'use strict';for(var n=0,o=this.$ParallelAnimations1.length;n<o;n++)this.$ParallelAnimations1[n].duration.apply(this.$ParallelAnimations1[n],arguments);return this;};c('mixInEventEmitter')(k,i);c('mixInEventEmitter')(l,i);c('mixInEventEmitter')(m,i);k.Serial=l;k.Parallel=m;f.exports=k;}),null);
__d('XUICarouselAnimator',['cx','StepperAnimation','Ease','Style','Locale'],(function a(b,c,d,e,f,g,h){'use strict';var i=0,j=1,k=['vertical','horizontal','showcase'];function l(m){var n=m.type,o=m.centered,p=m.firstAndLastAligned;n=n===undefined?'horizontal':n;var q=this.$XUICarouselAnimator1=n==='showcase',r=this.$XUICarouselAnimator2=n==='horizontal',s=this.$XUICarouselAnimator3=n==='vertical';this.$XUICarouselAnimator4=!!o;this.$XUICarouselAnimator5=!!p;this.$XUICarouselAnimator6=(q?"_9bn":'')+(s?' '+"_9bo":'')+(r?' '+"_9bp":'');}l.prototype.update=function(m){if(this.$XUICarouselAnimator1){this.$XUICarouselAnimator7(m);}else this.$XUICarouselAnimator8(m);if(this.$XUICarouselAnimator9)this.$XUICarouselAnimator9(m);};l.prototype.setOnItemChange=function(m){this.$XUICarouselAnimator9=m;};l.prototype.createAnimation=function(m){var n=m.nextIndex,o=m.items;if(n>=0&&n<o.length)if(this.$XUICarouselAnimator1){return this.$XUICarouselAnimator10(m);}else return this.$XUICarouselAnimator11(m);};l.prototype.getCSSClassForRoot=function(){return this.$XUICarouselAnimator6;};l.prototype.getViewportHeight=function(m){return this.$XUICarouselAnimator12(m);};l.prototype.getViewportWidth=function(m){return this.$XUICarouselAnimator13(m);};l.prototype.getContainerHeight=function(m){return this.$XUICarouselAnimator3?this.$XUICarouselAnimator14(m):this.$XUICarouselAnimator12(m);};l.prototype.getContainerWidth=function(m){return this.$XUICarouselAnimator2?this.$XUICarouselAnimator15(m):this.$XUICarouselAnimator13(m);};l.prototype.needsNextArrow=function(m,n){var o=m.viewport,p=m.container;if(!p||!o)return true;if(this.$XUICarouselAnimator1)return n!==m.items.length-1;var q=this.$XUICarouselAnimator16(m,n),r=void 0,s=void 0;if(this.$XUICarouselAnimator2){r=p.offsetWidth;s=o.offsetWidth;}else{r=p.offsetHeight;s=o.offsetHeight;}return r+q>s;};l.prototype.remove=function(m){if(this.$XUICarouselAnimator1){this.$XUICarouselAnimator17(m);}else this.$XUICarouselAnimator18(m);};l.prototype.$XUICarouselAnimator17=function(m){var n=m.items;for(var o=0,p=n.length;o<p;o++){var q=n[o];c('Style').set(q,'opacity',1);c('Style').set(q,'left','auto');c('Style').set(q,'top','auto');c('Style').set(q,'position','static');}};l.prototype.$XUICarouselAnimator18=function(m){var n=this.$XUICarouselAnimator2?'margin-left':'margin-top';c('Style').set(m.container,n,0);};l.prototype.$XUICarouselAnimator7=function(m){var n=m.items,o=m.index;this.$XUICarouselAnimator19(m,n,o);};l.prototype.$XUICarouselAnimator19=function(m,n,o){c('Style').set(m.container,'marginTop',0);c('Style').set(m.container,'marginLeft',0);for(var p=0,q=n.length;p<q;p++){var r=n[p];c('Style').set(r,'opacity',p===o?1:0);c('Style').set(r,'position','absolute');this.$XUICarouselAnimator20(m,r);}};l.prototype.$XUICarouselAnimator8=function(m){var n=m.index,o=m.container;this.$XUICarouselAnimator21(m,n,o);};l.prototype.$XUICarouselAnimator21=function(m,n,o){var p=this.$XUICarouselAnimator2?'margin-left':'margin-top',q=this.$XUICarouselAnimator16(m,n);c('Style').set(o,p,q+'px');};l.prototype.$XUICarouselAnimator16=function(m,n){var o=this.$XUICarouselAnimator22(),p=this.$XUICarouselAnimator23(m,o),q=this.$XUICarouselAnimator24(m,n),r=this.$XUICarouselAnimator25(m,n);return -Math.min(p,q-r);};l.prototype.$XUICarouselAnimator24=function(m,n){var o=m.items,p=o[n],q=0;if(p){var r=void 0,s=void 0;if(this.$XUICarouselAnimator2){r='marginLeft';s=this.$XUICarouselAnimator26;}else{r='marginTop';s=this.$XUICarouselAnimator27;}for(var t=0;t<n;t++)q+=s.call(this,o[t]);q+=parseInt(c('Style').get(p,r),10);}return q;};l.prototype.$XUICarouselAnimator10=function(m){var n=m.nextIndex,o=m.items,p=m.curIndex,q=o[p],r=o[n],s=c('Style').get(q,'opacity'),t=null;if(m.animate){t=new (c('StepperAnimation').Parallel)([new (c('StepperAnimation'))(q).from('opacity',s).to('opacity',0).ease(c('Ease').sineInOut),new (c('StepperAnimation'))(r).from('opacity',0).to('opacity',1).ease(c('Ease').sineInOut)]);}else this.$XUICarouselAnimator19(m,o,n);return t;};l.prototype.$XUICarouselAnimator20=function(m,n){if(this.$XUICarouselAnimator4){var o=m.viewport,p=o.offsetWidth,q=o.offsetHeight,r=this.$XUICarouselAnimator28(n,i),s=this.$XUICarouselAnimator28(n,j);c('Style').set(n,'left',(p-r)/2+'px');c('Style').set(n,'top',(q-s)/2+'px');}else{c('Style').set(n,'left',0);c('Style').set(n,'top','auto');}};l.prototype.$XUICarouselAnimator11=function(m){var n=m.container,o=m.nextIndex,p=void 0;if(this.$XUICarouselAnimator2){p=c('Locale').isRTL()?'margin-right':'margin-left';}else p='margin-top';var q=this.$XUICarouselAnimator16(m,o),r=new (c('StepperAnimation'))(n);if(m.animate){r.from(p,c('Style').get(n,p)).to(p,q+'px').ease(c('Ease').sineInOut);}else this.$XUICarouselAnimator21(m,o,n);return r;};l.prototype.$XUICarouselAnimator25=function(m,n){var o=m.viewport,p=m.items,q=p[n];if(this.$XUICarouselAnimator5)if(n===0||n===m.items.length-1)return 0;if(this.$XUICarouselAnimator4){if(this.$XUICarouselAnimator2)return (o.offsetWidth-q.offsetWidth)/2;if(this.$XUICarouselAnimator3)return (o.offsetHeight-q.offsetHeight)/2;}return 0;};l.prototype.$XUICarouselAnimator12=function(m){return this.$XUICarouselAnimator29(m,j);};l.prototype.$XUICarouselAnimator13=function(m){return this.$XUICarouselAnimator29(m,i);};l.prototype.$XUICarouselAnimator29=function(m,n){return Math.max.apply(null,this.$XUICarouselAnimator30(m,n));};l.prototype.$XUICarouselAnimator27=function(m){return this.$XUICarouselAnimator28(m,j);};l.prototype.$XUICarouselAnimator26=function(m){return this.$XUICarouselAnimator28(m,i);};l.prototype.$XUICarouselAnimator28=function(m,n){var o=void 0,p=void 0,q=void 0,r=m.style.position;c('Style').set(m,'position','static');if(n===i){o='offsetWidth';p='marginLeft';q='marginRight';}else{o='offsetHeight';p='marginTop';q='marginBottom';}p=parseInt(c('Style').get(m,p),10);q=parseInt(c('Style').get(m,q),10);var s=m[o]+p+q;c('Style').set(m,'position',r);return s;};l.prototype.$XUICarouselAnimator14=function(m){return this.$XUICarouselAnimator31(m,j);};l.prototype.$XUICarouselAnimator15=function(m){return this.$XUICarouselAnimator31(m,i);};l.prototype.$XUICarouselAnimator30=function(m,n){return m.items.map(function(o){return this.$XUICarouselAnimator28(o,n);}.bind(this));};l.prototype.$XUICarouselAnimator31=function(m,n){var o=this.$XUICarouselAnimator30(m,n);return o.reduce(function(p,q){return p+q;},0);};l.prototype.$XUICarouselAnimator23=function(m,n){if(!this.$XUICarouselAnimator5)return Infinity;var o=m.viewport,p=this.$XUICarouselAnimator31(m,n),q=n===i?o.offsetWidth:o.offsetHeight;return p-q;};l.prototype.$XUICarouselAnimator22=function(){return this.$XUICarouselAnimator2?i:j;};f.exports=l;}),null);
__d('XUICarousel.react',['cx','fbt','ArbiterMixin','React','ReactDOM','ReactComponentWithPureRenderMixin','XUICarouselAnimator','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('React').PropTypes,k='`arrows` must be an array of [<prevArrow/>, <nextArrow/>] or null',l='prev',m='next',n=c('React').createClass({displayName:'XUICarousel',mixins:[c('ArbiterMixin'),c('ReactComponentWithPureRenderMixin')],propTypes:{arrows:function p(q,r){var p=q[r];if(p){if(!Array.isArray(p)||p.length!==2)return new Error(k);var s=p[0],t=p[1];if(!c('React').isValidElement(s)||!c('React').isValidElement(t))return new Error(k);}},animator:j.shape({createAnimation:j.func.isRequired,getCSSClassForRoot:j.func.isRequired,getViewportWidth:j.func.isRequired,getViewportHeight:j.func.isRequired,getContainerWidth:j.func.isRequired,getContainerHeight:j.func.isRequired,update:j.func.isRequired,remove:j.func.isRequired}).isRequired,initialIndex:j.number,moveStep:j.number,animationDuration:j.number,initialAutoplay:j.bool,wrapAround:j.bool,autoplayDirection:j.oneOf(['forward','backward']),stopAutoplayOnHover:j.bool,autoplayInterval:j.number,resizeViewport:j.oneOf(['disabled','fixed','dynamic']),viewportWidth:j.number,viewportHeight:j.number,onItemClick:j.func,resetInitialIndex:j.bool},getDefaultProps:function p(){return {animator:new (c('XUICarouselAnimator'))({type:'horizontal',centered:true,firstAndLastAligned:false}),initialIndex:0,moveStep:1,animationDuration:200,initialAutoplay:true,autoplayInterval:5000,autoplayDirection:'forward',stopAutoplayOnHover:true,resizeViewport:'fixed',wrapAround:true,resetInitialIndex:false};},getInitialState:function p(){return {index:this.props.initialIndex,autoplay:this.props.initialAutoplay,containerWidth:0,animatorClassForRoot:this.props.animator.getCSSClassForRoot(),containerHeight:0,viewportWidth:'auto',viewportHeight:'auto'};},getItemCount:function p(){return c('React').Children.count(this.props.children);},_getItems:function p(){var q=this.getItemCount(),r=[];for(var s=0;s<q;s++)if(this.refs.itemsContainer&&this.refs.itemsContainer.childNodes[s])r[s]=this.refs.itemsContainer.childNodes[s];return r;},_getContextForAnimator:function p(){var q=this._getItems().map(function(r){return c('ReactDOM').findDOMNode(r);});if(this.props.resetInitialIndex&&this.state.index>q.length-1)this.setIndex(0);return {container:c('ReactDOM').findDOMNode(this.refs.itemsContainer),items:q,viewport:c('ReactDOM').findDOMNode(this.refs.viewport)};},componentDidMount:function p(){var q=this.props.animator,r=this._getContextForAnimator();this.setState({containerWidth:q.getContainerWidth(r),containerHeight:q.getContainerHeight(babelHelpers['extends']({},r,{index:this.state.index})),viewportWidth:q.getViewportWidth(r),viewportHeight:q.getViewportHeight(babelHelpers['extends']({},r,{index:this.state.index}))});q.update(babelHelpers['extends']({},r,{index:this.state.index}));if(this.state.autoplay)this._autoplay();},componentWillMount:function p(){this._isHovering=false;this._autoplayInterval=null;this._animation=null;},componentWillUnmount:function p(){this._stopCurrentAnimation();this._stopAutoplay();},componentWillUpdate:function p(q,r){var s=o(this.props,q),t=o(this.state,r),u=this._getContextForAnimator();if(q.children.length<r.index)this.setState({index:0});var v=q.animator;if(s.animator){this._stopCurrentAnimation();this.props.animator.remove(u);}var w=void 0,x=this.state.index;if(this._prevReactItems){var y=c('React').Children.map(q.children,function(z){return z.props.childIndex;});x=Math.max(y.indexOf(this._prevReactItems[this.state.index]),0);}if(this.state.index!==x)this._nextIndex=x;if(t.index){this.inform('animation_start',r.index);if(this._animation)this._animation.stop();w=v.createAnimation(babelHelpers['extends']({},u,{nextIndex:r.index,curIndex:x,animate:!this._nextIndex}));this._animation=w;w.duration(q.animationDuration);w.addListener('done',this._onAnimationDone.bind(this,r.index));w.go();}if(t.autoplay||s.autoplayInterval||s.autoplayDirection){this._stopAutoplay();if(r.autoplay&&(!this._isHovering||!q.stopAutoplayOnHover))this._autoplay();}this._prevReactItems=c('React').Children.map(this.props.children,function(z){return z.props.childIndex;});},componentDidUpdate:function p(q,r){var s=this.props.animator,t=this._getContextForAnimator(),u=false,v=false,w=false,x=this._prevItems,y=this._getItems(),z=!x||x.length!==y.length||!x.every(function(aa,ba){return aa===y[ba];});if(this._nextIndex){this.setState({index:this._nextIndex});this._nextIndex=null;}if(z){w=true;u=true;v=this.props.resizeViewport==='dynamic';this.inform('item_count_updated',this.getItemCount());}if(s!==q.animator){this.setState({animatorClassForRoot:s.getCSSClassForRoot()});u=true;w=true;}if(q.resizeViewport!==this.props.resizeViewport){v=q.resizeViewport==='disabled'||this.props.resizeViewport==='dynamic';u=true;}if(w)this.setState({containerWidth:s.getContainerWidth(t),containerHeight:s.getContainerHeight(babelHelpers['extends']({},t,{index:this.state.index}))});if(v)this.setState({viewportWidth:s.getViewportWidth(t),viewportHeight:s.getViewportHeight(babelHelpers['extends']({},t,{index:this.state.index}))});if(u)s.update(babelHelpers['extends']({},t,{index:this.state.index}));},setAutoplayEnabled:function p(q){this.setState({autoplay:q});},_autoplay:function p(){if(!this._autoplayInterval){var q=this.props.autoplayDirection==='forward'?this.next:this.prev;this._autoplayInterval=setInterval(q,this.props.autoplayInterval);}},_stopAutoplay:function p(){clearInterval(this._autoplayInterval);this._autoplayInterval=null;},_stopCurrentAnimation:function p(){if(this._animation){this._animation.stop();this._animation=null;}},_onAnimationDone:function p(q){this._animation=null;this.inform('animationEnd',q);},_onMouseEnter:function p(){this._isHovering=true;if(this.props.stopAutoplayOnHover)this._stopAutoplay();},_onMouseLeave:function p(){this._isHovering=false;if(this.state.autoplay)this._autoplay();},setIndex:function p(q){if(q>=0&&q<this.props.children.length){this.setState({index:q});this._stopAutoplay();if(this.state.autoplay)this._autoplay();return true;}return false;},next:function p(){var q=this.state.index,r=this.getItemCount(),s=r-1;if((q!==s||q===s&&this.props.wrapAround)&&r){var p=q===s?0:Math.min(s,q+this.props.moveStep);this.setIndex(p);}},prev:function p(){var q=this.state.index,r=this.getItemCount();if(q!==0||q===0&&this.props.wrapAround){var p=q===0?r-1:Math.max(q-this.props.moveStep,0);this.setIndex(p);}},_renderChildren:function p(){return c('React').Children.map(this.props.children,function(q,r){return (c('React').cloneElement(q,{ref:q.props.childIndex,index:r,onClick:function(){if(this.props.onItemClick){this.props.onItemClick(r);}else this.setIndex(r);}.bind(this),selected:r===this.state.index}));}.bind(this));},_shouldRenderNextArrow:function p(){var q=this.props,r=q.wrapAround,s=q.animator;if(r||this.props.children.length-1!==this.state.index)return true;var t=this._getContextForAnimator();return s.needsNextArrow(t,this.state.index);},_renderArrows:function p(){if(this.props.arrows){var q=this.props.arrows,r=q[0],s=q[1];r=c('React').cloneElement(r,{key:l,onClick:r.props.onClick?r.props.onClick:this.prev,disabled:!this.props.wrapAround&&this.state.index===0,className:c('joinClasses')("_50z1",r.props.className),"aria-label":i._("Previous")});s=c('React').cloneElement(s,{key:m,onClick:s.props.onClick?s.props.onClick:this.next,disabled:!this._shouldRenderNextArrow(),className:c('joinClasses')("_50z2",s.props.className),"aria-label":i._("Next")});return [r,s];}return null;},render:function p(){var q=this.props,r=q.className,s=q.viewportWidth,t=q.viewportHeight,u=q.resizeViewport;r=c('joinClasses')(r,this.state.animatorClassForRoot,"_50z3"+(this.state.animating?' '+"_50zi":''));var v={height:t,width:s};if(u!=='disabled'){v.width=s||this.state.viewportWidth;v.height=t||this.state.viewportHeight;}return (c('React').createElement('div',{className:r},c('React').createElement('div',{className:"_50zm",ref:'viewport',onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,style:babelHelpers['extends']({},v)},c('React').createElement('div',{style:{width:this.state.viewportWidth||'auto',height:this.state.viewportHeight||'auto'}},c('React').createElement('div',{className:"_50zn clearfix",style:{width:this.state.containerWidth||'auto',height:this.state.containerHeight||'auto'},ref:'itemsContainer'},this._renderChildren())),this._renderArrows())));}});function o(p,q){var r={};for(var s in p)if(p.hasOwnProperty(s))r[s]=p[s]!==q[s];for(var t in q)if(q.hasOwnProperty(t)&&!r.hasOwnProperty(t))r[t]=p[t]!==q[t];return r;}f.exports=n;}),null);
__d('XUICarouselArrow.react',['cx','Link.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=m.children,o=m.className,p=m.disabled,q=m.onClick;o=c('joinClasses')(o,"_-op"+(p?' '+"_-oq":''));return (c('React').createElement(c('Link.react'),{className:o,onClick:q},n));};function l(){i.apply(this,arguments);}l.propTypes={onClick:k.func,disabled:k.bool};f.exports=l;}),null);
__d('XUICarouselItem.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=m.children,o=m.className,p=m.selected,q=babelHelpers.objectWithoutProperties(m,['children','className','selected']);o=c('joinClasses')(o,"_3el6"+(p?' '+"_3el7":''));return (c('React').createElement('div',{className:"_3el8 clearfix"},c('React').createElement('div',babelHelpers['extends']({},q,{className:o}),n)));};function l(){i.apply(this,arguments);}l.propTypes={selected:k.bool};f.exports=l;}),null);
__d('EgoLineClamp.react',['DOMContainer.react','LineClamp.react','Link.react','React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l,m){'use strict';i.constructor.call(this,l,m);}k.prototype.render=function(){'use strict';var l=this.props.seeMoreLink&&this.props.seeMoreText?c('React').createElement(c('Link.react'),{href:this.props.seeMoreLink,rel:this.props.theaterMode?'theater':''},this.props.seeMoreText):'\u2026';return (c('React').createElement(c('LineClamp.react'),{lines:this.props.lines,disableNative:true,lineHeight:this.props.lineHeight,customEllipsisDisableGradient:true,customEllipsis:l},c('React').createElement(c('DOMContainer.react'),null,this.props.content)));};k.propTypes={content:j.object.isRequired,lines:j.number.isRequired,lineHeight:j.number.isRequired,seeMoreLink:j.string,seeMoreText:j.string};f.exports=k;}),null);
__d('FeedEgoCarousel.react',['ix','csx','cx','xuiglyph','AsyncRequest','CSS','DOM','DOMContainer.react','Image.react','InlineBlock.react','LitestandEllipsis','React','ReactDOM','Style','XFeedEgoImpressionLoggingController','XUICarousel.react','XUICarouselAnimator','XUICarouselArrow.react','XUICarouselItem.react','XUICloseButton.react','emptyFunction','requestAnimationFrame'],(function a(b,c,d,e,f,g,h,i,j,k){var l,m,n=c('React').PropTypes;l=babelHelpers.inherits(o,c('React').Component);m=l&&l.prototype;function o(p,q){'use strict';m.constructor.call(this,p,q);this.$FeedEgoCarousel6=function(){this.setState({hidden:true});}.bind(this);}o.prototype.componentWillMount=function(){'use strict';this.loggedItems=new Array(this.props.items.length);this.setState({items:this.props.items,hidden:false});};o.prototype.componentDidMount=function(){'use strict';this.$FeedEgoCarousel1();var p=this.state.items[this.props.initialIndex];this.$FeedEgoCarousel2(p,this.props.initialIndex);this.$FeedEgoCarousel3(this.props.initialIndex);this.$FeedEgoCarousel4();};o.prototype.componentDidUpdate=function(){'use strict';this.$FeedEgoCarousel4();this.$FeedEgoCarousel1();};o.prototype.componentWillUnmount=function(){'use strict';this.$FeedEgoCarousel5();};o.prototype.render=function(){'use strict';if(this.refs.carousel)this.$FeedEgoCarousel5();if(this.state.hidden)return null;var p=new (c('XUICarouselAnimator'))({type:'horizontal',centered:this.props.centered,firstAndLastAligned:this.state.items.length>1}),q=null;if(this.state.items.length>1)q=[c('React').createElement(c('XUICarouselArrow.react'),{disabled:false},c('React').createElement('div',{className:"_4idl"},c('React').createElement('div',{className:"_4idm"}),c('React').createElement('div',{className:"_4idn"},c('React').createElement(c('Image.react'),{src:h("images\/mobile\/glyph\/chevron-left_dark-grey_s.png")})))),c('React').createElement(c('XUICarouselArrow.react'),{disabled:false},c('React').createElement('div',{className:"_4idl"},c('React').createElement('div',{className:"_4idm"}),c('React').createElement('div',{className:"_4idn"},c('React').createElement(c('Image.react'),{src:h("images\/mobile\/glyph\/chevron-right_dark-grey_s.png")}))))];var r=null;if(this.props.title)r=c('React').createElement(c('InlineBlock.react'),{className:"_1t3m",alignv:'middle'},c('React').createElement('div',{className:"fwb _d_q"},this.props.title));var s=this.props.showXout?c('React').createElement(c('XUICloseButton.react'),{className:"_qnz",size:'medium',onClick:this.$FeedEgoCarousel6}):null;return c('React').createElement('div',{className:"_1t3l"},r,s,c('React').createElement('div',{className:"_1mv9"},c('React').createElement(c('XUICarousel.react'),{ref:'carousel',animator:p,arrows:q,resizeViewport:'disabled',initialAutoplay:false,initialIndex:this.props.initialIndex,viewportWidth:this.props.viewportWidth,viewportHeight:this.props.viewportHeight,wrapAround:this.props.wrapAround,onItemClick:function t(){return c('emptyFunction');}},this.$FeedEgoCarousel7(this.state.items))));};o.prototype.$FeedEgoCarousel1=function(){'use strict';if(this.refs.carousel)this.arbiterToken=this.refs.carousel.subscribe(['animationEnd'],function(p,q){if(p==='animationEnd'){var r=this.state.items[q];this.$FeedEgoCarousel2(r,q);this.$FeedEgoCarousel3(q);}}.bind(this));};o.prototype.$FeedEgoCarousel5=function(){'use strict';if(this.refs.carousel&&this.arbiterToken)this.refs.carousel.unsubscribe(this.arbiterToken);};o.prototype.$FeedEgoCarousel7=function(p){'use strict';var q=[];for(var r=0;r<p.length;r++){var s={};if(this.props.leftRightMargin)if(r==0&&r!=p.length-1){s={marginLeft:this.props.leftRightMargin};}else if(r==p.length-1&&r!=0)s={marginRight:this.props.leftRightMargin};q.push(c('React').createElement(c('XUICarouselItem.react'),{key:r,style:s},c('React').createElement(c('DOMContainer.react'),null,p[r])));}return q;};o.prototype.$FeedEgoCarousel4=function(){'use strict';var p=c('ReactDOM').findDOMNode(this.refs.carousel);c('requestAnimationFrame')(function(){if(p){var q=c('DOM').scry(p,"._559r");if(q.length){var r=c('Style').getFloat(q[0],'lineHeight'),s;for(var t=0;t<q.length;t++){s=c('DOM').scry(q[t],'.nameText')[0];c('LitestandEllipsis').add(s,r,q[t]);}}}});};o.prototype.$FeedEgoCarousel2=function(p,q){'use strict';p=c('DOM').scry(p,'[data-ft]')[0];var r=JSON.parse(p.getAttribute('data-ft'));if(!r||!r.ego_id||this.loggedItems[r.ego_id])return;var s=c('XFeedEgoImpressionLoggingController').getURIBuilder().setInt('ego_id',r.ego_id).setInt('qid',r.qid).setInt('mf_story_key',r.mf_story_key).getURI();new (c('AsyncRequest'))().setURI(s).send();this.loggedItems[r.ego_id]=true;};o.prototype.$FeedEgoCarousel3=function(p){'use strict';var q=c('ReactDOM').findDOMNode(this.refs.carousel);if(p===0||p===this.state.items.length-1){if(!c('CSS').matchesSelector(q,"._4ji6"))c('CSS').addClass(q,"_4ji6");}else if(c('CSS').matchesSelector(q,"._4ji6"))c('CSS').removeClass(q,"_4ji6");};o.propTypes={initialIndex:n.number,viewportWidth:n.number.isRequired,viewportHeight:n.number.isRequired,centered:n.bool.isRequired,wrapAround:n.bool.isRequired,showXout:n.bool.isRequired,items:n.arrayOf(n.object),title:n.string,leftRightMargin:n.string};f.exports=o;}),null);