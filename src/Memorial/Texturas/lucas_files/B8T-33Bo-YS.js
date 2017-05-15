if (self.CavalryLogger) { CavalryLogger.start_js(["5DtTG"]); }

__d('ContentStateInlineStyle',['CharacterMetadata','immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').Map,i={add:function k(l,m,n){return j(l,m,n,true);},remove:function k(l,m,n){return j(l,m,n,false);}};function j(k,l,m,n){var o=k.getBlockMap(),p=l.getStartKey(),q=l.getStartOffset(),r=l.getEndKey(),s=l.getEndOffset(),t=o.skipUntil(function(u,v){return v===p;}).takeUntil(function(u,v){return v===r;}).concat(h([[r,o.get(r)]])).map(function(u,v){var w,x;if(p===r){w=q;x=s;}else{w=v===p?q:0;x=v===r?s:u.getLength();}var y=u.getCharacterList(),z;while(w<x){z=y.get(w);y=y.set(w,n?c('CharacterMetadata').applyStyle(z,m):c('CharacterMetadata').removeStyle(z,m));w++;}return u.set('characterList',y);});return k.merge({blockMap:o.merge(t),selectionBefore:l,selectionAfter:l});}f.exports=i;}),null);
__d('applyEntityToContentBlock',['CharacterMetadata'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k,l){var m=i.getCharacterList();while(j<k){m=m.set(j,c('CharacterMetadata').applyEntity(m.get(j),l));j++;}return i.set('characterList',m);}f.exports=h;}),null);
__d('applyEntityToContentState',['immutable','applyEntityToContentBlock'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){var l=i.getBlockMap(),m=j.getStartKey(),n=j.getStartOffset(),o=j.getEndKey(),p=j.getEndOffset(),q=l.skipUntil(function(r,s){return s===m;}).takeUntil(function(r,s){return s===o;}).toOrderedMap().merge(c('immutable').OrderedMap([[o,l.get(o)]])).map(function(r,s){var t=s===m?n:0,u=s===o?p:r.getLength();return c('applyEntityToContentBlock')(r,t,u,k);});return i.merge({blockMap:l.merge(q),selectionBefore:j,selectionAfter:j});}f.exports=h;}),null);
__d('DraftEntitySegments',[],(function a(b,c,d,e,f,g){'use strict';var h={getRemovalRange:function i(j,k,l,m,n){var o=l.split(' ');o=o.map(function(y,z){if(n==='forward'){if(z>0)return ' '+y;}else if(z<o.length-1)return y+' ';return y;});var p=m,q,r,s=null,t=null;for(var u=0;u<o.length;u++){r=o[u];q=p+r.length;if(j<q&&p<k){if(s!==null){t=q;}else{s=p;t=q;}}else if(s!==null)break;p=q;}var v=m+l.length,w=s===m,x=t===v;if(!w&&x||w&&!x)if(n==='forward'){if(t!==v)t++;}else if(s!==m)s--;return {start:s,end:t};}};f.exports=h;}),null);
__d('getRangesForDraftEntity',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';function i(j,k){var l=[];j.findEntityRanges(function(m){return m.getEntity()===k;},function(m,n){l.push({start:m,end:n});});!!l.length||h(0);return l;}f.exports=i;}),null);
__d('getCharacterRemovalRange',['invariant','DraftEntitySegments','getRangesForDraftEntity'],(function a(b,c,d,e,f,g,h){'use strict';function i(k,l,m,n,o){var p=n.getStartOffset(),q=n.getEndOffset(),r=l.getEntityAt(p),s=m.getEntityAt(q-1);if(!r&&!s)return n;var t=n;if(r&&r===s){t=j(k,l,t,o,r,true,true);}else if(r&&s){var u=j(k,l,t,o,r,false,true),v=j(k,m,t,o,s,false,false);t=t.merge({anchorOffset:u.getAnchorOffset(),focusOffset:v.getFocusOffset(),isBackward:false});}else if(r){var w=j(k,l,t,o,r,false,true);t=t.merge({anchorOffset:w.getStartOffset(),isBackward:false});}else if(s){var x=j(k,m,t,o,s,false,false);t=t.merge({focusOffset:x.getEndOffset(),isBackward:false});}return t;}function j(k,l,m,n,o,p,q){var r=m.getStartOffset(),s=m.getEndOffset(),t=k.__get(o),u=t.getMutability(),v=q?r:s;if(u==='MUTABLE')return m;var w=c('getRangesForDraftEntity')(l,o).filter(function(z){return v<=z.end&&v>=z.start;});w.length==1||h(0);var x=w[0];if(u==='IMMUTABLE')return m.merge({anchorOffset:x.start,focusOffset:x.end,isBackward:false});if(!p)if(q){s=x.end;}else r=x.start;var y=c('DraftEntitySegments').getRemovalRange(r,s,l.getText().slice(x.start,x.end),x.start,n);return m.merge({anchorOffset:y.start,focusOffset:y.end,isBackward:false});}f.exports=i;}),null);
__d('removeEntitiesAtEdges',['invariant','CharacterMetadata','findRangesImmutable'],(function a(b,c,d,e,f,g,h){'use strict';function i(l,m){var n=l.getBlockMap(),o=l.getEntityMap(),p={},q=m.getStartKey(),r=m.getStartOffset(),s=n.get(q),t=k(o,s,r);if(t!==s)p[q]=t;var u=m.getEndKey(),v=m.getEndOffset(),w=n.get(u);if(q===u)w=t;var x=k(o,w,v);if(x!==w)p[u]=x;if(!Object.keys(p).length)return l.set('selectionAfter',m);return l.merge({blockMap:n.merge(p),selectionAfter:m});}function j(l,m,n){var o;c('findRangesImmutable')(l,function(p,q){return p.getEntity()===q.getEntity();},function(p){return p.getEntity()===m;},function(p,q){if(p<=n&&q>=n)o={start:p,end:q};});typeof o==='object'||h(0);return o;}function k(l,m,n){var o=m.getCharacterList(),p=n>0?o.get(n-1):undefined,q=n<o.count()?o.get(n):undefined,r=p?p.getEntity():undefined,s=q?q.getEntity():undefined;if(s&&s===r){var t=l.__get(s);if(t.getMutability()!=='MUTABLE'){var u=j(o,s,n),v=u.start,w=u.end,x;while(v<w){x=o.get(v);o=o.set(v,c('CharacterMetadata').applyEntity(x,null));v++;}return m.set('characterList',o);}}return m;}f.exports=i;}),null);
__d('getContentStateFragment',['generateRandomKey','removeEntitiesAtEdges'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=j.getStartKey(),l=j.getStartOffset(),m=j.getEndKey(),n=j.getEndOffset(),o=c('removeEntitiesAtEdges')(i,j),p=o.getBlockMap(),q=p.keySeq(),r=q.indexOf(k),s=q.indexOf(m)+1,t=p.slice(r,s).map(function(u,v){var w=c('generateRandomKey')(),x=u.getText(),y=u.getCharacterList();if(k===m)return u.merge({key:w,text:x.slice(l,n),characterList:y.slice(l,n)});if(v===k)return u.merge({key:w,text:x.slice(l),characterList:y.slice(l)});if(v===m)return u.merge({key:w,text:x.slice(0,n),characterList:y.slice(0,n)});return u.set('key',w);});return t.toOrderedMap();}f.exports=h;}),null);
__d('insertIntoList',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){if(k===i.count()){j.forEach(function(n){i=i.push(n);});}else if(k===0){j.reverse().forEach(function(n){i=i.unshift(n);});}else{var l=i.slice(0,k),m=i.slice(k);i=l.concat(j,m).toList();}return i;}f.exports=h;}),null);
__d('insertFragmentIntoContentState',['invariant','BlockMapBuilder','generateRandomKey','insertIntoList'],(function a(b,c,d,e,f,g,h){'use strict';function i(j,k,l){k.isCollapsed()||h(0);var m=k.getStartKey(),n=k.getStartOffset(),o=j.getBlockMap(),p=l.size,q,r;if(p===1){var s=o.get(m),t=l.first(),u=s.getText(),v=s.getCharacterList(),w=s.merge({text:u.slice(0,n)+t.getText()+u.slice(n),characterList:c('insertIntoList')(v,t.getCharacterList(),n),data:t.getData()});o=o.set(m,w);q=m;r=n+t.getText().length;return j.merge({blockMap:o.set(m,w),selectionBefore:k,selectionAfter:k.merge({anchorKey:q,anchorOffset:r,focusKey:q,focusOffset:r,isBackward:false})});}var x=[];j.getBlockMap().forEach(function(y,z){if(z!==m){x.push(y);return;}var aa=y.getText(),ba=y.getCharacterList(),ca=aa.length,da=aa.slice(0,n),ea=ba.slice(0,n),fa=l.first(),ga=y.merge({text:da+fa.getText(),characterList:ea.concat(fa.getCharacterList()),type:da?y.getType():fa.getType(),data:fa.getData()});x.push(ga);l.slice(1,p-1).forEach(function(la){x.push(la.set('key',c('generateRandomKey')()));});var ha=aa.slice(n,ca),ia=ba.slice(n,ca),ja=l.last();q=c('generateRandomKey')();var ka=ja.merge({key:q,text:ja.getText()+ha,characterList:ja.getCharacterList().concat(ia),data:ja.getData()});x.push(ka);});r=l.last().getLength();return j.merge({blockMap:c('BlockMapBuilder').createFromArray(x),selectionBefore:k,selectionAfter:k.merge({anchorKey:q,anchorOffset:r,focusKey:q,focusOffset:r,isBackward:false})});}f.exports=i;}),null);
__d('insertTextIntoContentState',['invariant','immutable','insertIntoList'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('immutable').Repeat;function j(k,l,m,n){l.isCollapsed()||h(0);var o=m.length;if(!o)return k;var p=k.getBlockMap(),q=l.getStartKey(),r=l.getStartOffset(),s=p.get(q),t=s.getText(),u=s.merge({text:t.slice(0,r)+m+t.slice(r,s.getLength()),characterList:c('insertIntoList')(s.getCharacterList(),i(n,o).toList(),r)}),v=r+o;return k.merge({blockMap:p.set(q,u),selectionAfter:l.merge({anchorOffset:v,focusOffset:v})});}f.exports=j;}),null);
__d('modifyBlockForContentState',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').Map;function i(j,k,l){var m=k.getStartKey(),n=k.getEndKey(),o=j.getBlockMap(),p=o.toSeq().skipUntil(function(q,r){return r===m;}).takeUntil(function(q,r){return r===n;}).concat(h([[n,o.get(n)]])).map(l);return j.merge({blockMap:o.merge(p),selectionBefore:k,selectionAfter:k});}f.exports=i;}),null);
__d('removeRangeFromContentState',['immutable'],(function a(b,c,d,e,f,g){'use strict';function h(j,k){if(k.isCollapsed())return j;var l=j.getBlockMap(),m=k.getStartKey(),n=k.getStartOffset(),o=k.getEndKey(),p=k.getEndOffset(),q=l.get(m),r=l.get(o),s;if(q===r){s=i(q.getCharacterList(),n,p);}else s=q.getCharacterList().slice(0,n).concat(r.getCharacterList().slice(p));var t=q.merge({text:q.getText().slice(0,n)+r.getText().slice(p),characterList:s}),u=l.toSeq().skipUntil(function(v,w){return w===m;}).takeUntil(function(v,w){return w===o;}).concat(c('immutable').Map([[o,null]])).map(function(v,w){return w===m?t:null;});l=l.merge(u).filter(function(v){return !!v;});return j.merge({blockMap:l,selectionBefore:k,selectionAfter:k.merge({anchorKey:m,anchorOffset:n,focusKey:m,focusOffset:n,isBackward:false})});}function i(j,k,l){if(k===0){while(k<l){j=j.shift();k++;}}else if(l===j.count()){while(l>k){j=j.pop();l--;}}else{var m=j.slice(0,k),n=j.slice(l);j=m.concat(n).toList();}return j;}f.exports=h;}),null);
__d('splitBlockInContentState',['invariant','immutable','generateRandomKey'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('immutable').Map;function j(k,l){l.isCollapsed()||h(0);var m=l.getAnchorKey(),n=l.getAnchorOffset(),o=k.getBlockMap(),p=o.get(m),q=p.getText(),r=p.getCharacterList(),s=p.merge({text:q.slice(0,n),characterList:r.slice(0,n)}),t=c('generateRandomKey')(),u=s.merge({key:t,text:q.slice(n),characterList:r.slice(n),data:i()}),v=o.toSeq().takeUntil(function(y){return y===p;}),w=o.toSeq().skipUntil(function(y){return y===p;}).rest(),x=v.concat([[s.getKey(),s],[u.getKey(),u]],w).toOrderedMap();return k.merge({blockMap:x,selectionBefore:l,selectionAfter:l.merge({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0,isBackward:false})});}f.exports=j;}),null);
__d('DraftModifier',['invariant','CharacterMetadata','ContentStateInlineStyle','DraftFeatureFlags','immutable','applyEntityToContentState','getCharacterRemovalRange','getContentStateFragment','insertFragmentIntoContentState','insertTextIntoContentState','modifyBlockForContentState','removeEntitiesAtEdges','removeRangeFromContentState','splitBlockInContentState'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('immutable').OrderedSet,j={replaceText:function k(l,m,n,o,p){var q=c('removeEntitiesAtEdges')(l,m),r=c('removeRangeFromContentState')(q,m),s=c('CharacterMetadata').create({style:o||i(),entity:p||null});return c('insertTextIntoContentState')(r,r.getSelectionAfter(),n,s);},insertText:function k(l,m,n,o,p){m.isCollapsed()||h(0);return j.replaceText(l,m,n,o,p);},moveText:function k(l,m,n){var o=c('getContentStateFragment')(l,m),p=j.removeRange(l,m,'backward');return j.replaceWithFragment(p,n,o);},replaceWithFragment:function k(l,m,n){var o=c('removeEntitiesAtEdges')(l,m),p=c('removeRangeFromContentState')(o,m);return c('insertFragmentIntoContentState')(p,p.getSelectionAfter(),n);},removeRange:function k(l,m,n){var o=void 0,p=void 0,q=void 0,r=void 0;if(m.getIsBackward())m=m.merge({anchorKey:m.getFocusKey(),anchorOffset:m.getFocusOffset(),focusKey:m.getAnchorKey(),focusOffset:m.getAnchorOffset(),isBackward:false});o=m.getAnchorKey();p=m.getFocusKey();q=l.getBlockForKey(o);r=l.getBlockForKey(p);var s=m.getStartOffset(),t=m.getEndOffset(),u=q.getEntityAt(s),v=r.getEntityAt(t-1);if(o===p)if(u&&u===v){var w=c('getCharacterRemovalRange')(l.getEntityMap(),q,r,m,n);return c('removeRangeFromContentState')(l,w);}var x=m;if(c('DraftFeatureFlags').draft_segmented_entities_behavior)x=c('getCharacterRemovalRange')(l.getEntityMap(),q,r,m,n);var y=c('removeEntitiesAtEdges')(l,x);return c('removeRangeFromContentState')(y,x);},splitBlock:function k(l,m){var n=c('removeEntitiesAtEdges')(l,m),o=c('removeRangeFromContentState')(n,m);return c('splitBlockInContentState')(o,o.getSelectionAfter());},applyInlineStyle:function k(l,m,n){return c('ContentStateInlineStyle').add(l,m,n);},removeInlineStyle:function k(l,m,n){return c('ContentStateInlineStyle').remove(l,m,n);},setBlockType:function k(l,m,n){return c('modifyBlockForContentState')(l,m,function(o){return o.merge({type:n,depth:0});});},setBlockData:function k(l,m,n){return c('modifyBlockForContentState')(l,m,function(o){return o.merge({data:n});});},mergeBlockData:function k(l,m,n){return c('modifyBlockForContentState')(l,m,function(o){return o.merge({data:o.getData().merge(n)});});},applyEntity:function k(l,m,n){var o=c('removeEntitiesAtEdges')(l,m);return c('applyEntityToContentState')(o,m,n);}};f.exports=j;}),null);
__d('moveSelectionBackward',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=i.getSelection(),l=i.getCurrentContent(),m=k.getStartKey(),n=k.getStartOffset(),o=m,p=0;if(j>n){var q=l.getKeyBefore(m);if(q==null){o=m;}else{o=q;var r=l.getBlockForKey(q);p=r.getText().length;}}else p=n-j;return k.merge({focusKey:o,focusOffset:p,isBackward:true});}f.exports=h;}),null);
__d('removeTextWithStrategy',['DraftModifier'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){var l=i.getSelection(),m=i.getCurrentContent(),n=l;if(l.isCollapsed()){if(k==='forward'){if(i.isSelectionAtEndOfContent())return m;}else if(i.isSelectionAtStartOfContent())return m;n=j(i);if(n===l)return m;}return c('DraftModifier').removeRange(m,n,k);}f.exports=h;}),null);
__d('moveSelectionForward',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=i.getSelection(),l=k.getStartKey(),m=k.getStartOffset(),n=i.getCurrentContent(),o=l,p,q=n.getBlockForKey(l);if(j>q.getText().length-m){o=n.getKeyAfter(l);p=0;}else p=m+j;return k.merge({focusKey:o,focusOffset:p});}f.exports=h;}),null);
__d('createMentionEntity',['DraftEntity'],(function a(b,c,d,e,f,g){function h(i){var j=i.getType().toLowerCase();if(j==='hashtag')return c('DraftEntity').create('HASHTAG','IMMUTABLE');var k=j==='user'||j==='fb4c'?'SEGMENTED':'IMMUTABLE',l=i.getAuxiliaryData();return c('DraftEntity').create('MENTION',k,{id:i.getUniqueID(),isWeak:l&&l.renderType==='non_member',type:j});}f.exports=h;}),null);
__d('MentionsInput.react',['cx','invariant','AbstractMentionsTextEditor.react','EditorState','Event','MentionsLayer.react','React','ReactDOM','createMentionEntity','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.blur=function(){this.refs.textEditor.blur();}.bind(this),this.focus=function(){this.refs.textEditor&&this.refs.textEditor.focus();}.bind(this),this.click=function(){var s=c('ReactDOM').findDOMNode(this);s||i(0);s.dispatchEvent(new (c('Event'))('focus'));}.bind(this),o;}m.prototype.render=function(){'use strict';var n=c('joinClasses')(this.props.className,"_5yk1");return c('React').createElement('div',{className:n,'data-interaction-root-id':"_18p_",onClick:this.click,onFocus:this.focus,role:'presentation',id:'composer_text_input_box'},c('React').createElement(c('AbstractMentionsTextEditor.react'),babelHelpers['extends']({},this.props,{mentionResultsComponent:c('MentionsLayer.react'),mentionResultsProps:{typeaheadView:this.props.typeaheadView,typeaheadViewProps:this.props.typeaheadViewProps,autoflip:this.props.autoflip,position:this.props.position},mentionCreationFn:c('createMentionEntity'),ref:'textEditor',className:"_5yk2",stripPastedStyles:this.props.stripPastedStyles})));};m.propTypes={editorState:l.instanceOf(c('EditorState')).isRequired,mentionsSource:l.object,typeaheadView:l.func.isRequired,typeaheadViewPropTypes:l.object,spellCheck:l.bool,placeholder:l.string,className:l.string,autoflip:l.bool,position:l.oneOf(['above','below']),renderEmoji:l.bool,webDriverTestID:l.string,handleContentReturn:l.func,handleDroppedFiles:l.func,handlePastedFiles:l.func,onAddMention:l.func,onShowMentions:l.func,onChange:l.func,onInputFocus:l.func,onInputBlur:l.func,stripPastedStyles:l.bool};m.defaultProps={stripPastedStyles:true};f.exports=m;}),null);
__d('AtSignMentionsStrategy',['DocumentMentionsRegex'],(function a(b,c,d,e,f,g){var h=c('DocumentMentionsRegex').PUNCTUATION,i=['@','\\uff20'].join(''),j='[^'+i+h+'\\s]',k='(?:'+'\\.[ |$]|'+' |'+'['+h+']|'+')',l=new RegExp('(?:^|\\s|\\()('+'['+i+']'+'((?:'+j+k+'){0,20})'+')$'),m={name:'AtSignMentionsStrategy',findMentionableString:function n(o){var p=l.exec(o);if(p!==null){var q=p[2];if(q.length)return {matchingString:q,leadOffset:p[1].length};}return null;}};f.exports=m;}),null);
__d('FilteredSearchSource',['AbstractSearchSource'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$FilteredSearchSource1=k;this.$FilteredSearchSource2=l;}j.prototype.bootstrapImpl=function(k){'use strict';this.$FilteredSearchSource2.bootstrap(k);};j.prototype.searchImpl=function(k,l,m){'use strict';var n=function(o,p){o=this.$FilteredSearchSource3(o,p);l(o,p);}.bind(this);this.$FilteredSearchSource2.search(k,n,m);};j.prototype.$FilteredSearchSource3=function(k,l){'use strict';var m=this.$FilteredSearchSource1;return k.filter(function(n){return m(n,l);});};f.exports=j;}),null);
__d('filterCapitalizedNames',['TokenizeUtil'],(function a(b,c,d,e,f,g){function h(l,m){return i(l)&&(m.length>=5||j(l,m));}function i(l){var m=l.getAuxiliaryData()||k;return !m.disableAutosuggest&&!!(l.getType()==='user'||m.connectedPage);}function j(l,m){return c('TokenizeUtil').isExactMatch(m,l.getTitle());}var k={};f.exports=h;}),null);
__d("XDeveloperDocumentationController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/docs\/{?path1}\/{?path2}\/{?path3}\/{?path4}\/{?path5}\/{?path6}\/",{path:{type:"String"},version:{type:"String"},preview:{type:"Exists",defaultValue:false},revisionid:{type:"Int"},locale:{type:"String"},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}});}),null);