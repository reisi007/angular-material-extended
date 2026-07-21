import{b as u,c as l}from"./chunk-XT355LQ6.js";import{a as y,b as g,c as v,d as B,e as c}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{ja as s}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Tb as a,Ub as t,Vb as r,tc as e,xb as i}from"./chunk-N476DBZA.js";var b=class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=i({type:o,selectors:[["rui-material-buttons-basic"]],decls:17,vars:0,consts:[["id","button-variants",1,"mb-8"],["id","button-variants",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-button",""],["mat-raised-button","","color","primary"],["mat-stroked-button","","color","accent"],["mat-flat-button","","color","warn"],["mat-raised-button","","color","primary","disabled",""],["html",`<button mat-button>Basic</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-stroked-button color="accent">Accent</button>
<button mat-flat-button color="warn">Warn</button>
<button mat-raised-button color="primary" disabled>Disabled</button>`,"ts",`import { MatButtonModule } from '@angular/material/button';

// In component imports:
imports: [MatButtonModule],`]],template:function(n,f){n&1&&(a(0,"section",0)(1,"h2",1),e(2,"Basic Variants"),t(),a(3,"p",2),e(4,"mat-button, mat-raised-button, mat-stroked-button, mat-flat-button with color variants."),t(),a(5,"div",3)(6,"button",4),e(7,"Basic"),t(),a(8,"button",5),e(9,"Primary"),t(),a(10,"button",6),e(11,"Accent"),t(),a(12,"button",7),e(13,"Warn"),t(),a(14,"button",8),e(15,"Disabled"),t()(),r(16,"rui-showcase-code",9),t())},dependencies:[c,g,l,s],encapsulation:2})};var d=class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=i({type:o,selectors:[["rui-material-buttons-fab"]],decls:20,vars:0,consts:[["id","button-fab",1,"mb-8"],["id","button-fab",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-3","flex-wrap","items-center"],["mat-fab","","color","primary","aria-label","Add"],["mat-mini-fab","","color","accent","aria-label","Edit"],["mat-fab","","extended","","color","primary"],["mat-fab","","disabled","","aria-label","Disabled"],["html",`<button mat-fab color="primary" aria-label="Add">
  <mat-icon>add</mat-icon>
</button>
<button mat-mini-fab color="accent" aria-label="Edit">
  <mat-icon>edit</mat-icon>
</button>
<button mat-fab extended color="primary">
  <mat-icon>thumb_up</mat-icon>
  Extended FAB
</button>
<button mat-fab disabled aria-label="Disabled">
  <mat-icon>block</mat-icon>
</button>`,"ts",`import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatButtonModule, MatIconModule],`]],template:function(n,f){n&1&&(a(0,"section",0)(1,"h2",1),e(2,"Floating Action Buttons"),t(),a(3,"p",2),e(4,"mat-fab, mat-mini-fab, and extended FAB with icons."),t(),a(5,"div",3)(6,"button",4)(7,"mat-icon"),e(8,"add"),t()(),a(9,"button",5)(10,"mat-icon"),e(11,"edit"),t()(),a(12,"button",6)(13,"mat-icon"),e(14,"thumb_up"),t(),e(15," Extended FAB "),t(),a(16,"button",7)(17,"mat-icon"),e(18,"block"),t()()(),r(19,"rui-showcase-code",8),t())},dependencies:[c,B,v,l,u,s],encapsulation:2})};var p=class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=i({type:o,selectors:[["rui-material-buttons-icon"]],decls:22,vars:0,consts:[["id","button-icon",1,"mb-8"],["id","button-icon",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-2","flex-wrap","items-center"],["mat-icon-button","","aria-label","Favorite"],["mat-icon-button","","color","primary","aria-label","Home"],["mat-icon-button","","color","accent","aria-label","Settings"],["mat-icon-button","","color","warn","aria-label","Delete"],["mat-icon-button","","disabled","","aria-label","Disabled"],["html",`<button mat-icon-button aria-label="Favorite">
  <mat-icon>favorite</mat-icon>
</button>
<button mat-icon-button color="primary" aria-label="Home">
  <mat-icon>home</mat-icon>
</button>
<button mat-icon-button color="accent" aria-label="Settings">
  <mat-icon>settings</mat-icon>
</button>
<button mat-icon-button color="warn" aria-label="Delete">
  <mat-icon>delete</mat-icon>
</button>
<button mat-icon-button disabled aria-label="Disabled">
  <mat-icon>block</mat-icon>
</button>`,"ts",`import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatButtonModule, MatIconModule],`]],template:function(n,f){n&1&&(a(0,"section",0)(1,"h2",1),e(2,"Icon Buttons"),t(),a(3,"p",2),e(4,"mat-icon-button with different colors and states."),t(),a(5,"div",3)(6,"button",4)(7,"mat-icon"),e(8,"favorite"),t()(),a(9,"button",5)(10,"mat-icon"),e(11,"home"),t()(),a(12,"button",6)(13,"mat-icon"),e(14,"settings"),t()(),a(15,"button",7)(16,"mat-icon"),e(17,"delete"),t()(),a(18,"button",8)(19,"mat-icon"),e(20,"block"),t()()(),r(21,"rui-showcase-code",9),t())},dependencies:[c,y,l,u,s],encapsulation:2})};var S=class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=i({type:o,selectors:[["rui-material-buttons"]],decls:9,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(n,f){n&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),e(3,"Buttons"),t(),a(4,"p",3),e(5,"All mat-button variants: basic, raised, stroked, flat, FAB, mini-FAB, and icon buttons."),t()(),r(6,"rui-material-buttons-basic")(7,"rui-material-buttons-fab")(8,"rui-material-buttons-icon"),t())},dependencies:[b,d,p],encapsulation:2})};export{S as MaterialButtons};
