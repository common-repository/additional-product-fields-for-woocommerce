var RedNaoFormBuilderPr=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1121)}({0:function(e,t){e.exports=React},1:function(e,t,o){e.exports=o(92)()},1121:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(2),i=o(559),a=o(560),s=o(21),u=o(148),c=o(149),l=o.n(c);n.EventManager.Subscribe(i.GetFieldDescription,(function(e){return""==e.Field.Options.Description||"<p></p>"==e.Field.Options.Description?null:r.createElement("div",{className:"rnDescription"},r.createElement("div",{dangerouslySetInnerHTML:{__html:e.Field.Options.Description}}),r.createElement("div",{style:{clear:"both"}}))})),n.EventManager.Subscribe(a.GetToolTip,(function(e){return""==e.Field.Options.Tooltip||"<p></p>"==e.Field.Options.Tooltip?null:r.createElement(l.a,{className:"toolTipContainer",content:r.createElement("div",{className:"rnDescription",dangerouslySetInnerHTML:{__html:e.Field.Options.Tooltip}}),background:"black",color:"white",styles:{display:"inline-block",zIndex:1e5,verticalAlign:"bottom"}},r.createElement("span",{className:"tooltipIcon",style:{marginLeft:2,cursor:"pointer"}},r.createElement(s.FontAwesomeIcon,{icon:u.faQuestionCircle})))}))},148:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[],n="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z";t.definition={prefix:"fas",iconName:"question-circle",icon:[512,512,r,"f059",n]},t.faQuestionCircle=t.definition,t.prefix="fas",t.iconName="question-circle",t.width=512,t.height=512,t.ligatures=r,t.unicode="f059",t.svgPathData=n},149:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(o(0)),n=s(o(1)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(256)),a=s(o(163));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){b(e,t,o[t])}))}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,o){return t&&p(e.prototype,t),o&&p(e,o),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=function(e){return e.stopPropagation()},y=function(e){function t(){var e,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,e=!(r=f(t).call(this))||"object"!==u(r)&&"function"!=typeof r?d(o):r,b(d(e),"debounceTimeout",!1),b(d(e),"hoverTimeout",!1),e.state={showTip:!1,hasHover:!1,ignoreShow:!1,hasBeenShown:!1},e.showTip=e.showTip.bind(d(e)),e.hideTip=e.hideTip.bind(d(e)),e.checkHover=e.checkHover.bind(d(e)),e.toggleTip=e.toggleTip.bind(d(e)),e.startHover=e.startHover.bind(d(e)),e.endHover=e.endHover.bind(d(e)),e.listenResizeScroll=e.listenResizeScroll.bind(d(e)),e.handleResizeScroll=e.handleResizeScroll.bind(d(e)),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),h(t,null,[{key:"getDerivedStateFromProps",value:function(e){return i.isBrowser&&e.isOpen?{hasBeenShown:!0}:null}}]),h(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.setState({isOpen:!0}),window.addEventListener("resize",this.listenResizeScroll),window.addEventListener("scroll",this.listenResizeScroll)}},{key:"componentDidUpdate",value:function(e,t){if(!this.state.hasBeenShown&&this.props.isOpen)return this.setState({hasBeenShown:!0}),setTimeout(this.showTip,0);!t.hasBeenShown&&this.state.hasBeenShown&&this.showTip()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.listenResizeScroll),window.removeEventListener("scroll",this.listenResizeScroll),clearTimeout(this.debounceTimeout),clearTimeout(this.hoverTimeout)}},{key:"listenResizeScroll",value:function(){clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(this.handleResizeScroll,100)}},{key:"handleResizeScroll",value:function(){if(this.state.showTip){var e=5*Math.round(document.documentElement.clientWidth/5);this.setState({clientWidth:e})}}},{key:"toggleTip",value:function(){this.state.showTip?this.hideTip():this.showTip()}},{key:"showTip",value:function(){if(!this.state.hasBeenShown)return this.setState({hasBeenShown:!0});this.setState({showTip:!0})}},{key:"hideTip",value:function(){this.setState({hasHover:!1}),this.setState({showTip:!1})}},{key:"startHover",value:function(){this.state.ignoreShow||(this.setState({hasHover:!0}),clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(this.checkHover,this.props.hoverDelay))}},{key:"endHover",value:function(){this.setState({hasHover:!1}),clearTimeout(this.hoverTimeout),this.hoverTimeout=setTimeout(this.checkHover,this.props.mouseOutDelay||this.props.hoverDelay)}},{key:"checkHover",value:function(){this.state.hasHover?this.showTip():this.hideTip()}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.arrow,s=o.arrowSize,u=o.background,f=o.className,d=o.children,p=o.color,h=o.content,m=o.direction,b=o.distance,y=o.eventOff,g=o.eventOn,w=o.eventToggle,S=o.forceDirection,O=o.isOpen,T=o.mouseOutDelay,x=o.padding,_=o.styles,z=o.tagName,P=o.tipContentHover,k=o.tipContentClassName,E=o.useDefaultStyles,j=o.useHover,M=null!=O,H=M?O:this.state.showTip,R={style:l({position:"relative"},_),ref:function(e){t.target=e},className:f},C={onClick:v};if(y&&(R[y]=this.hideTip),g&&(R[g]=this.showTip),w?R[w]=this.toggleTip:j&&!M&&(R.onMouseEnter=this.startHover,R.onMouseLeave=P||T?this.endHover:this.hideTip,R.onTouchStart=this.toggleTip,P&&(C.onMouseEnter=this.startHover,C.onMouseLeave=this.endHover,C.onTouchStart=v)),this.state.hasBeenShown){var D=(0,a.default)(m,S,this.tip,this.target,l({},this.state,{showTip:H}),{background:E?"#333":u,arrow:n,arrowSize:s,distance:b}),B=l({},D.tip,{background:E?"#333":u,color:E?"#fff":p,padding:x,boxSizing:"border-box",zIndex:1e3,position:"absolute",display:"inline-block"}),W=l({},D.arrow,{position:"absolute",width:"0px",height:"0px",zIndex:1001});e=r.default.createElement(i.default,null,r.default.createElement("div",c({},C,{className:void 0!==k?k:f}),r.default.createElement("span",{className:"react-tooltip-lite",style:B,ref:function(e){t.tip=e}},h),r.default.createElement("span",{className:"react-tooltip-lite-arrow react-tooltip-lite-".concat(D.realDirection,"-arrow"),style:W})))}return r.default.createElement(z,R,d,e)}}]),t}(r.default.Component);b(y,"propTypes",{arrow:n.default.bool,arrowSize:n.default.number,background:n.default.string,children:n.default.node.isRequired,className:n.default.string,color:n.default.string,content:n.default.node.isRequired,direction:n.default.string,distance:n.default.number,eventOff:n.default.string,eventOn:n.default.string,eventToggle:n.default.string,forceDirection:n.default.bool,hoverDelay:n.default.number,isOpen:n.default.bool,mouseOutDelay:n.default.number,padding:n.default.string,styles:n.default.object,tagName:n.default.string,tipContentHover:n.default.bool,tipContentClassName:n.default.string,useDefaultStyles:n.default.bool,useHover:n.default.bool}),b(y,"defaultProps",{arrow:!0,arrowSize:10,background:"",className:"",color:"",direction:"up",distance:void 0,eventOff:void 0,eventOn:void 0,eventToggle:void 0,forceDirection:!1,hoverDelay:200,isOpen:void 0,mouseOutDelay:void 0,padding:"10px",styles:{},tagName:"div",tipContentHover:!1,tipContentClassName:void 0,useDefaultStyles:!1,useHover:!0});var g=y;t.default=g},15:function(e,t){e.exports=ReactDOM},163:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollLeft=u,t.getArrowSpacing=l,t.default=function(e,t,o,r,a,s){var u=function(e){var t=e.split("-");if(t.length>1)return t[1];return"middle"}(e),l=e.split("-")[0],h=l;if(!t&&o){var m=s.arrow&&p(r,o,l,a,s);h=(0,n.default)(l,o,r,s,10,m)}var b,v=c();if(o){var y=o.style.width?0:1;b=Math.min(o.offsetWidth,v)+y}return{tip:i({},"up"===h||"down"===h?f(o,r,a,h,u,s):d(o,r,a,h,u,s),{maxWidth:v,width:b}),arrow:p(r,o,h,a,s),realDirection:h}},t.minArrowPadding=void 0;var r,n=(r=o(257))&&r.__esModule?r:{default:r};function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){a(e,t,o[t])}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}t.minArrowPadding=5;function s(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function u(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}function c(){return"undefined"!=typeof document?document.documentElement.clientWidth-20:1e3}function l(e){var t=e.arrow?e.arrowSize:3;return"number"==typeof e.distance?e.distance:t}function f(e,t,o,r,n,i){var a,f=-1e7,d=o.showTip?void 0:"translateX(-10000000px)",p=l(i);if(e){var h=u(),m=t.getBoundingClientRect(),b=m.left+h,v=Math.round(t.offsetWidth/2),y=Math.min(c(),e.offsetWidth),g=b+v,w=g-i.arrowSize,S=g+i.arrowSize;if("start"===n)f=i.arrow?Math.min(w,b):b;else if("end"===n){var O=Math.max(S,b+t.offsetWidth),T=i.arrow?O:b+t.offsetWidth;f=Math.max(T-y,10+h)}else{var x=b+v-Math.round(y/2),_=10+h;f=Math.max(x,_)}var z=f+y-(h+document.documentElement.clientWidth-10);z>0&&(f-=z),a="up"===r?m.top+s()-(e.offsetHeight+p):m.bottom+s()+p}return{left:f,top:a,transform:d}}function d(e,t,o,r,n,i){var a=-1e7,c=0,f=o.showTip?void 0:"translateX(-10000000px)",d=l(i),p=i.arrow?5:0;if(e){var h=s(),m=u(),b=t.getBoundingClientRect(),v=b.top+h,y=Math.round(t.offsetHeight/2),g=v+y-i.arrowSize,w=b.top+h+y+i.arrowSize;if("start"===n)c=i.arrow?Math.min(v,g):v;else if("end"===n){var S=b.bottom+h-e.offsetHeight;c=i.arrow?Math.max(S,w-e.offsetHeight):S}else{var O=Math.max(v+y-Math.round(e.offsetHeight/2),10+h);c=Math.min(O,g-p)}var T=c-h+e.offsetHeight+10-window.innerHeight;T>0&&(c=Math.max(c-T,w+p-e.offsetHeight)),a="right"===r?b.right+d+m:b.left-d-e.offsetWidth+m}return{left:a,top:c,transform:f}}function p(e,t,o,r,n){if(!e||!n.arrow)return{top:"0",left:"-10000000px"};var a=e.getBoundingClientRect(),c=Math.round(e.offsetHeight/2),f=Math.round(e.offsetWidth/2),d=s(),p=u(),h=l(n),m={};switch(o){case"right":return m.borderTop="".concat(n.arrowSize,"px solid transparent"),m.borderBottom="".concat(n.arrowSize,"px solid transparent"),n.background?m.borderRight="".concat(n.arrowSize,"px solid ").concat(n.background):(m.borderRightWidth="".concat(n.arrowSize,"px"),m.borderRightStyle="solid"),i({},m,{top:r.showTip&&t?a.top+d+c-n.arrowSize:"-10000000px",left:a.right+p+h-n.arrowSize});case"left":return m.borderTop="".concat(n.arrowSize,"px solid transparent"),m.borderBottom="".concat(n.arrowSize,"px solid transparent"),n.background?m.borderLeft="".concat(n.arrowSize,"px solid ").concat(n.background):(m.borderLeftWidth="".concat(n.arrowSize,"px"),m.borderLeftStyle="solid"),i({},m,{top:r.showTip&&t?a.top+d+c-n.arrowSize:"-10000000px",left:a.left+p-h-1});case"up":return m.borderLeft="".concat(n.arrowSize,"px solid transparent"),m.borderRight="".concat(n.arrowSize,"px solid transparent"),n.background?m.borderTop="".concat(n.arrowSize,"px solid ").concat(n.background):(m.borderTopWidth="".concat(n.arrowSize,"px"),m.borderTopStyle="solid"),i({},m,{left:r.showTip&&t?a.left+p+f-n.arrowSize:"-10000000px",top:a.top+d-h});case"down":default:return m.borderLeft="".concat(n.arrowSize,"px solid transparent"),m.borderRight="".concat(n.arrowSize,"px solid transparent"),n.background?m.borderBottom="10px solid ".concat(n.background):(m.borderBottomWidth="".concat(n.arrowSize,"px"),m.borderBottomStyle="solid"),i({},m,{left:r.showTip&&t?a.left+p+f-n.arrowSize:"-10000000px",top:a.bottom+d+h-n.arrowSize})}}},2:function(e,t){e.exports=RedNaoSharedCore.default("shared/core/Events/EventManager")},21:function(e,t){e.exports=RedNaoSharedCore.default("shared/core/Controls/FontAwesome/FontAwesomeIcon")},256:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isBrowser=void 0;var r=a(o(0)),n=a(o(1)),i=a(o(15));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d="function"==typeof i.default.createPortal,p="undefined"!=typeof window;t.isBrowser=p;var h=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=c(this,l(t).call(this,e)),p&&(o.container=document.createElement("div"),document.body.appendChild(o.container),o.renderLayer()),o}var o,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(r=[{key:"componentDidUpdate",value:function(){this.renderLayer()}},{key:"componentWillUnmount",value:function(){d||i.default.unmountComponentAtNode(this.container),document.body.removeChild(this.container)}},{key:"renderLayer",value:function(){d||i.default.unstable_renderSubtreeIntoContainer(this,this.props.children,this.container)}},{key:"render",value:function(){return d?i.default.createPortal(this.props.children,this.container):null}}])&&u(o.prototype,r),n&&u(o,n),t}(r.default.Component);h.propTypes={children:n.default.node.isRequired};var m=h;t.default=m},257:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,o,s,u,c,l,f){if(!s)return t;var d=s.getBoundingClientRect(),p=(0,r.getArrowSpacing)(u),h=o.offsetHeight+p+c,m=window.innerHeight-d.bottom,b=d.top,v=m>=h,y=b>=h;switch(t){case"right":return n(o,s,p,c)&&i(s,o,u)?document.documentElement.clientWidth-d.right<o.offsetWidth+p+c?"left":"right":e("up",o,s,p,c,l,!0);case"left":return n(o,s,p,c)&&i(s,o,u)?d.left<o.offsetWidth+p+c?"right":"left":e("up",o,s,p,c,l,!0);case"up":if(!f&&l&&a(u,l,c))return e("left",o,s,p,c,l,!0);if(!y){if(v)return"down";if(!f&&n(o,s,p,c))return e("right",o,s,p,c,l,!0)}return"up";case"down":default:if(!f&&l&&a(u,l,c))return e("right",o,s,p,c,l,!0);if(!v){if(y)return"up";if(!f&&n(o,s,p,c))return e("right",o,s,p,c,l,!0)}return"down"}};var r=o(163);function n(e,t,o,r){var n=t.getBoundingClientRect(),i=Math.min(n.left,document.documentElement.clientWidth-n.right);return e.offsetWidth+t.offsetWidth+o+r+i<document.documentElement.clientWidth}function i(e,t,o){var n=e.getBoundingClientRect(),i=n.bottom>window.innerHeight,a=n.top<0;if(a&&i)return!0;if(e.offsetHeight>t.offsetHeight){var s=e.offsetHeight/2,u=o.arrowSize+r.minArrowPadding,c=n.bottom-window.innerHeight,l=-n.top;return s-c>=u&&s-l>=u}return!i&&!a}function a(e,t,o){var n=(0,r.getScrollLeft)(),i=t.left-n>o,a=t.left+2*e.arrowSize<n+document.documentElement.clientWidth-o;return!i||!a}},559:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Events/GetFieldDescription")},560:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Events/GetToolTip")},92:function(e,t,o){"use strict";var r=o(93);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return o.PropTypes=o,o}},93:function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}});