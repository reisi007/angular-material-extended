import{a as V,b as k,c as B}from"./chunk-NVOU3RTE.js";import{c as S}from"./chunk-XT355LQ6.js";import{a as h,c as C}from"./chunk-45R6WZGA.js";import{d as b}from"./chunk-HMATP3KQ.js";import"./chunk-3AAYRBXX.js";import"./chunk-5ETSWK6G.js";import"./chunk-ZC4H5EHS.js";import"./chunk-7LJ5SCFJ.js";import{a as x}from"./chunk-PFXLYJGD.js";import{a as g,e as y}from"./chunk-RQ6LY3TZ.js";import"./chunk-NKP4UQB5.js";import{s as M}from"./chunk-ROGFBH7V.js";import"./chunk-E7N562OR.js";import{ja as v}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Ac as f,Tb as t,Ub as e,Vb as s,jb as o,pc as T,tc as a,vc as u,xb as m,yc as c,zc as p}from"./chunk-N476DBZA.js";var w=class n{selectedCountry="us";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-select-single"]],decls:21,vars:2,consts:[["id","select-single",1,"mb-8"],["id","select-single",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["appearance","outline",1,"w-full","max-w-xs"],[3,"valueChange","value"],["value","us"],["value","de"],["value","fr"],["value","jp"],[1,"text-xs","text-[var(--mat-sys-on-surface-variant)]","mt-2"],["html",`<mat-form-field appearance="outline" class="w-full max-w-xs">
  <mat-label>Country</mat-label>
  <mat-select [(value)]="selectedCountry">
    <mat-option value="us">United States</mat-option>
    <mat-option value="de">Germany</mat-option>
    <mat-option value="fr">France</mat-option>
    <mat-option value="jp">Japan</mat-option>
  </mat-select>
</mat-form-field>`,"ts",`import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// In component imports:
imports: [FormsModule, MatFormFieldModule, MatSelectModule],

export class MyComponent {
  selectedCountry = 'us';
}`]],template:function(i,l){i&1&&(t(0,"section",0)(1,"h2",1),a(2,"Single Selection"),e(),t(3,"p",2),a(4,"mat-select with outline appearance and single option selection."),e(),t(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),a(8,"Country"),e(),t(9,"mat-select",5),f("valueChange",function(r){return p(l.selectedCountry,r)||(l.selectedCountry=r),r}),t(10,"mat-option",6),a(11,"United States"),e(),t(12,"mat-option",7),a(13,"Germany"),e(),t(14,"mat-option",8),a(15,"France"),e(),t(16,"mat-option",9),a(17,"Japan"),e()()(),t(18,"p",10),a(19),e()(),s(20,"rui-showcase-code",11),e()),i&2&&(o(9),c("value",l.selectedCountry),o(10),u("Selected: ",l.selectedCountry))},dependencies:[M,x,y,g,C,h,b,S,v],encapsulation:2})};var F=class n{selectedSkills=["angular"];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-select-multi"]],decls:19,vars:2,consts:[["id","select-multi",1,"mb-8"],["id","select-multi",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["appearance","outline",1,"w-full","max-w-xs"],["multiple","",3,"valueChange","value"],["value","angular"],["value","react"],["value","vue"],[1,"text-xs","text-[var(--mat-sys-on-surface-variant)]","mt-2"],["html",`<mat-form-field appearance="outline" class="w-full max-w-xs">
  <mat-label>Skills</mat-label>
  <mat-select [(value)]="selectedSkills" multiple>
    <mat-option value="angular">Angular</mat-option>
    <mat-option value="react">React</mat-option>
    <mat-option value="vue">Vue</mat-option>
  </mat-select>
</mat-form-field>`,"ts",`import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// In component imports:
imports: [FormsModule, MatFormFieldModule, MatSelectModule],

export class MyComponent {
  selectedSkills: string[] = ['angular'];
}`]],template:function(i,l){i&1&&(t(0,"section",0)(1,"h2",1),a(2,"Multi Selection"),e(),t(3,"p",2),a(4,"mat-select with multiple attribute allowing several options."),e(),t(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),a(8,"Skills"),e(),t(9,"mat-select",5),f("valueChange",function(r){return p(l.selectedSkills,r)||(l.selectedSkills=r),r}),t(10,"mat-option",6),a(11,"Angular"),e(),t(12,"mat-option",7),a(13,"React"),e(),t(14,"mat-option",8),a(15,"Vue"),e()()(),t(16,"p",9),a(17),e()(),s(18,"rui-showcase-code",10),e()),i&2&&(o(9),c("value",l.selectedSkills),o(8),u("Selected: ",l.selectedSkills))},dependencies:[M,x,y,g,C,h,b,S,v],encapsulation:2})};var E=class n{sliderValue=42;static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-slider-basic"]],decls:12,vars:4,consts:[["id","slider-basic",1,"mb-8"],["id","slider-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[1,"max-w-xs"],["min","0","max","100","step","1"],["matSliderThumb","",3,"valueChange","value"],[1,"text-xs","text-[var(--mat-sys-on-surface-variant)]","mt-2"],["html",`<mat-slider min="0" max="100" step="1">
  <input matSliderThumb [(value)]="sliderValue" />
</mat-slider>`,"ts",`import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

// In component imports:
imports: [FormsModule, MatSliderModule],

export class MyComponent {
  sliderValue = 42;
}`]],template:function(i,l){i&1&&(t(0,"section",0)(1,"h2",1),a(2,"Basic Slider"),e(),t(3,"p",2),a(4,"mat-slider with min/max/step and thumb value display."),e(),t(5,"div",3)(6,"div",4)(7,"mat-slider",5)(8,"input",6),f("valueChange",function(r){return p(l.sliderValue,r)||(l.sliderValue=r),r}),e()(),t(9,"p",7),a(10),e()()(),s(11,"rui-showcase-code",8),e()),i&2&&(o(7),T("width","100%"),o(),c("value",l.sliderValue),o(2),u("Value: ",l.sliderValue))},dependencies:[M,B,V,k,S,v],encapsulation:2})};var W=class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-select-slider"]],decls:9,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(i,l){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Select & Slider"),e(),t(4,"p",3),a(5,"mat-select with single and multi selection, mat-slider with thumb value display."),e()(),s(6,"rui-material-select-single")(7,"rui-material-select-multi")(8,"rui-material-slider-basic"),e())},dependencies:[w,F,E],encapsulation:2})};export{W as MaterialSelectSlider};
