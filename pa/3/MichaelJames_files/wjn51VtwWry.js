if (self.CavalryLogger) { CavalryLogger.start_js(["ZhfvI"]); }

__d("PhotoSourceTypeConst",[],(function a(b,c,d,e,f,g){f.exports={WEB:0,MOBILE:1,WEBCAM:2,HTML5:4,FLASH:6,SIMPLE:7,COMPOSER:8,PROFILE_PIC:9,TIMELINE_COVER_PHOTO:10,TIMELINE_LIFE_EVENT_PHOTO:12,GROUP_EMAIL:13,TIMELINE_MAP_PHOTO:14,UNITTEST:15,VAULT:16,USER_TO_PAGE_MIGRATION:18,COMMENT_PHOTO_ATTACHMENT:19,CAMPFIRE:21,WEB_SAY_THANKS:26,TIMELINE_PHOTOS_TAB:27,COMPOSER_CAMERA:28,MESSENGER:29,INSTANT_ARTICLES:30,FAMILY_TAG_COVER_PHOTO:31,COMPANY_LOGO:32,CANVAS:33,BIRTHDAY_COMPOSER:34,LEAD_GEN:35,TAROT_CARD:36,INTRO_CARD:37,CHECKPOINT_STEP_IMAGE_UPLOAD:38,PROFILE_SET:39,UPLOADER_EXCEPTION_T5215910:5215910};}),null);
__d("TimelineProfilePictureLoggerEnums",[],(function a(b,c,d,e,f,g){f.exports={actions:{EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}};}),null);
__d('FileUploadTarget',['AsyncUploadRequest','DragDropFileUpload','DragDropTarget','emptyFunction'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';var k=function(l){this.$FileUploadTarget1=new (c('AsyncUploadRequest'))(j).setFiles({file:l}).setRelativeTo(i).setStatusElement(i).setAllowCrossOrigin(this.$FileUploadTarget2);this.$FileUploadTarget1.subscribe('complete',function(m,n){this.onCompleteCallback(n);this.$FileUploadTarget1=null;}.bind(this));this.$FileUploadTarget1.send();}.bind(this);this.dragDropTarget=new (c('DragDropTarget'))(i).setOnFilesDropCallback(function(l){l.length&&this.asyncProcess(l,function(m){m.length&&k(m);});}.bind(this));this.asyncProcess=function(l,m){m(l);};this.preprocess=function(l){return l;};this.onCompleteCallback=c('emptyFunction');}h.prototype.setAllowCrossOrigin=function(i){'use strict';this.$FileUploadTarget2=i;return this;};h.prototype.setPreprocessor=function(i){'use strict';this.preprocess=i;return this;};h.prototype.setAsyncProcessor=function(i){'use strict';this.asyncProcess=i;return this;};h.prototype.onComplete=function(i){'use strict';this.onCompleteCallback=i;return this;};h.prototype.abort=function(){'use strict';this.$FileUploadTarget1&&this.$FileUploadTarget1.abort();};h.prototype.activate=function(){'use strict';if(!c('DragDropFileUpload').isSupported())return this;this.dragDropTarget.setFileFilter(this.preprocess).enable();return this;};f.exports=h;}),null);
__d('SinglePictureUploadTarget',['fbt','Bootloader','Dialog','ErrorDialog','FileUploadTarget','emptyFunction','htmlSpecialChars'],(function a(b,c,d,e,f,g,h){function i(j,k){'use strict';this.fileUploadTarget=new (c('FileUploadTarget'))(j,k);this.preprocessCallback=c('emptyFunction');this.asyncPreprocessCallback=function(l,m){m(l);};this.oncompleteCallback=c('emptyFunction');this.afterSuccessCallback=c('emptyFunction');}i.prototype.setAllowCrossOrigin=function(j){'use strict';this.fileUploadTarget.setAllowCrossOrigin(j);return this;};i.prototype.setPreprocessCallback=function(j){'use strict';this.preprocessCallback=j;return this;};i.prototype.setAsyncPreprocessCallback=function(j){'use strict';this.asyncPreprocessCallback=j;return this;};i.prototype.setOncompleteCallback=function(j){'use strict';this.oncompleteCallback=j;return this;};i.prototype.setAfterSuccessCallback=function(j){'use strict';this.afterSuccessCallback=j;return this;};i.prototype.activate=function(){'use strict';var j=function n(o){return c('htmlSpecialChars')(o.name);},k=function(n){if(n.length>1){c('ErrorDialog').show(h._("Upload Error"),h._("You can only select 1 photo to upload to this album. Only the first photo you selected will be uploaded."));n=[n[0]];}var o=n[0];if(!o.type.match(/^image\//)){c('ErrorDialog').show(h._("Upload Error"),h._("We could not understand the contents of {filename}. Make sure it is a jpg, gif, or png formatted image.",[h.param('filename',j(o))]));return [];}this.preprocessCallback(n);return n;}.bind(this),l=function(n,o){var p=1024*1024*16,q=1024*1024*1,r=function(t){if(t.size>p){c('ErrorDialog').show(h._("Upload Error"),h._("{filename} is too large. Please resize your photo to under 8000x8000 pixels and try again.",[h.param('filename',j(n[0]))]));o([]);}else this.asyncPreprocessCallback([t],o);}.bind(this),s=n[0];if(s.size<q){r(s);}else c('Bootloader').loadModules(["ImageExif","ImageResizer"],function(t,u){if(!u.isSupported()){r(s);return;}var v=new u(s,null,null);v.subscribe('resized',function(w,x){if(x.size>s.size){r(s);}else r(x);}.bind(this));v.subscribe('error',function(){r(s);}.bind(this));t.readFromFile(s,function(w){w&&v.setOrientation(w.Orientation);v.resize();});},'SinglePictureUploadTarget');}.bind(this),m=function(n){var o=n[0];if(!o.getResponse())return;this.oncompleteCallback(o);var p=o.getResponse().getPayload();if(o.isSuccess()){this.afterSuccessCallback(p);}else if(p&&p.__dialog){var q=new (c('Dialog'))();q.$SinglePictureUploadTarget1(p.__dialog);q.setButtons(c('Dialog').OK).show();}else c('ErrorDialog').show(p.error.title,p.error.body);}.bind(this);return this.fileUploadTarget.onComplete(m).setPreprocessor(k).setAsyncProcessor(l).activate();};f.exports=i;}),null);
__d('ServerRedirect',['ReloadPage','goURI'],(function a(b,c,d,e,f,g){var h={redirectPageTo:c('goURI'),reloadPage:c('ReloadPage').now};f.exports=h;}),null);
__d("XProfileIntroCardDismissSuggestedPhotosPromptAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/profile\/intro\/suggested_photos_prompt\/dismiss\/",{});}),null);
__d('ProfileIntroCardSuggestedPhotosPrompt',['csx','AsyncRequest','DOM','Event','XProfileIntroCardDismissSuggestedPhotosPromptAsyncController','tidyEvent'],(function a(b,c,d,e,f,g,h){function i(j,k){'use strict';var l=c('DOM').find(j,"._4oys");c('tidyEvent')(c('Event').listen(l,'click',function(m){c('DOM').replace(j,k);var n=c('XProfileIntroCardDismissSuggestedPhotosPromptAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).send();m.stop();}));}f.exports=i;}),null);
__d('ProfilePhotoActionLogger',['Banzai'],(function a(b,c,d,e,f,g){var h={EVENT_SELECT_METHOD:'select_method',EVENT_CAMERA_PERMISSION_PROVIDED:'permission_provided',EVENT_CAMERA_PERMISSION_DENIED:'permission_denied',EVENT_CAMERA_NO_WEBCAM:'permission_denied',EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:'unknown_mediastream_error',EVENT_CAMERA_TAKE_PHOTO:'take_photo',EVENT_CAMERA_RETAKE_PHOTO:'retake_photo',EVENT_CAMERA_UPLOAD_ATTEMPT:'upload_attempt',EVENT_CAMERA_UPLOAD_ERROR:'upload_error',EVENT_CAMERA_UPLOAD_SUCCESS:'upload_success',SOURCE_SUGGESTIONS:'suggestions',SOURCE_TIMELINE:'timeline',SOURCE_NUX:'nux',METHOD_EXISTING:'existing',METHOD_UPLOAD:'upload',METHOD_CAMERA:'camera',log:function i(j,k,l){c('Banzai').post('profile_photo_action',{event:j,source:k,method:l});}};f.exports=h;}),null);
__d('TimelineProfilePicConfig',['fbt'],(function a(b,c,d,e,f,g,h){var i={loading:'timeline/profile_pic/loading',success:'timeline/profile_pic/success',leavingMessage:h._("Your profile picture is still uploading, are you sure you want to leave?")};f.exports=i;}),null);
__d('ProfilePictureFlowLogging',['Arbiter','Banzai','Event','Parent','ProfilePhotoActionLogger','Run','TimelineProfilePicConfig','TimelineProfilePictureLoggerEnums','tidyEvent'],(function a(b,c,d,e,f,g){var h=c('TimelineProfilePicConfig').loading,i=c('TimelineProfilePicConfig').success,j='data-action-type',k,l,m,n;function o(){n&&n.unsubscribe();n=null;}var p={action:c('TimelineProfilePictureLoggerEnums').actions,flow:c('TimelineProfilePictureLoggerEnums').flows,step:c('TimelineProfilePictureLoggerEnums').steps,log:function q(r){var s=r||p.step.INIT;c('Banzai').post('profile_pic_action',{action_type:k,flow_type:l,step_type:s});if(k===p.action.UPLOAD&&s===p.step.INIT)c('ProfilePhotoActionLogger').log(c('ProfilePhotoActionLogger').EVENT_SELECT_METHOD,m,c('ProfilePhotoActionLogger').METHOD_UPLOAD);l=null;if(r==='success'||r==='fail')k=null;return p;},setAction:function q(r){k=r;return p;},setFlowType:function q(r){l=r;return p;},setSource:function q(r){m=r;return p;},init:function q(r,s){if(s)m=s;if(!n){n=c('Arbiter').subscribe([h,i],function(t){p.log(t===h?c('TimelineProfilePictureLoggerEnums').steps.LOADING:c('TimelineProfilePictureLoggerEnums').steps.SUCCESS);});c('Run').onLeave(o);}c('tidyEvent')(c('Event').listen(r,'click',function(t){var u=c('Parent').byAttribute(t.getTarget(),j);if(!u)return;p.setAction(u.getAttribute(j)).log();}));},initMenuItems:function q(r,s,t){p.init(r.getRoot(),t);}};f.exports=p;}),null);
__d("XWorkNewsfeedNuxNextStepController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/work\/newsfeed_nux\/next_step\/",{});}),null);
__d('ProfilePicCropViewerInit',['Bootloader','CurrentCommunity','ProfilePictureFlowLogging','React','ServerRedirect','XWorkNewsfeedNuxNextStepController'],(function a(b,c,d,e,f,g){var h='profile-picture-crop',i='loading',j=c('ProfilePictureFlowLogging').flow,k,l;function m(){l&&l.close();}function n(p,q,r){r=r||{};c('Bootloader').loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(s,t,u,v,w,x){m();var y=r.stickerID;k=h+':'+p+':'+q;if(y)k+=':'+y;var z=r.successCallback,aa=c('CurrentCommunity').getID()!=='0';if(!z&&(r.source==='atwork_nux'||r.source==='timeline'||r.source==='atwork_profile_nux')&&aa)z=function da(ea){var fa=c('XWorkNewsfeedNuxNextStepController').getURIBuilder().getURI();new v().setURI(fa).setData({current_step_id:1,skipped:false}).setHandler(function(){c('ServerRedirect').reloadPage();}).send();};l=s.render(c('React').createElement(t,{cancelCallback:r.cancelCallback,cropMode:r.cropMode,errorCallback:r.errorCallback,method:r.method,open:true,photoID:p,profileID:q,setid:k,source:r.source,successCallback:z,uploadRequest:r.uploadRequest,warnOnCancel:r.warnOnCancel}),function(){l=null;});if(u.hasBeenCreated(k)||p===i)return;var ba=x.getURIBuilder().setString('photo_id',p).setInt('profile_id',q).setString('set_id',k).setBool('will_load_more_photos',true);y&&ba.setInt('sticker_id',y);ba=ba.getURI();var ca=k;new v(ba).setErrorHandler(function(da){ca===k&&m();w.defaultErrorHandler(da);}).send();},'ProfilePicCropViewerInit');return true;}var o={close:m,getFlowType:function p(){return j.ZOOMCROP;},useCropViewer:function p(){return true;},loading:function p(q,r){n(i,q,r);},loadID:n};f.exports=o;}),null);
__d("XProfilePicUploadAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/profile\/picture\/upload\/",{profile_id:{type:"Int",required:true},photo_source:{type:"Enum",defaultValue:9,enumType:0}});}),null);
__d('ProfileTempPhotoUploader',['CSS','EventEmitter','FileInputUploader','JpegResizer','Parent','PhotosMimeType','XProfilePicUploadAsyncController','tidyEvent'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this);this.$ProfileTempPhotoUploader1=k;this.$ProfileTempPhotoUploader6=c('XProfilePicUploadAsyncController').getURIBuilder().setInt('profile_id',l).setEnum('photo_source',m).getURI();if(c('JpegResizer').isSupported())this.$ProfileTempPhotoUploader4=new (c('JpegResizer'))(1);this.$ProfileTempPhotoUploader2=c('tidyEvent')(this.$ProfileTempPhotoUploader1.subscribe('change',function(){return this.attemptUpload();}.bind(this)));}j.prototype.removeListener=function(){'use strict';if(this.$ProfileTempPhotoUploader2){this.$ProfileTempPhotoUploader2.unsubscribe();this.$ProfileTempPhotoUploader2=null;}};j.prototype.attemptUpload=function(){'use strict';this.$ProfileTempPhotoUploader3&&this.$ProfileTempPhotoUploader3.abort();if(!this.$ProfileTempPhotoUploader1.getValue()){this.reset();return;}var k=this.$ProfileTempPhotoUploader1.getInput();if(!k.name)k.name='photo';this.$ProfileTempPhotoUploader5=c('Parent').byClass(k,'stat_elem');this.$ProfileTempPhotoUploader5&&c('CSS').addClass(this.$ProfileTempPhotoUploader5,'async_saving');var l=this.$ProfileTempPhotoUploader3=new (c('FileInputUploader'))(k).setURI(this.$ProfileTempPhotoUploader6).setAllowCrossOrigin(true);this.emit('uploadStart',l);c('tidyEvent')([l.subscribe('success',function(m,n){this.reset();this.emit('uploadSucess',n.response.getPayload());}.bind(this)),l.subscribe('failure',function(){this.reset();this.emit('uploadFailure');}.bind(this))]);if(this.$ProfileTempPhotoUploader4)l.setUploadInParallel(true).setPreprocessHandler(this.$ProfileTempPhotoUploader7.bind(this));l.send();};j.prototype.reset=function(){'use strict';this.$ProfileTempPhotoUploader5&&c('CSS').removeClass(this.$ProfileTempPhotoUploader5,'async_saving');this.$ProfileTempPhotoUploader3=null;this.$ProfileTempPhotoUploader1.clear();};j.prototype.$ProfileTempPhotoUploader7=function(k,l){'use strict';var m=k.getFile();if(!m||!c('PhotosMimeType').isJpeg(m.type)){this.emit('resizeSkipped');l(k);return;}this.$ProfileTempPhotoUploader4&&this.$ProfileTempPhotoUploader4.resizeBlob(m,function(n,o,p){if(n){this.emit('resizeFailure');l(k);return;}if(p){this.emit('resizeSkipped');}else{k.setFile(o);this.emit('resizeSuccess');}l(k);}.bind(this));};f.exports=j;}),null);
__d('ProfilePicUploadToCrop',['PhotoSourceTypeConst','ProfilePicCropViewerInit','ProfilePictureFlowLogging','ProfileTempPhotoUploader'],(function a(b,c,d,e,f,g){function h(){return c('ProfilePicCropViewerInit').getFlowType();}function i(j,k,l,m,n){var o=arguments.length<=5||arguments[5]===undefined?true:arguments[5];'use strict';this.$ProfilePicUploadToCrop1=n;this.$ProfilePicUploadToCrop2=m;this.$ProfilePicUploadToCrop3=new (c('ProfileTempPhotoUploader'))(k,n,c('PhotoSourceTypeConst').PROFILE_PIC);this.$ProfilePicUploadToCrop3.addListener('uploadStart',function(p){return this.uploadStart(p);}.bind(this));this.$ProfilePicUploadToCrop3.addListener('uploadSucess',function(p){return this.uploadSucess(p);}.bind(this));this.$ProfilePicUploadToCrop3.addListener('uploadFailure',function(){return this.uploadFailure();}.bind(this));this.$ProfilePicUploadToCrop3.addListener('resizeSkipped',function(){return this.resizeSkipped();}.bind(this));this.$ProfilePicUploadToCrop3.addListener('resizeStart',function(){return this.resizeStart();}.bind(this));this.$ProfilePicUploadToCrop3.addListener('resizeSuccess',function(){return this.resizeSuccess();}.bind(this));this.$ProfilePicUploadToCrop3.addListener('resizeFailure',function(){return this.resizeFailure();}.bind(this));}i.prototype.attemptUpload=function(){'use strict';this.$ProfilePicUploadToCrop3.removeListener();this.$ProfilePicUploadToCrop3.attemptUpload();};i.prototype.resizeStart=function(){'use strict';c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_BEGIN);};i.prototype.resizeSkipped=function(){'use strict';c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_SKIPPED);};i.prototype.resizeSuccess=function(){'use strict';c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_SUCCESS);};i.prototype.resizeFailure=function(){'use strict';c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_FAIL);};i.prototype.uploadStart=function(j){'use strict';c('ProfilePictureFlowLogging').setAction(c('ProfilePictureFlowLogging').action.UPLOAD).setFlowType(h()).log(c('ProfilePictureFlowLogging').step.UPLOAD_SELECT);c('ProfilePicCropViewerInit').loading(this.$ProfilePicUploadToCrop1,{uploadRequest:j});};i.prototype.uploadSucess=function(j){'use strict';i.loadCropper(j,this.$ProfilePicUploadToCrop1,this.$ProfilePicUploadToCrop2);};i.prototype.uploadFailure=function(){'use strict';c('ProfilePicCropViewerInit').close();c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.FAIL);};i.loadCropper=function(j,k,l){'use strict';c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.UPLOAD_SUCCESS);c('ProfilePicCropViewerInit').loadID(j.fbid,k,{method:'upload',source:l,warnOnCancel:true});};f.exports=i;}),null);
__d('ProfilePicDragAndDropUpload',['ProfilePicCropViewerInit','ProfilePictureFlowLogging','ProfilePicUploadToCrop','SinglePictureUploadTarget'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l){var m=new (c('SinglePictureUploadTarget'))(j,k).setAllowCrossOrigin(true).setPreprocessCallback(function(){c('ProfilePictureFlowLogging').setFlowType(c('ProfilePicCropViewerInit').getFlowType()).log(c('ProfilePictureFlowLogging').step.DRAG_AND_DROP);c('ProfilePicCropViewerInit').loading(l,{uploadRequest:m});}).setAfterSuccessCallback(function(n){c('ProfilePicUploadToCrop').loadCropper(n,l,'timeline');}).activate();}};f.exports=h;}),null);
__d('TimelineCoverPhotoChangePrivacyDialog',['Arbiter','Event'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l){this._dialog=j;this._tooltipLink=l;this._closeButton=k;this._showDialog=false;this._tooltip=null;},registerDialogShow:function i(){this._showDialog=true;c('Arbiter').subscribe('CoverPhotoEdit',function(j,k){if(!this._showDialog)return;if(k.state==="open"){this._dialog&&this._dialog.show();if(this._tooltipLink){this._tooltip=this._tooltipLink.getAttribute('data-hover');this._tooltipLink.setAttribute('data-hover',null);}}else if(k.state==="closed")this.hideDialog();}.bind(this));c('Event').listen(this._closeButton,'click',this.hideDialog.bind(this));},hideDialog:function i(){this._dialog&&this._dialog.hide();if(this._tooltipLink)this._tooltipLink.setAttribute('data-hover',this._tooltip);this._showDialog=false;}};f.exports=h;}),null);
__d('TimelineProfilePic',['Arbiter','CSS','Dialog','DOM','HTML','TimelineProfilePicConfig','Run','$','ge'],(function a(b,c,d,e,f,g){var h;i.init=function(j,k){'use strict';i.destroyInstance();h=new i(j||'fbProfileCover',k||'.profilePicThumb');};function i(j,k){'use strict';this.$TimelineProfilePic1=c('$')(j);this.$TimelineProfilePic2=k;this.$TimelineProfilePic3=[c('Arbiter').subscribe(c('TimelineProfilePicConfig').loading,this.startLoading.bind(this)),c('Arbiter').subscribe(c('TimelineProfilePicConfig').success,this.onUploadSuccess.bind(this))];c('Run').onBeforeUnload(this.onBeforeUnload.bind(this));c('Run').onLeave(this.destroy.bind(this));}i.prototype.$TimelineProfilePic4=function(j){'use strict';this.$TimelineProfilePic5=j;c('CSS').conditionClass(this.$TimelineProfilePic1,'profilePicLoading',j);};i.prototype.destroy=function(){'use strict';this.$TimelineProfilePic3.forEach(function(j){j.unsubscribe();});this.$TimelineProfilePic3=[];h=null;};i.prototype.startLoading=function(j,k){'use strict';this.$TimelineProfilePic4(!!k.isLoading);};i.prototype.onUploadSuccess=function(j,k){'use strict';this.$TimelineProfilePic4(false);if(!k.newPic)return;var l=c('Dialog').getCurrent();if(l)l.hide();var m=k.newPic;c('DOM').replace(c('DOM').find(this.$TimelineProfilePic1,this.$TimelineProfilePic2),typeof m==='string'?c('HTML')(m):m);if(typeof k.profileId!==undefined&&typeof k.headerPicURL!==undefined){var n=c('ge')('profile_pic_header_'+k.profileId);if(n)n.src=k.headerPicURL;}var o=c('ge')('fbProfilePicSelector');if(o)c('CSS').removeClass(o,'fbTimelineNullProfilePicSelector');};i.prototype.onBeforeUnload=function(){'use strict';if(h===this&&this.$TimelineProfilePic5)return c('TimelineProfilePicConfig').leavingMessage;};i.destroyInstance=function(){'use strict';h&&h.destroy();};f.exports=i;}),null);
__d('timeline-cover-dragdrop-edit',['SinglePictureUploadTarget','TimelineCover'],(function a(b,c,d,e,f,g){var h=function l(){var m=c('TimelineCover').getInstance();m.hideLoadingIndicator();},i=function l(m){var n=c('TimelineCover').getInstance(),o=m.id,p=m.photo_node;n.updateCoverImage(o,p);},j=function l(m){c('TimelineCover').getInstance().showLoadingIndicator();},k=function l(m,n){new (c('SinglePictureUploadTarget'))(m,n).setAllowCrossOrigin(true).setPreprocessCallback(j).setOncompleteCallback(h).setAfterSuccessCallback(i).activate();};g.initialize_timeline_cover_drop_target=k;}),null);
__d('InfoReviewInstanceManager',['csx','DOM','Event','ReactDOM'],(function a(b,c,d,e,f,g,h){var i="._5sf3",j=[],k=[],l={addInstanceRoot:function m(n,o){k.push(c('Event').listen(o,'click',function(p){var q=c('DOM').scry(o,i)[0];q&&c('DOM').remove(q);}));j.push(n);},cleanupInstances:function m(){var n=[];while(j.length){var o=j.pop();document.contains(o)?n.push(o):c('ReactDOM').unmountComponentAtNode(o);}while(k.length)k.pop().remove();j=n;}};f.exports=l;}),null);
__d('InfoReviewCloseButton',['DOM','Event','InfoReviewInstanceManager','Parent','$','tidyEvent'],(function a(b,c,d,e,f,g){var h='fbTimelineUnit';function i(j,k){'use strict';this.$InfoReviewCloseButton1=j;this.$InfoReviewCloseButton2=k;this.$InfoReviewCloseButton3=c('Event').listen(this.$InfoReviewCloseButton1,'click',this.$InfoReviewCloseButton4.bind(this));c('tidyEvent')(this.$InfoReviewCloseButton3);}i.prototype.$InfoReviewCloseButton4=function(){'use strict';var j=c('$')(this.$InfoReviewCloseButton2);if(j.parentElement.children.length===1)j=c('Parent').byClass(j,h);c('DOM').remove(j)&&this.$InfoReviewCloseButton5();c('InfoReviewInstanceManager').cleanupInstances();};i.prototype.$InfoReviewCloseButton5=function(){'use strict';this.$InfoReviewCloseButton1=null;this.$InfoReviewCloseButton2=null;this.$InfoReviewCloseButton3&&this.$InfoReviewCloseButton3.remove();this.$InfoReviewCloseButton3=null;};f.exports=i;}),null);