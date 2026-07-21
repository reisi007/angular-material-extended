import{b as tt,c as x}from"./chunk-XT355LQ6.js";import{a as rt}from"./chunk-5ETSWK6G.js";import{a as lt}from"./chunk-ZC4H5EHS.js";import{a as et}from"./chunk-ROGFBH7V.js";import{a as gt}from"./chunk-E7N562OR.js";import{A as R,L as ot,ea as it,fa as st,j as nt,ja as T,v as at}from"./chunk-45MN3S43.js";import{a as J,e as X,f as Y}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Dc as Z,Lb as y,Mb as z,Na as N,Nb as U,Qc as $,Sb as p,Tb as i,Ub as l,Vb as d,aa as V,ad as D,ca as F,cc as k,cd as u,ea as w,ec as H,fc as Q,ga as g,gc as j,hc as W,ic as q,jb as m,jc as C,kc as G,oc as K,qc as E,ta as _,tc as r,xb as b,ya as O,yb as L,zb as P}from"./chunk-N476DBZA.js";var kt=["button"],xt=["*"];function Tt(a,c){if(a&1&&(i(0,"div",2),d(1,"mat-pseudo-checkbox",6),l()),a&2){let t=H();m(),p("disabled",t.disabled)}}var ut=new w("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),dt=new w("MatButtonToggleGroup"),Mt={provide:et,useExisting:V(()=>v),multi:!0},M=class{source;value;constructor(c,t){this.source=c,this.value=t}},v=(()=>{class a{_changeDetector=g(D);_dir=g(X,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=g(R).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(n=>n.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new _;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new _;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=g(ut,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new lt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||at(t))return;let e=t.target.id,o=this._buttonToggles.toArray().findIndex(f=>f.buttonId===e),s=null;switch(t.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}s&&(t.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(t){let n=new M(t,this.value);this._rawValue=n.value,this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}_syncButtonToggle(t,n,e=!1,o=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?n?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(n=>t.value!=null&&n===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let n=this._buttonToggles.get(t);if(!n.disabled){n.tabIndex=0;break}}}_getNextButton(t,n){let e=this._buttonToggles;for(let o=1;o<=e.length;o++){let s=(t+n*o+e.length)%e.length,f=e.get(s);if(f&&!f.disabled)return f}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let n=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(e=>this._selectValue(e,n))):(this._clearSelection(),this._selectValue(t,n)),!this.multiple&&n.every(e=>e.tabIndex===-1)){for(let e of n)if(!e.disabled){e.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,n){for(let e of n)if(e.value===t){e.checked=!0,this._selectionModel.select(e),this.multiple||(e.tabIndex=0);break}}_updateModelValue(t,n){n&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(n){return new(n||a)};static \u0275dir=P({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(n,e,o){if(n&1&&W(o,h,5),n&2){let s;C(s=G())&&(e._buttonToggles=s)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(n,e){n&1&&k("keydown",function(s){return e._keydown(s)}),n&2&&(y("role",e.multiple?"group":"radiogroup")("aria-disabled",e.disabled),E("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard",e.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",u],value:"value",multiple:[2,"multiple","multiple",u],disabled:[2,"disabled","disabled",u],disabledInteractive:[2,"disabledInteractive","disabledInteractive",u],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",u],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",u]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Z([Mt,{provide:dt,useExisting:a}])]})}return a})(),h=(()=>{class a{_changeDetectorRef=g(D);_elementRef=g(N);_focusMonitor=g(nt);_idGenerator=g(R);_animationDisabled=ot();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new _;constructor(){g(J).load(st);let t=g(dt,{optional:!0}),n=g(new $("tabindex"),{optional:!0})||"",e=g(ut,{optional:!0});this._tabIndex=O(parseInt(n)||0),this.buttonToggleGroup=t,this._appearance=e&&e.appearance?e.appearance:"standard",this._disabledInteractive=e?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let n=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);n&&(n.tabIndex=-1),this.tabIndex=0}this.change.emit(new M(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=b({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(n,e){if(n&1&&q(kt,5),n&2){let o;C(o=G())&&(e._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(n,e){n&1&&k("focus",function(){return e.focus()}),n&2&&(y("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),E("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-disabled-interactive",e.disabledInteractive)("mat-button-toggle-appearance-standard",e.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",u],appearance:"appearance",checked:[2,"checked","checked",u],disabled:[2,"disabled","disabled",u],disabledInteractive:[2,"disabledInteractive","disabledInteractive",u]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:xt,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(n,e){if(n&1&&(Q(),i(0,"button",1,0),k("click",function(){return e._onButtonClick()}),z(2,Tt,2,1,"div",2),i(3,"span",3),j(4),l()(),d(5,"span",4)(6,"span",5)),n&2){let o=K(1);p("id",e.buttonId)("disabled",e.disabled&&!e.disabledInteractive||null),y("role",e.isSingleSelector()?"radio":"button")("tabindex",e.disabled&&!e.disabledInteractive?-1:e.tabIndex)("aria-pressed",e.isSingleSelector()?null:e.checked)("aria-checked",e.isSingleSelector()?e.checked:null)("name",e._getButtonName())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby)("aria-disabled",e.disabled&&e.disabledInteractive?"true":null),m(2),U(e.buttonToggleGroup&&(!e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideSingleSelectionIndicator||e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),m(4),p("matRippleTrigger",o)("matRippleDisabled",e.disableRipple||e.disabled)}},dependencies:[it,rt],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return a})(),I=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=L({type:a});static \u0275inj=F({imports:[gt,h,Y]})}return a})();var S=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["rui-material-button-toggle-single"]],decls:17,vars:0,consts:[["id","button-toggle-single",1,"mb-8"],["id","button-toggle-single",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["value","bold","aria-label","Bold"],["value","italic","aria-label","Italic"],["value","underline","aria-label","Underline"],["html",`<mat-button-toggle-group>
  <mat-button-toggle value="bold" aria-label="Bold">
    <mat-icon>format_bold</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="italic" aria-label="Italic">
    <mat-icon>format_italic</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="underline" aria-label="Underline">
    <mat-icon>format_underline</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>`,"ts",`import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatButtonToggleModule, MatIconModule],`]],template:function(t,n){t&1&&(i(0,"section",0)(1,"h2",1),r(2,"Single Selection"),l(),i(3,"p",2),r(4,"Button toggle group with exclusive selection (single choice)."),l(),i(5,"div",3)(6,"mat-button-toggle-group")(7,"mat-button-toggle",4)(8,"mat-icon"),r(9,"format_bold"),l()(),i(10,"mat-button-toggle",5)(11,"mat-icon"),r(12,"format_italic"),l()(),i(13,"mat-button-toggle",6)(14,"mat-icon"),r(15,"format_underline"),l()()()(),d(16,"rui-showcase-code",7),l())},dependencies:[I,v,h,x,tt,T],encapsulation:2})};var B=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["rui-material-button-toggle-multi"]],decls:16,vars:1,consts:[["id","button-toggle-multi",1,"mb-8"],["id","button-toggle-multi",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],[3,"multiple"],["value","fluent","aria-label","Fluent"],["value","angular","aria-label","Angular"],["value","vue","aria-label","Vue"],["value","react","aria-label","React"],["html",`<mat-button-toggle-group [multiple]="true">
  <mat-button-toggle value="fluent">Fluent</mat-button-toggle>
  <mat-button-toggle value="angular">Angular</mat-button-toggle>
  <mat-button-toggle value="vue">Vue</mat-button-toggle>
  <mat-button-toggle value="react">React</mat-button-toggle>
</mat-button-toggle-group>`,"ts",`import { MatButtonToggleModule } from '@angular/material/button-toggle';

// In component imports:
imports: [MatButtonToggleModule],`]],template:function(t,n){t&1&&(i(0,"section",0)(1,"h2",1),r(2,"Multi Selection"),l(),i(3,"p",2),r(4,"Button toggle group with multiple selection enabled."),l(),i(5,"div",3)(6,"mat-button-toggle-group",4)(7,"mat-button-toggle",5),r(8,"Fluent"),l(),i(9,"mat-button-toggle",6),r(10,"Angular"),l(),i(11,"mat-button-toggle",7),r(12,"Vue"),l(),i(13,"mat-button-toggle",8),r(14,"React"),l()()(),d(15,"rui-showcase-code",9),l()),t&2&&(m(6),p("multiple",!0))},dependencies:[I,v,h,x,T],encapsulation:2})};var mt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["rui-material-button-toggle"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Button Toggle"),l(),i(4,"p",3),r(5,"mat-button-toggle-group for single and multi selection."),l()(),d(6,"rui-material-button-toggle-single")(7,"rui-material-button-toggle-multi"),l())},dependencies:[S,B],encapsulation:2})};export{mt as MaterialButtonToggle};
