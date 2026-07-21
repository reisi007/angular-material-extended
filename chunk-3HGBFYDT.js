import{b,c as u}from"./chunk-XT355LQ6.js";import{a as p,e as f}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{f as j,ga as F,ha as z,ia as O,ja as d}from"./chunk-45MN3S43.js";import{f as k}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Na as E,Tb as n,Ub as o,Vb as i,ca as T,fc as _,ga as c,gc as x,hc as I,jc as B,kc as R,qa as C,qc as A,sc as N,tc as r,xb as l,yb as D,zb as S}from"./chunk-N476DBZA.js";var L=["*",[["mat-toolbar-row"]]],q=["*","mat-toolbar-row"],G=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=S({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),M=(()=>{class t{_elementRef=c(E);_platform=c(j);_document=c(C);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["mat-toolbar"]],contentQueries:function(e,m,V){if(e&1&&I(V,G,5),e&2){let w;B(w=R())&&(m._toolbarRows=w)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,m){e&2&&(N(m.color?"mat-"+m.color:""),A("mat-toolbar-multiple-rows",m._toolbarRows.length>0)("mat-toolbar-single-row",m._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:q,decls:2,vars:0,template:function(e,m){e&1&&(_(L),x(0),x(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var g=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=D({type:t});static \u0275inj=T({imports:[k]})}return t})();var h=class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=l({type:t,selectors:[["rui-material-toolbar-basic"]],decls:20,vars:0,consts:[["id","toolbar-basic",1,"mb-8"],["id","toolbar-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["color","primary",1,"rounded"],["mat-icon-button","","aria-label","Menu"],[1,"ml-2"],[1,"flex-1"],["mat-icon-button","","aria-label","Search"],["mat-icon-button","","aria-label","Account"],["html",`<mat-toolbar color="primary">
  <button mat-icon-button aria-label="Menu">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="flex-1"></span>
  <button mat-icon-button aria-label="Search">
    <mat-icon>search</mat-icon>
  </button>
  <button mat-icon-button aria-label="Account">
    <mat-icon>account_circle</mat-icon>
  </button>
</mat-toolbar>`,"ts",`import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatToolbarModule, MatButtonModule, MatIconModule],`]],template:function(a,e){a&1&&(n(0,"section",0)(1,"h2",1),r(2,"Basic Toolbar"),o(),n(3,"p",2),r(4,"mat-toolbar with menu icon, title, and right-aligned action icons."),o(),n(5,"div",3)(6,"mat-toolbar",4)(7,"button",5)(8,"mat-icon"),r(9,"menu"),o()(),n(10,"span",6),r(11,"My App"),o(),i(12,"span",7),n(13,"button",8)(14,"mat-icon"),r(15,"search"),o()(),n(16,"button",9)(17,"mat-icon"),r(18,"account_circle"),o()()()(),i(19,"rui-showcase-code",10),o())},dependencies:[g,M,f,p,u,b,d],encapsulation:2})};var v=class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=l({type:t,selectors:[["rui-material-toolbar-multi-row"]],decls:25,vars:0,consts:[["id","toolbar-multi-row",1,"mb-8"],["id","toolbar-multi-row",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["color","primary",1,"rounded-t"],["mat-icon-button","","aria-label","Menu"],[1,"ml-2"],[1,"flex-1"],["mat-icon-button","","aria-label","Notifications"],["mat-icon-button","","aria-label","Account"],[1,"rounded-b","border-t","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface-container)]"],[1,"w-full"],["label","Overview"],["label","Details"],["label","Settings"],["html",`<mat-toolbar color="primary">
  <button mat-icon-button aria-label="Menu">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="flex-1"></span>
  <button mat-icon-button>
    <mat-icon>notifications</mat-icon>
  </button>
  <button mat-icon-button>
    <mat-icon>account_circle</mat-icon>
  </button>
</mat-toolbar>
<mat-toolbar>
  <mat-tab-group class="w-full">
    <mat-tab label="Overview"></mat-tab>
    <mat-tab label="Details"></mat-tab>
    <mat-tab label="Settings"></mat-tab>
  </mat-tab-group>
</mat-toolbar>`,"ts",`import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

// In component imports:
imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule],`]],template:function(a,e){a&1&&(n(0,"section",0)(1,"h2",1),r(2,"Multi-Row Toolbar"),o(),n(3,"p",2),r(4,"Two stacked mat-toolbar rows: one for branding and actions, one for navigation tabs."),o(),n(5,"div",3)(6,"mat-toolbar",4)(7,"button",5)(8,"mat-icon"),r(9,"menu"),o()(),n(10,"span",6),r(11,"My App"),o(),i(12,"span",7),n(13,"button",8)(14,"mat-icon"),r(15,"notifications"),o()(),n(16,"button",9)(17,"mat-icon"),r(18,"account_circle"),o()()(),n(19,"mat-toolbar",10)(20,"mat-tab-group",11),i(21,"mat-tab",12)(22,"mat-tab",13)(23,"mat-tab",14),o()()(),i(24,"rui-showcase-code",15),o())},dependencies:[g,M,f,p,u,b,O,F,z,d],encapsulation:2})};var U=class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=l({type:t,selectors:[["rui-material-toolbar"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(a,e){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Toolbar"),o(),n(4,"p",3),r(5,"mat-toolbar for app headers and multi-row layouts."),o()(),i(6,"rui-material-toolbar-basic")(7,"rui-material-toolbar-multi-row"),o())},dependencies:[h,v],encapsulation:2})};export{U as MaterialToolbar};
