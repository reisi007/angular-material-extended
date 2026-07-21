import{a as it,c as ot,e as at,f as st,g as rt}from"./chunk-IASU6OP2.js";import{b as tt,c as et,d as nt}from"./chunk-A6U5CPGA.js";import"./chunk-2RCIUV4V.js";import"./chunk-3AAYRBXX.js";import"./chunk-5ETSWK6G.js";import"./chunk-ZC4H5EHS.js";import{a as U,h as W}from"./chunk-7LJ5SCFJ.js";import{b as J,e as $}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-ROGFBH7V.js";import"./chunk-E7N562OR.js";import{$ as K,J as d,L as k,_ as G,ja as Z,n as Y,v as q}from"./chunk-45MN3S43.js";import{f as X}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{D,E as f,Eb as F,Fb as v,Jc as Q,K as g,Lb as N,Ma as A,Tb as o,Ub as a,Vb as y,a as S,ac as V,b as T,ca as R,cc as h,ea as M,ec as _,ga as c,ic as j,j as E,jc as H,kc as P,la as u,ma as b,pa as I,qc as z,ta as O,tc as r,xb as p,yb as L}from"./chunk-N476DBZA.js";function ut(i,m){}var mt="_mat-bottom-sheet-enter",lt="_mat-bottom-sheet-exit",bt=(()=>{class i extends tt{_breakpointSubscription;_animationsDisabled=k();_animationState="void";_animationStateChanged=new O;_destroyed=!1;constructor(){super();let t=c(Y);this._breakpointSubscription=t.observe([d.Medium,d.Large,d.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle("mat-bottom-sheet-container-medium",t.isMatched(d.Medium)),n.toggle("mat-bottom-sheet-container-large",t.isMatched(d.Large)),n.toggle("mat-bottom-sheet-container-xlarge",t.isMatched(d.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(mt))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(lt))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,t,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,n,e){if(e===this._elementRef.nativeElement){let s=n===mt;(s||n===lt)&&this._animationStateChanged.emit({toState:s?"visible":"hidden",phase:t?"start":"done"})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(n,e){n&1&&h("animationstart",function(l){return e._handleAnimationEvent(!0,l.animationName,l.target)})("animationend",function(l){return e._handleAnimationEvent(!1,l.animationName,l.target)})("animationcancel",function(l){return e._handleAnimationEvent(!1,l.animationName,l.target)}),n&2&&(N("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-label",e._config.ariaLabel),z("mat-bottom-sheet-container-animations-enabled",!e._animationsDisabled)("mat-bottom-sheet-container-enter",e._animationState==="visible")("mat-bottom-sheet-container-exit",e._animationState==="hidden"))},features:[F],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,e){n&1&&v(0,ut,0,0,"ng-template",0)},dependencies:[G],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2,changeDetection:1})}return i})(),_t=new M("MatBottomSheetData"),w=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;height="";minHeight;maxHeight;bindings},x=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new E;_result;_closeFallbackTimeout;constructor(m,t,n){this._ref=m,this.containerInstance=n,this.disableClose=t.disableClose,n._animationStateChanged.pipe(f(e=>e.phase==="done"&&e.toState==="visible"),g(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(f(e=>e.phase==="done"&&e.toState==="hidden"),g(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),D(this.backdropClick(),this.keydownEvents().pipe(f(e=>e.keyCode===27))).subscribe(e=>{!this.disableClose&&(e.type!=="keydown"||!q(e))&&(e.preventDefault(),this.dismiss())})}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(f(t=>t.phase==="start"),g(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=m,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},St=new M("mat-bottom-sheet-default-options"),C=(()=>{class i{_injector=c(I);_parentBottomSheet=c(i,{optional:!0,skipSelf:!0});_animationsDisabled=k();_defaultOptions=c(St,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=c(et);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,n){let e=S(S({},this._defaultOptions||new w),n),s;return this._dialog.open(t,T(S({},e),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:bt,scrollStrategy:e.scrollStrategy||U(this._injector),positionStrategy:W(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:s}),providers:(l,xt,pt)=>(s=new x(l,e,pt),[{provide:x,useValue:s},{provide:_t,useValue:e.data}])})),s.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===s&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>s.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):s.containerInstance.enter(),this._openedBottomSheetRef=s,s}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=A({token:i,factory:i.\u0275fac})}return i})(),ht=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=L({type:i});static \u0275inj=R({providers:[C],imports:[nt,K,X]})}return i})();var vt=["bottomSheetTemplate"];function yt(i,m){if(i&1){let t=V();o(0,"mat-nav-list")(1,"a",7),h("click",function(){u(t);let e=_();return b(e.closeBottomSheet())}),o(2,"mat-icon",8),r(3,"share"),a(),o(4,"span",9),r(5,"Share"),a()(),o(6,"a",7),h("click",function(){u(t);let e=_();return b(e.closeBottomSheet())}),o(7,"mat-icon",8),r(8,"link"),a(),o(9,"span",9),r(10,"Copy link"),a()(),o(11,"a",7),h("click",function(){u(t);let e=_();return b(e.closeBottomSheet())}),o(12,"mat-icon",8),r(13,"edit"),a(),o(14,"span",9),r(15,"Edit"),a()(),o(16,"a",10),h("click",function(){u(t);let e=_();return b(e.closeBottomSheet())}),o(17,"mat-icon",11),r(18,"delete"),a(),o(19,"span",9),r(20,"Delete"),a()()()}}var B=class i{#t=c(C);bottomSheetTemplate;openBottomSheet(){this.#t.open(this.bottomSheetTemplate)}closeBottomSheet(){this.#t.dismiss()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["rui-material-bottom-sheet-basic"]],viewQuery:function(t,n){if(t&1&&j(vt,5),t&2){let e;H(e=P())&&(n.bottomSheetTemplate=e.first)}},decls:11,vars:0,consts:[["bottomSheetTemplate",""],["id","bottom-sheet-basic",1,"mb-8"],["id","bottom-sheet-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","primary",3,"click"],["html",`<button mat-raised-button color="primary" (click)="openBottomSheet()">Open Bottom Sheet</button>

<ng-template #bottomSheetTemplate>
  <mat-nav-list>
    <a mat-list-item (click)="closeBottomSheet()">
      <mat-icon matListItemIcon>share</mat-icon>
      <span matListItemTitle>Share</span>
    </a>
    <a mat-list-item (click)="closeBottomSheet()">
      <mat-icon matListItemIcon>link</mat-icon>
      <span matListItemTitle>Copy link</span>
    </a>
  </mat-nav-list>
</ng-template>`,"ts",`import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

readonly #bottomSheet = inject(MatBottomSheet);
@ViewChild('bottomSheetTemplate') private readonly bottomSheetTemplate!: TemplateRef<unknown>;

openBottomSheet(): void {
  this.#bottomSheet.open(this.bottomSheetTemplate);
}`],["mat-list-item","",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","",1,"text-[var(--mat-sys-error)]",3,"click"],["matListItemIcon","","color","warn"]],template:function(t,n){t&1&&(o(0,"section",1)(1,"h2",2),r(2,"Basic Bottom Sheet"),a(),o(3,"p",3),r(4,"Open a bottom sheet with a list of actions using MatBottomSheet service and a template."),a(),o(5,"div",4)(6,"button",5),h("click",function(){return n.openBottomSheet()}),r(7,"Open Bottom Sheet"),a()(),v(8,yt,21,0,"ng-template",null,0,Q),y(10,"rui-showcase-code",6),a())},dependencies:[ht,$,J,rt,st,at,ot,it,Z],encapsulation:2})};var dt=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["rui-material-bottom-sheet"]],decls:7,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Bottom Sheet"),a(),o(4,"p",3),r(5,"MatBottomSheet displays contextual information as a panel anchored to the bottom of the screen."),a()(),y(6,"rui-material-bottom-sheet-basic"),a())},dependencies:[B],encapsulation:2})};export{dt as MaterialBottomSheet};
