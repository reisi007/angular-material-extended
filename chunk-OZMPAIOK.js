import{Jb as w,Ma as a,ab as h,ca as l,ea as u,fd as M,ga as o,ja as f,pa as p,qa as g,ta as v,xb as y,ya as m,yb as D}from"./chunk-N476DBZA.js";var s=new WeakMap,T=(()=>{class e{_appRef;_injector=o(p);_environmentInjector=o(f);load(n){let t=this._appRef=this._appRef||this._injector.get(w),i=s.get(t);i||(i={loaders:new Set,refs:[]},s.set(t,i),t.onDestroy(()=>{s.get(t)?.refs.forEach(S=>S.destroy()),s.delete(t)})),i.loaders.has(n)||(i.loaders.add(n),i.refs.push(M(n,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=a({token:e,factory:e.\u0275fac})}return e})();var A=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=y({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})(),d;function E(){if(d===void 0&&(d=null,typeof window<"u")){let e=window;if(e.trustedTypes!==void 0)try{d=e.trustedTypes.createPolicy("angular#components",{createHTML:r=>r})}catch(r){console.error(r)}}return d}function I(e){return E()?.createHTML(e)||e}function F(e,r,n){let t=n.sanitize(h.HTML,r);e.innerHTML=I(t||"")}var L=new u("cdk-dir-doc",{providedIn:"root",factory:()=>o(g)}),x=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function _(e){let r=e?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?x.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var C=(()=>{class e{get value(){return this.valueSignal()}valueSignal=m("ltr");change=new v;constructor(){let n=o(L,{optional:!0});if(n){let t=n.body?n.body.dir:null,i=n.documentElement?n.documentElement.dir:null;this.valueSignal.set(_(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=a({token:e,factory:e.\u0275fac})}return e})();var G=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=D({type:e});static \u0275inj=l({})}return e})();export{T as a,A as b,I as c,F as d,C as e,G as f};
