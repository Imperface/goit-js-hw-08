function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,l,f=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function x(e){return f=e,u=setTimeout(j,t),c?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=i}function j(){var e=g();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-l);return s?m(n,i-(e-f)):n}(e))}function h(e){return u=void 0,p&&o?b(e):(o=r=void 0,a)}function w(){var e=g(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return x(l);if(s)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,v(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=r=u=void 0},w.flush=function(){return void 0===u?a:h(g())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={},x={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textArea:document.querySelector("textarea")},S=JSON.parse(localStorage.getItem("formData"));S?(x.input.value=S.email||"",console.log("input updated successfully"),x.textArea.value=S.message||"",console.log("textarea updated successfully ")):console.log("local storage is empty"),x.form.addEventListener("submit",(e=>{console.log("submit successfully"),e.preventDefault(),console.log(`user email: ${b.email}`),console.log(`user message: ${b.message}`),localStorage.removeItem("formData"),x.form.reset(),console.log("localStorage clearing")})),x.form.addEventListener("input",e(t)((e=>{b[e.target.name]=e.target.value,localStorage.setItem("formData",JSON.stringify(b))}),500));
//# sourceMappingURL=03-feedback.6fbba2c9.js.map
