if (self.CavalryLogger) { CavalryLogger.start_js(["qzB67"]); }

__d('legacy:async-signal',['AsyncSignal'],(function a(b,c,d,e,f,g){b.AsyncSignal=c('AsyncSignal');}),3);
__d('SelectorDeprecated',['Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Event','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction','getDocumentScrollElement'],(function a(b,c,d,e,f,g){var h,i,j=[],k;function l(w){return c('Parent').byClass(w,'uiSelector');}function m(w){return c('Parent').byClass(w,'uiSelectorButton');}function n(){if(!i){i=new (c('ContextualLayer'))({position:'below'},c('DOM').create('div'));c('CSS').addClass(i.getRoot(),'uiSelectorContextualLayer');}return i;}function o(w){return c('DOM').scry(w,'select')[0];}function p(w){return c('DOM').find(w,'div.uiSelectorMenuWrapper');}var q=function w(){q=c('emptyFunction');c('MenuDeprecated').subscribe('select',function(x,y){if(!h||!y||y.menu!==v.getSelectorMenu(h))return;var z=r(h),aa=s(y.item);if(aa){var ba=h,ca=v.isOptionSelected(y.item),da=v.inform('select',{selector:ba,option:y.item,clone:k});if(da===false)return;if(z||!ca){v.setSelected(ba,v.getOptionValue(y.item),!ca);v.inform('toggle',{selector:ba,option:y.item});v.inform('change',{selector:ba});c('Arbiter').inform('Form/change',{node:ba});if(t(ba))c('DataStore').set(ba,'dirty',true);}}if(!z||!aa)h&&v.toggle(h);});};function r(w){return !!w.getAttribute('data-multiple');}function s(w){return c('CSS').hasClass(w,'uiSelectorOption');}function t(w){return !!w.getAttribute('data-autosubmit');}var u=function w(){u=c('emptyFunction');var x={keydown:function y(event){var z=event.getTarget();if(c('DOM').isInputNode(z))return;switch(c('Event').getKeyCode(event)){case c('Keys').DOWN:case c('Keys').SPACE:case c('Keys').UP:if(m(z)){var aa=l(z);v.toggle(aa);return false;}break;case c('Keys').ESC:if(h){var ba=v.getSelectorButton(h);v.toggle(h);ba&&c('Focus').set(ba);return false;}break;}},mouseover:function y(event){var z=c('Parent').byAttribute(event.getTarget(),'ajaxify');if(z&&c('CSS').hasClass(z,'uiSelectorButton'))v.loadMenu(l(z));}};c('Event').listen(document.body,x);};c('Toggler').subscribe(['show','hide'],function(w,x){var y=l(x.getActive());if(y){u();q();var z=v.getSelectorButton(y),aa=v.getSelectorMenu(y),ba=w==='show';z.setAttribute('aria-expanded',ba?'true':'false');if(ba){h=y;if(c('CSS').hasClass(z,'uiButtonDisabled')){v.setEnabled(y,false);return false;}aa=aa||v.loadMenu(y);var ca=c('Style').getScrollParent(y),da=ca!==window&&ca!==c('getDocumentScrollElement')();if(da||c('CSS').hasClass(y,'uiSelectorUseLayer')){if(da)j.push(c('Event').listen(ca,'scroll',function(){x.hide();}));k=c('DOM').create('div',{className:y.className});c('CSS').addClass(k,'invisible_elem');c('Vector').getElementDimensions(y).setElementDimensions(k);c('DOM').replace(y,k);var ea=c('CSS').hasClass(y,'uiSelectorRight'),fa=c('CSS').hasClass(y,'uiSelectorBottomUp');n().setContext(k).setContent(y).setPosition(fa?'above':'below').setAlignment(ea?'right':'left').show();}c('MenuDeprecated').register(aa);var ga=c('MenuDeprecated').getCheckedItems(aa);if(!ga.length)ga=c('MenuDeprecated').getEnabledItems(aa);if(ga.length)c('MenuDeprecated').focusItem(ga[0]);}else{h=null;if(k){while(j.length)j.pop().remove();c('DOM').replace(k,y);n().hide();k=null;}aa&&c('MenuDeprecated').unregister(aa);if(t(y)&&c('DataStore').get(y,'dirty')){var ha=c('DOM').scry(y,'input.submitButton')[0];ha&&ha.click();c('DataStore').remove(y,'dirty');}}c('CSS').conditionClass(v.getSelectorButton(y),'selected',ba);v.inform(ba?'open':'close',{selector:y,clone:k});}});var v=Object.assign(new (c('Arbiter'))(),{attachMenu:function w(x,y,z){x=l(x);if(x){h&&c('MenuDeprecated').unregister(v.getSelectorMenu(h));c('DOM').setContent(p(x),y);h&&c('MenuDeprecated').register(v.getSelectorMenu(x));k&&n().updatePosition();if(z){var aa=x.getAttribute('data-name');aa&&z.setAttribute('name',aa);if(!r(x))z.setAttribute('multiple',false);var ba=o(x);if(ba){c('DOM').replace(ba,z);}else c('DOM').insertAfter(x.firstChild,z);}return true;}},getOption:function w(x,y){var z=v.getOptions(x),aa=z.length;while(aa--)if(y===v.getOptionValue(z[aa]))return z[aa];return null;},getOptions:function w(x){var y=c('MenuDeprecated').getItems(v.getSelectorMenu(x));return y.filter(s);},getEnabledOptions:function w(x){var y=c('MenuDeprecated').getEnabledItems(v.getSelectorMenu(x));return y.filter(s);},getSelectedOptions:function w(x){return c('MenuDeprecated').getCheckedItems(v.getSelectorMenu(x));},getOptionText:function w(x){return c('MenuDeprecated').getItemLabel(x);},getOptionValue:function w(x){var y=l(x),z=o(y),aa=v.getOptions(y).indexOf(x);return aa>=0?z.options[aa+1].value:'';},getSelectorButton:function w(x){return c('DOM').find(x,'a.uiSelectorButton');},getSelectorMenu:function w(x){return c('DOM').scry(x,'div.uiSelectorMenu')[0];},getValue:function w(x){var y=o(x);if(!y)return null;if(!r(x))return y.value;var z=[],aa=y.options;for(var ba=1,ca=aa.length;ba<ca;ba++)if(aa[ba].selected)z.push(aa[ba].value);return z;},isOptionSelected:function w(x){return c('MenuDeprecated').isItemChecked(x);},listen:function w(x,y,z){return this.subscribe(y,function(aa,ba){if(ba.selector===x)return z(ba,aa);});},loadMenu:function w(x,y){var z=v.getSelectorMenu(x);if(!z){var aa=v.getSelectorButton(x),ba=aa.getAttribute('ajaxify');if(ba){e(['AsyncRequest'],function(da){var ea=new (c('URI'))(ba),fa=ea.getQueryData();ea.setQueryData({});var ga=new da(ea).setData(fa).setNectarModuleDataSafe(aa).setRelativeTo(aa);y&&ga.setFinallyHandler(function(){setTimeout(y,0);});ga.send();}.bind(this));var ca=c('HTML')('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');c('DOM').appendContent(aa.parentNode,ca);z=v.getSelectorMenu(x);aa.removeAttribute('onmouseover');}}else y&&y();return z;},setButtonLabel:function w(x,y){var z=v.getSelectorButton(x),aa=parseInt(z.getAttribute('data-length'),10);y=y||z.getAttribute('data-label')||'';c('Button').setLabel(z,y);if(typeof y==='string')if(aa&&y.length>aa){z.setAttribute('title',y);}else z.removeAttribute('title');},setButtonTooltip:function w(x,y){var z=v.getSelectorButton(x),aa=c('Parent').byTag(z,'a');aa&&c('TooltipData').set(aa,y||z.getAttribute('data-tooltip')||'');},setEnabled:function w(x,y){if(!y&&h&&l(x)===h)v.toggle(x);c('Button').setEnabled(v.getSelectorButton(x),y);},setOptionEnabled:function w(x,y){c('MenuDeprecated').setItemEnabled(x,y);},setSelected:function w(x,y,z){z=z!==false;var aa=v.getOption(x,y);if(!aa)return;var ba=v.isOptionSelected(aa);if(z!==ba){if(!r(x)&&!ba){var ca=v.getSelectedOptions(x)[0];ca&&c('MenuDeprecated').toggleItem(ca);}c('MenuDeprecated').toggleItem(aa);}v.updateSelector(x);},toggle:function w(x){c('Toggler').toggle(c('DOM').scry(l(x),'div.wrap')[0]);},updateSelector:function w(x){var y=v.getOptions(x),z=v.getSelectedOptions(x),aa=o(x).options,ba=[],ca=[];for(var da=0,ea=y.length;da<ea;da++){var fa=c('arrayContains')(z,y[da]);aa[da+1].selected=fa;if(fa){var ga=v.getOptionText(y[da]);ba.push(ga);ca.push(y[da].getAttribute('data-tooltip')||ga);}}aa[0].selected=!z.length;var ha=c('CSS').hasClass(x,'uiSelectorDynamicLabel'),ia=c('CSS').hasClass(x,'uiSelectorDynamicTooltip');if(ha||ia){var ja='';if(r(x)){var ka=v.getSelectorButton(x);ja=ka.getAttribute('data-delimiter')||', ';}ba=ba.join(ja);ca=ca.join(ja);ha&&v.setButtonLabel(x,ba);ia&&v.setButtonTooltip(x,ca);}}});f.exports=v;}),null);
__d('EgoUnitSlideInsert',['csx','cx','Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j='sliding',k="EgoSlider/End",l=babelHelpers['extends']({isSliding:function m(n){return c('DataStore').get(n,j);},runAfterSlide:function m(n,o){var p=c('tidyEvent')(l.subscribe(k,function(q,r){if(r===n){p&&p.unsubscribe();o();}}));},registerSlide:function m(n,o){c('Event').listen(n,'click',function(p){var q=c('Parent').bySelector(p.getTarget(),"._5cl_");if(!q)return;var r=c('Parent').byClass(n,'ego_unit'),s=0,t=c('Parent').byClass(r,'ego_unit_container'),u=c('DOM').scry(t,'.ego_unit')[0];if(u===r)if(r.nextSibling){r.nextSibling.style.paddingTop='0px';r.nextSibling.style.borderTop='0px';}c('CSS').addClass(r,"_5cl-");c('DataStore').set(r,j,true);new (c('Animation'))(r).to('height',0).to('padding-top',s).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(c('Ease').circOut).duration(300).checkpoint(1,function(){c('DOM').appendContent(t,r);c('DOM').prependContent(r,o);c('DataStore').remove(r,j);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){l.inform(k,r);}).go();});}},c('TidyArbiterMixin'));f.exports=l;}),null);
__d('NetEgo',['csx','Animation','Arbiter','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],(function a(b,c,d,e,f,g,h){var i={setup:function j(k){c('Arbiter').subscribe([c('PageLikeConstants').LIKED,'FriendRequest/sending'],function(l,m){if(k==m.profile_id&&m.origin=='hovercard'||k==m.uid){var n=c('ge')(document.body,'.ego_unit_container');if(n){var o=c('DOM').scry(n,'.ego_unit'),p=o.length;for(var q=0;q<p;q++){var r=o[q].getAttribute('data-ego-fbid');if(r==k){var s=c('DOM').scry(o[q],'.ego_action a')[0];if(s)s.click();break;}}}}});},updateXids:function j(k,l){if(k.length==0&&l.length==0)return;var m=function w(x){return function(y){var z=y.getAttribute(x);if(!z)return false;var aa=new (c('URI'))(z).getQueryData();return !!aa.xids;};},n=c('DOM').scry(document.body,'.ego_section a');n=n.filter(m('ajaxify'));if(n.length==0)return;var o=new (c('URI'))(n[0].getAttribute('ajaxify')),p=o.getQueryData();if(!p.xids)return;var q=null;try{q=JSON.parse(p.xids);}catch(r){return;}for(var s=0;s<l.length;++s)q[l[s]]=1;var t=JSON.stringify(q),u=function w(x,y){o=new (c('URI'))(x.getAttribute(y));p=o.getQueryData();p.xids=t;o.setQueryData(p);x.setAttribute(y,o.toString());};for(s=0;s<n.length;++s)u(n[s],'ajaxify');var v=c('DOM').scry(document.body,'.ego_unit form');v=v.filter(m('action'));for(s=0;s<v.length;++s)u(v[s],'action');},replaceUnit:function j(k,l,m,n){i.replaceUnitCheckParent(k,l,m,n,'');},replaceUnitCheckParent:function j(k,l,m,n,o){var p=c('Parent').byClass(k,'ego_unit_container');if(p&&c('EgoUnitSlideInsert').isSliding(k)){var q=c('DOM').appendContent(p,l);q.forEach(c('CSS').hide);c('EgoUnitSlideInsert').runAfterSlide(k,i._replaceUnitElement.bind(null,k,q,o));}else i._replaceUnit(k,l,m,n,o);},_replaceUnit:function j(k,l,m,n,o){var p=c('DOM').insertAfter(k,l);p.forEach(c('CSS').hide);if(n!==undefined&&n!==null){setTimeout(function(){i._replaceUnitFadeout(k,p,m,o);},n);}else i._replaceUnitFadeout(k,p,m,o);},_replaceUnitFadeout:function j(k,l,m,n){if(m){new (c('Animation'))(k).from('opacity',1).to('opacity',0).duration(m).checkpoint(1,function(){i._replaceUnitElement(k,l,n);}).go();}else i._replaceUnitElement(k,l,n);},_replaceUnitElement:function j(k,l,m){var n=c('CSS').hasClass(k,'ego_unit')?k.parentNode:null;if(n&&n.tagName==='LI')n=c('DOM').scry(k.parentNode,'^ul')[0];c('DOM').remove(k);if(l.length)l.forEach(c('CSS').show);c('Arbiter').inform('netego_replacedUnit',{serializedData:m,numUnitsRemained:n.childNodes.length});i.clearHeader();},clearHeader:function j(){var k=c('DOM').scry(document.body,'.ego_column'),l=[];for(var m=0;m<k.length;++m)l=l.concat(c('DOM').scry(k[m],'.uiHeader'));for(m=0;m<l.length;++m){var n=l[m].nextSibling,o=c('DOM').find(n,"._2xq");if(!o)o=n;if(!o||o.childNodes.length===0){c('DOM').remove(l[m]);}else if(o.childNodes.length===1){var p=o.childNodes[0];if(c('CSS').hasClass(p,'ego_appended_units')&&p.childNodes.length===0)c('DOM').remove(l[m]);}}}};f.exports=i;}),null);
__d('hasAdblock',['Promise','AdsAdBlockConfig'],(function a(b,c,d,e,f,g){var h=void 0;function i(){var l=document.createElement('div');l.className='AdBox Ad advert';document.body.appendChild(l);return new (c('Promise'))(function(m){var n=window.getComputedStyle&&window.getComputedStyle(l);if(!n){m(false);return;}if(n.display==='none'){m(true);return;}if(n.MozBinding&&n.MozBinding.indexOf('url')===0){setTimeout(function(){return m(l.clientWidth===0);},5000);return;}m(false);});}function j(){var l=document.createElement('img');document.body.appendChild(l);return new (c('Promise'))(function(m){l.onload=function(){var n=window.getComputedStyle&&window.getComputedStyle(l),o=n&&n.display==='none';l.parentNode&&l.parentNode.removeChild(l);m(o);};l.onerror=function(){l.parentNode&&l.parentNode.removeChild(l);m(true);};l.src='//fbcdn-creative-a.akamaihd.net/hads-ak-prn2/'+'1487645_6012475414660_1439393861_n.png';});}function k(l){if(h===undefined){c('Promise').all([i()].concat(c('AdsAdBlockConfig').shouldCheckImage?[j()]:[])).done(function(m){h=m.some(function(n){return n;});l(h);});}else l(h);}f.exports=k;}),null);
__d('AdBlockerDetectorLogging',['Banzai','DataAttributeUtils','ErrorUtils','hasAdblock','Parent','Run','getElementPosition'],(function a(b,c,d,e,f,g){var h=1,i=2,j=3,k='swank',l={doAdBlockCheck:function m(n,o){c('Run').onAfterLoad(function(){c('ErrorUtils').applyWithGuard(function(){this._doAdBlockImgCheck(n,o.token||o,0);}.bind(this),this);}.bind(this));},gatherImageHiddenStyleDebugData:function m(n,o){c('Run').onAfterLoad(function(){c('ErrorUtils').applyWithGuard(function(){this._gatherImageHiddenStyleDebugData(n,o.token||o);}.bind(this),this);}.bind(this));},_gatherImageHiddenStyleDebugData:function m(n,o){if(!o||!n)return;var p=n.querySelectorAll('img'),q=[];if(p.length>0)for(var r=0;r<p.length;r++){var s=p[r],t=c('getElementPosition')(s);if(window.getComputedStyle(s).visibility==='hidden'){var u={w:t.width,h:t.height,ii:r,ic:p.length};q.push(u);}}if(q.length>0){var v=n,w=0;while(v!==null){if(w++>50)break;if(v.classList.contains('hidden_elem')||v.classList.contains('holdoutAdStory')||v.classList.contains('ego_ads_holdout'))return;v=v.parentElement;}for(r=0;r<q.length;r++)c('Banzai').post('xtrackable:'+k,{token:o,event_code:3,debug:q[r]});}},checkImageLoadStatus:function m(n){var o=this;c('ErrorUtils').applyWithGuard(function(){setTimeout(function(){o._checkImageLoadStatus(n);},10000);},o);},_doAdBlockImgCheck:function m(n,o,p){if(!o||!n)return;var q=n.querySelectorAll('img');if(q.length>0){var r=false,s=0;for(var t=0;t<q.length;t++){var u=q[t],v=c('getElementPosition')(u);if(v.width>0||v.height>0){if(window.getComputedStyle(u).visibility==='hidden')s++;r=true;}}if(!r||s>0){var w=n,x=0;while(w!==null){if(x++>50)break;if(w.classList.contains('hidden_elem')||w.classList.contains('holdoutAdStory')||w.classList.contains('ego_ads_holdout'))return;w=w.parentElement;}if(s>0)c('Banzai').post('xtrackable:'+k,{token:o,event_code:2});if(!r)c('Banzai').post('xtrackable:'+k,{token:o});}}else if(q.length===0&&o.startsWith('7.'))if(++p<5)setTimeout(function(){this._doAdBlockImgCheck(n,o,p);}.bind(this).bind(this),2500);},_checkImageLoadStatus:function m(n){var o=n.querySelector('img');if(o&&(!o.complete||!o.naturalWidth)){var p=this._findParentImpressionToken(n);c('Banzai').post('xtrackable:'+k,{token:p,event_code:1});}},_findParentImpressionToken:function m(n){var o=c('DataAttributeUtils').getParentByAttributeOrDataStoreKey(n,'data-xt','data-xt');return o?c('DataAttributeUtils').getDataAttribute(o,'data-xt'):null;},doHasAdBlockCheck:function m(){c('hasAdblock')(function(n){var o={};o[j]=n;c('Banzai').post('search_check',o);});},doBrowserExtensionCheck:function m(n,o){try{var q=document.getElementsByTagName('head')[0],r=document.documentElement.shadowRoot,s=[];if(r)s=Array.prototype.slice.call(r.querySelectorAll('style'));var t=Array.prototype.slice.call(q.querySelectorAll('style')).filter(function(v){return v&&v.textContent.length==0;}),u={};u[h]=s.length>0;u[i]=t.length>0;if(n)s.forEach(function(v){v.disabled=true;});if(o)t.forEach(function(v){v.disabled=true;});c('Banzai').post('search_check',u);}catch(p){}}};f.exports=l;}),null);