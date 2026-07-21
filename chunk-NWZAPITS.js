import{a as f,b,c as g,d as v}from"./chunk-QV23FJVA.js";import{a as x,b as y}from"./chunk-2RCIUV4V.js";import{b as I,c}from"./chunk-XT355LQ6.js";import"./chunk-7LJ5SCFJ.js";import{b as p,e as M}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{ja as d}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Sb as s,Tb as t,Ub as e,Vb as o,jb as u,oc as l,tc as n,xb as m}from"./chunk-N476DBZA.js";var S=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=m({type:i,selectors:[["rui-material-menu-basic"]],decls:20,vars:1,consts:[["menu","matMenu"],["id","menu-basic",1,"mb-8"],["id","menu-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","primary",3,"matMenuTriggerFor"],["mat-menu-item",""],["mat-menu-item","",1,"text-[var(--mat-sys-error)]"],["html",`<button mat-raised-button color="primary" [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Refresh</button>
  <button mat-menu-item>Settings</button>
  <button mat-menu-item>Help</button>
  <mat-divider></mat-divider>
  <button mat-menu-item>Sign out</button>
</mat-menu>`,"ts",`import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// In component imports: [MatMenuModule, MatButtonModule]`]],template:function(a,D){if(a&1&&(t(0,"section",1)(1,"h2",2),n(2,"Basic Menu"),e(),t(3,"p",3),n(4,"A simple dropdown menu with text items triggered by a button."),e(),t(5,"div",4)(6,"button",5),n(7,"Menu"),e(),t(8,"mat-menu",null,0)(10,"button",6),n(11,"Refresh"),e(),t(12,"button",6),n(13,"Settings"),e(),t(14,"button",6),n(15,"Help"),e(),o(16,"mat-divider"),t(17,"button",7),n(18,"Sign out"),e()()(),o(19,"rui-showcase-code",8),e()),a&2){let E=l(9);u(6),s("matMenuTriggerFor",E)}},dependencies:[v,b,f,g,M,p,c,y,x,d],encapsulation:2})};var h=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=m({type:i,selectors:[["rui-material-menu-icons"]],decls:32,vars:1,consts:[["iconMenu","matMenu"],["id","menu-icons",1,"mb-8"],["id","menu-icons",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-raised-button","","color","accent",3,"matMenuTriggerFor"],["mat-menu-item",""],["mat-menu-item","",1,"text-[var(--mat-sys-error)]"],["color","warn"],["html",`<button mat-raised-button color="accent" [matMenuTriggerFor]="iconMenu">Actions</button>
<mat-menu #iconMenu="matMenu">
  <button mat-menu-item>
    <mat-icon>folder_open</mat-icon>
    <span>Folder</span>
  </button>
  <button mat-menu-item>
    <mat-icon>share</mat-icon>
    <span>Share</span>
  </button>
  <button mat-menu-item>
    <mat-icon>drive_file_move</mat-icon>
    <span>Move</span>
  </button>
  <mat-divider></mat-divider>
  <button mat-menu-item>
    <mat-icon>delete</mat-icon>
    <span>Delete</span>
  </button>
</mat-menu>`,"ts",`import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports: [MatMenuModule, MatButtonModule, MatIconModule]`]],template:function(a,D){if(a&1&&(t(0,"section",1)(1,"h2",2),n(2,"Menu with Icons"),e(),t(3,"p",3),n(4,"Menu items with leading icons for better visual recognition."),e(),t(5,"div",4)(6,"button",5),n(7,"Actions"),e(),t(8,"mat-menu",null,0)(10,"button",6)(11,"mat-icon"),n(12,"folder_open"),e(),t(13,"span"),n(14,"Folder"),e()(),t(15,"button",6)(16,"mat-icon"),n(17,"share"),e(),t(18,"span"),n(19,"Share"),e()(),t(20,"button",6)(21,"mat-icon"),n(22,"drive_file_move"),e(),t(23,"span"),n(24,"Move"),e()(),o(25,"mat-divider"),t(26,"button",7)(27,"mat-icon",8),n(28,"delete"),e(),t(29,"span"),n(30,"Delete"),e()()()(),o(31,"rui-showcase-code",9),e()),a&2){let E=l(9);u(6),s("matMenuTriggerFor",E)}},dependencies:[v,b,f,g,M,p,c,I,y,x,d],encapsulation:2})};var B=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=m({type:i,selectors:[["rui-material-menu"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(a,D){a&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"Menu"),e(),t(4,"p",3),n(5,"MatMenu provides a floating panel of selectable options triggered by a button or other element."),e()(),o(6,"rui-material-menu-basic")(7,"rui-material-menu-icons"),e())},dependencies:[S,h],encapsulation:2})};export{B as MaterialMenu};
