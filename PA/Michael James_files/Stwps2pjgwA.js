if (self.CavalryLogger) { CavalryLogger.start_js(["eOqCF"]); }

__d('PubcontentSuggestionsCarousel',['csx','cx','Animation','Arbiter','AsyncRequest','CSS','DOM','Event','PageLikeConstants','Parent','PubcontentSuggestionsUtil','TidyArbiterMixin','URI','XPubcontentImpressionLoggingController','mixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('mixin')(c('TidyArbiterMixin')));k=j&&j.prototype;function l(m,n,o){'use strict';k.constructor.call(this);this.$PubcontentSuggestionsCarousel1=m;this.$PubcontentSuggestionsCarousel2=this.$PubcontentSuggestionsCarousel1.getVisibleNodesMax()-2;this.$PubcontentSuggestionsCarousel3=n;this.$PubcontentSuggestionsCarousel4=0;this.$PubcontentSuggestionsCarousel5=o.circularCarousel;if(this.$PubcontentSuggestionsCarousel5&&this.$PubcontentSuggestionsCarousel3.length>this.$PubcontentSuggestionsCarousel2){this.$PubcontentSuggestionsCarousel6();}else this.$PubcontentSuggestionsCarousel7(0,this.$PubcontentSuggestionsCarousel3.length);c('PubcontentSuggestionsUtil').truncateAllText(this.$PubcontentSuggestionsCarousel1.getNode(),true);if(o.suggestionsViewed){this.$PubcontentSuggestionsCarousel8=o.suggestionsViewed;}else this.$PubcontentSuggestionsCarousel8=[];if(o.moreItems)this.$PubcontentSuggestionsCarousel9=o.moreItems;c('tidyEvent')(c('Event').listen(this.$PubcontentSuggestionsCarousel1.getNode(),'click',this.$PubcontentSuggestionsCarousel10.bind(this)),this.$PubcontentSuggestionsCarousel1.subscribe('onSlideDone',this.$PubcontentSuggestionsCarousel11.bind(this)),c('Arbiter').subscribe('netego_replacedUnit',this.$PubcontentSuggestionsCarousel12.bind(this)));if(o.serializedData){this.$PubcontentSuggestionsCarousel13=o.serializedData;c('Arbiter').subscribe(c('PageLikeConstants').LIKED,this.$PubcontentSuggestionsCarousel14.bind(this));}this.$PubcontentSuggestionsCarousel15();}l.prototype.$PubcontentSuggestionsCarousel6=function(){'use strict';this.$PubcontentSuggestionsCarousel7(this.$PubcontentSuggestionsCarousel4-this.$PubcontentSuggestionsCarousel2,this.$PubcontentSuggestionsCarousel2,null);this.$PubcontentSuggestionsCarousel7(this.$PubcontentSuggestionsCarousel4,this.$PubcontentSuggestionsCarousel2,null);this.$PubcontentSuggestionsCarousel7(this.$PubcontentSuggestionsCarousel4+this.$PubcontentSuggestionsCarousel2,this.$PubcontentSuggestionsCarousel2,null);this.$PubcontentSuggestionsCarousel1.silentSlide(this.$PubcontentSuggestionsCarousel2);};l.prototype.$PubcontentSuggestionsCarousel16=function(m){'use strict';if(m<0){return m+this.$PubcontentSuggestionsCarousel3.length;}else if(m>=this.$PubcontentSuggestionsCarousel3.length)return m%this.$PubcontentSuggestionsCarousel3.length;return m;};l.prototype.$PubcontentSuggestionsCarousel7=function(m,n,o){'use strict';for(var p=m;p<m+n;p++){var q=this.$PubcontentSuggestionsCarousel16(p);this.$PubcontentSuggestionsCarousel1.insertBefore(this.$PubcontentSuggestionsCarousel3[q].cloneNode(true),o);}};l.prototype.$PubcontentSuggestionsCarousel15=function(){'use strict';var m=this.$PubcontentSuggestionsCarousel1.getVisibleNodes(),n=[];for(var o=1;o<m.length-1;o++){var p=this.$PubcontentSuggestionsCarousel17(m[o]);if(!p)continue;var q=p.getAttribute('data-ego-fbid'),r=this.$PubcontentSuggestionsCarousel8.indexOf(q)>-1;if(!r&&this.$PubcontentSuggestionsCarousel13[q]){n.push(this.$PubcontentSuggestionsCarousel13[q]);this.$PubcontentSuggestionsCarousel8.push(q);}}if(n.length){var s=c('XPubcontentImpressionLoggingController').getURIBuilder(),t={q:n.join(',')};new (c('AsyncRequest'))().setMethod('POST').setURI(s.getURI()).setData(t).send();}};l.prototype.$PubcontentSuggestionsCarousel12=function(m,n){'use strict';if(!n.numUnitsRemained){var o=c('Parent').byClass(this.$PubcontentSuggestionsCarousel1.getNode(),'ego_feed_column');if(o){var p=c('Parent').bySelector(o,"._4-u2");if(p)c('CSS').hide(p);}}};l.prototype.$PubcontentSuggestionsCarousel14=function(m,n){'use strict';if(n.origin==='hovercard'&&this.$PubcontentSuggestionsCarousel18(n.profile_id)){var o=c('DOM').scry(this.$PubcontentSuggestionsCarousel1.getNode(),'.ego_unit');for(var p=0;p<o.length;p++)if(o[p].getAttribute('data-ego-fbid')===n.profile_id){this.$PubcontentSuggestionsCarousel19(o[p]);break;}}};l.prototype.$PubcontentSuggestionsCarousel20=function(m,n){'use strict';var o=this.$PubcontentSuggestionsCarousel1.getGrid().childNodes;for(var p=0;p<n;p++)c('DOM').remove(o[m]);};l.prototype.$PubcontentSuggestionsCarousel11=function(){'use strict';if(this.$PubcontentSuggestionsCarousel3.length<this.$PubcontentSuggestionsCarousel2||!this.$PubcontentSuggestionsCarousel5){this.$PubcontentSuggestionsCarousel15();return;}var m=this.$PubcontentSuggestionsCarousel1.getLastVisibleIndex();if(m<=this.$PubcontentSuggestionsCarousel2){this.$PubcontentSuggestionsCarousel4=this.$PubcontentSuggestionsCarousel16(this.$PubcontentSuggestionsCarousel4-this.$PubcontentSuggestionsCarousel2);this.$PubcontentSuggestionsCarousel20(this.$PubcontentSuggestionsCarousel2*2+1,this.$PubcontentSuggestionsCarousel2);var n=this.$PubcontentSuggestionsCarousel1.getGrid().childNodes[1];this.$PubcontentSuggestionsCarousel7(this.$PubcontentSuggestionsCarousel4-this.$PubcontentSuggestionsCarousel2,this.$PubcontentSuggestionsCarousel2,n);this.$PubcontentSuggestionsCarousel1.silentSlide(this.$PubcontentSuggestionsCarousel2);}else{this.$PubcontentSuggestionsCarousel4=this.$PubcontentSuggestionsCarousel16(this.$PubcontentSuggestionsCarousel4+this.$PubcontentSuggestionsCarousel2);this.$PubcontentSuggestionsCarousel20(1,this.$PubcontentSuggestionsCarousel2);this.$PubcontentSuggestionsCarousel1.silentSlide(this.$PubcontentSuggestionsCarousel2*-1);this.$PubcontentSuggestionsCarousel7(this.$PubcontentSuggestionsCarousel4+this.$PubcontentSuggestionsCarousel2,this.$PubcontentSuggestionsCarousel2,null);}c('PubcontentSuggestionsUtil').truncateAllText(this.$PubcontentSuggestionsCarousel1.getNode(),true);this.$PubcontentSuggestionsCarousel15();};l.prototype.$PubcontentSuggestionsCarousel17=function(m){'use strict';var n=c('DOM').scry(m,'.ego_unit');if(n.length)return n[0];return null;};l.prototype.$PubcontentSuggestionsCarousel18=function(m){'use strict';for(var n in this.$PubcontentSuggestionsCarousel13)if(n==m)return true;return false;};l.prototype.$PubcontentSuggestionsCarousel10=function(m){'use strict';var n=m.getTarget(),o=this.$PubcontentSuggestionsCarousel21(n,'ego_x');if(!o){o=this.$PubcontentSuggestionsCarousel21(n,'ego_like');if(!o)return;}var p=c('DOM').scry(o,'^.ego_unit');if(!p.length)return;if(this.$PubcontentSuggestionsCarousel9&&this.$PubcontentSuggestionsCarousel9.length)this.$PubcontentSuggestionsCarousel22();this.$PubcontentSuggestionsCarousel19(o);};l.prototype.$PubcontentSuggestionsCarousel21=function(m,n){'use strict';if(c('CSS').hasClass(m,n))return m;var o=c('DOM').scry(m,'^.'+n);if(o.length)return o[0];return null;};l.prototype.$PubcontentSuggestionsCarousel19=function(m){'use strict';var n=c('DOM').scry(m,"^._58rc"),o=n.length?n[0]:null;if(!o)return;new (c('Animation'))(o).from('opacity',1).to('opacity',0).duration(500).checkpoint(1,this.$PubcontentSuggestionsCarousel23.bind(this,o)).go();this.$PubcontentSuggestionsCarousel24(o);};l.prototype.$PubcontentSuggestionsCarousel24=function(m){'use strict';var n=c('DOM').scry(m,'.ego_unit');if(!m.children.length||!n.length)return;var o=c('DOM').scry(this.$PubcontentSuggestionsCarousel1.getNode(),"^.carouselParent");if(!o.length)return;var p=c('DOM').scry(o[0],'.feedback');if(!p.length||!p[0].children.length)return;var q=p[0].children[0],r=n[0].getAttribute('data-ego-fbid'),s=new (c('URI'))(q.href),t=s.getQueryData(),u=t.suggestion_ids.indexOf(r);if(u!=-1){t.suggestion_ids.splice(u,1);s.setQueryData(t);q.setAttribute("href",s.toString());}};l.prototype.$PubcontentSuggestionsCarousel22=function(){'use strict';if(this.$PubcontentSuggestionsCarousel9.length){var m=this.$PubcontentSuggestionsCarousel9;this.$PubcontentSuggestionsCarousel9=[];var n=0;if(this.$PubcontentSuggestionsCarousel5){for(n=0;n<m.length;n++)this.$PubcontentSuggestionsCarousel3.push(m[n]);}else for(n=0;n<m.length;n++)this.$PubcontentSuggestionsCarousel1.insertBefore(m[n]);}};l.prototype.$PubcontentSuggestionsCarousel23=function(m){'use strict';var n=c('DOM').scry(m,'.ego_unit');if(!n.length)return;var o=n[0].getAttribute('data-ego-fbid');for(var p=0;p<this.$PubcontentSuggestionsCarousel3.length;p++){var q=c('DOM').scry(this.$PubcontentSuggestionsCarousel3[p],'.ego_unit');if(q.length&&q[0].getAttribute('data-ego-fbid')===o){this.$PubcontentSuggestionsCarousel3.splice(p,1);if(this.$PubcontentSuggestionsCarousel5)this.$PubcontentSuggestionsCarousel4=this.$PubcontentSuggestionsCarousel16(p<this.$PubcontentSuggestionsCarousel4?this.$PubcontentSuggestionsCarousel4-1:this.$PubcontentSuggestionsCarousel4);break;}}if(this.$PubcontentSuggestionsCarousel5){var r=this.$PubcontentSuggestionsCarousel1.getGrid().childNodes.length-2;this.$PubcontentSuggestionsCarousel20(1,r);if(r>this.$PubcontentSuggestionsCarousel2)this.$PubcontentSuggestionsCarousel1.silentSlide(this.$PubcontentSuggestionsCarousel2*-1);if(this.$PubcontentSuggestionsCarousel3.length>this.$PubcontentSuggestionsCarousel2){this.$PubcontentSuggestionsCarousel6();}else{this.$PubcontentSuggestionsCarousel7(0,this.$PubcontentSuggestionsCarousel3.length);this.$PubcontentSuggestionsCarousel1.disableNext();}}else this.$PubcontentSuggestionsCarousel1.removeItem(m);c('PubcontentSuggestionsUtil').truncateAllText(this.$PubcontentSuggestionsCarousel1.getNode(),true);this.$PubcontentSuggestionsCarousel15();var s=c('DOM').scry(this.$PubcontentSuggestionsCarousel1.getNode(),"._58rc");if(s.length===2){var t="_5bfv";if(c('CSS').hasClass(s[0],t)&&c('CSS').hasClass(s[1],t))this.$PubcontentSuggestionsCarousel25(this.$PubcontentSuggestionsCarousel1.getNode());}};l.prototype.$PubcontentSuggestionsCarousel25=function(m){'use strict';var n=c('DOM').scry(m,"^._5t-6");if(!n.length){n=c('DOM').scry(m,"^._5alz");if(!n.length){n=c('DOM').scry(m,"^._54bx");if(!n.length)return;}}var o=n[0];new (c('Animation'))(o).from('opacity',1).to('opacity',0).duration(500).checkpoint(1,c('DOM').remove.bind(c('DOM'),o)).go();};f.exports=l;}),null);