import{a as Tt,b as Mt,c as wt,d as St}from"./chunk-A6U5CPGA.js";import{a as Ct,h as xt,n as At}from"./chunk-7LJ5SCFJ.js";import{b as f,e as _}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{$ as vt,A as Q,L as W,R as yt,_ as Dt,g as q,ja as w,v as bt}from"./chunk-45MN3S43.js";import{f as _t}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{D as J,Db as st,E as h,Eb as T,Fb as M,Ja as at,Jc as ft,K as v,Ka as x,Lb as V,Ma as ot,Mb as rt,Na as z,Nb as dt,Sb as mt,Tb as l,Ub as o,V as tt,Vb as p,a as D,b as X,bc as G,ca as et,cc as u,ea as C,ec as ct,ga as r,ic as gt,j as B,jb as A,jc as pt,kc as ut,l as N,pa as j,qc as H,ta as it,tc as s,vc as ht,xb as d,ya as nt,yb as lt,z as Z,zb as g}from"./chunk-N476DBZA.js";function Vt(e,a){}var E=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},U="mdc-dialog--open",Et="mdc-dialog--opening",Ot="mdc-dialog--closing",Gt=150,Ht=75,qt=(()=>{class e extends Mt{_animationStateChanged=new it;_animationsEnabled=!W();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?It(this._config.enterAnimationDuration)??Gt:0;_exitAnimationDuration=this._animationsEnabled?It(this._config.exitAnimationDuration)??Ht:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(kt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Et,U)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(U),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(U),this._animationsEnabled?(this._hostElement.style.setProperty(kt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ot)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Et,Ot)}_waitForAnimationToComplete(t,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let i=super.attachComponentPortal(t);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,n){i&2&&(G("id",n._config.id),V("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),H("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[T],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),M(2,Vt,0,0,"ng-template",2),o()())},dependencies:[Dt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return e})(),kt="--mat-dialog-transition-duration";function It(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?q(e.substring(0,e.length-2)):e.endsWith("s")?q(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var S=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(S||{}),b=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new N(1);_beforeClosed=new N(1);_result;_closeFallbackTimeout;_state=S.OPEN;_closeInteractionType;constructor(a,t,i){this._ref=a,this._config=t,this._containerInstance=i,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(h(n=>n.state==="opened"),v(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(h(n=>n.state==="closed"),v(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),J(this.backdropClick(),this.keydownEvents().pipe(h(n=>n.keyCode===27&&!this.disableClose&&!bt(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Rt(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(h(i=>i.state==="closing"),v(1)).subscribe(i=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=S.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=S.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Rt(e,a,t){return e._closeInteractionType=a,e.close(t)}var Qt=new C("MatMdcDialogData"),Wt=new C("mat-mdc-dialog-default-options"),Ut=new C("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=r(j);return()=>Ct(e)}}),m=(()=>{class e{_defaultOptions=r(Wt,{optional:!0});_scrollStrategy=r(Ut);_parentDialog=r(e,{optional:!0,skipSelf:!0});_idGenerator=r(Q);_injector=r(j);_dialog=r(wt);_animationsDisabled=W();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new B;_afterOpenedAtThisLevel=new B;dialogConfigClass=E;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Z(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(tt(void 0)));constructor(){this._dialogRefConstructor=b,this._dialogContainerType=qt,this._dialogDataToken=Qt}open(t,i){let n;i=D(D({},this._defaultOptions||new E),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let P=this._dialog.open(t,X(D({},i),{positionStrategy:xt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Tt,useValue:i}]},templateContext:()=>({dialogRef:n}),providers:(c,jt,K)=>(n=new this._dialogRefConstructor(c,i,K),n.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:K},{provide:this._dialogDataToken,useValue:jt.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=P.componentRef,n.componentInstance=P.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let c=this.openDialogs.indexOf(n);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let i=t.length;for(;i--;)t[i].close()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=ot({token:e,factory:e.\u0275fac})}return e})(),O=(()=>{class e{dialogRef=r(b,{optional:!0});_elementRef=r(z);_dialog=r(m);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Ft(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let i=t._matDialogClose;i&&(this.dialogResult=i.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&Rt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=g({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,n){i&1&&u("click",function(c){return n._onButtonClick(c)}),i&2&&V("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[at]})}return e})(),Lt=(()=>{class e{_dialogRef=r(b,{optional:!0});_elementRef=r(z);_dialog=r(m);ngOnInit(){this._dialogRef||(this._dialogRef=Ft(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||e)};static \u0275dir=g({type:e})}return e})(),k=(()=>{class e extends Lt{id=r(Q).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275dir=g({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,n){i&2&&G("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[T]})}return e})(),I=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=g({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[st([yt])]})}return e})(),R=(()=>{class e extends Lt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275dir=g({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,n){i&2&&H("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[T]})}return e})();function Ft(e,a){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(i=>i.id===t.id):null}var y=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=et({providers:[m],imports:[St,At,vt,_t]})}return e})();function $t(e,a){if(e&1&&(l(0,"span",5),s(1),o()),e&2){let t=ct();A(),ht("Confirmed: ",t.result())}}var $=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:9,vars:1,consts:[["mat-dialog-title","",1,"text-lg","font-semibold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]"],["align","end",1,"gap-2"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(t,i){t&1&&(l(0,"h2",0),s(1,"Confirm Action"),o(),l(2,"mat-dialog-content",1),s(3," Are you sure you want to proceed with this action? This cannot be undone. "),o(),l(4,"mat-dialog-actions",2)(5,"button",3),s(6,"Cancel"),o(),l(7,"button",4),s(8,"Confirm"),o()()),t&2&&(A(7),mt("mat-dialog-close",!0))},dependencies:[y,O,k,R,I,_,f],encapsulation:2})},L=class e{#t=r(m);result=nt(void 0);openDialog(){this.#t.open($).afterClosed().subscribe(t=>{t&&this.result.set("Dialog confirmed")})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rui-material-dialog-basic"]],decls:10,vars:1,consts:[["id","dialog-basic",1,"mb-8"],["id","dialog-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","primary",3,"click"],[1,"ml-2","text-sm","text-[var(--mat-sys-primary)]"],["html",'<button mat-raised-button color="primary" (click)="openDialog()">Open Dialog</button>',"ts",`import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

readonly #dialog = inject(MatDialog);
readonly result = signal<string | undefined>(undefined);

openDialog(): void {
  const ref = this.#dialog.open(ConfirmDialog);
  ref.afterClosed().subscribe(r => this.result.set(r ? 'Dialog confirmed' : undefined));
}

// Dialog content component (inline, not exported):
@Component({
  template: \`
    <h2 mat-dialog-title>Confirm Action</h2>
    <mat-dialog-content>Are you sure...</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button [mat-dialog-close]="true">Confirm</button>
    </mat-dialog-actions>
  \`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
class ConfirmDialog {}`]],template:function(t,i){t&1&&(l(0,"section",0)(1,"h2",1),s(2,"Basic Dialog"),o(),l(3,"p",2),s(4,"Open a dialog with a custom component using MatDialog service."),o(),l(5,"div",3)(6,"button",4),u("click",function(){return i.openDialog()}),s(7,"Open Dialog"),o(),rt(8,$t,2,1,"span",5),o(),p(9,"rui-showcase-code",6),o()),t&2&&(A(8),dt(i.result()?8:-1))},dependencies:[y,_,f,w],encapsulation:2})};var Kt=["dialogTemplate"];function Xt(e,a){e&1&&(l(0,"h2",7),s(1,"Template Dialog"),o(),l(2,"mat-dialog-content",8)(3,"p"),s(4,"This dialog content is defined as an ng-template."),o(),l(5,"p",9),s(6,"Templates are useful for simple dialogs that don't need a separate component."),o()(),l(7,"mat-dialog-actions",10)(8,"button",11),s(9,"Close"),o()())}var F=class e{#t=r(m);dialogTemplate;openDialog(){this.#t.open(this.dialogTemplate)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rui-material-dialog-template"]],viewQuery:function(t,i){if(t&1&&gt(Kt,5),t&2){let n;pt(n=ut())&&(i.dialogTemplate=n.first)}},decls:11,vars:0,consts:[["dialogTemplate",""],["id","dialog-template",1,"mb-8"],["id","dialog-template",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","primary",3,"click"],["html",`<ng-template #dialogTemplate>
  <h2 mat-dialog-title>Template Dialog</h2>
  <mat-dialog-content>
    <p>Dialog content</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close>Close</button>
  </mat-dialog-actions>
</ng-template>`,"ts",`import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

readonly #dialog = inject(MatDialog);
@ViewChild('dialogTemplate') private readonly dialogTemplate!: TemplateRef<unknown>;

openDialog(): void {
  this.#dialog.open(this.dialogTemplate);
}

// In component imports: [MatDialogModule, MatButtonModule]`],["mat-dialog-title","",1,"text-lg","font-semibold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]"],[1,"mt-2"],["align","end",1,"gap-2"],["mat-button","","mat-dialog-close",""]],template:function(t,i){t&1&&(l(0,"section",1)(1,"h2",2),s(2,"Dialog with Template"),o(),l(3,"p",3),s(4,"Open a dialog using an ng-template reference instead of a separate component."),o(),l(5,"div",4)(6,"button",5),u("click",function(){return i.openDialog()}),s(7,"Open Template Dialog"),o()(),M(8,Xt,10,0,"ng-template",null,0,ft),p(10,"rui-showcase-code",6),o())},dependencies:[y,O,k,R,I,_,f,w],encapsulation:2})};var Nt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rui-material-dialog"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"Dialog"),o(),l(4,"p",3),s(5,"MatDialog provides a configurable dialog overlay for displaying content in a modal window."),o()(),p(6,"rui-material-dialog-basic")(7,"rui-material-dialog-template"),o())},dependencies:[L,F],encapsulation:2})};export{Nt as MaterialDialog};
