import{b as F,c as y}from"./chunk-XT355LQ6.js";import{b as f,c as d}from"./chunk-KHMA3PY5.js";import{a as p}from"./chunk-PFXLYJGD.js";import{a as o,b as x,e as s}from"./chunk-RQ6LY3TZ.js";import"./chunk-NKP4UQB5.js";import"./chunk-ROGFBH7V.js";import{ja as u}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Tb as t,Ub as e,Vb as m,tc as a,xb as l}from"./chunk-N476DBZA.js";var c=class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["rui-material-form-fields-basic"]],decls:17,vars:0,consts:[["id","form-fields-basic",1,"mb-8"],["id","form-fields-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","flex-col","gap-3"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Enter text"],["appearance","fill",1,"w-full"],["matInput","","placeholder","Filled style"],["matIconSuffix",""],["html",`<mat-form-field appearance="outline">
  <mat-label>Text Input</mat-label>
  <input matInput placeholder="Enter text" />
</mat-form-field>
<mat-form-field appearance="fill">
  <mat-label>Filled Input</mat-label>
  <input matInput placeholder="Filled style" />
  <mat-icon matIconSuffix>search</mat-icon>
</mat-form-field>`,"ts",`import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatFormFieldModule, MatInputModule, MatIconModule],`]],template:function(i,b){i&1&&(t(0,"section",0)(1,"h2",1),a(2,"Basic Form Fields"),e(),t(3,"p",2),a(4,"mat-form-field with outline and fill appearances, prefix/suffix icons."),e(),t(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),a(8,"Text Input"),e(),m(9,"input",5),e(),t(10,"mat-form-field",6)(11,"mat-label"),a(12,"Filled Input"),e(),m(13,"input",7),t(14,"mat-icon",8),a(15,"search"),e()()(),m(16,"rui-showcase-code",9),e())},dependencies:[p,s,o,x,d,f,y,F,u],encapsulation:2})};var M=class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["rui-material-form-fields-types"]],decls:15,vars:0,consts:[["id","form-fields-types",1,"mb-8"],["id","form-fields-types",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-3"],["appearance","outline",1,"flex-1"],["matInput","","type","number","value","42"],["matInput","","type","email","placeholder","user@example.com"],["html",`<mat-form-field appearance="outline">
  <mat-label>Number</mat-label>
  <input matInput type="number" value="42" />
</mat-form-field>
<mat-form-field appearance="outline">
  <mat-label>Email</mat-label>
  <input matInput type="email" placeholder="user@example.com" />
</mat-form-field>`,"ts",`import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// In component imports:
imports: [MatFormFieldModule, MatInputModule],`]],template:function(i,b){i&1&&(t(0,"section",0)(1,"h2",1),a(2,"Input Types"),e(),t(3,"p",2),a(4,"mat-form-field with different input types (number, email)."),e(),t(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),a(8,"Number"),e(),m(9,"input",5),e(),t(10,"mat-form-field",4)(11,"mat-label"),a(12,"Email"),e(),m(13,"input",6),e()(),m(14,"rui-showcase-code",7),e())},dependencies:[p,s,o,d,f,u],encapsulation:2})};var v=class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["rui-material-form-fields"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(i,b){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Form Fields & Inputs"),e(),t(4,"p",3),a(5,"mat-form-field with outline and fill appearances, matInput, prefix/suffix icons."),e()(),m(6,"rui-material-form-fields-basic")(7,"rui-material-form-fields-types"),e())},dependencies:[c,M],encapsulation:2})};export{v as MaterialFormFields};
