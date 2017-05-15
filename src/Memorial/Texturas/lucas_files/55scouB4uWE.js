if (self.CavalryLogger) { CavalryLogger.start_js(["hWKej"]); }

__d('PhotoResizeMath',[],(function a(b,c,d,e,f,g){var h={getScaledPhotoDimensions:function i(j,k,l,m,n){var o=j/k,p=l/m;if(l&&m&&n==='stretch')return {width:l,height:m};if(!l&&m||n==='contain'!==o>=p)return {width:m*o,height:m};if(l)return {width:l,height:l/o};return {width:j,height:k};}};f.exports=h;}),null);
__d('PixelzFocus',[],(function a(b,c,d,e,f,g){'use strict';var h={search:function i(j,k){var l=0,m=j.length-1;while(l<=m){var n=l+Math.floor((m-l)/2),o=j[n];if(o>k){m=n-1;}else if(o<k){l=n+1;}else return n;}return Math.min(l,m);},forceSpecificPoint:function i(j,k,l){var m=1e-9,n=h.search(j,k-l-m)+1,o=h.search(j,k+l);return j.slice(n,o+1);},findBiggestSets:function i(j,k){var l=[],m=-1;for(var n=0;n<j.length;++n){var o=j[n],p=n,q=h.search(j,o+k),r=q-p;if(r>m)l=[];if(r>=m){m=r;l.push({low:p,high:q});}}return l;},getBestSet:function i(j,k,l){var m=-1,n=null;for(var o=0;o<k.length;++o){var p=k[o],q=j[p.low],r=j[p.high],s=q+(r-q)/2,t=Math.min(q-(s-l),s+l-r);if(t>m){m=t;n=p;}}return n;},getFocusFromSet:function i(j,k){var l=j[k.low],m=j[k.high];return l+(m-l)/2;},clampFocus:function i(j,k){var l=k/2,m=1-k/2;if(j<l)return l;if(j>m)return m;return j;},convertFromCenterToCSS:function i(j,k){if(Math.abs(1-k)<1e-5)return 0;return (j-k/2)/(1-k);},convertFromCSSToCenter:function i(j,k){return j*(1-k)+k/2;},getVisible:function i(j,k){if(j<k)return j/k;return k/j;},getHidden:function i(j,k){return 1-h.getVisible(j,k);},focusHorizontally:function i(j,k){return j<k;},convertVectorFromCenterToCSS:function i(j,k,l){var m=h.focusHorizontally(k,l),n=void 0;if(m){n=j.x/100;}else n=j.x/100;var o=h.convertFromCenterToCSS(n,h.getVisible(k,l));if(m){return {x:o,y:0};}else return {x:0,y:o};},getCropRect:function i(j,k,l){var m=h.focusHorizontally(k,l),n=h.getVisible(k,l);if(m){var o=(1-n)*j.x;return {left:o,top:0,width:n,height:1};}else{var p=(1-n)*j.y;return {left:0,top:p,width:1,height:n};}}};f.exports=h;}),null);
__d('loadImage',['Promise'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=new Image();k.onload=function(){j(k.width,k.height,k);};k.src=i;}h.loadImagePromise=function(i){return new (c('Promise'))(function(j,k){var l=new Image();l.onerror=k;l.onload=function(){return j(l);};l.src=i;});};f.exports=h;}),null);
__d('Pixelz.react',['cx','arrayContains','loadImage','joinClasses','React','PhotoResizeMath','PixelzFocus'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'Pixelz',propTypes:{width:i.number,height:i.number,resizeMode:i.oneOf(['contain','cover','stretch']),alt:i.string,letterbox:i.bool,borderRadius:i.number,insetBorderColor:i.string,animated:i.bool,upscale:i.bool,cropRect:function k(l,m,n){var o=l[m],p='Invalid prop `'+m+'` supplied to `'+n+'`, expected a rectangle with values normalized '+'between 0 and 1.';if(o.left<0||o.top<0||o.width<0||o.height<0||o.left+o.width>1||o.top+o.height>1)return new Error(p);},focus:function k(l,m,n){var o=l[m],p='Invalid prop `'+m+'` supplied to `'+n+'`, expected either a {x, y, type} vector where type '+'is `css` or `center` or an array of {x, y} vectors. All the vectors '+'have with values normalized between 0 and 1.';if(Array.isArray(o)){for(var q=0;q<o.length;++q)if(!(o[q].x>=0&&o[q].x<=1)||!(o[q].y>=0&&o[q].y<=1))return new Error(p);}else{if(!o.type)o.type='css';if(!(o.x>=0&&o.x<=1)||!(o.y>=0&&o.y<=1)||!c('arrayContains')(['center','css'],o.type))return new Error(p);}}},getDefaultProps:function k(){return {resizeMode:'cover',alt:'',letterbox:true,upscale:true,cropRect:{width:1,height:1,top:0,left:0},focus:{x:.5,y:.5,type:'css'}};},getInitialState:function k(){return {srcDimensions:{}};},getSrcDimensions:function k(){var l=this.props.src,m=this.state.srcDimensions[l];if(m)return m;c('loadImage')(l,function(n,o){var p={};p[l]={width:n,height:o};this.isMounted()&&this.setState({srcDimensions:p});}.bind(this));return null;},getCropSrcDimensions:function k(){var l=this.getSrcDimensions();return {width:l.width*this.props.cropRect.width,height:l.height*this.props.cropRect.height};},getUpscaleCropDimensions:function k(){var l=this.getCropSrcDimensions();return c('PhotoResizeMath').getScaledPhotoDimensions(l.width,l.height,this.props.width,this.props.height,this.props.resizeMode);},getCropDimensions:function k(){var l=this.getUpscaleCropDimensions(),m=this.getCropSrcDimensions();if(!this.props.upscale)return {width:Math.min(l.width,m.width),height:Math.min(l.height,m.height)};return l;},getCropAspectRatio:function k(){var l=this.getCropDimensions();return l.width/l.height;},getContainerDimensions:function k(){if(this.props.letterbox&&this.props.width&&this.props.height)return {width:this.props.width,height:this.props.height};return this.getCropDimensions();},getContainerAspectRatio:function k(){var l=this.getContainerDimensions();return l.width/l.height;},getContainerPosition:function k(){return {left:0,top:0};},getFocus:function k(){var l=this.props.focus;if(!Array.isArray(l)&&l.type==='css')return {x:l.x,y:l.y};var m=this.getContainerAspectRatio(),n=this.getCropAspectRatio(),o=c('PixelzFocus').getVisible(m,n),p=c('PixelzFocus').focusHorizontally(m,n),q=void 0;if(!Array.isArray(l)){q=c('PixelzFocus').convertFromCenterToCSS(p?l.x:l.y,o);}else{var r=l.map(function(u){return p?u.x:u.y;});r.sort();var s=c('PixelzFocus').findBiggestSets(r,o),t=c('PixelzFocus').getBestSet(r,s,o);q=c('PixelzFocus').getFocusFromSet(r,t);}return {x:p?q:.5,y:p?.5:q};},getCropPosition:function k(){var l=this.getCropDimensions(),m=this.getContainerDimensions(),n=this.getFocus();return {left:n.x*(m.width-l.width),top:n.y*(m.height-l.height)};},getScaleDimensions:function k(){var l=this.getCropDimensions();return {width:l.width/this.props.cropRect.width,height:l.height/this.props.cropRect.height};},getScalePosition:function k(){var l=this.getScaleDimensions();return {left:-l.width*this.props.cropRect.left,top:-l.height*this.props.cropRect.top};},getClipCropRectangle:function k(){var l=this.getContainerDimensions(),m=this.getCropDimensions(),n=this.getContainerPosition(),o=this.getCropPosition(),p=Math.max(n.left,o.left),q=Math.max(n.top,o.top),r=Math.min(n.top+l.height,o.top+m.height),s=Math.min(n.left+l.width,o.left+m.width);return {left:p,top:q,width:s-p,height:r-q};},getClipCropPosition:function k(){var l=this.getClipCropRectangle();return {left:l.left,top:l.top};},getClipCropDimensions:function k(){var l=this.getClipCropRectangle();return {width:l.width,height:l.height};},getClipScalePosition:function k(){var l=this.getScalePosition(),m=this.getClipCropPosition(),n=this.getCropPosition();return {left:l.left+(n.left-m.left),top:l.top+(n.top-m.top)};},getClipScaleDimensions:function k(){return this.getScaleDimensions();},areDimensionsEqual:function k(l,m){return l.width===m.width&&l.height===m.height;},shouldAddAllNodesAndStyles:function k(){return this.props.animated;},hasCrop:function k(){if(this.shouldAddAllNodesAndStyles())return true;var l=this.getContainerDimensions(),m=this.getClipCropDimensions(),n=this.getClipScaleDimensions();if(this.areDimensionsEqual(l,m)||this.areDimensionsEqual(m,n))return false;return true;},hasContainer:function k(){if(this.shouldAddAllNodesAndStyles()||this.hasInsetBorder())return true;var l=this.getContainerDimensions(),m=this.getClipScaleDimensions();if(this.areDimensionsEqual(l,m))return false;return true;},hasInsetBorder:function k(){return this.shouldAddAllNodesAndStyles()||this.props.insetBorderColor;},applyPositionStyle:function k(l,m){if(this.shouldAddAllNodesAndStyles()||m.left)l.left=Math.round(m.left);if(this.shouldAddAllNodesAndStyles()||m.top)l.top=Math.round(m.top);},applyDimensionsStyle:function k(l,m){l.width=Math.round(m.width);l.height=Math.round(m.height);},applyBorderRadiusStyle:function k(l){if(this.shouldAddAllNodesAndStyles()||this.props.borderRadius)l.borderRadius=this.props.borderRadius||0;},getScaleStyle:function k(){var l={},m=this.getClipCropDimensions(),n=this.getClipScaleDimensions();if(this.shouldAddAllNodesAndStyles()||!this.areDimensionsEqual(m,n)){this.applyPositionStyle(l,this.getClipScalePosition());}else this.applyPositionStyle(l,this.getClipCropPosition());this.applyDimensionsStyle(l,this.getClipScaleDimensions());this.applyBorderRadiusStyle(l);return l;},getCropStyle:function k(){var l={};this.applyPositionStyle(l,this.getClipCropPosition());this.applyDimensionsStyle(l,this.getClipCropDimensions());this.applyBorderRadiusStyle(l);return l;},getInsetBorderStyle:function k(){var l={borderColor:this.props.insetBorderColor||'transparent'};this.applyPositionStyle(l,this.getClipCropPosition());this.applyDimensionsStyle(l,this.getClipCropDimensions());this.applyBorderRadiusStyle(l);return l;},getContainerStyle:function k(){var l={};this.applyDimensionsStyle(l,this.getContainerDimensions());this.applyBorderRadiusStyle(l);return l;},getScale:function k(){var l=this.getScaleStyle(),m=l.width,n=l.height;l=babelHelpers['extends']({},l);delete l.width;delete l.height;return c('React').createElement('img',babelHelpers['extends']({},this.props,{alt:this.props.alt,className:c('joinClasses')(this.props.className,"_56wb"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":'')),src:this.props.src,style:babelHelpers['extends']({},this.props.style||{},l),width:m,height:n}));},getCrop:function k(){var l=this.getScale();if(!this.hasCrop())return l;return c('React').createElement('div',{className:"_56ma"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),style:this.getCropStyle()},l);},getInsetBorder:function k(){if(!this.hasInsetBorder())return null;return c('React').createElement('div',{className:"_56lv"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),style:this.getInsetBorderStyle()});},getContainer:function k(){var l=this.getCrop();if(!this.hasContainer())return l;var m=this.getInsetBorder();return c('React').createElement('div',{className:"_56jj"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),'data-skipchecker':null,style:this.getContainerStyle()},l,m);},render:function k(){var l=this.getSrcDimensions();if(!l)return c('React').createElement('span',{'data-skipchecker':null});return this.getContainer();}});f.exports=j;}),null);
__d('MessengerHotLikeSVG.react',['cssVar','cx','fbt','MessengerEnvironment','React','WorkGKs','joinClasses','uniqueID'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('React').PropTypes,n='transparent',o=j._("\u00cdcone de Curtir");k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.state={titleId:c('uniqueID')()},r;}p.prototype.render=function(){var q=c('WorkGKs').workplace_www_chat_branding?"#1479fb":"#0084ff",r=this.props.color||(c('MessengerEnvironment').messengerui?q:"#4080ff");return c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_1i1j")},c('React').createElement('svg',{'aria-labelledby':this.state.titleId,height:'100%',role:'img',version:'1.1',viewBox:'0 0 381 400',width:'100%',x:'0px',y:'0px'},c('React').createElement('title',{id:this.state.titleId},o),c('React').createElement('g',null,c('React').createElement('g',null,c('React').createElement('path',{d:'M0,399.8h86.4V160.8H0V399.8z M381,220.7c0-13.6-7.4-25.5-18.5-31.8c8.8-6.6,14.5-17.4,14.5-29.3 c0-20.1-16.4-36.8-36.5-36.8H217c20.4-106.5-31.3-128.2-51.7-123c-12.3,3.1-13.6-0.3-11.4,24.2l3.4,42.7c0.3,3.5,0,7.2-0.8,10.8 c-0.8,3.6-2.7,6.9-4.6,10L106.8,160v208.7h195.3v-1.2c19.2-1.1,34.5-17.4,34.5-36.9c0-6.1-1.5-12-4.1-17 c17.3-2.8,30.4-18,30.4-36.1c0-8.2-2.7-15.9-7.4-22C370.1,250.8,381,237,381,220.7z',fill:r,stroke:n,strokeLinecap:'round',strokeWidth:'5%'})))));};p.propTypes={color:m.string};f.exports=p;}),null);
__d('PhotoUtils',['Event','URI'],(function a(b,c,d,e,f,g){var h={getImagesFromData:function i(j){var k=[];for(var l in j)if(l.indexOf('image')===0)k.push(j[l]);return k;},getFBIDFromData:function i(j){return j&&j.id;},getOriginalImageFromData:function i(j){return j.original||j.download_image;},getDownloadURLFromData:function i(j){var k=this.getOriginalImageFromData(j);if(!k)return null;var l=new (c('URI'))(k.uri);l.addQueryData({dl:1});return l;},getPermalinkFromData:function i(j){return j.permalink;},canViewerMakeCoverPhoto:function i(j){return !!j.can_viewer_make_cover_photo;},getCoverPhotoURLFromData:function i(j){return new (c('URI'))('/profile.php').addQueryData({preview_cover:h.getFBIDFromData(j)});},preload:function i(j,k,l){var m=j.getDimensions();for(var n=0;n<k.length;++n){var o=m.getBestFitImageFromPhoto(k[n],m.getMaxStageDimensions()),p=new Image();l&&c('Event').listen(p,'load',l.bind(null,k[n]));j.getLogger().log(o.uri);p.src=o.uri;}}};f.exports=h;}),null);
__d('SpotlightViewer',['cx','React','Spotlight.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';if(!this.props.open)return null;var l="_n3";if(this.props.className)l+=' '+this.props.className;return c('React').createElement(c('Spotlight.react'),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:'photoLayer'},c('React').createElement('div',{className:l,onClick:this.props.onClick,role:'presentation'},this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('SpotlightViewerImage',['cx','Image.react','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);this.$SpotlightViewerImage3=function(){this.setState({loading:false});}.bind(this);this.state={loading:true};}k.prototype.componentWillReceiveProps=function(l){'use strict';if(l.src!==this.props.src)this.setState({loading:true});};k.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_4-od"},this.$SpotlightViewerImage1(),this.$SpotlightViewerImage2());};k.prototype.$SpotlightViewerImage1=function(){'use strict';if(!this.state.loading)return null;return c('React').createElement(c('XUISpinner.react'),{className:"_enh",size:'large'});};k.prototype.$SpotlightViewerImage2=function(){'use strict';return c('React').createElement('div',{className:this.state.loading?"_eni":''},c('React').createElement(c('Image.react'),{onLoad:this.$SpotlightViewerImage3,src:this.props.src,style:{width:this.props.dimensions.x,height:this.props.dimensions.y}}));};f.exports=k;}),null);
__d('SpotlightViewport',['csx','cx','Locale','Parent','React','ReactDOM','Vector','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes,k=c('React').createClass({displayName:'SpotlightViewport',propTypes:{stageDimensions:j.object.isRequired,useWidth:j.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function l(){return {currentActiveSection:this.sections.NONE,active:true};},componentDidMount:function l(){this._onMouseEnter();},componentWillUnmount:function l(){if(this.props.fadeInNOut)clearTimeout(this.timer);},_onMouseMove:function l(event){var m=c('ReactDOM').findDOMNode(this),n=c('Vector').getEventPosition(event.nativeEvent),o=c('Vector').getElementPosition(m),p=this.props.useWidth?this.props.stageDimensions.x:c('Vector').getElementDimensions(m).x;if(this.props.fadeInNOut)if(this._isMouseOverActionBars(n)){clearTimeout(this.timer);}else this._onMouseEnter();var q,r=n.x-o.x,s=r/p;if(c('Locale').isRTL()){q=s>1-this.PAGE_TO_PREV_PERCENTAGE;}else q=s<this.PAGE_TO_PREV_PERCENTAGE;if(q){this.setState({currentActiveSection:this.sections.BACKWARD});}else this.setState({currentActiveSection:this.sections.FORWARD});},_onClick:function l(event){var m=this.state.currentActiveSection==this.sections.FORWARD,n=event.target;if(!c('Parent').bySelector(n,"._51an"))this.props.onClick&&this.props.onClick(m,event);},_isMouseOverActionBars:function l(m){return m.y<70||m.y>this.props.stageDimensions.y-70;},_onMouseEnter:function l(){this.setState({active:true});if(this.props.fadeInNOut){clearTimeout(this.timer);this.timer=setTimeout(this._onMouseLeave,1000);}},_onMouseLeave:function l(){this.setState({active:false});},makeActive:function l(){this._onMouseEnter();},render:function l(){var m="_4-of"+(!this.state.active&&!this.props.active?' '+"_50-l":'')+(this.state.currentActiveSection===this.sections.BACKWARD?' '+"_516a":'')+(this.state.currentActiveSection===this.sections.FORWARD?' '+"_516b":'')+(this.props.showLoadingIndicator?' '+"_51jp":'');if(this.props.className)m=c('joinClasses')(m,this.props.className);var n={};if(this.props.stageDimensions){n={height:this.props.stageDimensions.y};if(this.props.useWidth)n.width=this.props.stageDimensions.x;}return c('React').createElement('div',{className:m,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:'presentation',style:n},this.props.children,c('React').createElement('div',{className:"_4-og"},c('React').createElement('span',{className:"_4-oh"}),this.props.media,c('React').createElement('div',{className:"_4-oi"})));}});f.exports=k;}),null);
__d('Sticker.react',['cx','fbt','Arbiter','Image.react','MessengerHotLikeSVG.react','React','ReactDOM','PaddedStickerConfig','StickerConstants','emptyFunction','getElementPosition','getObjectValues','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('React').PropTypes,k=83,l=5000,m=10,n={CLICK:'click',HOVER:'hover',LOAD_AND_HOVER:'load_and_hover'},o=c('React').createClass({displayName:'Sticker',propTypes:{accessibilityLabel:j.string,animationTrigger:j.oneOf(c('getObjectValues')(n)),forceCursorPointer:j.bool,frameCount:j.number.isRequired,frameRate:j.number,framesPerCol:j.number.isRequired,framesPerRow:j.number.isRequired,onAttachmentLoad:j.func,onStickerClick:j.func,packID:j.string,packName:j.string,sourceURI:j.string.isRequired,sourceWidth:j.number.isRequired,sourceHeight:j.number.isRequired,spriteURI:j.string,stickerID:j.string,subscribedThreadID:j.string,testID:j.string},getInitialState:function p(){return {index:0,hasAnimated:false,unsubscribeID:null};},getDefaultProps:function p(){return {accessibilityLabel:'',forceCursorPointer:false,frameRate:k,onStickerClick:c('emptyFunction'),packID:null,packName:''};},componentDidMount:function p(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad();this._stopIntervalID=0;if(this.props.animationTrigger===n.LOAD_AND_HOVER&&this.props.frameCount>1&&this.props.spriteURI)this.startAnimation();if(this.props.subscribedThreadID&&this.props.frameCount>1){var q=c('Arbiter').subscribe(this.props.subscribedThreadID,function(r,s){this.isScrolledIntoView(s.scrollTop,s.viewHeight,s.top);}.bind(this));this.setState({unsubscribeID:q});}},componentWillUnmount:function p(){if(this.state.unsubscribeID)c('Arbiter').unsubscribe(this.state.unsubscribeID);if(this.isAnimating())clearInterval(this._stopIntervalID);},isAnimating:function p(){return !!this._stopIntervalID;},getWidth:function p(){return Math.floor(this.props.sourceWidth);},getHeight:function p(){return Math.floor(this.props.sourceHeight);},preloadSprite:function p(){var q=new window.Image();q.onload=function(){if(this.isMounted()&&!this.state.hasAnimated){this.setState({hasAnimated:true});this._stopIntervalID=setInterval(this.incrementFrameIndex,this.props.frameRate);}}.bind(this);if(c('PaddedStickerConfig').ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI){q.src=this.props.paddedSpriteURI;}else q.src=this.props.spriteURI;},isScrolledIntoView:function p(q,r,s){var t=c('getElementPosition')(c('ReactDOM').findDOMNode(this)),u=q+t.y-s,v=q+r,w=u+t.height;if(this.props.frameCount>1&&!this.state.hasAnimated&&w-m<=v&&u+m>=q)this.startAnimation();},startAnimation:function p(){if(!this.state.hasAnimated&&this.props.spriteURI){this.preloadSprite();}else if(!this.isAnimating()){this.setState({hasAnimated:true});this._stopIntervalID=setInterval(this.incrementFrameIndex,this.props.frameRate);}},stopAnimation:function p(){this.setState({index:0});clearInterval(this._stopIntervalID);this._stopIntervalID=0;},toggleAnimation:function p(){if(this.isAnimating()){this.stopAnimation();}else this.startAnimation();},shouldStopAnimating:function p(){var q=this.state.index%this.props.frameCount;if(!(q===0&&this.state.index*this.props.frameRate>l))return false;if(this.props.animationTrigger===n.CLICK)return true;return !this.state.isHovered;},incrementFrameIndex:function p(){if(this.shouldStopAnimating()){this.stopAnimation();}else this.setState({index:this.state.index+1});},getStyle:function p(){var q=0,r=this.props.spriteURI;if(c('PaddedStickerConfig').ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI){r=this.props.paddedSpriteURI;var s=240/Math.min(this.getHeight(),this.getWidth());q=Math.floor(c('StickerConstants').SPRITE_PADDING/s);}var t=this.state.index%this.props.frameCount,u=t%this.props.framesPerRow*(this.getWidth()+q*2)+q,v=Math.floor(t/this.props.framesPerRow)*(this.getHeight()+q*2)+q,w=this.props.frameCount>1&&this.props.animationTrigger===n.CLICK||this._isStickerClickable(this.props.packID),x=this.props.forceCursorPointer||w?'pointer':'default';if(!this.state.hasAnimated||!this.props.spriteURI){return {backgroundImage:this._isHotLike()?null:'url('+this.props.sourceURI+')',backgroundRepeat:'no-repeat',backgroundSize:this.getWidth()+'px '+this.getHeight()+'px',cursor:x,height:this.getHeight(),width:this.getWidth()};}else return {backgroundImage:'url('+r+')',backgroundPosition:-u+'px '+ -v+'px',backgroundSize:(this.getWidth()+q*2)*this.props.framesPerRow+'px '+(this.getHeight()+q*2)*this.props.framesPerCol+'px',cursor:x,height:this.getHeight(),width:this.getWidth(),imageRendering:'-webkit-optimize-contrast'};},_isStickerClickable:function p(q){return q&&q!=c('StickerConstants').MOBILE_LIKE_STICKER_PACK_ID&&q!=c('StickerConstants').GRAVEYARD_PACK_ID;},onStickerClick:function p(){if(!this._isStickerClickable(this.props.packID))return;if(this.props.onStickerClick)this.props.onStickerClick(this.props.packID,this.props.stickerID);},mouseLeft:function p(){this.setState({isHovered:false});},mouseEntered:function p(){this.setState({isHovered:true});if(!this.isAnimating())this.startAnimation();},tabFocusSelected:function p(){this.setState({isHovered:true});if(!this.isAnimating())this.startAnimation();},tabFocusUnselected:function p(){this.setState({isHovered:false});},getAriaLabel:function p(){return i._("{pack name} {sticker name}",[i.param('pack name',this.props.packName),i.param('sticker name',this.props.accessibilityLabel)]);},render:function p(){var q=void 0,r=void 0;if(this.props.animationTrigger===n.CLICK&&this.props.frameCount>1&&this.props.spriteURI){q=true;}else if((this.props.animationTrigger===n.HOVER||this.props.animationTrigger===n.LOAD_AND_HOVER)&&this.props.frameCount>1&&this.props.spriteURI)r=true;var s=q?this.toggleAnimation:null;if(this.props.packID)s=this.onStickerClick;var t=this.props.className,u=null;if(this._isHotLike()){t=c('joinClasses')(t,"_576q");u=c('React').createElement(c('MessengerHotLikeSVG.react'),{color:this.props.customColor});}return c('React').createElement('div',{'aria-label':this.getAriaLabel(),className:t,'data-testid':this.props.testID,onBlur:this.tabFocusUnselected,onClick:s,onFocus:this.tabFocusSelected,onMouseEnter:r?this.mouseEntered:null,onMouseLeave:r?this.mouseLeft:null,role:'img',style:this.getStyle(),tabIndex:'0'},u);},_isHotLike:function p(){if(!!document.createElementNS&&!!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect)return this.props.stickerID===c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID||this.props.stickerID===c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID||this.props.stickerID===c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID;return false;}});f.exports=o;}),null);
__d("StickerUtils",[],(function a(b,c,d,e,f,g){var h={getScaledDimensions:function i(j,k,l){var m,n,o;if(k>j){o=l/k;m=j*o;n=k*o;}else{o=l/j;m=j*o;n=k*o;}return {height:Math.round(m),width:Math.round(n)};},capitalizeWords:function i(j){var k=j.split(" ");for(var l=0;l<k.length;l++){var m=k[l].charAt(0).toUpperCase();k[l]=m+k[l].substr(1);}return k.join(" ");}};f.exports=h;}),null);
__d('StickersStoreController',['cx','Bootloader','DialogFitHeight','DOM','LayerAutoFocus','LayerFadeOnHide','LayerHideOnEscape','PureStoreBasedStateMixin','React','ReactDOM','StickersActions','StickersDispatcher','StickersStateStore','XUIDialog.react','XUIDialogBody.react','XUISpinner.react','isSocialPlugin','requestAnimationFrame'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=688,k=320,l=null,m=c('React').createClass({displayName:'StoreLayer',mixins:[c('PureStoreBasedStateMixin')(c('StickersStateStore'))],propTypes:{isComposer:i.bool,onToggle:i.func.isRequired,shown:i.bool.isRequired},getDefaultProps:function r(){return {isComposer:false};},statics:{calculateState:function r(){return {packID:c('StickersStateStore').getState().get('storePackID')};}},getInitialState:function r(){return {renderStore:function s(){return c('React').createElement('div',{className:"_5r5e"},c('React').createElement(c('XUISpinner.react'),{background:'light',size:'large'}));}};},componentWillMount:function r(){c('StickersDispatcher').explicitlyRegisterStores([c('StickersStateStore')]);},shouldComponentUpdate:function r(s){return !!s.shown;},componentDidMount:function r(){c('Bootloader').loadModules(["StickersStore.react","RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(s,t,u,v){this.setState({renderStore:function(){var w=this.state.packID?new v({packID:this.state.packID}):new u();return c('React').createElement(t,{Component:s,route:w,renderFetched:function(x){return c('React').createElement(s,babelHelpers['extends']({},x,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}));}.bind(this)});}.bind(this)});}.bind(this),'StickersStoreController');},_onToggle:function r(s){c('requestAnimationFrame')(function(){return this.props.onToggle(s);}.bind(this));},render:function r(){var s=c('isSocialPlugin')()&&document.body.offsetWidth<j?k:j;return c('React').createElement(c('XUIDialog.react'),{behaviors:{DialogFitHeight:c('DialogFitHeight'),LayerAutoFocus:c('LayerAutoFocus'),LayerFadeOnHide:c('LayerFadeOnHide'),LayerHideOnEscape:c('LayerHideOnEscape')},onToggle:this._onToggle,shown:this.props.shown,width:s},c('React').createElement(c('XUIDialogBody.react'),{className:"_5rq- autofocus"},this.state.renderStore()));}}),n=function r(s){if(!l){l=c('DOM').create('div');c('DOM').appendContent(document.body,l);}c('ReactDOM').render(c('React').createElement(m,{isComposer:s,onToggle:p,shown:true}),l);},o=function r(){if(!l)return;c('ReactDOM').render(c('React').createElement(m,{shown:false,onToggle:p}),l);},p=function r(s){s?n():o();},q={showStore:function r(s,t){c('StickersActions').selectStorePack(s);n(!!t);}};f.exports=q;}),null);