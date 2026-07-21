import{c as l}from"./chunk-XT355LQ6.js";import{ga as b,ha as p,ia as c,ja as d}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Tb as a,Ub as t,Vb as o,tc as e,xb as s}from"./chunk-N476DBZA.js";var m=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=s({type:i,selectors:[["rui-material-tabs-basic"]],decls:17,vars:0,consts:[["id","tabs-basic",1,"mb-8"],["id","tabs-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["label","Tab One"],[1,"mt-3","text-sm","text-[var(--mat-sys-on-surface-variant)]"],["label","Tab Two"],["label","Disabled","disabled",""],["html",`<mat-tab-group>
  <mat-tab label="Tab One">
    <p>Content of tab one.</p>
  </mat-tab>
  <mat-tab label="Tab Two">
    <p>Content of tab two.</p>
  </mat-tab>
  <mat-tab label="Disabled" disabled>
    <p>Disabled tab content.</p>
  </mat-tab>
</mat-tab-group>`,"ts",`import { MatTabsModule } from '@angular/material/tabs';

// In component imports:
imports: [MatTabsModule],`]],template:function(n,f){n&1&&(a(0,"section",0)(1,"h2",1),e(2,"Basic Tabs"),t(),a(3,"p",2),e(4,"mat-tab-group with three tabs, including a disabled tab."),t(),a(5,"div",3)(6,"mat-tab-group")(7,"mat-tab",4)(8,"p",5),e(9,"Content of tab one."),t()(),a(10,"mat-tab",6)(11,"p",5),e(12,"Content of tab two."),t()(),a(13,"mat-tab",7)(14,"p",5),e(15,"Disabled tab content."),t()()()(),o(16,"rui-showcase-code",8),t())},dependencies:[l,c,b,p,d],encapsulation:2})};var u=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=s({type:i,selectors:[["rui-material-tabs"]],decls:7,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(n,f){n&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),e(3,"Tabs"),t(),a(4,"p",3),e(5,"mat-tab-group with mat-tab including disabled tab state"),t()(),o(6,"rui-material-tabs-basic"),t())},dependencies:[m],encapsulation:2})};export{u as MaterialTabs};
