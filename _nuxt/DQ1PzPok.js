const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BFeZOmiA.js","./yRIMB9-u.js","./DlAUqK2U.js","./BBdUjE0y.js","./entry.B1WGCo7_.css","./DrFnhXUb.js","./CZYRI0Y1.js","./About.gVmlhg9l.css","./DaheNSGU.js","./Ddu0gD6Q.js","./DMVydrUR.js","./CnQmv3d6.js","./DQEf4zZE.js","./DiYQX-Ty.js","./CCcLPskG.js","./Bq70nq1J.js","./4lYzj0af.js","./DH_nuhzp.js"])))=>i.map(i=>d[i]);
import{I as tn,J as Nn,u as zn,L as Hn,M as gn,N as Fn,O as Wn,p as ln,P as Vn,Q as Kn,d as rn,s as qn,y as Xn,A as E,R as un,S as mn,U as Yn,V as hn,W as Qn,X as sn,Y as yn,Z as j,$ as G,a0 as F,a1 as vn,a2 as Gn,a3 as Zn,_ as M,i as Jn,G as ne,n as ee,E as cn,a4 as te,a5 as le,r as re,a6 as oe,a7 as ae,a8 as ie,a9 as ue}from"./BBdUjE0y.js";import{t as se}from"./CZYRI0Y1.js";function ce(){return ln().public["nuxt-scripts"]}const pe=["onNuxtReady","client"],de=["preconnect","dns-prefetch"];function fe(n,e,t){const{src:l}=n,o=Vn(l),r=e&&de.includes(e),i=r?`${o.protocol}${o.host}`:l,s=!!o.host;if(!e||r&&!s)return;const c={href:i,rel:e,...Ce(n,["crossorigin","referrerpolicy","fetchpriority","integrity"])},u={fetchpriority:"low"};return e==="preload"&&(u.as="script"),s&&(u.crossorigin="anonymous",u.referrerpolicy="no-referrer"),Kn({link:[tn(c,u)]},{head:t,tagPriority:"high"})}function ge(n,e){var c,u,p;n=typeof n=="string"?{src:n}:n,e=tn(e,(c=ce())==null?void 0:c.defaultScriptOptions);const t=String(Nn(n)),l=zn(),o=e.head||Hn();l.$scripts=l.$scripts||gn({});const r=!!((u=l.$scripts)!=null&&u[t]);!e.warmupStrategy&&pe.includes(String(e.trigger))&&(e.warmupStrategy="preload"),e.trigger==="onNuxtReady"&&(e.trigger=Fn),r||(p=performance==null?void 0:performance.mark)==null||p.call(performance,"mark_feature_usage",{detail:{feature:e.performanceMarkFeature??`nuxt-scripts:${t}`}});const i=Wn(n,e);i.warmup=d=>{i._warmupEl||(i._warmupEl=fe(n,d,o))},e.warmupStrategy&&i.warmup(e.warmupStrategy);const s=i.remove;return i.remove=()=>{var d;return(d=i._warmupEl)==null||d.dispose(),l.$scripts[t]=void 0,s()},l.$scripts[t]=i,i}const B=Object.assign(()=>{},{__unenv__:!0}),me=B,he=B,ye=B,ve=B,A=B,Y=B;function be(n){return(ln().public.scripts||{})[n]}function Se(n,e,t){const l=be(n),o=Object.assign(t,typeof l=="object"?l:{}),r=e(o),i=tn(o.scriptInput,r.scriptInput,{key:n}),s=Object.assign((o==null?void 0:o.scriptOptions)||{},r.scriptOptions||{}),c=s.beforeInit;return s.beforeInit=()=>{var u;c==null||c(),(u=r.clientInit)==null||u.call(r)},ge(i,s)}function Ce(n,e){const t={};for(const l of e)l in n&&(t[l]=n[l]);return t}const pn=[A("hash"),A("outbound-links"),A("file-downloads"),A("tagged-events"),A("revenue"),A("pageview-props"),A("compat"),A("local"),A("manual")];me({domain:ye(),extension:ve(Y([Y(pn),he(Y(pn))]))});function we(n){return Se("plausibleAnalytics",e=>{const t=Array.isArray(e==null?void 0:e.extension)?e.extension.join("."):[e==null?void 0:e.extension];return{scriptInput:{src:e!=null&&e.extension?`https://plausible.io/js/script.${t}.js`:"https://plausible.io/js/script.js","data-domain":e==null?void 0:e.domain},schema:void 0,scriptOptions:{use(){return{plausible:window.plausible}}}}},n)}const ke=rn({__name:"FolioMeta",props:{page:{},isWriting:{type:Boolean}},setup(n){we({domain:"canvas.hrcd.fr",scriptInput:{src:"https://analytics.hrcd.fr/js/script.js"}});const e=qn(),{link:t,seo:l,profile:o}=Xn(),r=E(()=>{var s,c,u,p;return{title:n.isWriting?(s=n.page)==null?void 0:s.title:((c=n.page)==null?void 0:c.title)||l.title,description:n.isWriting?(u=n.page)==null?void 0:u.description:((p=n.page)==null?void 0:p.description)||l.description}}),i=s=>e.path==="/"?s||`${l.title}`:n.isWriting?s:`${s} | ${l.title}`;return un({title:r.value.title,meta:[{property:"og:site_name",content:l.title},{property:"og:title",content:r.value.title},{property:"og:description",content:r.value.description},{property:"og:type",content:n.isWriting?"article":"website"},{property:"og:url",content:l.url},{name:"author",content:o.name},{name:"description",content:r.value.description},{name:"twitter:title",content:r.value.title},{name:"twitter:description",content:r.value.description},{name:"twitter:card",content:"summary_large_image"}]}),un({title:r.value.title,titleTemplate:i,meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"charset",content:"utf-8"},{name:"robots",content:"index, follow"},{name:"color-scheme",content:"light dark"}],link:t}),(s,c)=>mn(s.$slots,"default")}}),ht=Object.assign(ke,{__name:"FolioMeta"}),z=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class H{constructor(e,t,l){this.property=e,this.normal=t,l&&(this.space=l)}}H.prototype.property={};H.prototype.normal={};H.prototype.space=null;function bn(n,e){const t={},l={};let o=-1;for(;++o<n.length;)Object.assign(t,n[o].property),Object.assign(l,n[o].normal);return new H(t,l,e)}function Z(n){return n.toLowerCase()}class P{constructor(e,t){this.property=e,this.attribute=t}}P.prototype.space=null;P.prototype.boolean=!1;P.prototype.booleanish=!1;P.prototype.overloadedBoolean=!1;P.prototype.number=!1;P.prototype.commaSeparated=!1;P.prototype.spaceSeparated=!1;P.prototype.commaOrSpaceSeparated=!1;P.prototype.mustUseProperty=!1;P.prototype.defined=!1;let xe=0;const f=I(),b=I(),Sn=I(),a=I(),h=I(),$=I(),x=I();function I(){return 2**++xe}const J=Object.freeze(Object.defineProperty({__proto__:null,boolean:f,booleanish:b,commaOrSpaceSeparated:x,commaSeparated:$,number:a,overloadedBoolean:Sn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),Q=Object.keys(J);class on extends P{constructor(e,t,l,o){let r=-1;if(super(e,t),dn(this,"space",o),typeof l=="number")for(;++r<Q.length;){const i=Q[r];dn(this,Q[r],(l&J[i])===J[i])}}}on.prototype.defined=!0;function dn(n,e,t){t&&(n[e]=t)}const Pe={}.hasOwnProperty;function U(n){const e={},t={};let l;for(l in n.properties)if(Pe.call(n.properties,l)){const o=n.properties[l],r=new on(l,n.transform(n.attributes||{},l),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(l)&&(r.mustUseProperty=!0),e[l]=r,t[Z(l)]=l,t[Z(r.attribute)]=l}return new H(e,t,n.space)}const Cn=U({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),wn=U({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function kn(n,e){return e in n?n[e]:e}function xn(n,e){return kn(n,e.toLowerCase())}const Pn=U({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:xn,properties:{xmlns:null,xmlnsXLink:null}}),On=U({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:b,ariaAutoComplete:null,ariaBusy:b,ariaChecked:b,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:b,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:b,ariaFlowTo:h,ariaGrabbed:b,ariaHasPopup:null,ariaHidden:b,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:a,ariaLive:null,ariaModal:b,ariaMultiLine:b,ariaMultiSelectable:b,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:b,ariaReadOnly:b,ariaRelevant:null,ariaRequired:b,ariaRoleDescription:h,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:b,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}}),Oe=U({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:xn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:f,allowPaymentRequest:f,allowUserMedia:f,alt:null,as:null,async:f,autoCapitalize:null,autoComplete:h,autoFocus:f,autoPlay:f,blocking:h,capture:null,charSet:null,checked:f,cite:null,className:h,cols:a,colSpan:null,content:null,contentEditable:b,controls:f,controlsList:h,coords:a|$,crossOrigin:null,data:null,dateTime:null,decoding:null,default:f,defer:f,dir:null,dirName:null,disabled:f,download:Sn,draggable:b,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:f,formTarget:null,headers:h,height:a,hidden:f,high:a,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:f,inputMode:null,integrity:null,is:null,isMap:f,itemId:null,itemProp:h,itemRef:h,itemScope:f,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:f,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:f,muted:f,name:null,nonce:null,noModule:f,noValidate:f,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:f,optimum:a,pattern:null,ping:h,placeholder:null,playsInline:f,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:f,referrerPolicy:null,rel:h,required:f,reversed:f,rows:a,rowSpan:a,sandbox:h,scope:null,scoped:f,seamless:f,selected:f,shadowRootClonable:f,shadowRootDelegatesFocus:f,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:b,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:f,useMap:null,value:b,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:f,declare:f,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:f,noHref:f,noShade:f,noWrap:f,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:b,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:f,disableRemotePlayback:f,prefix:null,property:null,results:a,security:null,unselectable:null}}),_e=U({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:kn,properties:{about:x,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:f,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$,g2:$,glyphName:$,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:x,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:x,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:x,rev:x,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:x,requiredFeatures:x,requiredFonts:x,requiredFormats:x,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:x,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:x,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:x,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Te=/^data[-\w.:]+$/i,fn=/-[a-z]/g,De=/[A-Z]/g;function Re(n,e){const t=Z(e);let l=e,o=P;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Te.test(e)){if(e.charAt(4)==="-"){const r=e.slice(5).replace(fn,Ee);l="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=e.slice(4);if(!fn.test(r)){let i=r.replace(De,Ae);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}o=on}return new o(l,e)}function Ae(n){return"-"+n.toLowerCase()}function Ee(n){return n.charAt(1).toUpperCase()}const Le=bn([wn,Cn,Pn,On,Oe],"html");bn([wn,Cn,Pn,On,_e],"svg");const Me=["p","h1","h2","h3","h4","h5","h6","li"];function W(n,e){return n.type===e||typeof n.type=="object"&&n.type.tag===e||n.tag===e}function an(n){return W(n,"text")||W(n,Symbol.for("v-txt"))}function _n(n){var e;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((e=n.children)==null?void 0:e.default)=="function"?n.children.default():[]}function V(n){if(!n)return"";if(Array.isArray(n))return n.map(V).join("");if(an(n))return n.value||n.children||"";const e=_n(n);return Array.isArray(e)?e.map(V).filter(Boolean).join(""):""}function Tn(n,e=[]){if(Array.isArray(n))return n.flatMap(l=>Tn(l,e));let t=n;return e.some(l=>l==="*"||W(n,l))&&(t=_n(n)||n,!Array.isArray(t)&&Me.some(l=>W(n,l))&&(t=[t])),t}function Dn(n,e=[]){return n=Array.isArray(n)?n:[n],e.length?n.flatMap(t=>Dn(Tn(t,[e[0]]),e.slice(1))).filter(t=>!(an(t)&&V(t).trim()==="")):n}function Rn(n,e=[]){return typeof e=="string"&&(e=e.split(/[,\s]/).map(t=>t.trim()).filter(Boolean)),e.length?Dn(n,e).reduce((t,l)=>(an(l)?typeof t[t.length-1]=="string"?t[t.length-1]+=l.children:t.push(l.children):t.push(l),t),[]):n}function Ie(n,e){return e.reduce((t,l)=>{const o=je(n,l);return o!==void 0&&(t[l]=o),t},{})}function je(n,e){return e.split(".").reduce((t,l)=>t&&t[l],n)}const nn="default",An=/^@|^v-on:/,En=/^:|^v-bind:/,$e=/^v-model/,Be=["select","textarea","input"],Ue=["math","svg"],Ne=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),ze=rn({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var c,u,p,d,m,v,k,w;const e=(p=(u=(c=Yn())==null?void 0:c.appContext)==null?void 0:u.app)==null?void 0:p.$nuxt,t=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:l}=((d=e==null?void 0:e.$config)==null?void 0:d.public)||{},o={...(m=l==null?void 0:l.components)!=null&&m.prose&&n.prose!==!1?Ne:{},...((v=l==null?void 0:l.components)==null?void 0:v.map)||{},...hn(((w=(k=n.data)==null?void 0:k.mdc)==null?void 0:w.components)||{}),...n.components},r=E(()=>{var O;const S=(((O=n.body)==null?void 0:O.children)||[]).map(T=>T.tag||T.type).filter(T=>!z.includes(T));return Array.from(new Set(S)).sort().join(".")}),i=gn({...n.data});Qn(()=>n.data,S=>{Object.assign(i,S)}),await Ze(n.body,{tags:o});function s(S,O){const T=S.split(".").length-1;return S.split(".").reduce((L,g,y)=>y==T&&L?(L[g]=O,L[g]):typeof L=="object"?L[g]:void 0,i)}return{tags:o,contentKey:r,route:t,runtimeData:i,updateRuntimeData:s}},render(n){var v,k;const{tags:e,tag:t,body:l,data:o,contentKey:r,route:i,unwrap:s,runtimeData:c,updateRuntimeData:u}=n;if(!l)return null;const p={...o,tags:e,$route:i,runtimeData:c,updateRuntimeData:u},d=t!==!1?en(t||((v=p.component)==null?void 0:v.name)||p.component||"div"):void 0;return d?sn(d,{...(k=p.component)==null?void 0:k.props,class:n.class,...this.$attrs,key:r},{default:m}):m==null?void 0:m();function m(){const w=Ln(l,sn,{documentMeta:p,parentScope:p,resolveComponent:en});return w!=null&&w.default?s?Rn(w.default(),typeof s=="string"?s.split(" "):["*"]):w.default():null}}});function He(n,e,t){const{documentMeta:l,parentScope:o,resolveComponent:r}=t;if(n.type==="text")return e(F,n.value);if(n.type==="comment")return e(Gn,null,n.value);const i=n.tag,s=In(n,l.tags);if(n.tag==="binding")return Fe(n,e,l,o);const c=Mn(s)?d=>d:r;if(s==="script")return e("pre",{class:"script-to-pre"},`<script>
`+V(n)+`
<\/script>`);const u=c(s);typeof u=="object"&&(u.tag=i);const p=We(n,l);return e(u,p,Ln(n,e,{documentMeta:l,parentScope:{...o,...p},resolveComponent:c}))}function Ln(n,e,t){const{documentMeta:l,parentScope:o,resolveComponent:r}=t,s=(n.children||[]).reduce((u,p)=>{if(!Qe(p))return u[nn].children.push(p),u;const d=Ye(p);return u[d]=u[d]||{props:{},children:[]},p.type==="element"&&(u[d].props=p.props,u[d].children.push(...p.children||[])),u},{[nn]:{props:{},children:[]}});return Object.entries(s).reduce((u,[p,{props:d,children:m}])=>(m.length&&(u[p]=(v={})=>{const k=Ie(v,Object.keys(d||{}));let w=m.map(S=>He(S,e,{documentMeta:l,parentScope:{...o,...k},resolveComponent:r}));return d!=null&&d.unwrap&&(w=Rn(w,d.unwrap)),Ge(w)}),u),{})}function Fe(n,e,t,l={}){var u,p;const o={...t.runtimeData,...l,$document:t,$doc:t},r=/\.|\[(\d+)\]/,s=((u=n.props)==null?void 0:u.value.trim().split(r).filter(Boolean)).reduce((d,m)=>{if(d&&m in d)return typeof d[m]=="function"?d[m]():d[m]},o),c=(p=n.props)==null?void 0:p.defaultValue;return e(F,s??c??"")}function We(n,e){const{tag:t="",props:l={}}=n;return Object.keys(l).reduce(function(o,r){if(r==="__ignoreMap")return o;const i=l[r];if($e.test(r))return Ve(r,i,o,e,{native:Be.includes(t)});if(r==="v-bind")return Ke(r,i,o,e);if(An.test(r))return qe(r,i,o,e);if(En.test(r))return Xe(r,i,o,e);const{attribute:s}=Re(Le,r);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(o[s]=i.join(" "),o):(o[s]=i,o)},{})}function Ve(n,e,t,l,{native:o}){var c;const r=((c=n.match(/^v-model:([^=]+)/))==null?void 0:c[1])||"modelValue",i=o?"value":r,s=o?"onInput":`onUpdate:${r}`;return t[i]=X(e,l.runtimeData),t[s]=u=>{var p;l.updateRuntimeData(e,o?(p=u.target)==null?void 0:p.value:u)},t}function Ke(n,e,t,l){const o=X(e,l);return t=Object.assign(t,o),t}function qe(n,e,t,l){return n=n.replace(An,""),t.on=t.on||{},t.on[n]=()=>X(e,l),t}function Xe(n,e,t,l){return n=n.replace(En,""),t[n]=X(e,l),t}const en=n=>{if(typeof n=="string"){if(z.includes(n))return n;const e=yn(j(n),!1);return!n||(e==null?void 0:e.name)==="AsyncComponentWrapper"||typeof e=="string"?e:"setup"in e?G(()=>new Promise(t=>t(e))):e}return n};function X(n,e){const t=n.split(".").reduce((l,o)=>typeof l=="object"?l[o]:void 0,e);return typeof t>"u"?Zn(n):t}function Ye(n){let e="";for(const t of Object.keys(n.props||{}))if(!(!t.startsWith("#")&&!t.startsWith("v-slot:"))){e=t.split(/[:#]/,2)[1];break}return e||nn}function Qe(n){return n.tag==="template"}function Mn(n){return Ue.includes(n)}function Ge(n){const e=[];for(const t of n){const l=e[e.length-1];t.type===F&&(l==null?void 0:l.type)===F?l.children=l.children+t.children:e.push(t)}return e}async function Ze(n,e){if(!n)return;const t=Array.from(new Set(l(n,e)));await Promise.all(t.map(async o=>{if(o!=null&&o.render||o!=null&&o.ssrRender||o!=null&&o.__ssrInlineRender)return;const r=en(o);r!=null&&r.__asyncLoader&&!r.__asyncResolved&&await r.__asyncLoader()}));function l(o,r){const i=o.tag;if(o.type==="text"||i==="binding"||o.type==="comment")return[];const s=In(o,r.tags);if(Mn(s))return[];const c=[];o.type!=="root"&&!z.includes(s)&&c.push(s);for(const u of o.children||[])c.push(...l(u,r));return c}}function In(n,e){var l;const t=n.tag;return!t||typeof((l=n.props)==null?void 0:l.__ignoreMap)<"u"?t:e[t]||e[j(t)]||e[vn(n.tag)]||t}const Je=Object.assign(ze,{__name:"MDCRenderer"});function nt(n){return{type:"root",children:n.value.map(jn)}}function jn(n){if(typeof n=="string")return{type:"text",value:n};const[e,t,...l]=n;return{type:"element",tag:e,props:t,children:l.map(jn)}}const et=()=>M(()=>import("./BFeZOmiA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),tt=()=>M(()=>import("./DaheNSGU.js"),__vite__mapDeps([8,1,2,3,4,9,10,11,5,6]),import.meta.url),lt=()=>M(()=>import("./DQEf4zZE.js"),__vite__mapDeps([12,3,4]),import.meta.url),rt=()=>M(()=>import("./DiYQX-Ty.js"),__vite__mapDeps([13,3,4,14,10,11,6,1,2,5]),import.meta.url),ot=()=>M(()=>import("./Bq70nq1J.js"),__vite__mapDeps([15,1,2,3,4,5,6]),import.meta.url),at=()=>M(()=>import("./4lYzj0af.js"),__vite__mapDeps([16,1,2,3,4,9,5,6]),import.meta.url),$n=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],Bn=["About","Contact","Experiences","Home","Works","Writing"],it=Object.freeze(Object.defineProperty({__proto__:null,About:et,Contact:tt,Experiences:lt,Home:rt,Works:ot,Writing:at,globalComponents:$n,localComponents:Bn},Symbol.toStringTag,{value:"Module"})),ut=rn({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var S,O,T,L;const e=["render","ssrRender","__ssrInlineRender"],t=n,l=!1,o=E(()=>{let g=t.value.body||t.value;return t.excerpt&&t.value.excerpt&&(g=t.value.excerpt),g.type==="minimal"?nt(g):g}),r=E(()=>{var g,y;return!((y=(g=o.value)==null?void 0:g.children)!=null&&y.length)}),i=E(()=>{const{body:g,excerpt:y,...C}=t.value;return{...C,...t.data}}),s=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(g=>[g,`prose-${g}`])),{mdc:c}=ln().public||{},u={...(S=c==null?void 0:c.components)!=null&&S.prose&&t.prose!==!1?s:{},...((O=c==null?void 0:c.components)==null?void 0:O.map)||{},...hn(((L=(T=t.data)==null?void 0:T.mdc)==null?void 0:L.components)||{}),...t.components},p=E(()=>{}),d=E(()=>o.value?v(o.value,{tags:u}):{});function m(g){let y=g;if(typeof g=="string"){if(z.includes(g))return g;if($n.includes(j(g))?y=yn(g,!1):Bn.includes(j(g))&&(y=G(()=>M(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(D=>{const R=D[j(g)];return R?R():void 0}))),typeof y=="string")return y}if(!y)return y;const C=y;return"__asyncLoader"in C?C:"setup"in C?G(()=>Promise.resolve(C)):C}function v(g,y){if(!g)return;const C=Array.from(new Set(k(g,y))),_={};for(const[D,R]of C)if(!_[D]){if(typeof R=="object"&&e.some(Un=>Object.hasOwnProperty.call(R,Un))){_[D]=R;continue}_[D]=m(R)}return _}function k(g,y){const C=g.tag;if(g.type==="text"||C==="binding"||g.type==="comment")return[];const _=w(g,y.tags),D=[];g.type!=="root"&&!z.includes(_)&&D.push([C,_]);for(const R of g.children||[])D.push(...k(R,y));return D}function w(g,y){var _;const C=g.tag;return!C||typeof((_=g.props)==null?void 0:_.__ignoreMap)<"u"?C:y[C]||y[j(C)]||y[vn(g.tag)]||C}return(g,y)=>r.value?mn(g.$slots,"empty",{key:1,body:o.value,data:i.value,dataContentId:cn(l)?n.value.id:void 0}):(Jn(),ne(Je,{key:p.value,body:o.value,data:i.value,class:ee(t.class),tag:t.tag,prose:t.prose,unwrap:t.unwrap,components:d.value,"data-content-id":cn(l)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),yt=Object.assign(ut,{__name:"ContentRenderer"}),K=(n,e)=>{const t=n._conditions;return t.length>0?`(${t.join(` ${e} `)})`:""},q=n=>{const e=[],t={_conditions:e,where(l,o,r){let i;switch(o.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(r)){const s=r.map(c=>N(c)).join(", ");i=`"${String(l)}" ${o.toUpperCase()} (${s})`}else throw new TypeError(`Value for ${o} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(r)&&r.length===2)i=`"${String(l)}" ${o.toUpperCase()} ${N(r[0])} AND ${N(r[1])}`;else throw new Error(`Value for ${o} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":i=`"${String(l)}" ${o.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":i=`"${String(l)}" ${o.toUpperCase()} ${N(r)}`;break;default:i=`"${String(l)}" ${o} ${N(typeof r=="boolean"?Number(r):r)}`}return e.push(`${i}`),t},andWhere(l){const o=l(q());return e.push(K(o,"AND")),t},orWhere(l){const o=l(q());return e.push(K(o,"OR")),t}};return t},st=(n,e)=>{const t={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},l={__params:t,andWhere(r){const i=r(q());return t.conditions.push(K(i,"AND")),l},orWhere(r){const i=r(q());return t.conditions.push(K(i,"OR")),l},path(r){return l.where("path","=",te(r))},skip(r){return t.offset=r,l},where(r,i,s){return l.andWhere(c=>c.where(String(r),i,s)),l},limit(r){return t.limit=r,l},select(...r){return r.length&&t.selectedFields.push(...r),l},order(r,i){return t.orderBy.push(`"${String(r)}" ${i}`),l},async all(){return e(n,o()).then(r=>r||[])},async first(){return e(n,o({limit:1})).then(r=>r[0]||null)},async count(r="*",i=!1){return e(n,o({count:{field:String(r),distinct:i}})).then(s=>s[0].count)}};function o(r={}){let i="SELECT ";if(r!=null&&r.count)i+=`COUNT(${r.count.distinct?"DISTINCT ":""}${r.count.field}) as count`;else{const c=Array.from(new Set(t.selectedFields));i+=c.length>0?c.map(u=>`"${String(u)}"`).join(", "):"*"}i+=` FROM ${se[String(n)]}`,t.conditions.length>0&&(i+=` WHERE ${t.conditions.join(" AND ")}`),t.orderBy.length>0?i+=` ORDER BY ${t.orderBy.join(", ")}`:i+=" ORDER BY stem ASC";const s=(r==null?void 0:r.limit)||t.limit;return s>0&&(t.offset>0?i+=` LIMIT ${s} OFFSET ${t.offset}`:i+=` LIMIT ${s}`),i}return l};function N(n){return`'${String(n).replace(/'/g,"''")}'`}const vt=n=>{var t,l;const e=(l=(t=le())==null?void 0:t.ssrContext)==null?void 0:l.event;return st(n,(o,r)=>ct(e,o,r))};async function ct(n,e,t){return pt(e,t)}async function pt(n,e){return await M(()=>import("./DH_nuhzp.js"),__vite__mapDeps([17,3,4,6]),import.meta.url).then(l=>l.loadDatabaseAdapter(n)).then(l=>l.all(e))}const dt=/^[^-]+.*-.*[^-]+$/,ft=/^[^_]+.*_.*[^_]+$/;function bt(n,e={}){const t=re([]),l=()=>{t.value.splice(0,t.value.length)},o=oe(l,e.chainDelay??800),r=ae(),i=u=>{if(!u.key)return;const p=/^[a-z]{1}$/i.test(u.key);let d;if(t.value.push(u.key),t.value.length>=2){d=t.value.slice(-2).join("-");for(const m of c.value.filter(v=>v.chained))if(m.key===d){m.enabled&&(u.preventDefault(),m.handler(u)),l();return}}for(const m of c.value.filter(v=>!v.chained))if(u.key.toLowerCase()===m.key&&u.metaKey===m.metaKey&&u.ctrlKey===m.ctrlKey&&!(p&&u.shiftKey!==m.shiftKey)){m.enabled&&(u.preventDefault(),m.handler()),l();return}o()},s=E(()=>{var m,v,k;const u=(m=r.value)==null?void 0:m.tagName,p=(v=r.value)==null?void 0:v.contentEditable;return u==="INPUT"||u==="TEXTAREA"||p==="true"||p==="plaintext-only"?((k=r.value)==null?void 0:k.name)||!0:!1}),c=E(()=>Object.entries(ie(n)).map(([u,p])=>{var k,w;if(!p)return null;let d;u.includes("-")&&u!=="-"&&!((k=u.match(dt))!=null&&k.length)&&console.trace(`[Shortcut] Invalid key: "${u}"`),u.includes("_")&&u!=="_"&&!((w=u.match(ft))!=null&&w.length)&&console.trace(`[Shortcut] Invalid key: "${u}"`);const m=u.includes("-")&&u!=="-";if(m)d={key:u.toLowerCase(),metaKey:!1,ctrlKey:!1,shiftKey:!1,altKey:!1};else{const S=u.toLowerCase().split("_").map(O=>O);d={key:S.filter(O=>!["meta","command","ctrl","shift","alt","option"].includes(O)).join("_"),metaKey:S.includes("meta")||S.includes("command"),ctrlKey:S.includes("ctrl"),shiftKey:S.includes("shift"),altKey:S.includes("alt")||S.includes("option")}}if(d.chained=m,typeof p=="function"?d.handler=p:typeof p=="object"&&(d={...d,handler:p.handler}),!d.handler)return console.trace("[Shortcut] Invalid value"),null;let v=!0;return p.usingInput?typeof p.usingInput=="string"&&(v=s.value===p.usingInput):v=!s.value,d.enabled=v,d}).filter(Boolean));return ue("keydown",i)}export{ht as _,yt as a,bt as d,Rn as f,vt as q};
