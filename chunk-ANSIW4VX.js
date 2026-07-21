import{a as T}from"./chunk-GJTHMFQN.js";import{a as c}from"./chunk-QSZHYC6H.js";import"./chunk-7LJ5SCFJ.js";import{b as d,e as u}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{ja as s}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Sb as p,Tb as o,Ub as t,Vb as l,jb as r,tc as e,xb as n}from"./chunk-N476DBZA.js";var b=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=n({type:i,selectors:[["rui-material-tooltip-basic"]],decls:15,vars:0,consts:[["id","tooltip-basic",1,"mb-8"],["id","tooltip-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-4","items-center","flex-wrap"],["mat-raised-button","","matTooltip","Tooltip above","matTooltipPosition","above"],["mat-raised-button","","matTooltip","Tooltip below","matTooltipPosition","below"],["mat-raised-button","","matTooltip","Tooltip left","matTooltipPosition","left"],["mat-raised-button","","matTooltip","Tooltip right","matTooltipPosition","right"],["html",`<button mat-raised-button
  matTooltip="Tooltip above"
  matTooltipPosition="above">
  Above
</button>

<button mat-raised-button
  matTooltip="Tooltip below"
  matTooltipPosition="below">
  Below
</button>

<button mat-raised-button
  matTooltip="Tooltip left"
  matTooltipPosition="left">
  Left
</button>

<button mat-raised-button
  matTooltip="Tooltip right"
  matTooltipPosition="right">
  Right
</button>`,"ts",`import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

// In component imports:
imports: [MatTooltipModule, MatButtonModule],`]],template:function(a,y){a&1&&(o(0,"section",0)(1,"h2",1),e(2,"Basic Tooltips"),t(),o(3,"p",2),e(4,"Tooltips via matTooltip with positional variants."),t(),o(5,"div",3)(6,"button",4),e(7," Above "),t(),o(8,"button",5),e(9," Below "),t(),o(10,"button",6),e(11," Left "),t(),o(12,"button",7),e(13," Right "),t()(),l(14,"rui-showcase-code",8),t())},dependencies:[u,d,T,c,s],encapsulation:2})};var f=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=n({type:i,selectors:[["rui-material-tooltip-show-delay"]],decls:13,vars:6,consts:[["id","tooltip-show-delay",1,"mb-8"],["id","tooltip-show-delay",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-4","items-center","flex-wrap"],["mat-raised-button","","matTooltip","1s show / 500ms hide",3,"matTooltipShowDelay","matTooltipHideDelay"],["mat-raised-button","","matTooltip","2s show / 1s hide",3,"matTooltipShowDelay","matTooltipHideDelay"],["mat-raised-button","","matTooltip","No delay",3,"matTooltipShowDelay","matTooltipHideDelay"],["html",`<button mat-raised-button
  matTooltip="1s show / 500ms hide"
  [matTooltipShowDelay]="1000"
  [matTooltipHideDelay]="500">
  Show 1s / Hide 0.5s
</button>

<button mat-raised-button
  matTooltip="2s show / 1s hide"
  [matTooltipShowDelay]="2000"
  [matTooltipHideDelay]="1000">
  Show 2s / Hide 1s
</button>

<button mat-raised-button
  matTooltip="No delay"
  [matTooltipShowDelay]="0"
  [matTooltipHideDelay]="0">
  No delay
</button>`,"ts",`import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

// In component imports:
imports: [MatTooltipModule, MatButtonModule],`]],template:function(a,y){a&1&&(o(0,"section",0)(1,"h2",1),e(2,"Tooltip Show & Hide Delay"),t(),o(3,"p",2),e(4,"matTooltipShowDelay and matTooltipHideDelay control when tooltips appear and disappear."),t(),o(5,"div",3)(6,"button",4),e(7," Show 1s / Hide 0.5s "),t(),o(8,"button",5),e(9," Show 2s / Hide 1s "),t(),o(10,"button",6),e(11," No delay "),t()(),l(12,"rui-showcase-code",7),t()),a&2&&(r(6),p("matTooltipShowDelay",1e3)("matTooltipHideDelay",500),r(2),p("matTooltipShowDelay",2e3)("matTooltipHideDelay",1e3),r(2),p("matTooltipShowDelay",0)("matTooltipHideDelay",0))},dependencies:[u,d,T,c,s],encapsulation:2})};var M=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=n({type:i,selectors:[["rui-material-tooltip"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(a,y){a&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),e(3,"Tooltip"),t(),o(4,"p",3),e(5,"matTooltip for context-aware hints on hover or focus."),t()(),l(6,"rui-material-tooltip-basic")(7,"rui-material-tooltip-show-delay"),t())},dependencies:[b,f],encapsulation:2})};export{M as MaterialTooltip};
