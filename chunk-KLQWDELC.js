import{c as _t,h as kt,j as vt,n as yt}from"./chunk-7LJ5SCFJ.js";import{b as _,e as k}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{$ as ht,A as ut,J as pt,L as j,W as F,X as ft,Y as bt,_ as N,f as lt,ja as B,n as mt,t as dt}from"./chunk-45MN3S43.js";import{f as ct}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Eb as Y,Fb as tt,Lb as et,Ma as G,Mb as nt,Na as K,Nb as at,Tb as l,Ub as s,Vb as p,X as H,a as h,ac as it,ad as st,ca as U,cc as b,ea as E,ec as R,ga as r,ib as T,ic as rt,j as f,jb as S,jc as I,kb as $,kc as O,la as Z,ma as Q,pa as g,q,qa as W,qc as ot,tc as m,ua as X,vc as P,xb as u,yb as J,zb as A}from"./chunk-N476DBZA.js";function Ct(a,c){if(a&1){let t=it();l(0,"div",1)(1,"button",2),b("click",function(){Z(t);let n=R();return Q(n.action())}),m(2),s()()}if(a&2){let t=R();S(2),P(" ",t.data.action," ")}}var wt=["label"];function Dt(a,c){}var Et=Math.pow(2,31)-1,x=class{_overlayRef;instance;containerInstance;_afterDismissed=new f;_afterOpened=new f;_onAction=new f;_durationTimeoutId;_dismissedByAction=!1;constructor(c,t){this._overlayRef=t,this.containerInstance=c,c._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(c){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(c,Et))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},gt=new E("MatSnackBarData"),v=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Tt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),Rt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),It=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),St=(()=>{class a{snackBarRef=r(x);data=r(gt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=u({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(l(0,"div",0),m(1),s(),nt(2,Ct,3,1,"div",1)),e&2&&(S(),P(" ",n.data.message,`
`),S(),at(n.hasAction?2:-1))},dependencies:[_,Tt,Rt,It],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return a})(),L="_mat-snack-bar-enter",z="_mat-snack-bar-exit",Ot=(()=>{class a extends bt{_ngZone=r(X);_elementRef=r(K);_changeDetectorRef=r(st);_platform=r(lt);_animationsDisabled=j();snackBarConfig=r(v);_document=r(W);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=r(g);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new f;_onExit=new f;_onEnter=new f;_animationState="void";_live;_label;_role;_liveElementId=r(ut).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===z?this._completeExit():t===L&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?T(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(L)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(L)},200)))}exit(){return this._destroyed?q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?T(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(z)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(z),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(o=>t.classList.add(o)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],o=i.getAttribute("aria-owns");this._trackedModals.add(i),o?o.indexOf(t)===-1&&i.setAttribute("aria-owns",o+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(e&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=u({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&rt(N,7)(wt,7),e&2){let i;I(i=O())&&(n._portalOutlet=i.first),I(i=O())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,n){e&1&&b("animationend",function(o){return n.onAnimationEnd(o.animationName)})("animationcancel",function(o){return n.onAnimationEnd(o.animationName)}),e&2&&ot("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[Y],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),tt(4,Dt,0,0,"ng-template",4),s(),p(5,"div"),s()()),e&2&&(S(5),et("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[N],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return a})(),Pt=new E("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new v}),M=(()=>{class a{_live=r(dt);_injector=r(g);_breakpointObserver=r(mt);_parentSnackBar=r(a,{optional:!0,skipSelf:!0});_defaultConfig=r(Pt);_animationsDisabled=j();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=St;snackBarContainerComponent=Ot;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=h(h({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=g.create({parent:n||this._injector,providers:[{provide:v,useValue:e}]}),o=new F(this.snackBarContainerComponent,e.viewContainerRef,i),d=t.attach(o);return d.instance.snackBarConfig=e,d.instance}_attach(t,e){let n=h(h(h({},new v),this._defaultConfig),e),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),d=new x(o,i);if(t instanceof $){let y=new ft(t,null,{$implicit:n.data,snackBarRef:d});d.instance=o.attachTemplatePortal(y)}else{let y=this._createInjector(n,d),At=new F(t,void 0,y),Bt=o.attachComponentPortal(At);d.instance=Bt.instance}return this._breakpointObserver.observe(pt.HandsetPortrait).pipe(H(i.detachments())).subscribe(y=>{i.overlayElement.classList.toggle(this.handsetCssClass,y.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(d,n),this._openedSnackBarRef=d,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new _t;e.direction=t.direction;let n=kt(this._injector),i=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,d=!o&&t.horizontalPosition!=="center";return o?n.left("0"):d?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,vt(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return g.create({parent:n||this._injector,providers:[{provide:x,useValue:e},{provide:gt,useValue:t.data}]})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=G({token:a,factory:a.\u0275fac})}return a})();var C=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=J({type:a});static \u0275inj=U({providers:[M],imports:[yt,ht,k,St,ct]})}return a})();var w=class a{#t=r(M);openSnackbar(c="This is a snackbar message"){this.#t.open(c,void 0,{duration:3e3})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["rui-material-snackbar-basic"]],decls:9,vars:0,consts:[["id","snackbar-basic",1,"mb-8"],["id","snackbar-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","primary",3,"click"],["html",'<button mat-raised-button color="primary" (click)="openSnackbar()">Show Snackbar</button>',"ts",`import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

readonly #snackbar = inject(MatSnackBar);

openSnackbar(): void {
  this.#snackbar.open('Item saved successfully', 'Close', { duration: 3000 });
}

// In component imports: [MatSnackBarModule, MatButtonModule]`]],template:function(t,e){t&1&&(l(0,"section",0)(1,"h2",1),m(2,"Basic Snackbar"),s(),l(3,"p",2),m(4,"A simple snackbar with a text message that auto-dismisses after a few seconds."),s(),l(5,"div",3)(6,"button",4),b("click",function(){return e.openSnackbar()}),m(7,"Show Snackbar"),s()(),p(8,"rui-showcase-code",5),s())},dependencies:[C,k,_,B],encapsulation:2})};var D=class a{#t=r(M);openSnackbar(){this.#t.open("Item deleted","Undo",{duration:3e3}).onAction().subscribe(()=>{this.#t.open("Undo successful",void 0,{duration:2e3})})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["rui-material-snackbar-action"]],decls:9,vars:0,consts:[["id","snackbar-action",1,"mb-8"],["id","snackbar-action",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","primary",3,"click"],["html",'<button mat-raised-button color="primary" (click)="openSnackbar()">Delete Item</button>',"ts",`import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

readonly #snackbar = inject(MatSnackBar);

openSnackbar(): void {
  const ref = this.#snackbar.open('Item deleted', 'Undo', { duration: 3000 });
  ref.onAction().subscribe(() => {
    // Handle undo logic here
  });
}

// In component imports: [MatSnackBarModule, MatButtonModule]`]],template:function(t,e){t&1&&(l(0,"section",0)(1,"h2",1),m(2,"Snackbar with Action"),s(),l(3,"p",2),m(4,"A snackbar with an action button (Undo) that lets users reverse the last operation."),s(),l(5,"div",3)(6,"button",4),b("click",function(){return e.openSnackbar()}),m(7,"Delete Item"),s()(),p(8,"rui-showcase-code",5),s())},dependencies:[C,k,_,B],encapsulation:2})};var Mt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=u({type:a,selectors:[["rui-material-snackbar"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"Snackbar"),s(),l(4,"p",3),m(5,"MatSnackBar displays brief messages at the bottom of the screen with optional action buttons."),s()(),p(6,"rui-material-snackbar-basic")(7,"rui-material-snackbar-action"),s())},dependencies:[w,D],encapsulation:2})};export{Mt as MaterialSnackbar};
