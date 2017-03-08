if (self.CavalryLogger) { CavalryLogger.start_js(["5hNXg"]); }

__d('UFIFeedbackContext.react',['React','UFICentralUpdates','UFIFeedbackTargets'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$UFIFeedbackContext1=null,this.state={contextArgs:this.props.contextArgs,feedback:null},m;}k.prototype.loadFeedbackTarget=function(l){if(!this.$UFIFeedbackContext1)this.$UFIFeedbackContext1=c('UFIFeedbackTargets').getFeedbackTarget(l,function(m){this.$UFIFeedbackContext1=null;this.setState({feedback:m});}.bind(this));};k.prototype.componentDidMount=function(){this.loadFeedbackTarget(this.state.contextArgs.ftentidentifier);this.ufiCentralUpdatesSubscriptions=[c('UFICentralUpdates').subscribe('feedback-updated',function(l,m){var n=this.state.contextArgs;if(n.ftentidentifier in m.updates)this.loadFeedbackTarget(n.ftentidentifier);}.bind(this))];};k.prototype.componentWillUnmount=function(){this.ufiCentralUpdatesSubscriptions.forEach(function(l){return l&&c('UFICentralUpdates').unsubscribe(l);});if(this.$UFIFeedbackContext1)c('UFIFeedbackTargets').unsubscribe(this.$UFIFeedbackContext1);};k.prototype.render=function(){if(this.state.feedback)return this.props.render(this.state.contextArgs,this.state.feedback);return null;};k.propTypes={contextArgs:j.object.isRequired,render:j.func.isRequired};k.contextTypes={stores:j.object};f.exports=k;}),null);
__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k));};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp);}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render();}}.bind(this));this.render();}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(j,this.$UFIAddCommentController1);};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove();};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,replyCommentID:null,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:l.istipjarenabled&&k.islivestreaming,contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming});}.bind(this);};f.exports=h;}),null);
__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$MentionsInputTypeaheadView1=function(r){var s=r===this.props.highlightedEntry;return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),{key:r.getUniqueID(),entry:r,highlighted:s,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_5u8_"+(!this.props.entries.length?' '+"_5u90":'');return (c('React').createElement('ul',{className:m,role:'listbox',id:this.props.id},this.props.entries.map(this.$MentionsInputTypeaheadView1)));};l.propTypes={id:k.string,highlightedEntry:k.object,entries:k.array.isRequired,onSelect:k.func.isRequired,onHighlight:k.func,onRenderHighlight:k.func};f.exports=l;}),null);
__d('UFIReactionsStandalone.react',['React','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFIReactionsLinkImpl.react','UFIReactionStore'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.componentWillMount=function(){this.$UFIReactionsStandalone1=new (c('UFIDispatcher'))();this.$UFIReactionsStandalone2={UFIReactionStore:new (c('UFIReactionStore'))(this.$UFIReactionsStandalone1)};};j.prototype.componentWillUnmount=function(){this.$UFIReactionsStandalone2={};this.$UFIReactionsStandalone1=null;};j.prototype.render=function(){return (c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIReactionsStandalone1,stores:this.$UFIReactionsStandalone2},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.props.contextArgs,render:function k(l,m){return (c('React').createElement(c('UFIReactionsLinkImpl.react'),{contextArgs:l,nuxConfig:l.reactionsNuxConfig,reaction:m.viewerreaction,supportedReactions:m.supportedreactions,ftIdentifier:l.ftentidentifier}));}})));};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('VideoWatchAndScrollOverlay',['csx','cx','CSS','Bootloader','DOM','EventListener','Map','React','ReactDOM','EmbeddedVideoScrubber.react','EmbeddedVideoPlaybackTimer.react','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIReactionTypes','UFIUserActions','VideoChainingCaller','VideoPlayerController','VideoPlayerLoggerEvent','VideoPlayerReason','destroyOnUnload','throttle','requestAnimationFrame','emptyFunction','getActiveElement','setImmediate'],(function a(b,c,d,e,f,g,h,i){function j(k,l,m,n){'use strict';this.$VideoWatchAndScrollOverlay17=l;this.$VideoWatchAndScrollOverlay23=k;this.$VideoWatchAndScrollOverlay21=new (c('SubscriptionsHandler'))();this.$VideoWatchAndScrollOverlay2=n;this.$VideoWatchAndScrollOverlay10=m.likeButton;this.$VideoWatchAndScrollOverlay22=m.unlikeButton;this.$VideoWatchAndScrollOverlay7=m.ftEntID;this.$VideoWatchAndScrollOverlay5=m.feedbackSource;this.$VideoWatchAndScrollOverlay9=m.isLiveStream;this.$VideoWatchAndScrollOverlay1=0;this.$VideoWatchAndScrollOverlay13=0;this.$VideoWatchAndScrollOverlay12=0;if(this.$VideoWatchAndScrollOverlay7){this.$VideoWatchAndScrollOverlay26();this.$VideoWatchAndScrollOverlay21.addSubscriptions(c('UFICentralUpdates').subscribe('feedback-updated',function(q,r){if(this.$VideoWatchAndScrollOverlay7 in r.updates)this.$VideoWatchAndScrollOverlay26();}.bind(this)));c('EventListener').listen(this.$VideoWatchAndScrollOverlay10,'click',this.$VideoWatchAndScrollOverlay27.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay22,'click',this.$VideoWatchAndScrollOverlay27.bind(this));}this.$VideoWatchAndScrollOverlay15=c('DOM').find(this.$VideoWatchAndScrollOverlay17,"._n2-");this.$VideoWatchAndScrollOverlay25=c('DOM').find(this.$VideoWatchAndScrollOverlay17,"._4per");this.$VideoWatchAndScrollOverlay3=c('DOM').scry(this.$VideoWatchAndScrollOverlay17,"._35vp")[0];this.$VideoWatchAndScrollOverlay18=c('DOM').find(this.$VideoWatchAndScrollOverlay17,"._11jc");this.$VideoWatchAndScrollOverlay14=c('DOM').find(this.$VideoWatchAndScrollOverlay17,"._5sv5");this.$VideoWatchAndScrollOverlay4=c('DOM').scry(this.$VideoWatchAndScrollOverlay17,"._n2_")[0];this.$VideoWatchAndScrollOverlay23.addListener('stateChange',this.$VideoWatchAndScrollOverlay28.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('beginPlayback',this.$VideoWatchAndScrollOverlay29.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('pausePlayback',this.$VideoWatchAndScrollOverlay30.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('finishPlayback',this.$VideoWatchAndScrollOverlay31.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('unmuteVideo',this.$VideoWatchAndScrollOverlay32.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('muteVideo',this.$VideoWatchAndScrollOverlay33.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('adBreakIndicatorShowing',this.$VideoWatchAndScrollOverlay34.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('exitWatchAndScroll',this.$VideoWatchAndScrollOverlay32.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay15,'click',this.$VideoWatchAndScrollOverlay35.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay25,'click',this.$VideoWatchAndScrollOverlay36.bind(this));if(this.$VideoWatchAndScrollOverlay3)c('EventListener').listen(this.$VideoWatchAndScrollOverlay3,'click',this.$VideoWatchAndScrollOverlay37.bind(this));if(this.$VideoWatchAndScrollOverlay4)c('EventListener').listen(this.$VideoWatchAndScrollOverlay4,'click',this.$VideoWatchAndScrollOverlay38.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay23.getRootNode(),'mousemove',c('throttle')(this.$VideoWatchAndScrollOverlay39.bind(this),200));c('EventListener').listen(this.$VideoWatchAndScrollOverlay23.getRootNode(),'mouseenter',function(){this.$VideoWatchAndScrollOverlay11=true;}.bind(this));var o=["_5190","_5199"];c('EventListener').listen(this.$VideoWatchAndScrollOverlay23.getRootNode(),'mouseleave',function(q){var r=false;if(q.toElement)o.forEach(function(s){if(c('CSS').hasClass(q.toElement,s))r=true;});if(r)return;if(this.$VideoWatchAndScrollOverlay23.isState('playing')){this.$VideoWatchAndScrollOverlay11=false;this.$VideoWatchAndScrollOverlay34();}}.bind(this));this.$VideoWatchAndScrollOverlay40();if(!this.$VideoWatchAndScrollOverlay9){this.$VideoWatchAndScrollOverlay23.addListener('updateStatus',function(q){this.$VideoWatchAndScrollOverlay13=q.position;this.$VideoWatchAndScrollOverlay41();}.bind(this));this.$VideoWatchAndScrollOverlay23.addListener('updateBuffer',function(q){this.$VideoWatchAndScrollOverlay1=q.duration+q.offset;this.$VideoWatchAndScrollOverlay41();}.bind(this));this.$VideoWatchAndScrollOverlay19=this.$VideoWatchAndScrollOverlay42.bind(this);this.$VideoWatchAndScrollOverlay20=this.$VideoWatchAndScrollOverlay43.bind(this);}function p(q,r,s){c('setImmediate')(function(){var t=c('getActiveElement')(),u=c('DOM').contains(q,t);if(u){r();}else s();});}c('EventListener').listen(this.$VideoWatchAndScrollOverlay17,'focusin',function(){return p(this.$VideoWatchAndScrollOverlay17,function(){this.$VideoWatchAndScrollOverlay44();this.$VideoWatchAndScrollOverlay45();}.bind(this),c('emptyFunction'));}.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay17,'focusout',function(){return p(this.$VideoWatchAndScrollOverlay17,c('emptyFunction'),function(){this.$VideoWatchAndScrollOverlay46();}.bind(this));}.bind(this));c('destroyOnUnload')(function(){if(this.$VideoWatchAndScrollOverlay21){this.$VideoWatchAndScrollOverlay21.release();this.$VideoWatchAndScrollOverlay21=null;}c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay18);c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay14);}.bind(this));}j.prototype.$VideoWatchAndScrollOverlay40=function(){'use strict';var k=!(this.$VideoWatchAndScrollOverlay23.isState('loading')||this.$VideoWatchAndScrollOverlay23.isState('fallback'));if(!k)return;this.$VideoWatchAndScrollOverlay12=this.$VideoWatchAndScrollOverlay23.getPlaybackDuration();this.$VideoWatchAndScrollOverlay24=this.$VideoWatchAndScrollOverlay23.getVolume();};j.prototype.$VideoWatchAndScrollOverlay41=function(){'use strict';if(this.$VideoWatchAndScrollOverlay16)return;this.$VideoWatchAndScrollOverlay16=c('requestAnimationFrame')(function(){this.$VideoWatchAndScrollOverlay16=null;this.$VideoWatchAndScrollOverlay47();}.bind(this));};j.prototype.$VideoWatchAndScrollOverlay47=function(){'use strict';if(!this.$VideoWatchAndScrollOverlay12)this.$VideoWatchAndScrollOverlay40();if(this.$VideoWatchAndScrollOverlay9){c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay18);c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay14);return;}c('ReactDOM').render(c('React').createElement(c('EmbeddedVideoScrubber.react'),{className:"_1681",bufferedPosition:this.$VideoWatchAndScrollOverlay1,hasScrubberPreview:false,isFullscreen:false,onScrubBegin:this.$VideoWatchAndScrollOverlay19,onPointOfInterestSelect:function l(){},onScrubEnd:this.$VideoWatchAndScrollOverlay20,playbackDuration:this.$VideoWatchAndScrollOverlay12,playbackPosition:this.$VideoWatchAndScrollOverlay13,pointsOfInterest:[],previewThumbnailInformation:{},scrubberPreviewSprites:new (c('Map'))(),tabIndex:'-1'}),this.$VideoWatchAndScrollOverlay18);var k=this.$VideoWatchAndScrollOverlay13-this.$VideoWatchAndScrollOverlay12;c('ReactDOM').render(c('React').createElement(c('EmbeddedVideoPlaybackTimer.react'),{className:"_25e2 _1682",playbackPosTimestamp:this.$VideoWatchAndScrollOverlay13,remainingTimestamp:k}),this.$VideoWatchAndScrollOverlay14);};j.prototype.$VideoWatchAndScrollOverlay42=function(){'use strict';this.$VideoWatchAndScrollOverlay23.pause(c('VideoPlayerReason').SEEK);};j.prototype.$VideoWatchAndScrollOverlay43=function(k){'use strict';this.$VideoWatchAndScrollOverlay23.seek(k);this.$VideoWatchAndScrollOverlay13=k;this.$VideoWatchAndScrollOverlay23.play(c('VideoPlayerReason').SEEK);};j.prototype.$VideoWatchAndScrollOverlay26=function(){'use strict';if(!this.$VideoWatchAndScrollOverlay10||!this.$VideoWatchAndScrollOverlay22)return;this.$VideoWatchAndScrollOverlay6=c('UFIFeedbackTargets').getFeedbackTarget(this.$VideoWatchAndScrollOverlay7,function(k){c('CSS').hide(this.$VideoWatchAndScrollOverlay10);c('CSS').hide(this.$VideoWatchAndScrollOverlay22);if(k.viewercanlike)if(k.hasviewerliked){c('CSS').show(this.$VideoWatchAndScrollOverlay22);}else c('CSS').show(this.$VideoWatchAndScrollOverlay10);}.bind(this));};j.prototype.$VideoWatchAndScrollOverlay27=function(event){'use strict';this.$VideoWatchAndScrollOverlay6=c('UFIFeedbackTargets').getFeedbackTarget(this.$VideoWatchAndScrollOverlay7,function(k){c('UFIUserActions').changeReaction(this.$VideoWatchAndScrollOverlay7,k.hasviewerliked?c('UFIReactionTypes').NONE:c('UFIReactionTypes').LIKE,{source:this.$VideoWatchAndScrollOverlay5,target:event.target});}.bind(this));if(c('CSS').shown(this.$VideoWatchAndScrollOverlay10)){this.$VideoWatchAndScrollOverlay10.focus();}else this.$VideoWatchAndScrollOverlay22.focus();};j.prototype.$VideoWatchAndScrollOverlay28=function(){'use strict';if(this.$VideoWatchAndScrollOverlay23.isState('ready')||this.$VideoWatchAndScrollOverlay23.isState('playing')||this.$VideoWatchAndScrollOverlay23.isState('paused'))if(this.$VideoWatchAndScrollOverlay23.isMuted()||this.$VideoWatchAndScrollOverlay23.getVolume()===0){this.$VideoWatchAndScrollOverlay33();}else this.$VideoWatchAndScrollOverlay32();};j.prototype.$VideoWatchAndScrollOverlay29=function(){'use strict';this.$VideoWatchAndScrollOverlay48();c('CSS').addClass(this.$VideoWatchAndScrollOverlay15,"_n2w");this.$VideoWatchAndScrollOverlay39();};j.prototype.$VideoWatchAndScrollOverlay31=function(){'use strict';this.$VideoWatchAndScrollOverlay48();c('CSS').addClass(this.$VideoWatchAndScrollOverlay15,"_n2x");this.$VideoWatchAndScrollOverlay34();};j.prototype.$VideoWatchAndScrollOverlay30=function(){'use strict';this.$VideoWatchAndScrollOverlay48();c('CSS').addClass(this.$VideoWatchAndScrollOverlay15,"_n2y");this.$VideoWatchAndScrollOverlay39();};j.prototype.$VideoWatchAndScrollOverlay48=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay15,"_n2w");c('CSS').removeClass(this.$VideoWatchAndScrollOverlay15,"_n2y");c('CSS').removeClass(this.$VideoWatchAndScrollOverlay15,"_n2x");};j.prototype.$VideoWatchAndScrollOverlay35=function(){'use strict';if(this.$VideoWatchAndScrollOverlay23.isState('playing')){this.$VideoWatchAndScrollOverlay23.logEvent(c('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_PAUSED);this.$VideoWatchAndScrollOverlay23.pause(c('VideoPlayerReason').USER);}else this.$VideoWatchAndScrollOverlay23.play(c('VideoPlayerReason').USER);};j.prototype.$VideoWatchAndScrollOverlay33=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay25,"_4pep");c('CSS').addClass(this.$VideoWatchAndScrollOverlay25,"_4peq");};j.prototype.$VideoWatchAndScrollOverlay32=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay25,"_4peq");c('CSS').addClass(this.$VideoWatchAndScrollOverlay25,"_4pep");};j.prototype.$VideoWatchAndScrollOverlay38=function(){'use strict';var k=this.$VideoWatchAndScrollOverlay23.getOption('CommercialBreakVideoAdOverlay','videoController'),l=k||this.$VideoWatchAndScrollOverlay23;l.logEvent(c('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_EXITED);l.emit('WatchAndScroll/close');};j.prototype.$VideoWatchAndScrollOverlay36=function(){'use strict';if(this.$VideoWatchAndScrollOverlay23.isMuted()||this.$VideoWatchAndScrollOverlay23.getVolume===0){this.$VideoWatchAndScrollOverlay23.unmute();}else this.$VideoWatchAndScrollOverlay23.mute();};j.prototype.$VideoWatchAndScrollOverlay37=function(){'use strict';this.$VideoWatchAndScrollOverlay23.logEvent(c('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_CHANNEL_ENTERED);c('Bootloader').loadModules(["VideoWatchAndScrollController","VideoChannelController"],function(k,l){k.onEnterChannel();l.openFromVideoPlayer(this.$VideoWatchAndScrollOverlay23,this.$VideoWatchAndScrollOverlay23.getVideoChannelID(),this.$VideoWatchAndScrollOverlay2,k.getStoryFetcherData());}.bind(this),'VideoWatchAndScrollOverlay');};j.prototype.$VideoWatchAndScrollOverlay39=function(){'use strict';if(this.$VideoWatchAndScrollOverlay11){this.$VideoWatchAndScrollOverlay45();this.$VideoWatchAndScrollOverlay46();}};j.prototype.$VideoWatchAndScrollOverlay46=function(){'use strict';this.$VideoWatchAndScrollOverlay44();this.$VideoWatchAndScrollOverlay8=setTimeout(function(){if(this.$VideoWatchAndScrollOverlay23.isState('playing'))this.$VideoWatchAndScrollOverlay34();}.bind(this),3000);};j.prototype.$VideoWatchAndScrollOverlay44=function(){'use strict';clearTimeout(this.$VideoWatchAndScrollOverlay8);};j.prototype.$VideoWatchAndScrollOverlay45=function(){'use strict';if(this.$VideoWatchAndScrollOverlay23.isState('finished')||this.$VideoWatchAndScrollOverlay23.getOption('WatchAndScroll','hideOverlay'))return;c('CSS').addClass(this.$VideoWatchAndScrollOverlay17,"_1he7");this.$VideoWatchAndScrollOverlay23.emit('WatchAndScroll/overlayShown');};j.prototype.$VideoWatchAndScrollOverlay34=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay17,"_1he7");this.$VideoWatchAndScrollOverlay23.emit('WatchAndScroll/overlayHidden');};f.exports=j;}),null);