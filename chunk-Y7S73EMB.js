import{b as c,c as d}from"./chunk-XT355LQ6.js";import{b as y,e as S}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import{a as l,b as p,c as u,d as f,e as b,f as C,g as M,h as x,i as g,j as v}from"./chunk-7SAILWZ5.js";import"./chunk-E7N562OR.js";import{ja as h}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Tb as a,Ub as t,Vb as i,tc as e,xb as o}from"./chunk-N476DBZA.js";var m=class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=o({type:n,selectors:[["rui-material-cards-basic"]],decls:27,vars:0,consts:[["id","cards-basic",1,"mb-8"],["id","cards-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[1,"border","border-[var(--mat-sys-outline-variant)]","!shadow-none","max-w-sm"],["mat-card-avatar",""],["mat-card-image","","src","https://picsum.photos/seed/card/300/150","alt","Card image"],[1,"text-sm","text-[var(--mat-sys-on-surface)]"],[1,"flex","gap-2"],["mat-button","","color","primary"],["mat-button",""],[1,"px-4","pb-3"],[1,"text-xs","text-[var(--mat-sys-on-surface-variant)]"],["html",`<mat-card class="border border-[var(--mat-sys-outline-variant)] !shadow-none max-w-sm">
  <mat-card-header>
    <mat-icon mat-card-avatar>article</mat-icon>
    <mat-card-title>Card Title</mat-card-title>
    <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://picsum.photos/seed/card/300/150" alt="Card image" />
  <mat-card-content>
    <p>Card content area.</p>
  </mat-card-content>
  <mat-card-actions class="flex gap-2">
    <button mat-button color="primary">Action</button>
    <button mat-button>Cancel</button>
  </mat-card-actions>
  <mat-card-footer>
    <p>Card footer</p>
  </mat-card-footer>
</mat-card>`,"ts",`import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatCardModule, MatButtonModule, MatIconModule],`]],template:function(r,w){r&1&&(a(0,"section",0)(1,"h2",1),e(2,"Basic Card"),t(),a(3,"p",2),e(4,"mat-card with header, image, content, actions, and footer sections."),t(),a(5,"div",3)(6,"mat-card",4)(7,"mat-card-header")(8,"mat-icon",5),e(9,"article"),t(),a(10,"mat-card-title"),e(11,"Card Title"),t(),a(12,"mat-card-subtitle"),e(13,"Card Subtitle"),t()(),i(14,"img",6),a(15,"mat-card-content")(16,"p",7),e(17,"This is the card content area with descriptive text and other elements."),t()(),a(18,"mat-card-actions",8)(19,"button",9),e(20,"Action"),t(),a(21,"button",10),e(22,"Cancel"),t()(),a(23,"mat-card-footer",11)(24,"p",12),e(25,"Card footer"),t()()()(),i(26,"rui-showcase-code",13),t())},dependencies:[S,y,v,l,b,g,u,M,C,x,f,p,d,c,h],encapsulation:2})};var E=class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=o({type:n,selectors:[["rui-material-cards-section"]],decls:7,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(r,w){r&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),e(3,"Cards"),t(),a(4,"p",3),e(5,"mat-card with header, image, content, actions, and footer sections"),t()(),i(6,"rui-material-cards-basic"),t())},dependencies:[m],encapsulation:2})};export{E as MaterialCardsSection};
