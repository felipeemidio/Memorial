if (self.CavalryLogger) { CavalryLogger.start_js(["XdepM"]); }

__d("SearchEntityModuleServerConstants",[],(function a(b,c,d,e,f,g){f.exports={TYPE_TO_BROWSE_TYPE:{user:"browse_type_user",page:"browse_type_page",group:"browse_type_group",application:"browse_type_application",place:"browse_type_place",event:"browse_type_event"},TYPE_TO_SERP_PATH:{user:"\/search\/people\/",page:"\/search\/pages\/",group:"\/search\/groups\/",application:"\/search\/apps\/",place:"\/search\/places\/",event:"\/search\/events\/"},RESULT_TYPE_TO_MODULE_ROLE:{user:"ENTITY_USER",page:"ENTITY_PAGES",group:"ENTITY_GROUPS",application:"ENTITY_APPS",place:"ENTITY_PLACES",event:"ENTITY_EVENTS"},TYPE_TO_DISPLAY_STYLE:{user:"user_row",page:"page_row",group:"group_row",application:"app_row",place:"place_row",event:"event_row"},WWW_GRAPH_SEARCH_RESULTS_TRACKABLE_CODE:"21.",SEE_MORE_LOGGING:{MODULE_FOOTER_ITEM_TYPE:"module_footer",MODULE_HEADER_ITEM_TYPE:"module_header"},MODULE_STYLE:{SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge"},BROWSE_RESULTS_PAGE_REF:"br_rs"};}),null);
__d('BrowseClientSizeLogger',['BanzaiLogger','DataAttributeUtils','getElementPosition'],(function a(b,c,d,e,f,g){var h={log:function i(j){var k=c('DataAttributeUtils').getDataAttribute(j,'data-xt'),l=JSON.parse(k.substring(k.indexOf('{'))),m=c('getElementPosition')(j);l.client_height=m.height;l.client_width=m.width;l.raw_id=+l.raw_id;c('BanzaiLogger').log('SearchResultsClientSizeLoggerConfig',l);}};f.exports=h;}),null);
__d('BrowseTopFiltersFullWidth',['cx','Arbiter','CSS','NavigationMessage','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){var i,j=/(facebook\.com\/(search|hashtag|topic)\/)/,k={init:function l(){c('CSS').addClass(document.body,"_4dik");i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_FIRST_RESPONSE,this.cleanup));c('Arbiter').inform('browse_top_filters_full_width_displayed');},cleanup:function l(){i&&i.release();if(!window.location.href.match(j))c('CSS').removeClass(document.body,"_4dik");}};f.exports=k;}),null);
__d('BrowseTopFiltersNone',['cx','CSS'],(function a(b,c,d,e,f,g,h){var i={init:function j(){c('CSS').removeClass(document.body,"_4dik");}};f.exports=i;}),null);
__d('SearchResultsPageUnitDataTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:SearchResultsPageUnitDataLoggerConfig',this.$SearchResultsPageUnitDataTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:SearchResultsPageUnitDataLoggerConfig',this.$SearchResultsPageUnitDataTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$SearchResultsPageUnitDataTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$SearchResultsPageUnitDataTypedLogger1=babelHelpers['extends']({},this.$SearchResultsPageUnitDataTypedLogger1,j);return this;};h.prototype.setAppliedFilters=function(j){this.$SearchResultsPageUnitDataTypedLogger1.applied_filters=j;return this;};h.prototype.setBemQuery=function(j){this.$SearchResultsPageUnitDataTypedLogger1.bem_query=j;return this;};h.prototype.setCaller=function(j){this.$SearchResultsPageUnitDataTypedLogger1.caller=j;return this;};h.prototype.setCorrectedQueryFunction=function(j){this.$SearchResultsPageUnitDataTypedLogger1.corrected_query_function=j;return this;};h.prototype.setCorrectedQueryTitle=function(j){this.$SearchResultsPageUnitDataTypedLogger1.corrected_query_title=j;return this;};h.prototype.setEmptySecondRequest=function(j){this.$SearchResultsPageUnitDataTypedLogger1.empty_second_request=j;return this;};h.prototype.setEntityIds=function(j){this.$SearchResultsPageUnitDataTypedLogger1.entity_ids=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setEntityTypes=function(j){this.$SearchResultsPageUnitDataTypedLogger1.entity_types=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setEntryPointAction=function(j){this.$SearchResultsPageUnitDataTypedLogger1.entry_point_action=j;return this;};h.prototype.setEntryPointScope=function(j){this.$SearchResultsPageUnitDataTypedLogger1.entry_point_scope=j;return this;};h.prototype.setEntryPointSurface=function(j){this.$SearchResultsPageUnitDataTypedLogger1.entry_point_surface=j;return this;};h.prototype.setHasRecording=function(j){this.$SearchResultsPageUnitDataTypedLogger1.has_recording=j;return this;};h.prototype.setItemRolesByCount=function(j){this.$SearchResultsPageUnitDataTypedLogger1.item_roles_by_count=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setItemsCount=function(j){this.$SearchResultsPageUnitDataTypedLogger1.items_count=j;return this;};h.prototype.setLoggingUnitID=function(j){this.$SearchResultsPageUnitDataTypedLogger1.logging_unit_id=j;return this;};h.prototype.setModulePosition=function(j){this.$SearchResultsPageUnitDataTypedLogger1.module_position=j;return this;};h.prototype.setQuery=function(j){this.$SearchResultsPageUnitDataTypedLogger1.query=j;return this;};h.prototype.setQueryFunction=function(j){this.$SearchResultsPageUnitDataTypedLogger1.query_function=j;return this;};h.prototype.setQueryLength=function(j){this.$SearchResultsPageUnitDataTypedLogger1.query_length=j;return this;};h.prototype.setQueryLshCodes=function(j){this.$SearchResultsPageUnitDataTypedLogger1.query_lsh_codes=j;return this;};h.prototype.setResultRole=function(j){this.$SearchResultsPageUnitDataTypedLogger1.result_role=j;return this;};h.prototype.setResultsCount=function(j){this.$SearchResultsPageUnitDataTypedLogger1.results_count=j;return this;};h.prototype.setResultsModuleResultType=function(j){this.$SearchResultsPageUnitDataTypedLogger1.results_module_result_type=j;return this;};h.prototype.setResultsModuleRole=function(j){this.$SearchResultsPageUnitDataTypedLogger1.results_module_role=j;return this;};h.prototype.setResultsModuleSemantic=function(j){this.$SearchResultsPageUnitDataTypedLogger1.results_module_semantic=j;return this;};h.prototype.setResultsModuleSubtype=function(j){this.$SearchResultsPageUnitDataTypedLogger1.results_module_subtype=j;return this;};h.prototype.setResultsModuleType=function(j){this.$SearchResultsPageUnitDataTypedLogger1.results_module_type=j;return this;};h.prototype.setSelectedModule=function(j){this.$SearchResultsPageUnitDataTypedLogger1.selected_module=j;return this;};h.prototype.setServerRank=function(j){this.$SearchResultsPageUnitDataTypedLogger1.server_rank=j;return this;};h.prototype.setSessionID=function(j){this.$SearchResultsPageUnitDataTypedLogger1.session_id=j;return this;};h.prototype.setSnippetText=function(j){this.$SearchResultsPageUnitDataTypedLogger1.snippet_text=j;return this;};h.prototype.setSnippetTokens=function(j){this.$SearchResultsPageUnitDataTypedLogger1.snippet_tokens=j;return this;};h.prototype.setSourceModuleRole=function(j){this.$SearchResultsPageUnitDataTypedLogger1.source_module_role=j;return this;};h.prototype.setSpellerConfidence=function(j){this.$SearchResultsPageUnitDataTypedLogger1.speller_confidence=j;return this;};h.prototype.setStoryTypes=function(j){this.$SearchResultsPageUnitDataTypedLogger1.story_types=j;return this;};h.prototype.setTappedResultEntityID=function(j){this.$SearchResultsPageUnitDataTypedLogger1.tapped_result_entity_id=j;return this;};h.prototype.setURIHash=function(j){this.$SearchResultsPageUnitDataTypedLogger1.uri_hash=j;return this;};h.prototype.setVC=function(j){this.$SearchResultsPageUnitDataTypedLogger1.vc=j;return this;};h.prototype.setVertical=function(j){this.$SearchResultsPageUnitDataTypedLogger1.vertical=j;return this;};var i={applied_filters:true,bem_query:true,caller:true,corrected_query_function:true,corrected_query_title:true,empty_second_request:true,entity_ids:true,entity_types:true,entry_point_action:true,entry_point_scope:true,entry_point_surface:true,has_recording:true,item_roles_by_count:true,items_count:true,logging_unit_id:true,module_position:true,query:true,query_function:true,query_length:true,query_lsh_codes:true,result_role:true,results_count:true,results_module_result_type:true,results_module_role:true,results_module_semantic:true,results_module_subtype:true,results_module_type:true,selected_module:true,server_rank:true,session_id:true,snippet_text:true,snippet_tokens:true,source_module_role:true,speller_confidence:true,story_types:true,tapped_result_entity_id:true,uri_hash:true,vc:true,vertical:true};f.exports=h;}),null);
__d("XSearchBrowseActionsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/search\/async\/browse_actions\/",{id:{type:"String",required:true},result_type:{type:"String",required:true}});}),null);
__d('SearchEntityModuleResult.react',['cx','fbt','AsyncRequest','Badge.react','BrowseClientEventLogger','DOM','DOMContainer.react','HovercardLink','Image.react','Link.react','React','SearchEntityModuleServerConstants','SearchResultsPageUnitDataTypedLogger','XSearchBrowseActionsController','XUIButton.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l,m=c('SearchEntityModuleServerConstants').MODULE_STYLE,n=(l={},l[m.SMALL]=48,l[m.MEDIUM]=64,l[m.LARGE]=72,l[m.XLARGE]=100,l);j=babelHelpers.inherits(o,c('React').Component);k=j&&j.prototype;function o(p){k.constructor.call(this,p);this.actionsWrapper=c('DOM').create('div');this.crActionsWrapper=c('DOM').create('div');this.state={actionsLoaded:false,showCrActions:false};}o.prototype.componentDidMount=function(){this.renderActions();this.logImpression();if(this.props.logging_unit_id!=null&&this.props.result.is_bootstrap)this.logUnitData();};o.prototype.render=function(){var p,q=this.props.result.uri,r=c('HovercardLink').constructEndpoint({id:this.props.result.tuid}),s=void 0;if(this.props.result.badge_type){s=c('React').createElement(c('Badge.react'),{type:this.props.result.badge_type,size:'small'});}else if(this.props.result.is_verified===true)s=c('React').createElement(c('Badge.react'),{type:'verified',size:'small'});var t=this.props.result.snippets.map(function(ca,da){return c('React').createElement(c('DOMContainer.react'),{key:'snippet_'+da,className:(da===0?"_2yep":'')+(da!==0?' '+"_2yeq":'')},ca);}),u=void 0,v=this.props.result.photos,w=n[this.props.module_style];if(v!=null&&!this.props.has_module_guidelines){(function(){var ca=v.length,da=v.map(function(ea,fa){var ga=w/2-fa%2,ha=w/2-Math.round(fa/ca);return c('React').createElement(c('Image.react'),{key:fa,className:"_4wq6",src:ea,style:{width:ga+'px',height:ha+'px'}});});u=c('React').createElement('div',{className:"_4wq7",style:{width:w+'px',height:w+'px'}},da);})();}else{var x=false;if(this.props.result.type==='group')x=this.props.has_module_guidelines;u=c('React').createElement(c('Image.react'),{className:"_2yeu"+(x?' '+"_4lxz":''),src:this.props.result.photo,width:w,height:w});}var y=c('React').createElement('div',{className:"_2ye_"},c('React').createElement(c('DOMContainer.react'),null,this.actionsWrapper),c('React').createElement(c('XUIButton.react'),{className:"_4cei"+(this.state.actionsLoaded?' '+"hidden_elem":''),image:c('React').createElement(c('XUISpinner.react'),{size:'small',background:'dark'}),label:i._("Carregando...")})),z=null;if(this.state.showCrActions&&this.crActionsWrapper)z=c('React').createElement('div',{className:"_5-zc"},c('React').createElement(c('DOMContainer.react'),null,this.crActionsWrapper),c('React').createElement(c('XUIButton.react'),{className:"_4cei"+(this.state.actionsLoaded?' '+"hidden_elem":''),image:c('React').createElement(c('XUISpinner.react'),{size:'small',background:'dark'}),label:i._("Carregando...")}));var aa=this.props.module_style===m.XLARGE||this.props.module_style===m.LARGE,ba=null;if(this.props.has_module_guidelines){ba=c('React').createElement('div',{style:{WebkitLineClamp:2},className:"_52eh _5bcu"},this.props.result.text,s);}else ba=c('React').createElement('div',null,this.props.result.text,s);return c('React').createElement('div',babelHelpers['extends']({className:"_2yer"+(' '+"_401d")+(aa?' '+"_2xje":'')},this.getLoggingData()),c('React').createElement(c('Link.react'),{className:"_2yet",href:q,'data-hovercard':r},u),c('React').createElement('div',{className:"_2yev"},c('React').createElement('div',{className:"_2xjf"},c('React').createElement(c('Link.react'),{href:q,className:(this.props.has_module_guidelines?"_1ii5":'')+(' '+"_2yez"),'data-hovercard':r},ba),aa?y:null),c('React').createElement('div',{className:"_2ye-"},t.shift(),c('React').createElement('div',{className:"_2xjg"},t)),z),aa?null:y);};o.prototype.renderActions=function(){var p=c('SearchEntityModuleServerConstants').TYPE_TO_BROWSE_TYPE[this.props.result.type],q=c('XSearchBrowseActionsController').getURIBuilder().setString('id',this.props.result.tuid).setString('result_type',p);new (c('AsyncRequest'))(q.getURI()).setMethod('POST').setHandler(function(r){var s=r.getPayload();c('DOM').setContent(this.actionsWrapper,s.actions);var t=false;if(s.cr_actions){c('DOM').setContent(this.crActionsWrapper,s.cr_actions);t=true;}this.setState({actionsLoaded:true,showCrActions:t});}.bind(this)).send();};o.prototype.getLoggingData=function(){if(this.loggingData!=null)return this.loggingData;var p=c('SearchEntityModuleServerConstants').TYPE_TO_DISPLAY_STYLE[this.props.result.type],q=c('SearchEntityModuleServerConstants').TYPE_TO_BROWSE_TYPE[this.props.result.type],r=c('SearchEntityModuleServerConstants').WWW_GRAPH_SEARCH_RESULTS_TRACKABLE_CODE,s=r+JSON.stringify({display_style:p,id:this.props.result.tuid,item_type:'result',module_result_type:q,module_type:this.props.module_role,position_in_module:this.props.position_in_module,query:this.props.browse_query,raw_id:parseInt(this.props.result.tuid,10),session_id:this.props.browse_session_id,vertical:'content',is_bootstrap:this.props.result.is_bootstrap,unit_id:this.props.result.unit_id});this.loggingData={'data-xt':s,'data-gt':JSON.stringify({type:'xtracking',xt:s}),'data-bt':JSON.stringify({id:parseInt(this.props.result.tuid,10)}),'data-xt-vimp':JSON.stringify(this.props.client_view_config),'data-vistracking':'1','data-insertion-position':this.props.position_in_module};return this.loggingData;};o.prototype.logImpression=function(){var p=this.getLoggingData();c('BrowseClientEventLogger').logImpression({xt:p['data-xt']});};o.prototype.logUnitData=function(){new (c('SearchResultsPageUnitDataTypedLogger'))().setLoggingUnitID(this.props.logging_unit_id).setCaller(this.props.callsite).setQuery(this.props.plain_text_query).setQueryFunction(this.props.browse_query).setVertical('content').setSessionID(this.props.browse_session_id).setItemsCount(String(this.props.results.size)).setEntityIds(this.props.results.map(function(p){return p.tuid;})).setQueryLength(this.props.plain_text_query.length).setResultsModuleResultType(this.props.result.type).setResultsModuleRole(this.props.result.module_role).setResultsModuleSubtype(this.props.result.type).setTappedResultEntityID(this.props.result.tuid).setResultsModuleSemantic(this.props.browse_query).log();};f.exports=o;}),null);
__d('SearchEntityModule.react',['cx','fbt','Link.react','React','SearchEntityModuleResult.react','SearchEntityModuleServerConstants','SearchResultsPageUnitDataTypedLogger','XUICard.react','XUICardHeader.react','XUICardHeaderTitle.react','XUICardSection.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(m){k.constructor.call(this,m);this.onSeeMoreLinkClick=function(event){event.preventDefault();this.setState({isExpanded:true});}.bind(this);this.state={isExpanded:this.props.num_results_to_show==null};this.seeMoreLoggingData={};}l.prototype.componentDidMount=function(){if(this.props.logging_unit_id!=null&&this.props.is_bootstrap_entity_module)this.logUnitData();};l.prototype.render=function(){var m=this.props.num_results_to_show,n=!this.state.isExpanded&&m!=null?this.props.results.slice(0,m):this.props.results;if(n.count()===0)return c('React').createElement('div',null);n=n.map(function(s,t){return c('React').createElement(c('SearchEntityModuleResult.react'),{key:s.tuid,result:s,position_in_module:t,browse_query:this.props.browse_query,client_view_config:this.props.client_view_config,browse_session_id:this.props.browse_session_id,typeahead_session_id:this.props.typeahead_session_id,module_style:this.props.module_style,module_role:this.props.module_role,results:this.props.results,plain_text_query:this.props.plain_text_query,logging_unit_id:this.props.logging_unit_id,callsite:this.props.callsite,has_module_guidelines:this.props.has_module_guidelines});}.bind(this));var o=c('React').createElement(c('Link.react'),babelHelpers['extends']({},this.getSeeMoreLoggingData('footer'),{href:'',onClick:this.onSeeMoreLinkClick,className:"_5w9f"+(this.state.isExpanded||m==null||this.props.results.size<=m?' '+"hidden_elem":'')}),i._("Ver mais")),p=void 0,q=void 0;if(this.props.see_more_uri!=null){p=c('React').createElement(c('Link.react'),babelHelpers['extends']({},this.getSeeMoreLoggingData('header'),{href:this.props.see_more_uri}),i._("Ver tudo"));q=c('React').createElement(c('Link.react'),babelHelpers['extends']({},this.getSeeMoreLoggingData('footer'),{href:this.props.see_more_uri,className:"_5w9f"+(!this.state.isExpanded&&m!=null&&this.props.results.size>m?' '+"hidden_elem":'')}),i._("Ver tudo"));}var r=this.props.title instanceof Object&&this.props.title.__html!=null?c('React').createElement('span',{dangerouslySetInnerHTML:this.props.title}):this.props.title;return c('React').createElement('div',{className:"_5w7z"+(this.props.result_type==='user'?' '+"_5w81":'')+(this.props.result_type==='page'?' '+"_5w82":'')+(this.props.result_type==='group'?' '+"_5w84":'')+(this.props.result_type==='application'?' '+"_3h4u":'')+(this.props.result_type==='place'?' '+"_5w9b":'')+(this.props.result_type==='event'?' '+"_5w9c":'')},c('React').createElement(c('XUICard.react'),{className:"_5w9d"},c('React').createElement(c('XUICardHeader.react'),{link:p,type:'primary'},c('React').createElement(c('XUICardHeaderTitle.react'),null,c('React').createElement('div',{className:"_5w9e"}),r)),c('React').createElement(c('XUICardSection.react'),null,n,o,q)));};l.prototype.getSeeMoreLoggingData=function(m){if(this.seeMoreLoggingData[m]!=null)return this.seeMoreLoggingData[m];var n=c('SearchEntityModuleServerConstants').WWW_GRAPH_SEARCH_RESULTS_TRACKABLE_CODE,o=c('SearchEntityModuleServerConstants').SEE_MORE_LOGGING.MODULE_HEADER_ITEM_TYPE,p=c('SearchEntityModuleServerConstants').SEE_MORE_LOGGING.MODULE_FOOTER_ITEM_TYPE,q=n+JSON.stringify({item_type:m==='header'?o:p,module_type:this.props.module_role,query:this.props.browse_query,session_id:this.props.browse_session_id,source_module_role:this.props.module_role,vertical:'content'});this.seeMoreLoggingData[m]={'data-xt':q,'data-gt':JSON.stringify({type:'xtracking',xt:q}),'data-xt-vimp':JSON.stringify(this.props.client_view_config),'data-vistracking':'1','data-bt':JSON.stringify({ct:'see_more',source_module_role:this.props.module_role})};return this.seeMoreLoggingData[m];};l.prototype.logUnitData=function(){new (c('SearchResultsPageUnitDataTypedLogger'))().setLoggingUnitID(this.props.logging_unit_id).setCaller(this.props.callsite).setQuery(this.props.plain_text_query).setQueryFunction(this.props.browse_query).setVertical('content').setSessionID(this.props.browse_session_id).setItemsCount(String(this.props.results.size)).setEntityIds(this.props.results.map(function(m){return m.tuid;})).setQueryLength(this.props.plain_text_query.length).setResultsModuleResultType(this.props.result_type).setResultsModuleRole(this.props.module_role).setResultsModuleSubtype(this.props.result_type).setResultsModuleSemantic(this.props.browse_query).log();};f.exports=l;}),null);
__d('SearchEntityModuleDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.dispatch=this.dispatch.bind(this);}f.exports=new j({strict:true});}),null);
__d('SearchEntityModuleUIConstants',['fbt'],(function a(b,c,d,e,f,g,h){'use strict';var i={Actions:{ADD_MODULE:'ADD_MODULE',ADD_RESULTS:'ADD_RESULTS',REMOVE_ALL_RESULTS_AND_MODULES:'REMOVE_ALL_RESULTS_AND_MODULES'},MODULE_ROLE_TO_TITLE:{user:h._("Pessoas"),page:h._("P\u00e1ginas"),group:h._("Grupos"),application:h._("Aplicativos"),place:h._("Locais"),event:h._("Eventos")}};f.exports=i;}),null);
__d('SearchEntityModuleActions',['SearchEntityModuleDispatcher','SearchEntityModuleUIConstants'],(function a(b,c,d,e,f,g){'use strict';var h=c('SearchEntityModuleUIConstants').Actions,i={addModule:function j(k,l){var m={type:h.ADD_MODULE,value:{sessionID:k,module:l}};c('SearchEntityModuleDispatcher').dispatch(m);},addResultsToModule:function j(k,l,m){var n={type:h.ADD_RESULTS,value:{sessionID:k,module:l,results:m}};c('SearchEntityModuleDispatcher').dispatch(n);},clearAllResultsAndModules:function j(k){var l={type:h.REMOVE_ALL_RESULTS_AND_MODULES,value:{sessionID:k}};c('SearchEntityModuleDispatcher').dispatch(l);}};f.exports=i;}),null);
__d('SearchEntityModuleContainerStore',['FluxReduceStore','immutable','SearchEntityModuleDispatcher','SearchEntityModuleUIConstants'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('SearchEntityModuleUIConstants').Actions;h=babelHelpers.inherits(k,c('FluxReduceStore'));i=h&&h.prototype;k.prototype.getInitialState=function(){return c('immutable').Map();};k.prototype.reduce=function(l,m){var n=void 0,o=m.value.sessionID;switch(m.type){case j.ADD_MODULE:n=l.get(o);if(n==null)n=new (c('immutable').List)([]);n=n.push(babelHelpers['extends']({},m.value.module,{results:c('immutable').List([])}));l=l.set(o,n);break;case j.ADD_RESULTS:n=l.get(o);if(n==null)n=new (c('immutable').List)([]);n=this.addResultsWithoutDupes(o,n,m.value.module,m.value.results);l=l.set(o,n);break;case j.REMOVE_ALL_RESULTS_AND_MODULES:n=l.get(o);if(n!=null){n=n.clear();l=l.set(o,n);}break;default:break;}return l;};k.prototype.addResultsWithoutDupes=function(l,m,n,o){f=m.find(function(y){return y.role===n.role&&y.is_bootstrap_entity_module===n.is_bootstrap_entity_module;});if(f==null)return m;var p=f.results,q=m.first();if(q!=null&&q.is_bootstrap_entity_module)p=q.results.concat(p);var r=p.map(function(y){return y.tuid;}),s=[];for(var t=o,u=Array.isArray(t),v=0,t=u?t:t[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var w;if(u){if(v>=t.length)break;w=t[v++];}else{v=t.next();if(v.done)break;w=v.value;}var x=w;if(r.indexOf(x.tuid)===-1){r.push(x.tuid);s.push(x);}}f.results=f.results.concat(s);return m;};k.prototype.getResults=function(l,m){var n=this.getState().get(l),o=null;for(var p=n,q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s;if(t.role===m.role&&t.is_bootstrap_entity_module===m.is_bootstrap_entity_module)o=t;}var u=n.get(0),v=n.get(1);if(o!=null&&u!=null&&u.is_bootstrap_entity_module&&u.results.size>0&&v!=null&&v.results.size>0){var w=u.results.first().type,x=v.results.first().type,y=w===x;if(y)if(o===u){return u.results.concat(v.results);}else if(o===v)return c('immutable').List([]);}if(o!=null)return o.results;return c('immutable').List([]);};k.prototype.getModules=function(l){var m=this.getState(),n=this.getState().get(l);if(n==null){n=new (c('immutable').List)([]);m.set(l,n);}return n;};function k(){h.apply(this,arguments);}f.exports=new k(c('SearchEntityModuleDispatcher'));}),null);
__d('SearchEntityModuleContainer.react',['FluxContainer','immutable','React','SearchEntityModule.react','SearchEntityModuleActions','SearchEntityModuleContainerStore','SearchEntityModuleDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.getStores=function(){return [c('SearchEntityModuleContainerStore')];};j.calculateState=function(k,l){return {modules:c('SearchEntityModuleContainerStore').getModules(l.browse_session_id)};};j.prototype.componentWillMount=function(){c('SearchEntityModuleDispatcher').explicitlyRegisterStores([c('SearchEntityModuleContainerStore')]);};j.prototype.componentWillUnmount=function(){c('SearchEntityModuleActions').clearAllResultsAndModules(this.props.browse_session_id);};j.prototype.render=function(){var k=this.state.modules,l=k.find(function(n){return n.role===this.props.module_role&&n.is_bootstrap_entity_module===this.props.is_bootstrap_entity_module;}.bind(this));if(l!=null&&l.component==null){l.component=this;c('SearchEntityModuleActions').addResultsToModule(this.props.browse_session_id,{role:this.props.module_role,is_bootstrap_entity_module:this.props.is_bootstrap_entity_module},c('immutable').List(this.props.results));this.forceUpdate();return c('React').createElement('div',null);}if(l!=null&&l.component===this){var m=c('SearchEntityModuleContainerStore').getResults(this.props.browse_session_id,{role:this.props.module_role,is_bootstrap_entity_module:this.props.is_bootstrap_entity_module});return c('React').createElement(c('SearchEntityModule.react'),{plain_text_query:this.props.plain_text_query,browse_query:this.props.browse_query,module_role:this.props.module_role,result_type:this.props.result_type,results:m,num_results_to_show:this.props.num_results_to_show,client_view_config:this.props.client_view_config,typeahead_session_id:this.props.typeahead_session_id,browse_session_id:this.props.browse_session_id,module_style:this.props.module_style,title:this.props.title,see_more_uri:this.props.see_more_uri,logging_unit_id:this.props.logging_unit_id,is_bootstrap_entity_module:this.props.is_bootstrap_entity_module,callsite:this.props.callsite,has_module_guidelines:this.props.has_module_guidelines});}return c('React').createElement('div',null);};function j(){h.apply(this,arguments);}f.exports=c('FluxContainer').create(j,{withProps:true});}),null);
__d('SearchEntityModuleUtils',['SearchEntityModuleActions','SearchEntityModuleContainerStore','SearchEntityModuleDispatcher'],(function a(b,c,d,e,f,g){'use strict';f.exports={addModules:function h(i,j){var k;c('SearchEntityModuleDispatcher').explicitlyRegisterStores([c('SearchEntityModuleContainerStore')]);var l=c('SearchEntityModuleContainerStore').getModules(j),m=function s(t){var u=l.find(function(v){return v.role===t.role&&v.is_bootstrap_entity_module===t.is_bootstrap_entity_module;});if(u==null)c('SearchEntityModuleActions').addModule(j,t);};for(var n=i,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q;m(r);}}};}),null);
__d('SearchBootstrapEntityModule',['cx','fbt','Arbiter','DOM','FacebarJSConstants','React','ReactRenderer','SearchEntityModuleContainer.react','SearchEntityModuleContainerStore','SearchEntityModuleDispatcher','SearchEntityModuleServerConstants','SearchEntityModuleUtils','URI','XUINotice.react','$','tidyEvent'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=false,k='pagelet_loader_browse:independent:modules:pagelet',l='pagelet_loader_initial_browse_result',m={init:function n(o){c('tidyEvent')(c('Arbiter').subscribe('pagelet_event',function(event,p){if(event==='display'&&(p.id===k||p.id===l))j=true;}));c('Arbiter').inform('FacebarDataSource.getBootstrapMatches',{query:o.plain_text_query,callback:function p(q){m.onBootstrapResponse(o,q);}},c('Arbiter').BEHAVIOR_PERSISTENT);},onBootstrapResponse:function n(o,p){if(j||p.length===0){if(j){m.printDebugNotice(o,'BEM not shown because backend returned faster');}else m.printDebugNotice(o,'BEM not shown because there were no matches');return;}p=p.sort(function(v,w){return v.bootstrapCost-w.bootstrapCost;});var q=void 0;p=p.reduce(function(v,w){if(w.type==='app')w.type='application';if(w.render_type==='place')w.type='place';if(q==null&&w.type!==c('FacebarJSConstants').keywordType)q=w.type;if(w.type===q&&v.length<o.num_bootstrap_entity_results_to_show){if(w.subtext!=null){w.snippets=w.subtext.split(/\s*\u00B7s*/g).map(function(y){return c('DOM').create('span',{},y);});var x=w.snippets.pop();w.snippets=w.snippets.slice(0,o.num_snippets-1);if(x!=null)w.snippets.push(x);}else w.snippets=[];w.is_bootstrap=true;if(q!=null)w.module_role=c('SearchEntityModuleServerConstants').RESULT_TYPE_TO_MODULE_ROLE[q];w.uri=new (c('URI'))(w.path).addQueryData('ref',c('SearchEntityModuleServerConstants').BROWSE_RESULTS_PAGE_REF);v.push(w);}return v;},[]);if(q==null){m.printDebugNotice(o,'BEM not shown because no proper matches were found');return;}var r=null;switch(q){case 'user':r=i._("Pessoas");break;case 'page':r=i._("P\u00e1ginas");break;case 'group':r=i._("Grupos");break;case 'application':r=i._("Aplicativos");break;case 'place':r=i._("Locais");break;case 'event':r=i._("Eventos");break;}if(r==null){m.printDebugNotice(o,'BEM not shown because no proper title could be found for result type\n         '+q);return;}var s=new (c('URI'))(c('SearchEntityModuleServerConstants').TYPE_TO_SERP_PATH[q]).setQueryData({q:o.plain_text_query,ref:o.see_more_ref});c('SearchEntityModuleDispatcher').explicitlyRegisterStores([c('SearchEntityModuleContainerStore')]);var t=c('SearchEntityModuleContainerStore').getModules(o.browse_session_id);if(t.size>0){m.printDebugNotice(o,'BEM not shown due to backend returning much faster');return;}var u=c('SearchEntityModuleServerConstants').RESULT_TYPE_TO_MODULE_ROLE[q];c('SearchEntityModuleUtils').addModules([{role:u,is_bootstrap_entity_module:true}],o.browse_session_id);m.printDebugNotice(o,'BEM shown below');c('ReactRenderer').constructAndRenderComponent(c('SearchEntityModuleContainer.react'),{plain_text_query:o.plain_text_query,browse_query:o.browse_query,results:p,result_type:q,module_role:u,is_bootstrap_entity_module:true,num_results_to_show:o.num_results_to_show,client_view_config:o.client_view_config,browse_session_id:o.browse_session_id,typeahead_session_id:o.typeahead_session_id,module_style:o.module_style,title:r,see_more_uri:s,logging_unit_id:o.logging_unit_id,callsite:o.callsite,has_module_guidelines:o.has_module_guidelines},o.root);},printDebugNotice:function n(o,p){if(!o.debug)return;var q=c('DOM').create('div');c('ReactRenderer').renderComponent(c('React').createElement(c('XUINotice.react'),{className:"_3-96"},'FB Only: ',p,'.'),q);c('DOM').prependContent(c('$')('browse_result_area'),q);}};f.exports=m;}),null);
__d('SearchCommentHighlighter',['csx','Arbiter','CSS','NodeHighlighter','Parent','UFIUIEvents'],(function a(b,c,d,e,f,g,h){var i='data-highlight-tokens',j=babelHelpers['extends']({},c('NodeHighlighter'),{_enableCommentHighlighting:function k(){if(this._subscription)return;this._subscription=c('Arbiter').subscribe(c('UFIUIEvents').Changed,function(l,m){var n=m.form;return this._highlightComments(n);}.bind(this));c('Arbiter').subscribeOnce('pre_page_transition',function(){return this._disableCommentHighlighting();}.bind(this));},_disableCommentHighlighting:function k(){this._subscription.unsubscribe();this._subscription=null;},_highlightComments:function k(l){var m=this._getHighlightTokens(l);if(m)c('NodeHighlighter').highlight.call(this,l,m);},_getHighlightTokens:function k(l){var m=c('Parent').byAttribute(l,i);return m?JSON.parse(m.getAttribute(i)):null;},isDiscardNode:function k(l){return c('CSS').hasClass(l,'highlightNode');},getHighlightCandidates:function k(){return [".UFICommentContent"];},highlight:function k(l,m){if(!l.setAttribute)return;l.setAttribute(i,JSON.stringify(m));this._enableCommentHighlighting();}});f.exports=j;}),null);
__d('FbFeedHighlighter',['csx','cx','CSS','NodeHighlighter','SearchCommentHighlighter'],(function a(b,c,d,e,f,g,h,i){var j="_58cn",k=babelHelpers['extends']({},c('NodeHighlighter'),{getHighlightCandidates:function l(){return ["._5pbw","._5pbx","._6m6","._6m7","._59tj","._5b-_","._5b_0","._4_j6",".commentBody","._6lc","._6s_"];},isStopNode:function l(m){return c('CSS').hasClass(m,j);},isDiscardNode:function l(m){return c('CSS').hasClass(m,'text_exposed_link');},highlight:function l(m,n){c('NodeHighlighter').highlight.call(this,m,n);c('SearchCommentHighlighter').highlight(m,n);}});f.exports=k;}),null);