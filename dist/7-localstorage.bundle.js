webpackJsonp([2],{57:function(t,e,o){"use strict";(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(e,o){if(t.localStorage){var n;t.localStorage.setItem("rgl-7",JSON.stringify((n={},n[e]=o,n)))}}var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},l=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,n,r){var a=e&&e.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===i)o.children=r;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),c=o(0),f=n(c),y=o(1),p=(n(y),o(5)),d=(n(p),o(3)),h=n(d),v=(0,d.WidthProvider)(h.default),g=function(e){var o={};if(t.localStorage)try{o=JSON.parse(t.localStorage.getItem("rgl-7"))||{}}catch(t){}return o[e]}("layout")||[],b=function(t){function e(o){r(this,e);var n=a(this,t.call(this,o));return n.state={layout:JSON.parse(JSON.stringify(g))},n.onLayoutChange=n.onLayoutChange.bind(n),n.resetLayout=n.resetLayout.bind(n),n}return i(e,t),e.prototype.resetLayout=function(){this.setState({layout:[]})},e.prototype.onLayoutChange=function(t){s("layout",t),this.setState({layout:t}),this.props.onLayoutChange(t)},e.prototype.render=function(){return l("div",{},void 0,l("button",{onClick:this.resetLayout},void 0,"Reset Layout"),f.default.createElement(v,u({ref:"rgl"},this.props,{layout:this.state.layout,onLayoutChange:this.onLayoutChange}),l("div",{"data-grid":{w:2,h:3,x:0,y:0}},"1",l("span",{className:"text"},void 0,"1")),l("div",{"data-grid":{w:2,h:3,x:2,y:0}},"2",l("span",{className:"text"},void 0,"2")),l("div",{"data-grid":{w:2,h:3,x:4,y:0}},"3",l("span",{className:"text"},void 0,"3")),l("div",{"data-grid":{w:2,h:3,x:6,y:0}},"4",l("span",{className:"text"},void 0,"4")),l("div",{"data-grid":{w:2,h:3,x:8,y:0}},"5",l("span",{className:"text"},void 0,"5"))))},e}(f.default.PureComponent);b.defaultProps={className:"layout",cols:12,rowHeight:30,onLayoutChange:function(){}},e.exports=b,o.c[o.s]===e&&o(4)(e.exports)}).call(e,o(7),o(2)(t))}},[57]);