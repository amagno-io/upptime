function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,m=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:p(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode!==t&&t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,s,r=!1){L(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,s){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?y(e):_(e)))}function C(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function O(t){return C(t," ")}function H(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function U(t){const e=H(t,"HTML_TAG_START",0),n=H(t,"HTML_TAG_END",e);if(e===n)return new q;L(t);const s=t.splice(e,n+1);w(s[0]),w(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(r)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function D(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=D();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),w(n)}}function G(t,e=document.body){return Array.from(e.querySelectorAll(t))}class q extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=_(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(w)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function z(t){h=t}function K(){if(!h)throw new Error("Function called outside component initialization");return h}function V(t){K().$$.on_mount.push(t)}function J(t){K().$$.after_update.push(t)}function W(t){K().$$.on_destroy.push(t)}const F=[],Y=[],X=[],Q=[],Z=Promise.resolve();let tt=!1;function et(t){X.push(t)}let nt=!1;const st=new Set;function rt(){if(!nt){nt=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];z(e),ot(e.$$)}for(z(null),F.length=0;Y.length;)Y.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];st.has(e)||(st.add(e),e())}X.length=0}while(F.length);for(;Q.length;)Q.pop()();tt=!1,nt=!1,st.clear()}}function ot(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}const at=new Set;let it;function ct(){it={r:0,c:[],p:it}}function lt(){it.r||r(it.c),it=it.p}function ut(t,e){t&&t.i&&(at.delete(t),t.i(e))}function dt(t,e,n,s){if(t&&t.o){if(at.has(t))return;at.add(t),it.c.push((()=>{at.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function ft(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ht(t){return"object"==typeof t&&null!==t?t:{}}function mt(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function gt(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||et((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(et)}function bt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(F.push(t),tt||(tt=!0,Z.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,a,i,c,l,u=[-1]){const d=h;z(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&vt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){m=!0;const t=P(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&ut(e.$$.fragment),gt(e,n.target,n.anchor,n.customElement),m=!1,rt()}z(d)}class $t{$destroy(){bt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t=[];function yt(e,n=t){let s;const r=new Set;function o(t){if(a(e,t)&&(e=t,s)){const t=!_t.length;for(const t of r)t[1](),_t.push(t,e);if(t){for(let t=0;t<_t.length;t+=2)_t[t][0](_t[t+1]);_t.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||t),a(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Et={};var St={owner:"amagno-io",repo:"upptime",sites:[{name:"Amagno Business Cloud",url:"https://amagno.cloud/",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Business Cloud (Main)",url:"https://amagno.cloud/amagnoservice/amagnoservice.svc",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Business Cloud (Maintenance)",url:"https://amagno.cloud/amagnomaintenanceservice/maintenanceservice.svc",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Busines Cloud (Events)",url:"http://amagno.cloud/amagnoeventservice",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico",expectedStatusCodes:[401]},{name:"Amagno API",url:"https://amagno.me/api/v2",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno Mobile Explorer",url:"https://amagno.me",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"Amagno WebDAV",url:"https://amagno.me/webdav",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico",expectedStatusCodes:[401]},{name:"amagno.de",url:"https://amagno.de",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"amagno.ch",url:"https://amagno.ch",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"},{name:"amagno.co.uk",url:"https://amagno.co.uk",icon:"https://amagno.de/wp-content/uploads/2018/02/favicon-2.ico"}],assignees:["gerrit-amagno"],"status-website":{cname:"status.amagno.cloud",logoUrl:"https://amagno.de/wp-content/uploads/2018/02/amagno-ecm-logo-header.png",name:"Business Cloud - Status",introTitle:"**Amagno Business Cloud** uptime monitor and status page",introMessage:"This is a status page which uses **real-time** data from our infrastructure.",navbar:[{title:"Status",href:"/"},{title:"Service Desk",href:"https://amagno.atlassian.net/servicedesk/customer/portal/6"}]},i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},path:"https://status.amagno.cloud"};function xt(t,e,n){const s=t.slice();return s[1]=e[n],s}function At(e){let n,s,r,o=St["status-website"]&&!St["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=_("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=St["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}(),a=St["status-website"]&&!St["status-website"].hideNavTitle&&function(e){let n,s,r=St["status-website"].name+"";return{c(){n=_("div"),s=E(r)},l(t){n=k(t,"DIV",{});var e=P(n);s=C(e,r),e.forEach(w)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&w(n)}}}();return{c(){n=_("div"),s=_("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(t){n=k(t,"DIV",{});var e=P(n);s=k(e,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=O(i),a&&a.l(i),i.forEach(w),e.forEach(w),this.h()},h(){N(s,"href",St["status-website"].logoHref||St.path),N(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){St["status-website"]&&!St["status-website"].hideNavLogo&&o.p(t,e),St["status-website"]&&!St["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&w(n),o&&o.d(),a&&a.d()}}}function Tt(t){let e,n,s,r,o,a,i=t[1].title+"";return{c(){e=_("li"),n=_("a"),s=E(i),a=S(),this.h()},l(t){e=k(t,"LI",{});var r=P(e);n=k(r,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);s=C(o,i),o.forEach(w),a=O(r),r.forEach(w),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",St.owner).replace("$REPO",St.repo)),N(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,a)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&w(e)}}}function Nt(e){let n,s,r,o,a,i=St["status-website"]&&St["status-website"].logoUrl&&At(),c=St["status-website"]&&St["status-website"].navbar&&function(t){let e,n=St["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Tt(xt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=St["status-website"].navbar,o=0;o<n.length;o+=1){const a=xt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Tt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&w(e)}}}(e),l=St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&function(e){let n,s,r,o=St.i18n.navGitHub+"";return{c(){n=_("li"),s=_("a"),r=E(o),this.h()},l(t){n=k(t,"LI",{});var e=P(n);s=k(e,"A",{href:!0,class:!0});var a=P(s);r=C(a,o),a.forEach(w),e.forEach(w),this.h()},h(){N(s,"href",`https://github.com/${St.owner}/${St.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&w(n)}}}();return{c(){n=_("nav"),s=_("div"),i&&i.c(),r=S(),o=_("ul"),c&&c.c(),a=S(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=P(n);s=k(e,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=O(u),o=k(u,"UL",{class:!0});var d=P(o);c&&c.l(d),a=O(d),l&&l.l(d),d.forEach(w),u.forEach(w),e.forEach(w),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(t,[e]){St["status-website"]&&St["status-website"].logoUrl&&i.p(t,e),St["status-website"]&&St["status-website"].navbar&&c.p(t,e),St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&w(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Pt extends $t{constructor(t){super(),wt(this,t,It,Nt,a,{segment:0})}}var Lt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Rt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function kt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Lt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Rt(kt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ct(Rt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+kt(r[8])+'" alt="'+kt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+kt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ct(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+kt(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ot(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[8]=e[n],s}function Mt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${St.path}/themes/${(St["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function jt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(St["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Dt(e){let n,s;return{c(){n=_("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),P(n).forEach(w),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Bt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Gt(e){let n;return{c(){n=_("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function qt(e){let n,s,r,o,a,i,c,u,d,f,h,m,p,b,y,E,A,T,I=Ct(St.i18n.footer.replace(/\$REPO/,`https://github.com/${St.owner}/${St.repo}`))+"",L=(St["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(St["status-website"]||{}).customHeadHtml+"";return{c(){n=new q,s=x(),this.h()},l(t){n=U(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&w(s),t&&n.d()}}}();let R=((St["status-website"]||{}).themeUrl?jt:Mt)(e),C=(St["status-website"]||{}).scripts&&function(t){let e,n=(St["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Dt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(St["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Ut(t,n,o);s[o]?s[o].p(a,r):(s[o]=Dt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&w(e)}}}(e),H=(St["status-website"]||{}).links&&function(t){let e,n=(St["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(St["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ht(t,n,o);s[o]?s[o].p(a,r):(s[o]=Bt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&w(e)}}}(e),M=(St["status-website"]||{}).metaTags&&function(t){let e,n=(St["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Gt(Ot(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(St["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ot(t,n,o);s[o]?s[o].p(a,r):(s[o]=Gt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&w(e)}}}(e),j=St["status-website"].css&&function(e){let n,s,r=`<style>${St["status-website"].css}</style>`;return{c(){n=new q,s=x(),this.h()},l(t){n=U(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&w(s),t&&n.d()}}}(),D=St["status-website"].js&&function(e){let n,s,r=`<script>${St["status-website"].js}<\/script>`;return{c(){n=new q,s=x(),this.h()},l(t){n=U(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&w(s),t&&n.d()}}}(),B=(St["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(St["status-website"]||{}).customBodyHtml+"";return{c(){n=new q,s=x(),this.h()},l(t){n=U(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&w(s),t&&n.d()}}}();m=new Pt({props:{segment:e[0]}});const z=e[2].default,K=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(z,e,e[1],null);return{c(){L&&L.c(),n=x(),R.c(),s=_("link"),r=_("link"),o=_("link"),C&&C.c(),a=x(),H&&H.c(),i=x(),M&&M.c(),c=x(),j&&j.c(),u=x(),D&&D.c(),d=x(),f=S(),B&&B.c(),h=S(),mt(m.$$.fragment),p=S(),b=_("main"),K&&K.c(),y=S(),E=_("footer"),A=_("p"),this.h()},l(t){const e=G('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(e),n=x(),R.l(e),s=k(e,"LINK",{rel:!0,href:!0}),r=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(e),a=x(),H&&H.l(e),i=x(),M&&M.l(e),c=x(),j&&j.l(e),u=x(),D&&D.l(e),d=x(),e.forEach(w),f=O(t),B&&B.l(t),h=O(t),pt(m.$$.fragment,t),p=O(t),b=k(t,"MAIN",{class:!0});var l=P(b);K&&K.l(l),l.forEach(w),y=O(t),E=k(t,"FOOTER",{class:!0});var g=P(E);A=k(g,"P",{}),P(A).forEach(w),g.forEach(w),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${St.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(St["status-website"]||{}).faviconSvg||(St["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(St["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,i),M&&M.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(t,f,e),B&&B.m(t,e),v(t,h,e),gt(m,t,e),v(t,p,e),v(t,b,e),K&&K.m(b,null),v(t,y,e),v(t,E,e),g(E,A),A.innerHTML=I,T=!0},p(t,[e]){(St["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(St["status-website"]||{}).scripts&&C.p(t,e),(St["status-website"]||{}).links&&H.p(t,e),(St["status-website"]||{}).metaTags&&M.p(t,e),St["status-website"].css&&j.p(t,e),St["status-website"].js&&D.p(t,e),(St["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),K&&K.p&&(!T||2&e)&&function(t,e,n,s,r,o){if(r){const a=l(e,n,s,o);t.p(a,r)}}(K,z,t,t[1],T?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(z,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ut(m.$$.fragment,t),ut(K,t),T=!0)},o(t){dt(m.$$.fragment,t),dt(K,t),T=!1},d(t){L&&L.d(t),w(n),R.d(t),w(s),w(r),w(o),C&&C.d(t),w(a),H&&H.d(t),w(i),M&&M.d(t),w(c),j&&j.d(t),w(u),D&&D.d(t),w(d),t&&w(f),B&&B.d(t),t&&w(h),bt(m,t),t&&w(p),t&&w(b),K&&K.d(t),t&&w(y),t&&w(E)}}}function zt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Kt extends $t{constructor(t){super(),wt(this,t,zt,qt,a,{segment:0})}}function Vt(t){let e,n,s=t[1].stack+"";return{c(){e=_("pre"),n=E(s)},l(t){e=k(t,"PRE",{});var r=P(e);n=C(r,s),r.forEach(w)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&w(e)}}}function Jt(e){let n,s,r,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Vt(e);return{c(){s=S(),r=_("h1"),o=E(e[0]),a=S(),i=_("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){G('[data-svelte="svelte-1moakz"]',document.head).forEach(w),s=O(t),r=k(t,"H1",{class:!0});var n=P(r);o=C(n,e[0]),n.forEach(w),a=O(t),i=k(t,"P",{class:!0});var h=P(i);c=C(h,d),h.forEach(w),l=O(t),f&&f.l(t),u=x(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,a,e),v(t,i,e),g(i,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&d!==(d=t[1].message+"")&&M(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Vt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&w(s),t&&w(r),t&&w(a),t&&w(i),t&&w(l),f&&f.d(t),t&&w(u)}}}function Wt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Ft extends $t{constructor(t){super(),wt(this,t,Wt,Jt,a,{status:0,error:1})}}function Yt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&mt(n.$$.fragment),s=x()},l(t){n&&pt(n.$$.fragment,t),s=x()},m(t,e){n&&gt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?ft(o,[ht(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){ct();const t=n;dt(t.$$.fragment,1,0,(()=>{bt(t,1)})),lt()}a?(n=new a(i()),mt(n.$$.fragment),ut(n.$$.fragment,1),gt(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&ut(n.$$.fragment,t),r=!0)},o(t){n&&dt(n.$$.fragment,t),r=!1},d(t){t&&w(s),n&&bt(n,t)}}}function Xt(t){let e,n;return e=new Ft({props:{error:t[0],status:t[1]}}),{c(){mt(e.$$.fragment)},l(t){pt(e.$$.fragment,t)},m(t,s){gt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){bt(e,t)}}}function Qt(t){let e,n,s,r;const o=[Xt,Yt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){a[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(ct(),dt(a[c],1,1,(()=>{a[c]=null})),lt(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),ut(n,1),n.m(s.parentNode,s))},i(t){r||(ut(n),r=!0)},o(t){dt(n),r=!1},d(t){a[e].d(t),t&&w(s)}}}function Zt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Qt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Kt({props:o}),{c(){mt(n.$$.fragment)},l(t){pt(n.$$.fragment,t)},m(t,e){gt(n,t,e),s=!0},p(t,[e]){const s=12&e?ft(r,[4&e&&{segment:t[2][0]},8&e&&ht(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ut(n.$$.fragment,t),s=!0)},o(t){dt(n.$$.fragment,t),s=!1},d(t){bt(n,t)}}}function te(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return J(l),u=Et,d=s,K().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class ee extends $t{constructor(t){super(),wt(this,t,te,Zt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ne=[],se=[{js:()=>Promise.all([import("./index.b066afb3.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.14844ab4.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].43fdc3e9.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].8c7048d5.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.36c8a5fb.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],re=(oe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:oe(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:oe(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var oe;
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
function ae(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function ie(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ce,le=1;const ue="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let fe,he;function me(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(fe))return null;let e=t.pathname.slice(fe.length);if(""===e&&(e="/"),!ne.some((t=>t.test(e))))for(let n=0;n<re.length;n+=1){const s=re[n],r=s.pattern.exec(e);if(r){const n=me(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ge(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ie(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=pe(r);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ue.pushState({id:ce},"",r.href)}}function be(){return{x:pageXOffset,y:pageYOffset}}function ve(t){if(de[ce]=be(),t.state){const e=pe(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){le=t}(le+1),function(t){ce=t}(le),ue.replaceState({id:ce},"",location.href)}function we(t,e,n,s){return ae(this,void 0,void 0,(function*(){const r=!!e;if(r)ce=e;else{const t=be();de[ce]=t,ce=e=++le,de[ce]=n?t:{x:0,y:0}}if(yield he(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[ce]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function $e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let _e,ye=null;function Ee(t){const e=ie(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=pe(new URL(t,$e(document)));if(e)ye&&t===ye.href||(ye={href:t,promise:De(e)}),ye.promise}(e.href)}function Se(t){clearTimeout(_e),_e=setTimeout((()=>{Ee(t)}),20)}function xe(t,e={noscroll:!1,replaceState:!1}){const n=pe(new URL(t,$e(document)));if(n){const s=we(n,null,e.noscroll);return ue[e.replaceState?"replaceState":"pushState"]({id:ce},"",t),s}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Te,Ne,Ie,Pe=!1,Le=[],Re="{}";const ke={page:function(t){const e=yt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:yt(null),session:yt(Ae&&Ae.session)};let Ce,Oe,He;function Ue(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return ae(this,void 0,void 0,(function*(){Te&&ke.preloading.set(!0);const e=function(t){return ye&&ye.href===t.href?ye.promise:De(t)}(t),n=Ne={},s=yield e,{redirect:r}=s;if(n===Ne)if(r)yield xe(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield je(n,e,Ue(e,t.page))}}))}function je(t,e,n){return ae(this,void 0,void 0,(function*(){ke.page.set(n),ke.preloading.set(!1),Te?Te.$set(e):(e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},e.level0={props:yield Ie},e.notify=ke.page.notify,Te=new ee({target:He,props:e,hydrate:!0})),Le=t,Re=JSON.stringify(n.query),Pe=!0,Oe=!1}))}function De(t){return ae(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=Ae.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ce)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>ae(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==Re)return!0;const r=Le[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const f=c++;let h;if(Oe||u||!Le[i]||Le[i].part!==e.i){u=!1;const{default:s,preload:r}=yield se[e.i].js();let o;o=Pe||!Ae.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ce):{}:Ae.preloaded[i+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=Le[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Be,Ge,qe;ke.session.subscribe((t=>ae(void 0,void 0,void 0,(function*(){if(Ce=t,!Pe)return;Oe=!0;const e=pe(new URL(location.href)),n=Ne={},{redirect:s,props:r,branch:o}=yield De(e);n===Ne&&(s?yield xe(s.location,{replaceState:!0}):yield je(o,r,Ue(r,e.page)))})))),Be={target:document.querySelector("#sapper")},Ge=Be.target,He=Ge,qe=Ae.baseUrl,fe=qe,he=Me,"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ue.scrollRestoration="auto"})),addEventListener("load",(()=>{ue.scrollRestoration="manual"})),addEventListener("click",ge),addEventListener("popstate",ve),addEventListener("touchstart",Ee),addEventListener("mousemove",Se),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Ae;Ie||(Ie=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ie},level1:{props:{status:o,error:a},component:Ft},segments:r},c=me(n);je([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ue.replaceState({id:le},"",e);const n=pe(new URL(location.href));if(n)return we(n,le,!0,t)}));export{bt as A,A as B,r as C,Y as D,U as E,c as F,d as G,q as H,G as I,Ct as J,y as K,xe as L,j as M,T as N,e as O,I as P,ft as Q,J as R,$t as S,W as T,u as U,ht as V,et as W,B as X,P as a,C as b,k as c,w as d,_ as e,N as f,v as g,g as h,wt as i,S as j,O as k,ct as l,dt as m,t as n,lt as o,ut as p,V as q,St as r,a as s,E as t,M as u,x as v,$ as w,mt as x,pt as y,gt as z};

import __inject_styles from './inject_styles.803b7e80.js';