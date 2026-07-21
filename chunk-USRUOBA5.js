import{a as p,b as d,c as u,d as f,e as L,g as M}from"./chunk-IASU6OP2.js";import"./chunk-2RCIUV4V.js";import{b as o,c as r}from"./chunk-XT355LQ6.js";import"./chunk-3AAYRBXX.js";import"./chunk-5ETSWK6G.js";import"./chunk-ZC4H5EHS.js";import"./chunk-ROGFBH7V.js";import"./chunk-E7N562OR.js";import{ja as c}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Tb as e,Ub as t,Vb as s,tc as i,xb as m}from"./chunk-N476DBZA.js";var I=class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-list-basic"]],decls:29,vars:0,consts:[["id","list-basic",1,"mb-8"],["id","list-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["html",`<mat-list>
  <mat-list-item>
    <mat-icon matListItemIcon>inbox</mat-icon>
    <span matListItemTitle>Inbox</span>
    <span matListItemLine>3 new messages</span>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListItemIcon>star</mat-icon>
    <span matListItemTitle>Starred</span>
    <span matListItemLine>5 items</span>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListItemIcon>send</mat-icon>
    <span matListItemTitle>Sent</span>
    <span matListItemLine>View sent mail</span>
  </mat-list-item>
</mat-list>`,"ts",`import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatListModule, MatIconModule],`]],template:function(a,b){a&1&&(e(0,"section",0)(1,"h2",1),i(2,"Basic List"),t(),e(3,"p",2),i(4,"mat-list with mat-list-item, icons, titles and description lines."),t(),e(5,"div",3)(6,"mat-list")(7,"mat-list-item")(8,"mat-icon",4),i(9,"inbox"),t(),e(10,"span",5),i(11,"Inbox"),t(),e(12,"span",6),i(13,"3 new messages"),t()(),e(14,"mat-list-item")(15,"mat-icon",4),i(16,"star"),t(),e(17,"span",5),i(18,"Starred"),t(),e(19,"span",6),i(20,"5 items"),t()(),e(21,"mat-list-item")(22,"mat-icon",4),i(23,"send"),t(),e(24,"span",5),i(25,"Sent"),t(),e(26,"span",6),i(27,"View sent mail"),t()()()(),s(28,"rui-showcase-code",7),t())},dependencies:[M,f,L,u,d,p,r,o,c],encapsulation:2})};var x=class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-list-multiline"]],decls:26,vars:0,consts:[["id","list-multiline",1,"mb-8"],["id","list-multiline",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["html",`<mat-list>
  <mat-list-item>
    <mat-icon matListItemIcon>info</mat-icon>
    <span matListItemTitle>System Update</span>
    <span matListItemLine>Version 3.2.1 is available</span>
    <span matListItemLine>Includes security patches and bug fixes</span>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListItemIcon>schedule</mat-icon>
    <span matListItemTitle>Meeting Reminder</span>
    <span matListItemLine>Team standup at 10:00 AM</span>
    <span matListItemLine>Conference Room B or Zoom</span>
  </mat-list-item>
</mat-list>`,"ts",`import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatListModule, MatIconModule],`]],template:function(a,b){a&1&&(e(0,"section",0)(1,"h2",1),i(2,"Multi-line List"),t(),e(3,"p",2),i(4,"mat-list-item with multiple description lines."),t(),e(5,"div",3)(6,"mat-list")(7,"mat-list-item")(8,"mat-icon",4),i(9,"info"),t(),e(10,"span",5),i(11,"System Update"),t(),e(12,"span",6),i(13,"Version 3.2.1 is available"),t(),e(14,"span",6),i(15,"Includes security patches and bug fixes"),t()(),e(16,"mat-list-item")(17,"mat-icon",4),i(18,"schedule"),t(),e(19,"span",5),i(20,"Meeting Reminder"),t(),e(21,"span",6),i(22,"Team standup at 10:00 AM"),t(),e(23,"span",6),i(24,"Conference Room B or Zoom"),t()()()(),s(25,"rui-showcase-code",7),t())},dependencies:[M,f,L,u,d,p,r,o,c],encapsulation:2})};var S=class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=m({type:n,selectors:[["rui-material-list"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(a,b){a&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"List"),t(),e(4,"p",3),i(5,"mat-list for displaying rows of items with icons, titles, and descriptions."),t()(),s(6,"rui-material-list-basic")(7,"rui-material-list-multiline"),t())},dependencies:[I,x],encapsulation:2})};export{S as MaterialList};
