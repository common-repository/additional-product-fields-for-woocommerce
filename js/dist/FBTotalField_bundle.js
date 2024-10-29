var RedNaoFBTotalField=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1525)}({0:function(e,t){e.exports=React},1525:function(e,t,n){"use strict";n.r(t),n.d(t,"FBTotalField",(function(){return H}));var r,o,i,u,l=n(0),a=n(3),c=n(9);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O,F,g,T,j,S,w=(r=Object(c.StoreDataType)(Object),u=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return s(n=y(this,(e=m(t)).call.apply(e,[this].concat(o))),"Icon",i,b(n)),n.TotalType=void 0,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"LoadDefaultValues",value:function(){v(m(t.prototype),"LoadDefaultValues",this).call(this),this.Type=a.FieldTypeEnum.Total,this.Label="Total",this.TotalType="OptionsTotal",this.Icon={ImageType:"none",Ref:null}}}])&&d(n.prototype,r),o&&d(n,o),t}(a.FBFieldBaseOptions),O=(o=u).prototype,F="Icon",g=[r],T={configurable:!0,enumerable:!0,writable:!0,initializer:null},S={},Object.keys(T).forEach((function(e){S[e]=T[e]})),S.enumerable=!!S.enumerable,S.configurable=!!S.configurable,("value"in S||S.initializer)&&(S.writable=!0),S=g.slice().reverse().reduce((function(e,t){return t(O,F,e)||e}),S),j&&void 0!==S.initializer&&(S.value=S.initializer?S.initializer.call(j):void 0,S.initializer=void 0),void 0===S.initializer&&(Object.defineProperty(O,F,S),S=null),i=S,o),B=n(287),P=n(29),_=n(27),E=n(28),R=n(2),M=n(95);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=I(this,z(t).call(this,e,n))).IsFocused=void 0,r.IsFocused=!1,r}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"Initialize",value:function(){var e,n,r=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===(e=this.FormBuilder)||void 0===e||null===(n=e.PriceManager)||void 0===n||n.TotalUpdated.Subscribe(this,(function(){return r.Refresh()})),k(z(t.prototype),"Initialize",this).call(this,o)}},{key:"InternalSerialize",value:function(e){e.Value=this.GetValue()}},{key:"GetStoresInformation",value:function(){return!0}},{key:"GetIsUsed",value:function(){return!0}},{key:"GetValue",value:function(){if(!this.GetIsVisible())return null;var e=0;return e="OptionsTotal"==this.Options.TotalType?this.FormBuilder.PriceManager.GetOptionsTotal():this.FormBuilder.PriceManager.GetGrandTotal(),{Value:M.CurrencyManager.FormatPrice(e),Amount:e}}},{key:"GetDynamicFieldNames",value:function(){return["FBTotalField"]}},{key:"InitializeStartingValues",value:function(e){}}])&&G(n.prototype,r),o&&G(n,o),t}(n(88).FBFieldBaseModel);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,U(t).call(this,e))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(r=[{key:"componentWillReceiveProps",value:function(e,t){}},{key:"SubRender",value:function(){return l.createElement(l.Fragment,null,this.GetInput(""))}},{key:"GetInput",value:function(e){var t;return l.createElement("div",{className:"rnTextFieldInput "+e+(this.Model.IsFocused?" RNFocus":"")},this.GetLabel(),l.createElement("div",{className:"rednaoValue"},l.createElement("span",{dangerouslySetInnerHTML:{__html:null===(t=this.Model.GetValue())||void 0===t?void 0:t.Value}})))}}])&&D(n.prototype,r),o&&D(n,o),t}(B.FBFieldBase);H.defaultProps={},R.EventManager.Subscribe(P.GetModel,(function(e){if(e.Options.Type==a.FieldTypeEnum.Total)return new V(e.Options,e.parent).Initialize(e.PreviousData)})),R.EventManager.Subscribe(_.GetFieldOptions,(function(e){if(e.Type==a.FieldTypeEnum.Total)return new w})),R.EventManager.Subscribe(E.GetField,(function(e){if(e.Model.Options.Type==a.FieldTypeEnum.Total)return l.createElement(H,{Model:e.Model})}))},2:function(e,t){e.exports=RedNaoSharedCore.default("shared/core/Events/EventManager")},27:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Events/GetFieldOptions")},28:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Events/GetField")},287:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Fields/Core/FBFieldBase")},29:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Events/GetModel")},3:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Fields/Core/FBFieldBase.options")},88:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Fields/Core/FBFieldBase.Model")},9:function(e,t){e.exports=RedNaoSharedCore.default("shared/core/Store/StoreBase")},95:function(e,t){e.exports=RedNaoFormBuilder.default("FormBuilder/Utilities/Managers/CurrencyManager")}});