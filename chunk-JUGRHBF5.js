import{b,c as u}from"./chunk-XT355LQ6.js";import{a as v,b as P,e as h}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-E7N562OR.js";import{A as F,B as G,L as H,ja as f,q as T,u as k}from"./chunk-45MN3S43.js";import{a as L,b as O,f as R}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Na as w,Sb as l,Tb as i,Ub as n,Vb as c,ca as x,cd as p,ea as z,ga as s,jb as m,mb as I,qa as D,qc as N,tc as o,ua as C,xb as d,yb as S,zb as A}from"./chunk-N476DBZA.js";var Z=new z("MAT_BADGE_CONFIG"),V="mat-badge-content",U=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=d({type:a,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return a})(),B=(()=>{class a{_ngZone=s(C);_elementRef=s(w);_ariaDescriber=s(G);_renderer=s(I);_animationsDisabled=H();_idGenerator=s(F);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=s(T);_document=s(D);constructor(){let e=s(Z,{optional:!0}),t=s(L);t.load(U),t.load(O),this._color=e?.color||"primary",this.overlap=e?.overlap??!0,this.position=e?.position||"above after",this.size=e?.size||"medium"}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(V),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${V}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=A({type:a,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,r){t&2&&N("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",p],disabled:[2,"matBadgeDisabled","disabled",p],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",p]}})}return a})(),_=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=S({type:a});static \u0275inj=x({imports:[k,R]})}return a})();var y=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["rui-material-badge-basic"]],decls:12,vars:2,consts:[["id","badge-basic",1,"mb-8"],["id","badge-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-4","items-center","flex-wrap"],["mat-raised-button","","matBadgePosition","after","matBadgeColor","primary",3,"matBadge"],["mat-icon-button","","matBadgeColor","warn","aria-label","Alerts",3,"matBadge"],["html",`<button mat-raised-button
  [matBadge]="4"
  matBadgePosition="after"
  matBadgeColor="primary">
  Notifications
</button>

<button mat-icon-button
  [matBadge]="7"
  matBadgeColor="warn"
  aria-label="Alerts">
  <mat-icon>notifications</mat-icon>
</button>`,"ts",`import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatBadgeModule, MatButtonModule, MatIconModule],`]],template:function(e,t){e&1&&(i(0,"section",0)(1,"h2",1),o(2,"Basic Badges"),n(),i(3,"p",2),o(4,"matBadge on buttons with color and position attributes."),n(),i(5,"div",3)(6,"button",4),o(7," Notifications "),n(),i(8,"button",5)(9,"mat-icon"),o(10,"notifications"),n()()(),c(11,"rui-showcase-code",6),n()),e&2&&(m(6),l("matBadge",4),m(2),l("matBadge",7))},dependencies:[_,B,h,P,v,u,b,f],encapsulation:2})};var M=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["rui-material-badge-overlap"]],decls:16,vars:3,consts:[["id","badge-overlap",1,"mb-8"],["id","badge-overlap",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5","flex","gap-6","items-center","flex-wrap"],["mat-icon-button","","matBadgeColor","primary","aria-label","Overlap badge",3,"matBadge"],["mat-icon-button","","matBadgeSize","small","matBadgeColor","accent","aria-label","Small badge",3,"matBadge"],["mat-icon-button","","matBadgeSize","large","matBadgeColor","warn","aria-label","Large badge",3,"matBadge"],["html",`<button mat-icon-button
  [matBadge]="8"
  matBadgeColor="primary">
  <mat-icon>shopping_cart</mat-icon>
</button>

<button mat-icon-button
  [matBadge]="99"
  matBadgeSize="small"
  matBadgeColor="accent">
  <mat-icon>mail</mat-icon>
</button>

<button mat-icon-button
  [matBadge]="12"
  matBadgeSize="large"
  matBadgeColor="warn">
  <mat-icon>notifications_active</mat-icon>
</button>`,"ts",`import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatBadgeModule, MatButtonModule, MatIconModule],`]],template:function(e,t){e&1&&(i(0,"section",0)(1,"h2",1),o(2,"Badge Overlap & Size"),n(),i(3,"p",2),o(4,"matBadge with overlap and size variants."),n(),i(5,"div",3)(6,"button",4)(7,"mat-icon"),o(8,"shopping_cart"),n()(),i(9,"button",5)(10,"mat-icon"),o(11,"mail"),n()(),i(12,"button",6)(13,"mat-icon"),o(14,"notifications_active"),n()()(),c(15,"rui-showcase-code",7),n()),e&2&&(m(6),l("matBadge",8),m(3),l("matBadge",99),m(3),l("matBadge",12))},dependencies:[_,B,h,v,u,b,f],encapsulation:2})};var q=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["rui-material-badge"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Badge"),n(),i(4,"p",3),o(5,"matBadge for notifications, counts, and status indicators on icons and buttons."),n()(),c(6,"rui-material-badge-basic")(7,"rui-material-badge-overlap"),n())},dependencies:[y,M],encapsulation:2})};export{q as MaterialBadge};
