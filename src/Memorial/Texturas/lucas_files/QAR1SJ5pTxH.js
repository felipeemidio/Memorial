if (self.CavalryLogger) { CavalryLogger.start_js(["q64PA"]); }

__d('EncryptedImg',['URI','XHRRequest','EncryptedImgUtils','getCrossOriginTransport'],(function a(b,c,d,e,f,g){var h={insertIntoStyleBackgroundImage:function m(n,o){var p=function(q,r){if(q){q.style.backgroundImage="url('"+r+"')";}}.bind(undefined,o);h.load(n,p);},insertIntoDOM:function m(n,o){var p=function(q,r){if(q){q.setAttribute('src',r);}}.bind(undefined,o);h.load(n,p);},load:function m(n,o){var p=arguments.length<=2||arguments[2]===undefined?true:arguments[2],q=new (c('URI'))(n),r=c('EncryptedImgUtils').extractKey(q),s=i.bind(undefined,r,o,p);s.includeHeaders=true;new (c('XHRRequest'))(q.toString()).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseType('arraybuffer').setResponseHandler(s).send();},dataUrlPrefix:function m(n){var o=arguments.length<=1||arguments[1]===undefined?32:arguments[1];if(!n.startsWith('data:'))return n;var p=n.indexOf(',');if(p<0||p>o)p=o;return n.slice(0,p);}};Object.assign(h,c('EncryptedImgUtils'));f.exports=h;function i(m,n,o,p,q){if(!m){n(l(p,k(q)));return;}var r=j(m),s=new Uint8Array(p),t=s.subarray(2,14);s=s.subarray(14,s.length);var u={name:'AES-GCM',iv:t,tagLength:128};window.crypto.subtle.importKey('raw',r,u,false,['encrypt','decrypt']).then(function(v){return window.crypto.subtle.decrypt(u,v,s);}).then(function(v){if(o){n(l(v,k(q)));}else n(v);})['catch'](function(){});}function j(m){if(typeof m=='string'){var n=new Uint8Array(Math.floor(m.length/2)),o=0;m.replace(/(..)/g,function(p){n[o++]=parseInt(p,16);});return n;}return null;}function k(m){var n='image/jpeg',o=m.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);if(o&&o.length>1)n=o[1];return n;}function l(m,n){var o=new Uint8Array(m),p='';for(var q=0,r=o.byteLength;q<r;++q)p+=String.fromCharCode(o[q]);return 'data:'+n+';base64,'+window.btoa(p);}}),null);
__d('getDOMImageSize',['EncryptedImg','URI'],(function a(b,c,d,e,f,g){function h(m){m.onload=null;m.onerror=null;m.onreadystatechange=null;m._callback=null;m._thisObj=null;m._srcStr=null;m.parentNode&&m.parentNode.removeChild(m);}function i(){var m=this;if(m._callback)m._callback.call(m._thisObj,m.naturalWidth||m.width,m.naturalHeight||m.height,m._srcStr);h(m);}function j(){var m=this;if(m.readyState==='complete')i.call(m);}function k(){var m=this;if(m._callback)m._callback.call(m._thisObj,0,0,m._srcStr);h(m);}function l(m,n,o){o=o||null;if(!m){n.call(o,0,0,'');return;}var p=document.body;if(!p){setTimeout(l.bind(this,m,n,o),500);return;}var q;if(typeof m==='string'){q=m;}else if(typeof m==='object')if(typeof m.width==='number'&&typeof m.height==='number'){if(typeof m.src==='string'){q=m.src;if(m.naturalWidth&&m.naturalHeight){n.call(o,m.naturalWidth,m.naturalHeight,q);return;}}if(typeof m.uri==='string'){q=m.uri;if(m.width&&m.height){n.call(o,m.width,m.height,q);return;}}}else if(m instanceof c('URI'))q=m.toString();if(!q){n(0,0,m);return;}var r=document.createElement('img');r.onreadystatechange=j;r.onload=i;r.onerror=k;r._callback=n;r._thisObj=o;r._srcStr=q;if(c('EncryptedImg').isEncrypted(q)){c('EncryptedImg').insertIntoDOM(q,r);}else r.src=q;r.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(/\s+/,' ');p.insertBefore(r,p.firstChild);}f.exports=l;}),null);
__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this.$CachedDOMImageSizePool1={};this.$CachedDOMImageSizePool2=j;this.$CachedDOMImageSizePool3=0;this.$CachedDOMImageSizePool4=i;this.$CachedDOMImageSizePool5=c('debounce')(this.$CachedDOMImageSizePool6,5000,this);this.$CachedDOMImageSizePool7={};this.$CachedDOMImageSizePool8={};}h.prototype.get=function(i,j,k){'use strict';if(!i){j.call(k,0,0,i);return;}var l=this.$CachedDOMImageSizePool1[i];if(l){l.lastAccessTime=Date.now();j.call(k,l.width,l.height,l.src);}else if(this.$CachedDOMImageSizePool7[i]){this.$CachedDOMImageSizePool7[i].push(j);this.$CachedDOMImageSizePool8[i].push(k);}else{this.$CachedDOMImageSizePool7[i]=[j];this.$CachedDOMImageSizePool8[i]=[k];c('getDOMImageSize')(i,this.$CachedDOMImageSizePool9,this);}};h.prototype.set=function(i,j,k){'use strict';if(this.$CachedDOMImageSizePool3>this.$CachedDOMImageSizePool4)this.$CachedDOMImageSizePool5();var l=this.$CachedDOMImageSizePool1;if(i&&!l[i]){var m={width:j,height:k,src:i,lastAccessTime:Date.now()};l[i]=m;this.$CachedDOMImageSizePool3++;}};h.prototype.$CachedDOMImageSizePool9=function(i,j,k){'use strict';this.set(k,i,j);var l=this.$CachedDOMImageSizePool7[k],m=this.$CachedDOMImageSizePool8[k];for(var n=0,o=l.length;n<o;n++)l[n].call(m[n],i,j,k);delete this.$CachedDOMImageSizePool7[k];delete this.$CachedDOMImageSizePool8[k];};h.prototype.$CachedDOMImageSizePool6=function(){'use strict';var i=Date.now(),j=this.$CachedDOMImageSizePool1,k=this.$CachedDOMImageSizePool3,l=this.$CachedDOMImageSizePool2;for(var m in j){var n=j[m];if(i-n.lastAccessTime>l){delete j[m];k--;}}this.$CachedDOMImageSizePool3=k;};f.exports=h;}),null);
__d('BackgroundImage.react',['cx','invariant','CachedDOMImageSizePool','Image.react','React','XUISpinner.react','joinClasses','clamp'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes,k='(-?(\\d+\\.)?\\d+(px|\\%))',l=new RegExp('^'+k+'?(\\s'+k+')?$','g'),m=new (c('CachedDOMImageSizePool'))(50,10*60*1000),n=c('React').createClass({displayName:'BackgroundImage',propTypes:{src:j.string,width:j.number.isRequired,height:j.number.isRequired,backgroundSize:j.oneOf(['contain','cover','containinside','coverinside']),loadingIndicatorStyle:j.oneOf(['none','large','small']),backgroundPosition:function o(p,q,r){var s=p[q];if(s){typeof s==='string'||i(0);s.match(l)||i(0);}p.backgroundFocus==null||p.backgroundPosition==null||i(0);},backgroundFocus:function o(p,q,r){var s=p[q];if(s){typeof s==='string'||i(0);s.match(l)||i(0);}p.backgroundFocus==null||p.backgroundPosition==null||i(0);},onImageLoad:j.func,optimizeResizeSpeed:j.bool,onContextMenu:j.func},getInitialState:function o(){return {imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:true};},getDefaultProps:function o(){return {optimizeResizeSpeed:false,loadingIndicatorStyle:'none'};},componentDidMount:function o(){this._resolveImageSize();},componentDidUpdate:function o(p){if(this.props.src!==this.state.imageSrc)this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:true},this._resolveImageSize);},_resolveImageSize:function o(){var p=this.state.imageSrc;if(p)m.get(p,this._onImageSizeResolved,this);},render:function o(){var p={width:this.props.width+'px',height:this.props.height+'px'},q=c('joinClasses')(this.props.className,"_5f0d");return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,q),style:babelHelpers['extends']({},this.props.style||{},p),onContextMenu:this.props.onContextMenu}),this._renderImage(),this._renderContent(),this._renderLoadingIndicator());},_renderLoadingIndicator:function o(){if(!this.state.loading||this.props.loadingIndicatorStyle==='none')return null;return c('React').createElement('div',{className:"_1qe- _5lar"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},c('React').createElement(c('XUISpinner.react'),{size:this.props.loadingIndicatorStyle}))));},_renderContent:function o(){if(this.props.children)return c('React').createElement('div',{className:"_1qe-"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},this.props.children)));},_renderImage:function o(){if(!this.state.imageWidth||!this.state.imageHeight)return;var p=this.props.width,q=this.props.height,r,s;switch(this.props.backgroundSize){case 'cover':r='cover';s=false;break;case 'coverinside':r='cover';s=true;break;case 'contain':r='contain';s=false;break;case 'containinside':r='contain';s=true;}var t=this.state.imageWidth,u=this.state.imageHeight,v=p/q,w=t/u;if(r==='contain')if((t>p||!s)&&w>=v){t=p;u=t/w;}else if(u>q||!s){u=q;t=u*w;}if(r==='cover')if((t>p||!s)&&w>=v){u=q;t=u*w;}else if(u>q||!s){t=p;u=t/w;}var x=this._getImageStyle(t,u);return c('React').createElement(c('Image.react'),{alt:'',className:"_5i4g"+(this.props.optimizeResizeSpeed?' '+"_5sjv":''),style:x,src:this.state.imageSrc});},_getImageStyle:function o(p,q){var r=['50%','50%'],s=this._getBackgroundPositionPxValue;if(this.props.backgroundPosition){r=this.props.backgroundPosition.split(' ');}else if(this.props.backgroundFocus){r=this.props.backgroundFocus.split(' ');s=this._getBackgroundFocusPxValue;}return {width:Math.round(p)+'px',height:Math.round(q)+'px',left:s(r[0],p,this.props.width),top:s(r[1]||r[0],q,this.props.height)};},_getBackgroundPositionPxValue:function o(p,q,r){var s=parseFloat(p),t=p.substr(s.toString().length);if(t==='px')return p;return Math.round((r-q)*(s/100))+'px';},_getBackgroundFocusPxValue:function o(p,q,r){var s=parseFloat(p),t=p.substr(s.toString().length);if(q<r)return '0';var u=t==='px'?s:Math.round(q*(s/100)),v=u-r/2;v=c('clamp')(v,0,q-r);return -v+'px';},_onImageSizeResolved:function o(p,q,r){if(!this.isMounted()||this.state.imageSrc!==r)return;var s=this.props.onImageLoad?this.props.onImageLoad.bind(null,p,q):null;this.setState({imageWidth:p,imageHeight:q,loading:false},s);}});f.exports=n;}),null);
__d('CloseButton.react',['cx','fbt','React','Image.react','CloseButtonIcon','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){'use strict';var m=this.props,n=m.size||'medium',o=m.appearance||'normal',p=n==='small',q=n==='huge',r=o==='dark',s=o==='inverted',t=m.ajaxify||null,u=m.rel||null,v="uiCloseButton"+(p?' '+"uiCloseButtonSmall":'')+(q?' '+"uiCloseButtonHuge":'')+(p&&r?' '+"uiCloseButtonSmallDark":'')+(p&&s?' '+"uiCloseButtonSmallInverted":'')+(!p&&r?' '+"uiCloseButtonDark":'')+(!p&&s?' '+"uiCloseButtonInverted":''),w=i._("Fechar"),x=Object.assign({},this.props);delete x.size;delete x.appearance;delete x.ajaxify;delete x.tooltip;return c('React').createElement('a',babelHelpers['extends']({},x,{ajaxify:t,href:'#',role:'button',title:m.ariaLabel||w,'aria-label':m.ariaLabel||w,'data-hover':m.tooltip&&'tooltip','data-skipchecker':null,'data-tooltip-alignh':m.tooltip&&'center','data-tooltip-content':m.tooltip,className:c('joinClasses')(this.props.className,v),rel:u}),c('React').createElement(c('Image.react'),{className:'uiCloseButtonHighContrast',src:c('CloseButtonIcon').icon}));};function l(){'use strict';j.apply(this,arguments);}f.exports=l;}),null);
__d("cssURL",[],(function a(b,c,d,e,f,g){function h(i){return "url('"+i.replace(/(\\|\s|\(|\)|'|\")/g,'\\$1')+"')";}f.exports=h;}),null);
__d('PhotosMimeType',[],(function a(b,c,d,e,f,g){var h={isImage:function j(k){return i(k)[0]==='image';},isJpeg:function j(k){var l=i(k);return h.isImage(k)&&(l[1]==='jpeg'||l[1]==='pjpeg');}};function i(j){return j.split('/');}f.exports=h;}),null);
__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],(function a(b,c,d,e,f,g){var h=new RegExp('\u000D\u000A','g'),i='\u000A',j={'text/rtf':1,'text/html':1};function k(m){if(m.kind=='file')return m.getAsFile();}function l(m){'use strict';this.data=m;this.types=m.types?c('createArrayFromMixed')(m.types):[];}l.prototype.isRichText=function(){'use strict';if(this.getHTML()&&this.getText())return true;if(this.isImage())return false;return this.types.some(function(m){return j[m];});};l.prototype.getText=function(){'use strict';var m;if(this.data.getData)if(!this.types.length){m=this.data.getData('Text');}else if(this.types.indexOf('text/plain')!=-1)m=this.data.getData('text/plain');return m?m.replace(h,i):null;};l.prototype.getHTML=function(){'use strict';if(this.data.getData)if(!this.types.length){return this.data.getData('Text');}else if(this.types.indexOf('text/html')!=-1)return this.data.getData('text/html');};l.prototype.isLink=function(){'use strict';return this.types.some(function(m){return m.indexOf('Url')!=-1||m.indexOf('text/uri-list')!=-1||m.indexOf('text/x-moz-url');});};l.prototype.getLink=function(){'use strict';if(this.data.getData){if(this.types.indexOf('text/x-moz-url')!=-1){var m=this.data.getData('text/x-moz-url').split('\n');return m[0];}return this.types.indexOf('text/uri-list')!=-1?this.data.getData('text/uri-list'):this.data.getData('url');}return null;};l.prototype.isImage=function(){'use strict';var m=this.types.some(function(q){return q.indexOf('application/x-moz-file')!=-1;});if(m)return true;var n=this.getFiles();for(var o=0;o<n.length;o++){var p=n[o].type;if(!c('PhotosMimeType').isImage(p))return false;}return true;};l.prototype.getCount=function(){'use strict';if(Object.prototype.hasOwnProperty.call(this.data,'items')){return this.data.items.length;}else if(Object.prototype.hasOwnProperty.call(this.data,'mozItemCount')){return this.data.mozItemCount;}else if(this.data.files)return this.data.files.length;return null;};l.prototype.getFiles=function(){'use strict';if(this.data.items){return Array.prototype.slice.call(this.data.items).map(k).filter(c('emptyFunction').thatReturnsArgument);}else if(this.data.files){return Array.prototype.slice.call(this.data.files);}else return [];};l.prototype.hasFiles=function(){'use strict';return this.getFiles().length>0;};f.exports=l;}),null);
__d('DraftEntityInstance',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').Record,k=j({type:'TOKEN',mutability:'IMMUTABLE',data:Object});h=babelHelpers.inherits(l,k);i=h&&h.prototype;l.prototype.getType=function(){return this.get('type');};l.prototype.getMutability=function(){return this.get('mutability');};l.prototype.getData=function(){return this.get('data');};function l(){h.apply(this,arguments);}f.exports=l;}),null);
__d('DraftEntity',['invariant','DraftEntityInstance','immutable'],(function a(b,c,d,e,f,g,h){var i=c('immutable').Map,j=i(),k=0;function l(n,o){}var m={getLastCreatedEntityKey:function n(){l('DraftEntity.getLastCreatedEntityKey','contentState.getLastCreatedEntityKey');return m.__getLastCreatedEntityKey();},create:function n(o,p,q){l('DraftEntity.create','contentState.createEntity');return m.__create(o,p,q);},add:function n(o){l('DraftEntity.add','contentState.addEntity');return m.__add(o);},get:function n(o){l('DraftEntity.get','contentState.getEntity');return m.__get(o);},mergeData:function n(o,p){l('DraftEntity.mergeData','contentState.mergeEntityData');return m.__mergeData(o,p);},replaceData:function n(o,p){l('DraftEntity.replaceData','contentState.replaceEntityData');return m.__replaceData(o,p);},__getLastCreatedEntityKey:function n(){return ''+k;},__create:function n(o,p,q){return m.__add(new (c('DraftEntityInstance'))({type:o,mutability:p,data:q||{}}));},__add:function n(o){var p=''+ ++k;j=j.set(p,o);return p;},__get:function n(o){var p=j.get(o);!!p||h(0);return p;},__mergeData:function n(o,p){var q=m.__get(o),r=babelHelpers['extends']({},q.getData(),p),s=q.set('data',r);j=j.set(o,s);return s;},__replaceData:function n(o,p){var q=m.__get(o),r=q.set('data',p);j=j.set(o,r);return r;}};f.exports=m;}),null);
__d('getMentionsTextForContentState',['DraftEntity','emptyFunction'],(function a(b,c,d,e,f,g){'use strict';var h=c('emptyFunction').thatReturnsTrue,i=/[\\\]:]/g;function j(l){var m=arguments.length<=1||arguments[1]===undefined?'':arguments[1],n=l.getBlockMap().map(function(o){var p=o.getText(),q=[];o.findEntityRanges(h,function(r,s){q.push(k(p.slice(r,s),o.getEntityAt(r)));});return q.join('');});return n.join('\n'+m);}function k(l,m){if(m){var n=c('DraftEntity').get(m);if(n.getType()==='MENTION'){l=l.replace(i,function(p){return '\\'+p;});var o=n.getData().id;if(/^\d+$/.test(o))return '@['+o+':'+l+']';}else if(n.getType()==='EMOTICON'){return n.getData().originalEmoticon;}else if(n.getType()==='EMOJI')return n.getData().emoji.join('');}return l.replace('@[','@ [');}f.exports=j;}),null);
__d('findRangesImmutable',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k,l){if(!i.size)return;var m=0;i.reduce(function(n,o,p){if(!j(n,o)){if(k(n))l(m,p);m=p;}return o;});k(i.last())&&l(m,i.count());}f.exports=h;}),null);