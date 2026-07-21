import{a as C,c as p,d as l,e as h}from"./chunk-5TIVJPEO.js";import{b as M,c as r}from"./chunk-XT355LQ6.js";import"./chunk-RQ6LY3TZ.js";import"./chunk-NKP4UQB5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-ROGFBH7V.js";import"./chunk-E7N562OR.js";import{ja as c}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Tb as i,Ub as t,Vb as o,tc as e,xb as m}from"./chunk-N476DBZA.js";var d=class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-chips-basic"]],decls:16,vars:0,consts:[["id","chips-basic",1,"mb-8"],["id","chips-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["disabled",""],["html",`<mat-chip-set>
  <mat-chip>Angular</mat-chip>
  <mat-chip>Material</mat-chip>
  <mat-chip>TypeScript</mat-chip>
  <mat-chip disabled>Deprecated</mat-chip>
</mat-chip-set>`,"ts",`import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatChipsModule, MatIconModule],`]],template:function(a,f){a&1&&(i(0,"section",0)(1,"h2",1),e(2,"Basic Chips"),t(),i(3,"p",2),e(4,"mat-chip-set with mat-chip, including disabled state."),t(),i(5,"div",3)(6,"mat-chip-set")(7,"mat-chip"),e(8,"Angular"),t(),i(9,"mat-chip"),e(10,"Material"),t(),i(11,"mat-chip"),e(12,"TypeScript"),t(),i(13,"mat-chip",4),e(14,"Deprecated"),t()()(),o(15,"rui-showcase-code",5),t())},dependencies:[h,p,l,r,c],encapsulation:2})};var u=class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-chips-icon"]],decls:20,vars:0,consts:[["id","chips-icon",1,"mb-8"],["id","chips-icon",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["matChipAvatar",""],["html",`<mat-chip-set>
  <mat-chip>
    <mat-icon matChipAvatar>home</mat-icon>
    Home
  </mat-chip>
  <mat-chip>
    <mat-icon matChipAvatar>settings</mat-icon>
    Settings
  </mat-chip>
  <mat-chip>
    <mat-icon matChipAvatar>info</mat-icon>
    About
  </mat-chip>
</mat-chip-set>`,"ts",`import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatChipsModule, MatIconModule],`]],template:function(a,f){a&1&&(i(0,"section",0)(1,"h2",1),e(2,"Chips with Icons"),t(),i(3,"p",2),e(4,"mat-chip with mat-icon avatar via matChipAvatar."),t(),i(5,"div",3)(6,"mat-chip-set")(7,"mat-chip")(8,"mat-icon",4),e(9,"home"),t(),e(10," Home "),t(),i(11,"mat-chip")(12,"mat-icon",4),e(13,"settings"),t(),e(14," Settings "),t(),i(15,"mat-chip")(16,"mat-icon",4),e(17,"info"),t(),e(18," About "),t()()(),o(19,"rui-showcase-code",5),t())},dependencies:[h,p,C,l,r,M,c],encapsulation:2})};var v=class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-chips"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(a,f){a&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),e(3,"Chips"),t(),i(4,"p",3),e(5,"mat-chip-set, mat-chip with and without icons, disabled state"),t()(),o(6,"rui-material-chips-basic")(7,"rui-material-chips-icon"),t())},dependencies:[d,u],encapsulation:2})};export{v as MaterialChips};
