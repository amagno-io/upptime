function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,m=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:p(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function I(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,s,r=!1){L(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,s){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function k(t,e,n){return C(t,e,n,$)}function O(t,e,n){return C(t,e,n,y)}function H(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return H(t," ")}function M(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function D(t,e){const n=M(t,"HTML_TAG_START",0),s=M(t,"HTML_TAG_END",n);if(n===s)return new J(void 0,e);L(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e){t.value=null==e?"":e}function G(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function K(t,e=document.body){return Array.from(e.querySelectorAll(t))}class V{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=y(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}class J extends V{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}}function W(t){h=t}function F(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(t){F().$$.on_mount.push(t)}function X(t){F().$$.after_update.push(t)}function Q(t){F().$$.on_destroy.push(t)}const Z=[],tt=[],et=[],nt=[],st=Promise.resolve();let rt=!1;function ot(t){et.push(t)}const at=new Set;let it=0;function ct(){const t=h;do{for(;it<Z.length;){const t=Z[it];it++,W(t),lt(t.$$)}for(W(null),Z.length=0,it=0;tt.length;)tt.pop()();for(let t=0;t<et.length;t+=1){const e=et[t];at.has(e)||(at.add(e),e())}et.length=0}while(Z.length);for(;nt.length;)nt.pop()();rt=!1,at.clear(),W(t)}function lt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}const ut=new Set;let dt;function ft(){dt={r:0,c:[],p:dt}}function ht(){dt.r||r(dt.c),dt=dt.p}function mt(t,e){t&&t.i&&(ut.delete(t),t.i(e))}function pt(t,e,n,s){if(t&&t.o){if(ut.has(t))return;ut.add(t),dt.c.push((()=>{ut.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function gt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function vt(t){return"object"==typeof t&&null!==t?t:{}}function bt(t){t&&t.c()}function _t(t,e){t&&t.l(e)}function wt(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||ot((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(ot)}function $t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(Z.push(t),rt||(rt=!0,st.then(ct)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(e,n,o,a,i,c,l,u=[-1]){const d=h;W(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&yt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){m=!0;const t=I(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&mt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),m=!1,ct()}W(d)}class xt{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const St=[];function At(e,n=t){let s;const r=new Set;function o(t){if(a(e,t)&&(e=t,s)){const t=!St.length;for(const t of r)t[1](),St.push(t,e);if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||t),a(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Tt={};var Nt={owner:"amagno-io",repo:"upptime",sites:[{name:"Amagno Business Cloud",url:"https://amagno.cloud/",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Business Cloud (Main)",url:"https://amagno.cloud/amagnoservice/amagnoservice.svc",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Business Cloud (Maintenance)",url:"https://amagno.cloud/amagnomaintenanceservice/maintenanceservice.svc",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Business Cloud (Events)",url:"http://amagno.cloud/amagnoeventservice",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico",expectedStatusCodes:[401]},{name:"Amagno API",url:"https://amagno.me/api/v2/me",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico",expectedStatusCodes:[401]},{name:"Amagno API Documentation",url:"https://amagno.me/api/v2",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Mobile Explorer",url:"https://amagno.me",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno WebDAV",url:"https://amagno.me/webdav",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico",expectedStatusCodes:[401]},{name:"amagno.de",url:"https://amagno.de",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"amagno.ch",url:"https://amagno.ch",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"amagno.co.uk",url:"https://amagno.co.uk",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"}],assignees:["gerrit-amagno"],"status-website":{cname:"status.amagno.cloud",logoUrl:"https://amagno.de/wp-content/uploads/2018/02/amagno-ecm-logo-header.png",name:"Business Cloud - Status",introTitle:"**Amagno Business Cloud** uptime monitor and status page",introMessage:"This is a status page which uses **real-time** data from our infrastructure.",navbar:[{title:"Status",href:"/"},{title:"Service Desk",href:"https://amagno.atlassian.net/servicedesk/customer/portal/6"}]},i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},path:"https://status.amagno.cloud"};function Pt(t,e,n){const s=t.slice();return s[1]=e[n],s}function It(e){let n,s,r,o=Nt["status-website"]&&!Nt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=$("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Nt["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}(),a=Nt["status-website"]&&!Nt["status-website"].hideNavTitle&&function(e){let n,s,r=Nt["status-website"].name+"";return{c(){n=$("div"),s=E(r)},l(t){n=k(t,"DIV",{});var e=I(n);s=H(e,r),e.forEach(_)},m(t,e){b(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=x(),a&&a.c(),this.h()},l(t){n=k(t,"DIV",{});var e=I(n);s=k(e,"A",{href:!0,class:!0});var i=I(s);o&&o.l(i),r=U(i),a&&a.l(i),i.forEach(_),e.forEach(_),this.h()},h(){N(s,"href",Nt["status-website"].logoHref||Nt.path),N(s,"class","logo svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){Nt["status-website"]&&!Nt["status-website"].hideNavLogo&&o.p(t,e),Nt["status-website"]&&!Nt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&_(n),o&&o.d(),a&&a.d()}}}function Lt(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=$("li"),n=$("a"),s=E(a),o=x(),this.h()},l(t){e=k(t,"LI",{});var r=I(e);n=k(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=I(n);s=H(i,a),i.forEach(_),o=U(r),r.forEach(_),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",t[1].href.replace("$OWNER",Nt.owner).replace("$REPO",Nt.repo)),N(n,"target",t[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(t,r){b(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&_(e)}}}function Rt(e){let n,s,r,o,a,i=Nt["status-website"]&&Nt["status-website"].logoUrl&&It(),c=Nt["status-website"]&&Nt["status-website"].navbar&&function(t){let e,n=Nt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(Pt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(1&r){let o;for(n=Nt["status-website"].navbar,o=0;o<n.length;o+=1){const a=Pt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Lt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),l=Nt["status-website"]&&Nt["status-website"].navbarGitHub&&!Nt["status-website"].navbar&&function(e){let n,s,r,o=Nt.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=E(o),this.h()},l(t){n=k(t,"LI",{});var e=I(n);s=k(e,"A",{href:!0,class:!0});var a=I(s);r=H(a,o),a.forEach(_),e.forEach(_),this.h()},h(){N(s,"href",`https://github.com/${Nt.owner}/${Nt.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=$("nav"),s=$("div"),i&&i.c(),r=x(),o=$("ul"),c&&c.c(),a=x(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=I(n);s=k(e,"DIV",{class:!0});var u=I(s);i&&i.l(u),r=U(u),o=k(u,"UL",{class:!0});var d=I(o);c&&c.l(d),a=U(d),l&&l.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(t,[e]){Nt["status-website"]&&Nt["status-website"].logoUrl&&i.p(t,e),Nt["status-website"]&&Nt["status-website"].navbar&&c.p(t,e),Nt["status-website"]&&Nt["status-website"].navbarGitHub&&!Nt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Ct(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class kt extends xt{constructor(t){super(),Et(this,t,Ct,Rt,a,{segment:0})}}var Ot={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ht(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mt(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ot[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ht(Ut(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Mt(Ht(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ut(r[8])+'" alt="'+Ut(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ut(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Mt(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ut(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Dt(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Bt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Gt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Nt.path}/themes/${(Nt["status-website"]||{}).theme||"light"}.css`)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Nt["status-website"]||{}).themeUrl)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n,s;return{c(){n=$("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),I(n).forEach(_),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function Vt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function Jt(e){let n,s,r,o,a,i,c,u,d,f,h,m,p,v,y,E,A,T,P=Mt(Nt.i18n.footer.replace(/\$REPO/,`https://github.com/${Nt.owner}/${Nt.repo}`))+"",L=(Nt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Nt["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let R=((Nt["status-website"]||{}).themeUrl?qt:Gt)(e),C=(Nt["status-website"]||{}).scripts&&function(t){let e,n=(Nt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=zt(Bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let o;for(n=(Nt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Bt(t,n,o);s[o]?s[o].p(a,r):(s[o]=zt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),O=(Nt["status-website"]||{}).links&&function(t){let e,n=(Nt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Kt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let o;for(n=(Nt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=jt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Kt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),H=(Nt["status-website"]||{}).metaTags&&function(t){let e,n=(Nt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Vt(Dt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let o;for(n=(Nt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Dt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Vt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),M=Nt["status-website"].css&&function(e){let n,s,r=`<style>${Nt["status-website"].css}</style>`;return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),j=Nt["status-website"].js&&function(e){let n,s,r=`<script>${Nt["status-website"].js}<\/script>`;return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),B=(Nt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Nt["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();m=new kt({props:{segment:e[0]}});const G=e[2].default,q=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(G,e,e[1],null);return{c(){L&&L.c(),n=S(),R.c(),s=$("link"),r=$("link"),o=$("link"),C&&C.c(),a=S(),O&&O.c(),i=S(),H&&H.c(),c=S(),M&&M.c(),u=S(),j&&j.c(),d=S(),f=x(),B&&B.c(),h=x(),bt(m.$$.fragment),p=x(),v=$("main"),q&&q.c(),y=x(),E=$("footer"),A=$("p"),this.h()},l(t){const e=K('[data-svelte="svelte-fmspuk"]',document.head);L&&L.l(e),n=S(),R.l(e),s=k(e,"LINK",{rel:!0,href:!0}),r=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(e),a=S(),O&&O.l(e),i=S(),H&&H.l(e),c=S(),M&&M.l(e),u=S(),j&&j.l(e),d=S(),e.forEach(_),f=U(t),B&&B.l(t),h=U(t),_t(m.$$.fragment,t),p=U(t),v=k(t,"MAIN",{class:!0});var l=I(v);q&&q.l(l),l.forEach(_),y=U(t),E=k(t,"FOOTER",{class:!0});var g=I(E);A=k(g,"P",{}),I(A).forEach(_),g.forEach(_),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Nt.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Nt["status-website"]||{}).faviconSvg||(Nt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Nt["status-website"]||{}).favicon||"/logo-192.png"),N(v,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),C&&C.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),b(t,f,e),B&&B.m(t,e),b(t,h,e),wt(m,t,e),b(t,p,e),b(t,v,e),q&&q.m(v,null),b(t,y,e),b(t,E,e),g(E,A),A.innerHTML=P,T=!0},p(t,[e]){(Nt["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(Nt["status-website"]||{}).scripts&&C.p(t,e),(Nt["status-website"]||{}).links&&O.p(t,e),(Nt["status-website"]||{}).metaTags&&H.p(t,e),Nt["status-website"].css&&M.p(t,e),Nt["status-website"].js&&j.p(t,e),(Nt["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),q&&q.p&&(!T||2&e)&&function(t,e,n,s,r,o){if(r){const a=l(e,n,s,o);t.p(a,r)}}(q,G,t,t[1],T?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(mt(m.$$.fragment,t),mt(q,t),T=!0)},o(t){pt(m.$$.fragment,t),pt(q,t),T=!1},d(t){L&&L.d(t),_(n),R.d(t),_(s),_(r),_(o),C&&C.d(t),_(a),O&&O.d(t),_(i),H&&H.d(t),_(c),M&&M.d(t),_(u),j&&j.d(t),_(d),t&&_(f),B&&B.d(t),t&&_(h),$t(m,t),t&&_(p),t&&_(v),q&&q.d(t),t&&_(y),t&&_(E)}}}function Wt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ft extends xt{constructor(t){super(),Et(this,t,Wt,Jt,a,{segment:0})}}function Yt(t){let e,n,s=t[1].stack+"";return{c(){e=$("pre"),n=E(s)},l(t){e=k(t,"PRE",{});var r=I(e);n=H(r,s),r.forEach(_)},m(t,s){b(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&j(n,s)},d(t){t&&_(e)}}}function Xt(e){let n,s,r,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Yt(e);return{c(){s=x(),r=$("h1"),o=E(e[0]),a=x(),i=$("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(t){K('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=U(t),r=k(t,"H1",{class:!0});var n=I(r);o=H(n,e[0]),n.forEach(_),a=U(t),i=k(t,"P",{class:!0});var h=I(i);c=H(h,d),h.forEach(_),l=U(t),f&&f.l(t),u=S(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(t,e){b(t,s,e),b(t,r,e),g(r,o),b(t,a,e),b(t,i,e),g(i,c),b(t,l,e),f&&f.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&d!==(d=t[1].message+"")&&j(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Yt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(a),t&&_(i),t&&_(l),f&&f.d(t),t&&_(u)}}}function Qt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Zt extends xt{constructor(t){super(),Et(this,t,Qt,Xt,a,{status:0,error:1})}}function te(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&bt(n.$$.fragment),s=S()},l(t){n&&_t(n.$$.fragment,t),s=S()},m(t,e){n&&wt(n,t,e),b(t,s,e),r=!0},p(t,e){const r=16&e?gt(o,[vt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){ft();const t=n;pt(t.$$.fragment,1,0,(()=>{$t(t,1)})),ht()}a?(n=new a(i()),bt(n.$$.fragment),mt(n.$$.fragment,1),wt(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&mt(n.$$.fragment,t),r=!0)},o(t){n&&pt(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&$t(n,t)}}}function ee(t){let e,n;return e=new Zt({props:{error:t[0],status:t[1]}}),{c(){bt(e.$$.fragment)},l(t){_t(e.$$.fragment,t)},m(t,s){wt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){pt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function ne(t){let e,n,s,r;const o=[ee,te],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=S()},l(t){n.l(t),s=S()},m(t,n){a[e].m(t,n),b(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(ft(),pt(a[c],1,1,(()=>{a[c]=null})),ht(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),mt(n,1),n.m(s.parentNode,s))},i(t){r||(mt(n),r=!0)},o(t){pt(n),r=!1},d(t){a[e].d(t),t&&_(s)}}}function se(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ne]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Ft({props:o}),{c(){bt(n.$$.fragment)},l(t){_t(n.$$.fragment,t)},m(t,e){wt(n,t,e),s=!0},p(t,[e]){const s=12&e?gt(r,[4&e&&{segment:t[2][0]},8&e&&vt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(mt(n.$$.fragment,t),s=!0)},o(t){pt(n.$$.fragment,t),s=!1},d(t){$t(n,t)}}}function re(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return X(l),u=Tt,d=s,F().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class oe extends xt{constructor(t){super(),Et(this,t,re,se,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],ie=[{js:()=>Promise.all([import("./index.0db66556.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.7f8d9d71.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.cb77fadc.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.b51c6604.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.dbeb9eae.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ce=(le=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:le(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:le(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var le;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ue(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function de(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let fe,he=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},pe={};let ge,ve;function be(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function _e(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ge))return null;let e=t.pathname.slice(ge.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<ce.length;n+=1){const s=ce[n],r=s.pattern.exec(e);if(r){const n=be(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=de(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=_e(r);if(o){Ee(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),me.pushState({id:fe},"",r.href)}}function $e(){return{x:pageXOffset,y:pageYOffset}}function ye(t){if(pe[fe]=$e(),t.state){const e=_e(new URL(location.href));e?Ee(e,t.state.id):location.href=location.href}else!function(t){he=t}(he+1),function(t){fe=t}(he),me.replaceState({id:fe},"",location.href)}function Ee(t,e,n,s){return ue(this,void 0,void 0,(function*(){const r=!!e;if(r)fe=e;else{const t=$e();pe[fe]=t,fe=e=++he,pe[fe]=n?t:{x:0,y:0}}if(yield ve(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=pe[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),pe[fe]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function xe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Se,Ae=null;function Te(t){const e=de(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=_e(new URL(t,xe(document)));if(e)Ae&&t===Ae.href||(Ae={href:t,promise:ze(e)}),Ae.promise}(e.href)}function Ne(t){clearTimeout(Se),Se=setTimeout((()=>{Te(t)}),20)}function Pe(t,e={noscroll:!1,replaceState:!1}){const n=_e(new URL(t,xe(document)));if(n){const s=Ee(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:fe},"",t),s}return location.href=t,new Promise((()=>{}))}const Ie="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,Re,Ce,ke=!1,Oe=[],He="{}";const Ue={page:function(t){const e=At(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:At(null),session:At(Ie&&Ie.session)};let Me,De,je;function Be(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ge(t){return ue(this,void 0,void 0,(function*(){Le&&Ue.preloading.set(!0);const e=function(t){return Ae&&Ae.href===t.href?Ae.promise:ze(t)}(t),n=Re={},s=yield e,{redirect:r}=s;if(n===Re)if(r)yield Pe(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield qe(n,e,Be(e,t.page))}}))}function qe(t,e,n){return ue(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Le?Le.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield Ce},e.notify=Ue.page.notify,Le=new oe({target:je,props:e,hydrate:!0})),Oe=t,He=JSON.stringify(n.query),ke=!0,De=!1}))}function ze(t){return ue(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ce){const t=()=>({});Ce=Ie.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Me)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>ue(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==He)return!0;const r=Oe[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const f=c++;let h;if(De||u||!Oe[i]||Oe[i].part!==e.i){u=!1;const{default:s,preload:r}=yield ie[e.i].js();let o;o=ke||!Ie.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Me):{}:Ie.preloaded[i+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=Oe[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Ke,Ve,Je;Ue.session.subscribe((t=>ue(void 0,void 0,void 0,(function*(){if(Me=t,!ke)return;De=!0;const e=_e(new URL(location.href)),n=Re={},{redirect:s,props:r,branch:o}=yield ze(e);n===Re&&(s?yield Pe(s.location,{replaceState:!0}):yield qe(o,r,Be(r,e.page)))})))),Ke={target:document.querySelector("#sapper")},Ve=Ke.target,je=Ve,Je=Ie.baseUrl,ge=Je,ve=Ge,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",ye),addEventListener("touchstart",Te),addEventListener("mousemove",Ne),Ie.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Ie;Ce||(Ce=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ce},level1:{props:{status:o,error:a},component:Zt},segments:r},c=be(n);qe([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:he},"",e);const n=_e(new URL(location.href));if(n)return Ee(n,he,!0,t)}));export{j as A,A as B,r as C,tt as D,D as E,c as F,d as G,J as H,G as I,K as J,Mt as K,y as L,O as M,Pe as N,B as O,T as P,e as Q,P as R,xt as S,gt as T,X as U,Q as V,u as W,vt as X,ot as Y,z as Z,x as a,k as b,U as c,I as d,$ as e,_ as f,N as g,b as h,Et as i,ft as j,ht as k,mt as l,E as m,H as n,Y as o,g as p,t as q,Nt as r,a as s,pt as t,S as u,w as v,bt as w,_t as x,wt as y,$t as z};

import __inject_styles from './inject_styles.803b7e80.js';