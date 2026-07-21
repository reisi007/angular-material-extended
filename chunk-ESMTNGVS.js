import{b as st,c as lt}from"./chunk-XT355LQ6.js";import{b as Se,c as Me}from"./chunk-KHMA3PY5.js";import{a as ye}from"./chunk-PFXLYJGD.js";import{a as be,e as ve}from"./chunk-RQ6LY3TZ.js";import{a as xe}from"./chunk-NKP4UQB5.js";import{b as we,e as Ee}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import{b as he,e as pt,h as dt,j as fe,m as _e,s as ge}from"./chunk-ROGFBH7V.js";import{a as Mt}from"./chunk-E7N562OR.js";import{$ as yt,A as _t,L as gt,X as bt,_ as vt,d as mt,ea as xt,f as ct,fa as St,j as ut,ja as Ce,v as ht,x as ft}from"./chunk-45MN3S43.js";import{a as at,b as rt,e as ot,f as ue}from"./chunk-OZMPAIOK.js";import{h as Re}from"./chunk-MJUAA4UW.js";import{$b as C,Ac as L,Cc as et,Dc as Fe,Eb as R,Fb as M,Fc as J,Gb as Je,Gc as tt,Ja as Ue,Jc as Pe,Ka as G,Lb as Q,Ma as Ke,Mb as y,Na as U,Nb as x,Nc as me,Oa as K,Pb as re,Qb as oe,Rb as se,Sb as u,Tb as o,Ub as a,Uc as nt,V as P,Vb as I,W as je,X as O,ac as D,ad as ce,bc as W,ca as ie,cc as k,cd as j,dd as it,ea as $e,ec as d,f as Qe,fc as Z,ga as c,gc as Y,hc as q,ic as le,j as ne,jb as l,jc as _,kb as H,kc as g,la as h,ma as f,mb as Ze,nb as w,ob as E,oc as T,pc as Xe,q as We,qc as A,sb as Ye,sc as pe,ta as B,tc as p,u as qe,ua as Ge,uc as F,vc as de,xb as b,ya as S,yb as ae,yc as N,zb as v,zc as z}from"./chunk-N476DBZA.js";var Lt=["*"];function Ot(t,s){t&1&&Y(0)}var Ae=(()=>{class t{_elementRef=c(U);focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),Ve=(()=>{class t{template=c(H);static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var V={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Ft=new $e("STEPPER_GLOBAL_OPTIONS"),De=(()=>{class t{_stepperOptions;_stepper=c($);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=S(!1);interactedStream=new B;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=S(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=S(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=S(null);index=S(-1);isSelected=me(()=>this._stepper.selectedIndex===this.index());indicatorType=me(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??V.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?V.ERROR:this._displayDefaultIndicatorType?!n||e?V.NUMBER:r?V.EDIT:V.DONE:n&&!e?V.DONE:n&&e?i:r&&e?V.EDIT:i});isNavigable=me(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=S(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=c(Ft,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["cdk-step"]],contentQueries:function(n,i,r){if(n&1&&q(r,Ve,5)(r,pt,5),n&2){let m;_(m=g())&&(i.stepLabel=m.first),_(m=g())&&(i._childForms=m)}},viewQuery:function(n,i){if(n&1&&le(H,7),n&2){let r;_(r=g())&&(i.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",j],optional:[2,"optional","optional",j],completed:[2,"completed","completed",j],hasError:[2,"hasError","hasError",j]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Ue],ngContentSelectors:Lt,decls:1,vars:0,template:function(n,i){n&1&&(Z(),Je(0,Ot,1,0,"ng-template"))},encapsulation:2})}return t})(),$=(()=>{class t{_dir=c(ot,{optional:!0});_changeDetectorRef=c(ce);_elementRef=c(U);_destroyed=new ne;_keyManager;_steps;steps=new K;_stepHeader;_sortedHeaders=new K;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=S(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=S(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new B;selectedIndexChange=new B;_groupId=c(_t).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(P(this._steps),O(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(P(this._stepHeader),O(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new ft(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:We()).pipe(P(this._layoutDirection()),O(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=ht(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?i.invalid||i.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=mt();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,i,r){if(n&1&&q(r,De,5)(r,Ae,5),n&2){let m;_(m=g())&&(i._steps=m),_(m=g())&&(i._stepHeader=m)}},inputs:{linear:[2,"linear","linear",j],selectedIndex:[2,"selectedIndex","selectedIndex",it],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})(),Ct=(()=>{class t{_stepper=c($);type="submit";static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(n,i){n&1&&k("click",function(){return i._stepper.next()}),n&2&&W("type",i.type)},inputs:{type:"type"}})}return t})(),wt=(()=>{class t{_stepper=c($);type="button";static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(n,i){n&1&&k("click",function(){return i._stepper.previous()}),n&2&&W("type",i.type)},inputs:{type:"type"}})}return t})(),Et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ue]})}return t})();var Pt=(t,s,e)=>({index:t,active:s,optional:e});function Rt(t,s){if(t&1&&C(0,2),t&2){let e=d();u("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",tt(2,Pt,e.index,e.active,e.optional))}}function At(t,s){if(t&1&&(o(0,"span",7),p(1),a()),t&2){let e=d(2);l(),F(e._getDefaultTextForState(e.state))}}function Vt(t,s){if(t&1&&(o(0,"span",8),p(1),a()),t&2){let e=d(3);l(),F(e._intl.completedLabel)}}function Bt(t,s){if(t&1&&(o(0,"span",8),p(1),a()),t&2){let e=d(3);l(),F(e._intl.editableLabel)}}function Ht(t,s){if(t&1&&(y(0,Vt,2,1,"span",8)(1,Bt,2,1,"span",8),o(2,"mat-icon",7),p(3),a()),t&2){let e=d(2);x(e.state==="done"?0:e.state==="edit"?1:-1),l(3),F(e._getDefaultTextForState(e.state))}}function Qt(t,s){if(t&1&&y(0,At,2,1,"span",7)(1,Ht,4,2),t&2){let e,n=d();x((e=n.state)==="number"?0:1)}}function Wt(t,s){t&1&&(o(0,"div",4),C(1,9),a()),t&2&&(l(),u("ngTemplateOutlet",s.template))}function qt(t,s){if(t&1&&(o(0,"div",4),p(1),a()),t&2){let e=d();l(),F(e.label)}}function jt(t,s){if(t&1&&(o(0,"div",5),p(1),a()),t&2){let e=d();l(),F(e._intl.optionalLabel)}}function $t(t,s){if(t&1&&(o(0,"div",6),p(1),a()),t&2){let e=d();l(),F(e.errorMessage)}}var It=["*"];function Gt(t,s){}function Ut(t,s){if(t&1&&(Y(0),M(1,Gt,0,0,"ng-template",0)),t&2){let e=d();l(),u("cdkPortalOutlet",e._portal)}}var Kt=["animatedContainer"],Dt=t=>({steps:t}),kt=t=>({step:t});function Zt(t,s){t&1&&Y(0)}function Yt(t,s){if(t&1&&(o(0,"div",5),C(1,9)(2,6),a()),t&2){let e=d(2),n=T(6);l(),u("ngTemplateOutlet",e.headerPrefix()),l(),u("ngTemplateOutlet",n)("ngTemplateOutletContext",J(3,Dt,e.steps))}}function Jt(t,s){if(t&1&&C(0,6),t&2){let e=d(2),n=T(6);u("ngTemplateOutlet",n)("ngTemplateOutletContext",J(2,Dt,e.steps))}}function Xt(t,s){if(t&1&&(o(0,"div",10,2),C(2,9),a()),t&2){let e=s.$implicit,n=s.$index,i=d(2);pe("mat-horizontal-stepper-content-"+i._getAnimationDirection(n)),u("id",i._getStepContentId(n)),Q("aria-labelledby",i._getStepLabelId(n))("inert",i.selectedIndex===n?null:""),l(2),u("ngTemplateOutlet",e.content)}}function en(t,s){if(t&1&&(o(0,"div",3),y(1,Yt,3,5,"div",5)(2,Jt,1,4,"ng-container",6),o(3,"div",7),oe(4,Xt,3,6,"div",8,re),a()()),t&2){let e=d();l(),x(e.headerPrefix()?1:2),l(3),se(e.steps)}}function tn(t,s){if(t&1&&C(0,9),t&2){let e=d(2);u("ngTemplateOutlet",e.headerPrefix())}}function nn(t,s){if(t&1&&(o(0,"div",11),C(1,6),o(2,"div",12,2)(4,"div",13)(5,"div",14),C(6,9),a()()()()),t&2){let e=s.$implicit,n=s.$index,i=s.$index,r=s.$count,m=d(2),Oe=T(4);l(),u("ngTemplateOutlet",Oe)("ngTemplateOutletContext",J(11,kt,e)),l(),A("mat-stepper-vertical-line",i!==r-1)("mat-vertical-content-container-active",m.selectedIndex===n),Q("inert",m.selectedIndex===n?null:"")("aria-label",m.ariaLabel),l(2),u("id",m._getStepContentId(n)),Q("aria-labelledby",m._getStepLabelId(n)),l(2),u("ngTemplateOutlet",e.content)}}function an(t,s){if(t&1&&(o(0,"div",4),y(1,tn,1,1,"ng-container",9),oe(2,nn,7,13,"div",11,re),a()),t&2){let e=d();l(),x(e.headerPrefix()?1:-1),l(),se(e.steps)}}function rn(t,s){if(t&1){let e=D();o(0,"mat-step-header",15),k("click",function(){let i=h(e).step;return f(i.select())})("keydown",function(i){h(e);let r=d();return f(r._onKeydown(i))}),a()}if(t&2){let e=s.step,n=d();A("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),u("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),Q("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function on(t,s){t&1&&I(0,"div",17)}function sn(t,s){if(t&1&&(C(0,6),y(1,on,1,0,"div",17)),t&2){let e=s.$implicit,n=s.$index,i=s.$count;d(2);let r=T(4);u("ngTemplateOutlet",r)("ngTemplateOutletContext",J(3,kt,e)),l(),x(n!==i-1?1:-1)}}function ln(t,s){if(t&1&&(o(0,"div",16),oe(1,sn,2,5,null,null,re),a()),t&2){let e=s.steps,n=d();Q("aria-label",n.ariaLabel),l(),se(e)}}var Be=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(t)))(i||t)}})();static \u0275dir=v({type:t,selectors:[["","matStepLabel",""]],features:[R]})}return t})(),pn=(()=>{class t{changes=new ne;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=Ke({token:t,factory:t.\u0275fac})}return t})(),He=(()=>{class t extends Ae{_intl=c(pn);_focusMonitor=c(ut);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=c(at);e.load(St),e.load(rt);let n=c(ce);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof Be?null:this.label}_templateLabel(){return this.label instanceof Be?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,i){n&2&&(pe("mat-"+(i.color||"primary")),A("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[R],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(I(0,"div",0),o(1,"div")(2,"div",1),y(3,Rt,1,6,"ng-container",2)(4,Qt,2,1),a()(),o(5,"div",3),y(6,Wt,2,1,"div",4)(7,qt,2,1,"div",4),y(8,jt,2,1,"div",5),y(9,$t,2,1,"div",6),a()),n&2){let r;u("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),l(),pe(et("mat-step-icon-state-",i.state," mat-step-icon")),A("mat-step-icon-selected",i.selected),l(2),x(i.iconOverrides&&i.iconOverrides[i.state]?3:4),l(2),A("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),l(),x((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),l(2),x(i._hasOptionalLabel()?8:-1),l(),x(i._hasErrorLabel()?9:-1)}},dependencies:[xt,Re,st],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2})}return t})(),dn=(()=>{class t{templateRef=c(H);name;static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),X=(()=>{class t{_template=c(H);static \u0275fac=function(n){return new(n||t)};static \u0275dir=v({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),ee=(()=>{class t extends De{_errorStateMatcher=c(xe,{skipSelf:!0});_viewContainerRef=c(Ye);_isSelected=Qe.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(je(()=>this._stepper.selectionChange.pipe(qe(e=>e.selectedStep===this),P(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new bt(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),r=!!(e&&e.invalid&&this.interacted);return i||r}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,i=!!(e&&e().invalid()&&this.interacted);return n||i}static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["mat-step"]],contentQueries:function(n,i,r){if(n&1&&q(r,Be,5)(r,X,5),n&2){let m;_(m=g())&&(i.stepLabel=m.first),_(m=g())&&(i._lazyContent=m.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[Fe([{provide:xe,useExisting:t},{provide:De,useExisting:t}]),R],ngContentSelectors:It,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(Z(),M(0,Ut,2,1,"ng-template"))},dependencies:[vt],encapsulation:2})}return t})(),te=(()=>{class t extends ${_ngZone=c(Ge);_renderer=c(Ze);_animationsDisabled=gt();_cleanupTransition;_isAnimating=S(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new K;_icons;animationDone=new B;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=nt(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=""}_animationDuration="";_isServer=!c(ct).isBrowser;constructor(){super();let n=c(U).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(O(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(O(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(P(null),O(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),r=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(i||r)&&this._animatedContainers.find(Oe=>Oe.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,i,r){if(n&1&&q(r,ee,5)(r,dn,5),n&2){let m;_(m=g())&&(i._steps=m),_(m=g())&&(i._icons=m)}},viewQuery:function(n,i){if(n&1&&le(He,5)(Kt,5),n&2){let r;_(r=g())&&(i._stepHeader=r),_(r=g())&&(i._animatedContainers=r)}},hostVars:14,hostBindings:function(n,i){n&2&&(Xe("--mat-stepper-animation-duration",i._getAnimationDuration()),A("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[Fe([{provide:$,useExisting:t}]),R],ngContentSelectors:It,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,i){if(n&1&&(Z(),y(0,Zt,1,0),y(1,en,6,1,"div",3)(2,an,4,1,"div",4),M(3,rn,1,27,"ng-template",null,0,Pe)(5,ln,3,1,"ng-template",null,1,Pe)),n&2){let r;x(i._isServer?0:-1),l(),x((r=i.orientation)==="horizontal"?1:r==="vertical"?2:-1)}},dependencies:[Re,He],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return t})(),ke=(()=>{class t extends Ct{static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(t)))(i||t)}})();static \u0275dir=v({type:t,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(n,i){n&2&&W("type",i.type)},features:[R]})}return t})(),Te=(()=>{class t extends wt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(t)))(i||t)}})();static \u0275dir=v({type:t,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(n,i){n&2&&W("type",i.type)},features:[R]})}return t})(),Ne=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({providers:[xe],imports:[yt,Et,lt,Mt,te,He,ue]})}return t})();function fn(t,s){if(t&1){let e=D();o(0,"div",11)(1,"mat-form-field")(2,"mat-label"),p(3,"Name"),a(),o(4,"input",12),L("ngModelChange",function(i){h(e);let r=d();return z(r.name,i)||(r.name=i),f(i)}),a(),w(),a(),o(5,"div",13)(6,"button",14),p(7,"Next"),a()()()}if(t&2){let e=d();l(4),N("ngModel",e.name),E()}}function _n(t,s){if(t&1){let e=D();o(0,"div",11)(1,"mat-form-field")(2,"mat-label"),p(3,"Email"),a(),o(4,"input",15),L("ngModelChange",function(i){h(e);let r=d();return z(r.email,i)||(r.email=i),f(i)}),a(),w(),a(),o(5,"mat-form-field")(6,"mat-label"),p(7,"Phone"),a(),o(8,"input",16),L("ngModelChange",function(i){h(e);let r=d();return z(r.phone,i)||(r.phone=i),f(i)}),a(),w(),a(),o(9,"div",13)(10,"button",17),p(11,"Back"),a(),o(12,"button",14),p(13,"Next"),a()()()}if(t&2){let e=d();l(4),N("ngModel",e.email),E(),l(4),N("ngModel",e.phone),E()}}function gn(t,s){if(t&1){let e=D();o(0,"div",18)(1,"p",19),p(2,"Review your information:"),a(),o(3,"div",20)(4,"p")(5,"strong"),p(6,"Name:"),a(),p(7),a(),o(8,"p")(9,"strong"),p(10,"Email:"),a(),p(11),a(),o(12,"p")(13,"strong"),p(14,"Phone:"),a(),p(15),a()(),o(16,"div",13)(17,"button",17),p(18,"Back"),a(),o(19,"button",21),k("click",function(){h(e),d();let i=T(7);return f(i.reset())}),p(20,"Reset"),a()()()}if(t&2){let e=d();l(7),de(" ",e.name||"\u2014"),l(4),de(" ",e.email||"\u2014"),l(4),de(" ",e.phone||"\u2014")}}var ze=class t{name="";email="";phone="";codeHtml=`<mat-horizontal-stepper [linear]="true">
  <mat-step label="Personal Info">
    <ng-template matStepContent>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput [(ngModel)]="name" name="name" required>
      </mat-form-field>
      <button mat-raised-button color="primary" matStepperNext>Next</button>
    </ng-template>
  </mat-step>
  <mat-step label="Contact">
    <ng-template matStepContent>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput [(ngModel)]="email" name="email" type="email" required>
      </mat-form-field>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-raised-button color="primary" matStepperNext>Next</button>
    </ng-template>
  </mat-step>
  <mat-step label="Done">
    <ng-template matStepContent>
      <p>Review your information</p>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-raised-button color="primary" (click)="stepper.reset()">Reset</button>
    </ng-template>
  </mat-step>
</mat-horizontal-stepper>`;codeTs=`import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

export class MyComponent {
  name = '';
  email = '';
  phone = '';
}`;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["rui-material-stepper-linear"]],decls:15,vars:3,consts:[["stepper",""],["id","stepper-linear",1,"mb-8"],["id","stepper-linear",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[3,"linear"],["label","Personal Info"],["matStepContent",""],["label","Contact"],["label","Done"],[3,"html","ts"],[1,"flex","flex-col","gap-4","py-3"],["matInput","","name","name","required","",3,"ngModelChange","ngModel"],[1,"flex","gap-2"],["mat-raised-button","","color","primary","matStepperNext",""],["matInput","","name","email","type","email","required","",3,"ngModelChange","ngModel"],["matInput","","name","phone","type","tel",3,"ngModelChange","ngModel"],["mat-button","","matStepperPrevious",""],[1,"flex","flex-col","gap-3","py-3"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]"],[1,"text-sm","text-[var(--mat-sys-on-surface)]"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,n){e&1&&(o(0,"section",1)(1,"h2",2),p(2,"Linear Stepper"),a(),o(3,"p",3),p(4,"Horizontal linear stepper with validation on each step."),a(),o(5,"div",4)(6,"mat-horizontal-stepper",5,0)(8,"mat-step",6),M(9,fn,8,1,"ng-template",7),a(),o(10,"mat-step",8),M(11,_n,14,2,"ng-template",7),a(),o(12,"mat-step",9),M(13,gn,21,3,"ng-template",7),a()()(),I(14,"rui-showcase-code",10),a()),e&2&&(l(6),u("linear",!0),l(8),u("html",n.codeHtml)("ts",n.codeTs))},dependencies:[Ne,ee,te,ke,Te,X,ye,ve,be,Me,Se,Ee,we,ge,he,fe,dt,_e,Ce],encapsulation:2})};function bn(t,s){if(t&1){let e=D();o(0,"div",10)(1,"mat-form-field")(2,"mat-label"),p(3,"First Name"),a(),o(4,"input",11),L("ngModelChange",function(i){h(e);let r=d();return z(r.firstName,i)||(r.firstName=i),f(i)}),a(),w(),a(),o(5,"mat-form-field")(6,"mat-label"),p(7,"Last Name"),a(),o(8,"input",12),L("ngModelChange",function(i){h(e);let r=d();return z(r.lastName,i)||(r.lastName=i),f(i)}),a(),w(),a(),o(9,"div",13)(10,"button",14),p(11,"Next"),a()()()}if(t&2){let e=d();l(4),N("ngModel",e.firstName),E(),l(4),N("ngModel",e.lastName),E()}}function vn(t,s){if(t&1){let e=D();o(0,"div",10)(1,"mat-form-field")(2,"mat-label"),p(3,"Company"),a(),o(4,"input",15),L("ngModelChange",function(i){h(e);let r=d();return z(r.company,i)||(r.company=i),f(i)}),a(),w(),a(),o(5,"mat-form-field")(6,"mat-label"),p(7,"Notes"),a(),o(8,"textarea",16),L("ngModelChange",function(i){h(e);let r=d();return z(r.notes,i)||(r.notes=i),f(i)}),a(),w(),a(),o(9,"div",13)(10,"button",17),p(11,"Back"),a(),o(12,"button",18),k("click",function(){h(e),d();let i=T(7);return f(i.reset())}),p(13,"Done"),a()()()}if(t&2){let e=d();l(4),N("ngModel",e.company),E(),l(4),N("ngModel",e.notes),E()}}var Le=class t{firstName="";lastName="";company="";notes="";codeHtml=`<mat-vertical-stepper [linear]="false">
  <mat-step label="Basic Info" [editable]="true">
    <ng-template matStepContent>
      <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput [(ngModel)]="firstName" name="firstName">
      </mat-form-field>
      <button mat-raised-button color="primary" matStepperNext>Next</button>
    </ng-template>
  </mat-step>
  <mat-step label="Additional Info" [editable]="true">
    <ng-template matStepContent>
      <mat-form-field>
        <mat-label>Company</mat-label>
        <input matInput [(ngModel)]="company" name="company">
      </mat-form-field>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-raised-button color="primary" (click)="stepper.reset()">Done</button>
    </ng-template>
  </mat-step>
</mat-vertical-stepper>`;codeTs=`import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

export class MyComponent {
  firstName = '';
  lastName = '';
  company = '';
  notes = '';
}`;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["rui-material-stepper-non-linear"]],decls:13,vars:5,consts:[["verticalStepper",""],["id","stepper-non-linear",1,"mb-8"],["id","stepper-non-linear",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[3,"linear"],["label","Basic Info",3,"editable"],["matStepContent",""],["label","Additional Info",3,"editable"],[3,"html","ts"],[1,"flex","flex-col","gap-4","py-3"],["matInput","","name","firstName",3,"ngModelChange","ngModel"],["matInput","","name","lastName",3,"ngModelChange","ngModel"],[1,"flex","gap-2"],["mat-raised-button","","color","primary","matStepperNext",""],["matInput","","name","company",3,"ngModelChange","ngModel"],["matInput","","name","notes","rows","2",3,"ngModelChange","ngModel"],["mat-button","","matStepperPrevious",""],["mat-raised-button","","color","primary",3,"click"]],template:function(e,n){e&1&&(o(0,"section",1)(1,"h2",2),p(2,"Non-Linear Stepper"),a(),o(3,"p",3),p(4,"Vertical non-linear stepper allows free navigation between steps."),a(),o(5,"div",4)(6,"mat-vertical-stepper",5,0)(8,"mat-step",6),M(9,bn,12,2,"ng-template",7),a(),o(10,"mat-step",8),M(11,vn,14,2,"ng-template",7),a()()(),I(12,"rui-showcase-code",9),a()),e&2&&(l(6),u("linear",!1),l(2),u("editable",!0),l(2),u("editable",!0),l(2),u("html",n.codeHtml)("ts",n.codeTs))},dependencies:[Ne,ee,te,ke,Te,X,ye,ve,be,Me,Se,Ee,we,ge,he,fe,_e,Ce],encapsulation:2})};var zt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["rui-material-stepper"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),p(3,"Stepper"),a(),o(4,"p",3),p(5,"mat-stepper provides a wizard-like workflow for multi-step forms."),a()(),I(6,"rui-material-stepper-linear")(7,"rui-material-stepper-non-linear"),a())},dependencies:[ze,Le],encapsulation:2})};export{zt as MaterialStepper};
