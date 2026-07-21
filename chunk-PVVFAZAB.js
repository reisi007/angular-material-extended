import{b as N}from"./chunk-ZC4H5EHS.js";import{$ as Ae,A as P,L as we,X as Ce,_ as Pe,fa as De,j as _e,ja as R,v as Ee,x as Me}from"./chunk-45MN3S43.js";import{a as ye,f as ve}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{D as $,Dc as y,E as _,Eb as W,Fb as le,Ja as k,K as ee,Ka as oe,Lb as H,Mb as ce,Na as U,Nb as me,Oa as re,Qc as fe,Sb as E,Tb as r,Ub as i,V as q,Vb as b,Wb as O,Xb as Z,Yb as he,ad as F,ca as T,cc as xe,cd as g,dd as be,ea as f,f as S,fc as K,ga as o,gc as u,hc as X,ic as ue,j as v,jb as x,jc as M,kb as se,kc as w,mb as de,na as ne,o as J,pc as ge,qa as te,qc as C,sb as pe,ta as c,tc as s,ua as ae,xb as l,ya as ie,yb as I,zb as m}from"./chunk-N476DBZA.js";var G=new f("CdkAccordion"),Se=(()=>{class n{_stateChanges=new v;_openCloseAllActions=new v;id=o(P).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",g]},exportAs:["cdkAccordion"],features:[y([{provide:G,useExisting:n}]),k]})}return n})(),Te=(()=>{class n{accordion=o(G,{optional:!0,skipSelf:!0});_changeDetectorRef=o(F);_expansionDispatcher=o(N);_openCloseAllSubscription=S.EMPTY;closed=new c;opened=new c;destroyed=new c;expandedChange=new c;id=o(P).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ie(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",g],disabled:[2,"disabled","disabled",g]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[y([{provide:G,useValue:void 0}])]})}return n})(),ke=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({})}return n})();var Le=["body"],Qe=["bodyWrapper"],Be=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Ve=["mat-expansion-panel-header","*","mat-action-row"];function qe(n,h){}var Ue=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],We=["mat-panel-title","mat-panel-description","*"];function Ze(n,h){n&1&&(O(0,"span",1),ne(),O(1,"svg",2),he(2,"path",3),Z()())}var Y=new f("MAT_ACCORDION"),Ie=new f("MAT_EXPANSION_PANEL"),Ke=(()=>{class n{_template=o(se);_expansionPanel=o(Ie,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),He=new f("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),A=(()=>{class n extends Te{_viewContainerRef=o(pe);_animationsDisabled=we();_document=o(te);_ngZone=o(ae);_elementRef=o(U);_renderer=o(de);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new c;afterCollapse=new c;_inputChanges=new v;accordion=o(Y,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=o(P).getId("mat-expansion-panel-header-");constructor(){super();let e=o(He,{optional:!0});this._expansionDispatcher=o(N),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(q(null),_(()=>this.expanded&&!this._portal),ee(1)).subscribe(()=>{this._portal=new Ce(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,a,p){if(t&1&&X(p,Ke,5),t&2){let d;M(d=w())&&(a._lazyContent=d.first)}},viewQuery:function(t,a){if(t&1&&ue(Le,5)(Qe,5),t&2){let p;M(p=w())&&(a._body=p.first),M(p=w())&&(a._bodyWrapper=p.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,a){t&2&&C("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",g],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[y([{provide:Y,useValue:void 0},{provide:Ie,useExisting:n}]),W,k],ngContentSelectors:Ve,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,a){t&1&&(K(Be),u(0),r(1,"div",2,0)(3,"div",3,1)(5,"div",4),u(6,1),le(7,qe,0,0,"ng-template",5),i(),u(8,2),i()()),t&2&&(x(),H("inert",a.expanded?null:""),x(2),E("id",a.id),H("aria-labelledby",a._headerId),x(4),E("cdkPortalOutlet",a._portal))},dependencies:[Pe],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return n})();var D=(()=>{class n{panel=o(A,{host:!0});_element=o(U);_focusMonitor=o(_e);_changeDetectorRef=o(F);_parentChangeSubscription=S.EMPTY;constructor(){o(ye).load(De);let e=this.panel,t=o(He,{optional:!0}),a=o(new fe("tabindex"),{optional:!0}),p=e.accordion?e.accordion._stateChanges.pipe(_(d=>!!(d.hideToggle||d.togglePosition))):J;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=$(e.opened,e.closed,p,e._inputChanges.pipe(_(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(_(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ee(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,a){t&1&&xe("click",function(){return a._toggle()})("keydown",function(d){return a._keydown(d)}),t&2&&(H("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),ge("height",a._getHeaderHeight()),C("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:be(e)]},ngContentSelectors:We,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,a){t&1&&(K(Ue),O(0,"span",0),u(1),u(2,1),u(3,2),Z(),ce(4,Ze,3,0,"span",1)),t&2&&(C("mat-content-hide-toggle",!a._showToggle()),x(4),me(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return n})(),Oe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),j=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),L=(()=>{class n extends Se{_keyManager;_ownHeaders=new re;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(q(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Me(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=oe(n)))(a||n)}})();static \u0275dir=m({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,a,p){if(t&1&&X(p,D,5),t&2){let d;M(d=w())&&(a._headers=d)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,a){t&2&&C("mat-accordion-multi",a.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",g],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[y([{provide:Y,useExisting:n}]),W]})}return n})(),Q=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({imports:[ke,Ae,ve]})}return n})();var B=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["rui-material-expansion-accordion"]],decls:32,vars:0,consts:[["id","expansion-accordion",1,"mb-8"],["id","expansion-accordion",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]"],["html",`<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Personal Details</mat-panel-title>
      <mat-panel-description>Name, email, phone</mat-panel-description>
    </mat-expansion-panel-header>
    <p>Form fields for personal information go here.</p>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Address</mat-panel-title>
      <mat-panel-description>Street, city, zip code</mat-panel-description>
    </mat-expansion-panel-header>
    <p>Address input fields appear here.</p>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Payment</mat-panel-title>
      <mat-panel-description>Credit card or PayPal</mat-panel-description>
    </mat-expansion-panel-header>
    <p>Payment method selection and details.</p>
  </mat-expansion-panel>
</mat-accordion>`,"ts",`import { MatExpansionModule } from '@angular/material/expansion';

// In component imports:
imports: [MatExpansionModule],`]],template:function(e,t){e&1&&(r(0,"section",0)(1,"h2",1),s(2,"Accordion"),i(),r(3,"p",2),s(4,"mat-accordion with single-panel expansion (default behavior)."),i(),r(5,"div",3)(6,"mat-accordion")(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),s(10,"Personal Details"),i(),r(11,"mat-panel-description"),s(12,"Name, email, phone"),i()(),r(13,"p",4),s(14,"Form fields for personal information go here."),i()(),r(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),s(18,"Address"),i(),r(19,"mat-panel-description"),s(20,"Street, city, zip code"),i()(),r(21,"p",4),s(22,"Address input fields appear here."),i()(),r(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),s(26,"Payment"),i(),r(27,"mat-panel-description"),s(28,"Credit card or PayPal"),i()(),r(29,"p",4),s(30,"Payment method selection and details."),i()()()(),b(31,"rui-showcase-code",5),i())},dependencies:[Q,L,A,D,j,Oe,R],encapsulation:2})};var V=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["rui-material-expansion-multi"]],decls:20,vars:1,consts:[["id","expansion-multi",1,"mb-8"],["id","expansion-multi",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[3,"multi"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]"],["html",`<mat-accordion [multi]="true">
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Panel One</mat-panel-title>
    </mat-expansion-panel-header>
    <p>This panel stays open when you open another panel.</p>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Panel Two</mat-panel-title>
    </mat-expansion-panel-header>
    <p>Both panels can remain expanded at the same time.</p>
  </mat-expansion-panel>
</mat-accordion>`,"ts",`import { MatExpansionModule } from '@angular/material/expansion';

// In component imports:
imports: [MatExpansionModule],`]],template:function(e,t){e&1&&(r(0,"section",0)(1,"h2",1),s(2,"Multi Panel"),i(),r(3,"p",2),s(4,'mat-accordion with [multi]="true" allows multiple panels open simultaneously.'),i(),r(5,"div",3)(6,"mat-accordion",4)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),s(10,"Panel One"),i()(),r(11,"p",5),s(12,"This panel stays open when you open another panel."),i()(),r(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),s(16,"Panel Two"),i()(),r(17,"p",5),s(18,"Both panels can remain expanded at the same time."),i()()()(),b(19,"rui-showcase-code",6),i()),e&2&&(x(6),E("multi",!0))},dependencies:[Q,L,A,D,j,R],encapsulation:2})};var Re=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["rui-material-expansion"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"Expansion Panel"),i(),r(4,"p",3),s(5,"mat-expansion-panel for accordion and multi-panel layouts."),i()(),b(6,"rui-material-expansion-accordion")(7,"rui-material-expansion-multi"),i())},dependencies:[B,V],encapsulation:2})};export{Re as MaterialExpansion};
