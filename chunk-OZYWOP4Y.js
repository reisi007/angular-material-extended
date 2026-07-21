import{a as w,b as J,c as Ue}from"./chunk-INL75LQ4.js";import"./chunk-NOQ3PPWJ.js";import{a as Da}from"./chunk-QSZHYC6H.js";import"./chunk-2HNBJR46.js";import"./chunk-HMATP3KQ.js";import"./chunk-3AAYRBXX.js";import"./chunk-5ETSWK6G.js";import{a as la,b as ca,c as pa,f as ua,g as ma,h as ha,j as _a,n as ga}from"./chunk-7LJ5SCFJ.js";import{a as na,b as sa,c as Qe}from"./chunk-KHMA3PY5.js";import{a as qe}from"./chunk-PFXLYJGD.js";import{a as Ke,b as We,c as ta,d as gt,e as je,f as aa}from"./chunk-RQ6LY3TZ.js";import{a as ia,b as ra}from"./chunk-NKP4UQB5.js";import{a as Dt,b as vt,e as ba}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import{a as Ne,b as Ye,c as Le,d as be,e as Qt,i as Gt,j as Be,k as Ut,m as He,p as $t,s as ze}from"./chunk-ROGFBH7V.js";import"./chunk-E7N562OR.js";import{$ as da,A as De,E as ea,L as _t,U as oa,W as ft,_ as bt,d as mt,f as Xt,fa,ja as Ge,k as ht,s as Zt,u as Jt,v as G}from"./chunk-45MN3S43.js";import{a as fe,b as Oe,e as Z,f as qt}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Ac as Y,D as oe,Dc as K,E as Tt,Eb as q,Fb as pt,Ja as H,K as Pt,Ka as pe,Lb as k,Ma as Yt,Mb as he,Na as j,Nb as _e,Qb as xe,Qc as jt,Rb as Ie,Sb as _,Tb as l,Ub as c,V as Ve,Vb as y,Wb as S,Xb as V,Yb as zt,aa as rt,ac as R,ad as F,ba as de,bc as T,ca as Ot,cc as C,cd as L,dc as Kt,ea as st,ec as g,f as A,fa as Ee,fc as Fe,ga as s,gc as ge,hc as Wt,ib as lt,ic as Q,j as B,jb as d,jc as E,kc as x,la as b,ma as D,mb as ct,na as le,nb as ue,oa as ot,ob as me,oc as Re,pa as ce,pc as Te,q as Se,qa as Nt,qc as I,rb as Lt,sb as Bt,sc as Pe,ta as u,tc as m,ua as dt,uc as P,vc as X,wc as ut,xb as v,ya as h,yb as Ht,yc as O,zb as z,zc as N}from"./chunk-N476DBZA.js";function Wa(i,o){return this._trackRow(o)}var Sa=(i,o)=>o.id;function ja(i,o){if(i&1&&(S(0,"tr",0)(1,"td",3),m(2),V()()),i&2){let e=g();d(),Te("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),k("colspan",e.numCols),d(),X(" ",e.label," ")}}function qa(i,o){if(i&1&&(S(0,"td",3),m(1),V()),i&2){let e=g(2);Te("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),k("colspan",e._firstRowOffset),d(),X(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Qa(i,o){if(i&1){let e=R();S(0,"td",6)(1,"button",7),Kt("click",function(t){let n=b(e).$implicit,r=g(2);return D(r._cellClicked(n,t))})("focus",function(t){let n=b(e).$implicit,r=g(2);return D(r._emitActiveDateChange(n,t))}),S(2,"span",8),m(3),V(),zt(4,"span",9),V()()}if(i&2){let e=o.$implicit,a=o.$index,t=g().$index,n=g();Te("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),k("data-mat-row",t)("data-mat-col",a),d(),Pe(e.cssClasses),I("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(t,a))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,t,a))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,t,a))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),T("tabIndex",n._isActiveCell(t,a)?0:-1),k("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),d(),I("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),d(),X(" ",e.displayValue," ")}}function Ga(i,o){if(i&1&&(S(0,"tr",1),he(1,qa,2,6,"td",4),xe(2,Qa,5,49,"td",5,Sa),V()),i&2){let e=o.$implicit,a=o.$index,t=g();d(),_e(a===0&&t._firstRowOffset?1:-1),d(),Ie(e)}}function Ua(i,o){if(i&1&&(l(0,"th",2)(1,"span",6),m(2),c(),l(3,"span",3),m(4),c()()),i&2){let e=o.$implicit;d(2),P(e.long),d(2),P(e.narrow)}}var $a=["*"];function Xa(i,o){}function Za(i,o){if(i&1){let e=R();l(0,"mat-month-view",4),Y("activeDateChange",function(t){b(e);let n=g();return N(n.activeDate,t)||(n.activeDate=t),D(t)}),C("_userSelection",function(t){b(e);let n=g();return D(n._dateSelected(t))})("dragStarted",function(t){b(e);let n=g();return D(n._dragStarted(t))})("dragEnded",function(t){b(e);let n=g();return D(n._dragEnded(t))}),c()}if(i&2){let e=g();O("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Ja(i,o){if(i&1){let e=R();l(0,"mat-year-view",5),Y("activeDateChange",function(t){b(e);let n=g();return N(n.activeDate,t)||(n.activeDate=t),D(t)}),C("monthSelected",function(t){b(e);let n=g();return D(n._monthSelectedInYearView(t))})("selectedChange",function(t){b(e);let n=g();return D(n._goToDateInView(t,"month"))}),c()}if(i&2){let e=g();O("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function en(i,o){if(i&1){let e=R();l(0,"mat-multi-year-view",6),Y("activeDateChange",function(t){b(e);let n=g();return N(n.activeDate,t)||(n.activeDate=t),D(t)}),C("yearSelected",function(t){b(e);let n=g();return D(n._yearSelectedInMultiYearView(t))})("selectedChange",function(t){b(e);let n=g();return D(n._goToDateInView(t,"year"))}),c()}if(i&2){let e=g();O("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function tn(i,o){}var an=["button"],nn=[[["","matDatepickerToggleIcon",""]]],rn=["[matDatepickerToggleIcon]"];function sn(i,o){i&1&&(le(),l(0,"svg",2),y(1,"path",3),c())}var on=[[["input","matStartDate",""]],[["input","matEndDate",""]]],dn=["input[matStartDate]","input[matEndDate]"];var se=(()=>{class i{changes=new B;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,a){return`${e} \u2013 ${a}`}formatYearRangeLabel(e,a){return`${e} to ${a}`}static \u0275fac=function(a){return new(a||i)};static \u0275prov=Yt({token:i,factory:i.\u0275fac})}return i})(),ln=0,Ce=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=ln++;cssClasses;constructor(o,e,a,t,n,r=o,p){this.value=o,this.displayValue=e,this.ariaLabel=a,this.enabled=t,this.compareValue=r,this.rawValue=p,this.cssClasses=n instanceof Set?Array.from(n):n}},cn={passive:!1,capture:!0},$e={passive:!0,capture:!0},va={passive:!0},ne=(()=>{class i{_elementRef=s(j);_ngZone=s(dt);_platform=s(Xt);_intl=s(se);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new u;previewChange=new u;activeDateChange=new u;dragStarted=new u;dragEnded=new u;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(ce);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(ct),a=s(De);this._startDateLabelId=a.getId("mat-calendar-body-start-"),this._endDateLabelId=a.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=a.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=a.getId("mat-calendar-body-comparison-end-"),s(fe).load(fa),this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,n=[e.listen(t,"touchmove",this._touchmoveHandler,cn),e.listen(t,"mouseenter",this._enterHandler,$e),e.listen(t,"focus",this._enterHandler,$e),e.listen(t,"mouseleave",this._leaveHandler,$e),e.listen(t,"blur",this._leaveHandler,$e),e.listen(t,"mousedown",this._mousedownHandler,va),e.listen(t,"touchstart",this._mousedownHandler,va)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,a){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:a})}_emitActiveDateChange(e,a){e.enabled&&this.activeDateChange.emit({value:e.value,event:a})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let a=e.numCols,{rows:t,numCols:n}=this;(e.rows||a)&&(this._firstRowOffset=t&&t.length&&t[0].length?n-t[0].length:0),(e.cellAspectRatio||a||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(a||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,a){let t=e*this.numCols+a;return e&&(t-=this._firstRowOffset),t==this.activeCell}_focusActiveCell(e=!0){lt(()=>{setTimeout(()=>{let a=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");a&&(e||(this._skipNextFocus=!0),a.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return wt(e,this.startValue,this.endValue)}_isRangeEnd(e){return kt(e,this.startValue,this.endValue)}_isInRange(e){return Mt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return wt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,a,t){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[a][t-1];if(!n){let r=this.rows[a-1];n=r&&r[r.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,a,t){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[a][t+1];if(!n){let r=this.rows[a+1];n=r&&r[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return kt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Mt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return wt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return kt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Mt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let a=this._getCellFromElement(e.target);a&&this._ngZone.run(()=>this.previewChange.emit({value:a.enabled?a:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let a=ya(e),t=a?this._getCellFromElement(a):null;a!==e.target&&(this._didDragSinceMouseDown=!0),Ct(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:t?.enabled?t:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let a=e.target&&this._getCellFromElement(e.target);!a||!this._isInRange(a.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:a.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let a=Ct(e.target);if(!a){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}a.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let t=this._getCellFromElement(a);this.dragEnded.emit({value:t?.rawValue??null,event:e})})};_touchendHandler=e=>{let a=ya(e);a&&this._mouseupHandler({target:a})};_getCellFromElement(e){let a=Ct(e);if(a){let t=a.getAttribute("data-mat-row"),n=a.getAttribute("data-mat-col");if(t&&n)return this.rows[parseInt(t)]?.[parseInt(n)]||null}return null}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[H],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(a,t){a&1&&(he(0,ja,3,6,"tr",0),xe(1,Ga,4,1,"tr",1,Wa,!0),S(3,"span",2),m(4),V(),S(5,"span",2),m(6),V(),S(7,"span",2),m(8),V(),S(9,"span",2),m(10),V()),a&2&&(_e(t._firstRowOffset<t.labelMinRequiredCells?0:-1),d(),Ie(t.rows),d(2),T("id",t._startDateLabelId),d(),X(" ",t.startDateAccessibleName,`
`),d(),T("id",t._endDateLabelId),d(),X(" ",t.endDateAccessibleName,`
`),d(),T("id",t._comparisonStartDateLabelId),d(),ut(" ",t.comparisonDateAccessibleName," ",t.startDateAccessibleName,`
`),d(),T("id",t._comparisonEndDateLabelId),d(),ut(" ",t.comparisonDateAccessibleName," ",t.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return i})();function yt(i){return i?.nodeName==="TD"}function Ct(i){let o;return yt(i)?o=i:yt(i.parentNode)?o=i.parentNode:yt(i.parentNode?.parentNode)&&(o=i.parentNode.parentNode),o?.getAttribute("data-mat-row")!=null?o:null}function wt(i,o,e){return e!==null&&o!==e&&i<e&&i===o}function kt(i,o,e){return o!==null&&o!==e&&i>=o&&i===e}function Mt(i,o,e,a){return a&&o!==null&&e!==null&&o!==e&&i>=o&&i<=e}function ya(i){let o=i.changedTouches[0];return document.elementFromPoint(o.clientX,o.clientY)}var f=class{start;end;_disableStructuralEquivalency;constructor(o,e){this.start=o,this.end=e}},W=(()=>{class i{selection;_adapter;_selectionChanged=new B;selectionChanged=this._selectionChanged;constructor(e,a){this.selection=e,this._adapter=a,this.selection=e}updateSelection(e,a){let t=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:a,oldValue:t})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(a){Lt()};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})(),pn=(()=>{class i extends W{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(a){return new(a||i)(Ee(w))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})(),un=(()=>{class i extends W{constructor(e){super(new f(null,null),e)}add(e){let{start:a,end:t}=this.selection;a==null?a=e:t==null?t=e:(a=e,t=null),super.updateSelection(new f(a,t),this)}isValid(){let{start:e,end:a}=this.selection;return e==null&&a==null?!0:e!=null&&a!=null?this._isValidDateInstance(e)&&this._isValidDateInstance(a)&&this._adapter.compareDate(e,a)<=0:(e==null||this._isValidDateInstance(e))&&(a==null||this._isValidDateInstance(a))}isComplete(){return this.selection.start!=null&&this.selection.end!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(a){return new(a||i)(Ee(w))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})(),Va={provide:W,useFactory:()=>s(W,{optional:!0,skipSelf:!0})||new pn(s(w))},mn={provide:W,useFactory:()=>s(W,{optional:!0,skipSelf:!0})||new un(s(w))},Xe=new st("MAT_DATE_RANGE_SELECTION_STRATEGY"),hn=(()=>{class i{_dateAdapter;constructor(e){this._dateAdapter=e}selectionFinished(e,a){let{start:t,end:n}=a;return t==null?t=e:n==null&&e&&this._dateAdapter.compareDate(e,t)>=0?n=e:(t=e,n=null),new f(t,n)}createPreview(e,a){let t=null,n=null;return a.start&&!a.end&&e&&(t=a.start,n=e),new f(t,n)}createDrag(e,a,t){let n=a.start,r=a.end;if(!n||!r)return null;let p=this._dateAdapter,Me=p.compareDate(n,r)!==0,U=p.getYear(t)-p.getYear(e),$=p.getMonth(t)-p.getMonth(e),Ae=p.getDate(t)-p.getDate(e);return Me&&p.sameDate(e,a.start)?(n=t,p.compareDate(t,r)>0&&(r=p.addCalendarYears(r,U),r=p.addCalendarMonths(r,$),r=p.addCalendarDays(r,Ae))):Me&&p.sameDate(e,a.end)?(r=t,p.compareDate(t,n)<0&&(n=p.addCalendarYears(n,U),n=p.addCalendarMonths(n,$),n=p.addCalendarDays(n,Ae))):(n=p.addCalendarYears(n,U),n=p.addCalendarMonths(n,$),n=p.addCalendarDays(n,Ae),r=p.addCalendarYears(r,U),r=p.addCalendarMonths(r,$),r=p.addCalendarDays(r,Ae)),new f(n,r)}static \u0275fac=function(a){return new(a||i)(Ee(w))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})(),At=7,_n=0,Ca=(()=>{class i{_changeDetectorRef=s(F);_dateFormats=s(J,{optional:!0});_dateAdapter=s(w,{optional:!0});_dir=s(Z,{optional:!0});_rangeStrategy=s(Xe,{optional:!0});_rerenderSubscription=A.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this._hasSameMonthAndYear(a,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof f?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new u;_userSelection=new u;dragStarted=new u;dragEnded=new u;activeDateChange=new u;_matCalendarBody;_monthLabel=h("");_weeks=h([]);_firstWeekOffset=h(0);_rangeStart=h(null);_rangeEnd=h(null);_comparisonRangeStart=h(null);_comparisonRangeEnd=h(null);_previewStart=h(null);_previewEnd=h(null);_isRange=h(!1);_todayDate=h(null);_weekdays=h([]);constructor(){s(fe).load(Oe),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ve(null)).subscribe(()=>this._init())}ngOnChanges(e){let a=e.comparisonStart||e.comparisonEnd;a&&!a.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let a=e.value,t=this._getDateFromDayOfMonth(a),n,r;this._selected instanceof f?(n=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):n=r=this._getDateInCurrentMonth(this._selected),(n!==a||r!==a)&&this.selectedChange.emit(t),this._userSelection.emit({value:t,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!G(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((At+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%At),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:a}){if(this._rangeStrategy){let t=a?a.rawValue:null,n=this._rangeStrategy.createPreview(t,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&t){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,t,e);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let a=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:a??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),a=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((r,p)=>({long:r,narrow:a[p],id:_n++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),a=this._dateAdapter.getDateNames(),t=[[]];for(let n=0,r=this._firstWeekOffset();n<e;n++,r++){r==At&&(t.push([]),r=0);let p=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),Me=this._shouldEnableDate(p),U=this._dateAdapter.format(p,this._dateFormats.display.dateA11yLabel),$=this.dateClass?this.dateClass(p,"month"):void 0;t[t.length-1].push(new Ce(n+1,a[n],U,Me,$,this._getCellCompareValue(p),p))}this._weeks.set(t)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,a){return!!(e&&a&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(a)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a))}_getCellCompareValue(e){if(e){let a=this._dateAdapter.getYear(e),t=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(a,t,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof f?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-month-view"]],viewQuery:function(a,t){if(a&1&&Q(ne,5),a&2){let n;E(n=x())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[H],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(a,t){a&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),xe(3,Ua,5,2,"th",2,Sa),c(),l(5,"tr",3),y(6,"th",4),c()(),l(7,"tbody",5),C("selectedValueChange",function(r){return t._dateSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("previewChange",function(r){return t._previewChanged(r)})("dragStarted",function(r){return t.dragStarted.emit(r)})("dragEnded",function(r){return t._dragEnded(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),c()()),a&2&&(d(3),Ie(t._weekdays()),d(4),_("label",t._monthLabel())("rows",t._weeks())("todayValue",t._todayDate())("startValue",t._rangeStart())("endValue",t._rangeEnd())("comparisonStart",t._comparisonRangeStart())("comparisonEnd",t._comparisonRangeEnd())("previewStart",t._previewStart())("previewEnd",t._previewEnd())("isRange",t._isRange())("labelMinRequiredCells",3)("activeCell",t._dateAdapter.getDate(t.activeDate)-1)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName))},dependencies:[ne],encapsulation:2})}return i})(),M=24,St=4,wa=(()=>{class i{_changeDetectorRef=s(F);_dateAdapter=s(w,{optional:!0});_dir=s(Z,{optional:!0});_rerenderSubscription=A.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),Ea(this._dateAdapter,a,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof f?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new u;yearSelected=new u;activeDateChange=new u;_matCalendarBody;_years=h([]);_todayYear=h(0);_selectedYear=h(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ve(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let a=this._dateAdapter.getYear(this._activeDate)-ve(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),t=[];for(let n=0,r=[];n<M;n++)r.push(a+n),r.length==St&&(t.push(r.map(p=>this._createCellForYear(p))),r=[]);this._years.set(t),this._changeDetectorRef.markForCheck()}_yearSelected(e){let a=e.value,t=this._dateAdapter.createDate(a,0,1),n=this._getDateFromYear(a);this.yearSelected.emit(t),this.selectedChange.emit(n)}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromYear(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-St);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,St);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ve(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,M-ve(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-M*10:-M);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?M*10:M);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return ve(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let a=this._dateAdapter.getMonth(this.activeDate),t=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,a,1));return this._dateAdapter.createDate(e,a,Math.min(this._dateAdapter.getDate(this.activeDate),t))}_createCellForYear(e){let a=this._dateAdapter.createDate(e,0,1),t=this._dateAdapter.getYearName(a),n=this.dateClass?this.dateClass(a,"multi-year"):void 0;return new Ce(e,t,t,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(e,0,1);for(let t=a;this._dateAdapter.getYear(t)==e;t=this._dateAdapter.addCalendarDays(t,1))if(this.dateFilter(t))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof f){let a=e.start||e.end;a&&this._selectedYear.set(this._dateAdapter.getYear(a))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(a,t){if(a&1&&Q(ne,5),a&2){let n;E(n=x())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(a,t){a&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),y(3,"th",2),c()(),l(4,"tbody",3),C("selectedValueChange",function(r){return t._yearSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),c()()),a&2&&(d(4),_("rows",t._years())("todayValue",t._todayYear())("startValue",t._selectedYear())("endValue",t._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",t._getActiveCell()))},dependencies:[ne],encapsulation:2})}return i})();function Ea(i,o,e,a,t){let n=i.getYear(o),r=i.getYear(e),p=xa(i,a,t);return Math.floor((n-p)/M)===Math.floor((r-p)/M)}function ve(i,o,e,a){let t=i.getYear(o);return gn(t-xa(i,e,a),M)}function xa(i,o,e){let a=0;return e?a=i.getYear(e)-M+1:o&&(a=i.getYear(o)),a}function gn(i,o){return(i%o+o)%o}var ka=(()=>{class i{_changeDetectorRef=s(F);_dateFormats=s(J,{optional:!0});_dateAdapter=s(w,{optional:!0});_dir=s(Z,{optional:!0});_rerenderSubscription=A.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this._dateAdapter.getYear(a)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof f?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new u;monthSelected=new u;activeDateChange=new u;_matCalendarBody;_months=h([]);_yearLabel=h("");_todayMonth=h(null);_selectedMonth=h(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ve(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let a=e.value,t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),a,1);this.monthSelected.emit(t);let n=this._getDateFromMonth(a);this.selectedChange.emit(n)}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromMonth(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(a=>a.map(t=>this._createCellForMonth(t,e[t])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),t=this._dateAdapter.getNumDaysInMonth(a);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),t))}_createCellForMonth(e,a){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(t,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(t,"year"):void 0;return new Ce(e,a.toLocaleUpperCase(),n,this._shouldEnableMonth(e),r)}_shouldEnableMonth(e){let a=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(a,e)||this._isYearAndMonthBeforeMinDate(a,e))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(a,e,1);for(let n=t;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,a){if(this.maxDate){let t=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>t||e===t&&a>n}return!1}_isYearAndMonthBeforeMinDate(e,a){if(this.minDate){let t=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<t||e===t&&a<n}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof f?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-year-view"]],viewQuery:function(a,t){if(a&1&&Q(ne,5),a&2){let n;E(n=x())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(a,t){a&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),y(3,"th",2),c()(),l(4,"tbody",3),C("selectedValueChange",function(r){return t._monthSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),c()()),a&2&&(d(4),_("label",t._yearLabel())("rows",t._months())("todayValue",t._todayMonth())("startValue",t._selectedMonth())("endValue",t._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",t._dateAdapter.getMonth(t.activeDate)))},dependencies:[ne],encapsulation:2})}return i})(),Ia=(()=>{class i{_intl=s(se);calendar=s(Vt);_dateAdapter=s(w,{optional:!0});_dateFormats=s(J,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(fe).load(Oe);let e=s(F);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-M))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:M))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,a=this._intl,t=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=t.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=t.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=a.switchToMultiYearViewLabel,this._prevButtonLabel=a.prevMonthLabel,this._nextButtonLabel=a.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=t.getYearName(e.activeDate),this._periodButtonDescription=t.getYearName(e.activeDate),this._periodButtonLabel=a.switchToMonthViewLabel,this._prevButtonLabel=a.prevYearLabel,this._nextButtonLabel=a.nextYearLabel):(this._periodButtonText=a.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=a.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=a.switchToMonthViewLabel,this._prevButtonLabel=a.prevMultiYearLabel,this._nextButtonLabel=a.nextMultiYearLabel)}_isSameView(e,a){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(a):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a):Ea(this._dateAdapter,e,a,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let a=this._dateAdapter.getYear(this.calendar.activeDate)-ve(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),t=a+M-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1)),r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1));return[n,r]}_periodButtonLabelId=s(De).getId("mat-calendar-period-label-");static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:$a,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(a,t){a&1&&(Fe(),l(0,"div",0)(1,"div",1)(2,"span",2),m(3),c(),l(4,"button",3),C("click",function(){return t.currentPeriodClicked()}),l(5,"span",4),m(6),c(),le(),l(7,"svg",5),y(8,"polygon",6),c()(),ot(),y(9,"div",7),ge(10),l(11,"button",8),C("click",function(){return t.previousClicked()}),le(),l(12,"svg",9),y(13,"path",10),c()(),ot(),l(14,"button",11),C("click",function(){return t.nextClicked()}),le(),l(15,"svg",9),y(16,"path",12),c()()()()),a&2&&(d(2),_("id",t._periodButtonLabelId),d(),P(t.periodButtonDescription),d(),k("aria-label",t.periodButtonLabel)("aria-describedby",t._periodButtonLabelId),d(2),P(t.periodButtonText),d(),I("mat-calendar-invert",t.calendar.currentView!=="month"),d(4),_("disabled",!t.previousEnabled())("matTooltip",t.prevButtonLabel),k("aria-label",t.prevButtonLabel),d(3),_("disabled",!t.nextEnabled())("matTooltip",t.nextButtonLabel),k("aria-label",t.nextButtonLabel))},dependencies:[vt,Dt,Da],encapsulation:2})}return i})(),Vt=(()=>{class i{_dateAdapter=s(w,{optional:!0});_dateFormats=s(J,{optional:!0});_changeDetectorRef=s(F);_elementRef=s(j);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof f?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new u;yearSelected=new u;monthSelected=new u;viewChanged=new u(!0);_userSelection=new u;_userDragDrop=new u;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let a=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),a&&(this.stateChanges.next(),this.viewChanged.emit(a))}_currentView;_activeDrag=null;stateChanges=new B;constructor(){this._intlChanges=s(se).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new ft(this.headerComponent||Ia),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let a=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,t=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=a||t||e.dateFilter;if(n&&!n.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(mt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let a=e.value;(this.selected instanceof f||a&&!this._dateAdapter.sameDate(a,this.selected))&&this.selectedChange.emit(a),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,a){this.activeDate=e,this.currentView=a}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-calendar"]],viewQuery:function(a,t){if(a&1&&Q(Ca,5)(ka,5)(wa,5),a&2){let n;E(n=x())&&(t.monthView=n.first),E(n=x())&&(t.yearView=n.first),E(n=x())&&(t.multiYearView=n.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[K([Va]),H],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(a,t){if(a&1&&(pt(0,Xa,0,0,"ng-template",0),l(1,"div",1),he(2,Za,1,11,"mat-month-view",2)(3,Ja,1,6,"mat-year-view",3)(4,en,1,6,"mat-multi-year-view",3),c()),a&2){let n;_("cdkPortalOutlet",t._calendarHeaderPortal),d(2),_e((n=t.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1)}},dependencies:[bt,ht,Ca,ka,wa],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})(),fn=new st("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(ce);return()=>ca(i)}}),Fa=(()=>{class i{_elementRef=s(j);_animationsDisabled=_t();_changeDetectorRef=s(F);_globalModel=s(W);_dateAdapter=s(w);_ngZone=s(dt);_rangeSelectionStrategy=s(Xe,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new B;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(fe).load(Oe),this._closeButtonText=s(se).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,a=s(ct);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"animationstart",this._handleAnimationEvent),a.listen(e,"animationend",this._handleAnimationEvent),a.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let a=this._model.selection,t=e.value,n=a instanceof f;if(n&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(t,a,e.event);this._model.updateSelection(r,this)}else t&&(n||!this._dateAdapter.sameDate(t,a))&&this._model.add(t);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let a=this._elementRef.nativeElement;e.target!==a||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",a.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,a){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,a&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(a,t){if(a&1&&Q(Vt,5),a&2){let n;E(n=x())&&(t._calendar=n.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(a,t){a&2&&(Pe(t.color?"mat-"+t.color:""),I("mat-datepicker-content-touch",t.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!t._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-calendar",1),C("yearSelected",function(r){return t.datepicker._selectYear(r)})("monthSelected",function(r){return t.datepicker._selectMonth(r)})("viewChanged",function(r){return t.datepicker._viewChanged(r)})("_userSelection",function(r){return t._handleUserSelection(r)})("_userDragDrop",function(r){return t._handleUserDragDrop(r)}),c(),pt(2,tn,0,0,"ng-template",2),l(3,"button",3),C("focus",function(){return t._closeButtonFocused=!0})("blur",function(){return t._closeButtonFocused=!1})("click",function(){return t.datepicker.close()}),m(4),c()()),a&2&&(I("mat-datepicker-content-container-with-custom-header",t.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",t._actionsPortal),k("aria-modal",!0)("aria-labelledby",t._dialogLabelId??void 0),d(),Pe(t.datepicker.panelClass),_("id",t.datepicker.id)("startAt",t.datepicker.startAt)("startView",t.datepicker.startView)("minDate",t.datepicker._getMinDate())("maxDate",t.datepicker._getMaxDate())("dateFilter",t.datepicker._getDateFilter())("headerComponent",t.datepicker.calendarHeaderComponent)("selected",t._getSelected())("dateClass",t.datepicker.dateClass)("comparisonStart",t.comparisonStart)("comparisonEnd",t.comparisonEnd)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName),d(),_("cdkPortalOutlet",t._actionsPortal),d(),I("cdk-visually-hidden",!t._closeButtonFocused),_("color",t.color||"primary"),d(),P(t._closeButtonText))},dependencies:[Zt,Vt,bt,vt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2})}return i})(),Ze=(()=>{class i{_injector=s(ce);_viewContainerRef=s(Bt);_dateAdapter=s(w,{optional:!0});_dir=s(Z,{optional:!0});_model=s(W);_animationsDisabled=_t();_scrollStrategy=s(fn);_inputStateChanges=A.EMPTY;_document=s(Nt);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new u;monthSelected=new u;viewChanged=new u(!0);dateClass;openedStream=new u;closedStream=new u;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ea(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(De).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new B;_changeDetectorRef=s(F);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let a=e.xPosition||e.yPosition;if(a&&!a.firstChange&&this._overlayRef){let t=this._overlayRef.getConfig().positionStrategy;t instanceof ma&&(this._setConnectedPositions(t),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=mt(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",a=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:t,location:n}=this._componentRef;t._animationDone.pipe(Pt(1)).subscribe(()=>{let r=this._document.activeElement;e&&(!r||r===this._document.activeElement||n.nativeElement.contains(r))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),t._startExitAnimation()}e?setTimeout(a):a()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,a=new ft(Fa,this._viewContainerRef),t=this._overlayRef=_a(this._injector,new pa({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?la(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(t).subscribe(n=>{n&&n.preventDefault(),this.close()}),t.keydownEvents().subscribe(n=>{let r=n.keyCode;(r===38||r===40||r===37||r===39||r===33||r===34)&&n.preventDefault()}),this._componentRef=t.attach(a),this._forwardContentValues(this._componentRef.instance),e||lt(()=>{t.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return ha(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=ua(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let a=this.xPosition==="end"?"end":"start",t=a==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",r=n==="top"?"bottom":"top";return e.withPositions([{originX:a,originY:r,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:r}])}_getCloseStream(e){let a=["ctrlKey","shiftKey","metaKey"];return oe(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Tt(t=>t.keyCode===27&&!G(t)||this.datepickerInput&&G(t,"altKey")&&t.keyCode===38&&a.every(n=>!G(t,n)))))}static \u0275fac=function(a){return new(a||i)};static \u0275dir=z({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",L],disabled:[2,"disabled","disabled",L],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",L],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",L]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[H]})}return i})(),Ra=(()=>{class i extends Ze{static \u0275fac=(()=>{let e;return function(t){return(e||(e=pe(i)))(t||i)}})();static \u0275cmp=v({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[K([Va,{provide:Ze,useExisting:i}]),q],decls:0,vars:0,template:function(a,t){},encapsulation:2})}return i})(),ee=class{target;targetElement;value=null;constructor(o,e){this.target=o,this.targetElement=e,this.value=this.target.value}},Ta=(()=>{class i{_elementRef=s(j);_dateAdapter=s(w,{optional:!0});_dateFormats=s(J,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let a=e,t=this._elementRef.nativeElement;this._disabled!==a&&(this._disabled=a,this.stateChanges.next(void 0)),a&&this._isInitialized&&t.blur&&t.blur()}_disabled;dateChange=new u;dateInput=new u;stateChanges=new B;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=A.EMPTY;_localeSubscription=A.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!a||this._matchesFilter(a)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._getMinDate();return!t||!a||this._dateAdapter.compareDate(t,a)<=0?null:{matDatepickerMin:{min:t,actual:a}}};_maxValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._getMaxDate();return!t||!a||this._dateAdapter.compareDate(t,a)>=0?null:{matDatepickerMax:{max:t,actual:a}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(a=>{if(this._shouldHandleChangeEvent(a)){let t=this._getValueFromModel(a.selection);this._lastValueValid=this._isValidValue(t),this._cvaOnChange(t),this._onTouched(),this._formatValue(t),this.dateInput.emit(new ee(this,this._elementRef.nativeElement)),this.dateChange.emit(new ee(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Pa(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let a=["ctrlKey","shiftKey","metaKey"];G(e,"altKey")&&e.keyCode===40&&a.every(n=>!G(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let a=e.target.value,t=this._lastValueValid,n=this._dateAdapter.parse(a,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let r=!this._dateAdapter.sameDate(n,this.value);!n||r?this._cvaOnChange(n):(a&&!this.value&&this._cvaOnChange(n),t!==this._lastValueValid&&this._validatorOnChange()),r&&(this._assignValue(n),this.dateInput.emit(new ee(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new ee(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,a){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),a&&this._formatValue(e)}_matchesFilter(e){let a=this._getDateFilter();return!a||a(e)}static \u0275fac=function(a){return new(a||i)};static \u0275dir=z({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",L]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[H]})}return i})();function Pa(i,o){let e=Object.keys(i);for(let a of e){let{previousValue:t,currentValue:n}=i[a];if(o.isDateInstance(t)&&o.isDateInstance(n)){if(!o.sameDate(t,n))return!0}else return!0}return!1}var bn={provide:Ne,useExisting:rt(()=>tt),multi:!0},Dn={provide:Le,useExisting:rt(()=>tt),multi:!0},tt=(()=>{class i extends Ta{_formField=s(gt,{optional:!0});_closedSubscription=A.EMPTY;_openedSubscription=A.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=h(null);get min(){return this._min}set min(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._min)||(this._min=a,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._max)||(this._max=a,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let a=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==a&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=be.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(a){return new(a||i)};static \u0275dir=z({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(a,t){a&1&&C("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("blur",function(){return t._onBlur()})("keydown",function(r){return t._onKeydown(r)}),a&2&&(T("disabled",t.disabled),k("aria-haspopup",t._datepicker?"dialog":null)("aria-owns",t._ariaOwns())("min",t.min?t._dateAdapter.toIso8601(t.min):null)("max",t.max?t._dateAdapter.toIso8601(t.max):null)("data-mat-calendar",t._datepicker?t._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[K([bn,Dn,{provide:na,useExisting:i}]),q]})}return i})(),vn=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275dir=z({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),ke=(()=>{class i{_intl=s(se);_changeDetectorRef=s(F);_stateChanges=A.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new jt("tabindex"),{optional:!0}),a=Number(e);this.tabIndex=a||a===0?a:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Se(),a=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Se(),t=this.datepicker?oe(this.datepicker.openedStream,this.datepicker.closedStream):Se();this._stateChanges.unsubscribe(),this._stateChanges=oe(this._intl.changes,e,a,t).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(a,t,n){if(a&1&&Wt(n,vn,5),a&2){let r;E(r=x())&&(t._customIcon=r.first)}},viewQuery:function(a,t){if(a&1&&Q(an,5),a&2){let n;E(n=x())&&(t._button=n.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(a,t){a&1&&C("click",function(r){return t._open(r)}),a&2&&(k("tabindex",null)("data-mat-calendar",t.datepicker?t.datepicker.id:null),I("mat-datepicker-toggle-active",t.datepicker&&t.datepicker.opened)("mat-accent",t.datepicker&&t.datepicker.color==="accent")("mat-warn",t.datepicker&&t.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",L],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[H],ngContentSelectors:rn,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(a,t){a&1&&(Fe(nn),l(0,"button",1,0),he(2,sn,2,0,":svg:svg",2),ge(3),c()),a&2&&(_("tabIndex",t.disabled?-1:t.tabIndex)("disabled",t.disabled)("disableRipple",t.disableRipple),k("aria-haspopup",t.datepicker?"dialog":null)("aria-label",t.ariaLabel||t._intl.openCalendarLabel)("aria-expanded",t.datepicker?t.datepicker.opened:null),d(2),_e(t._customIcon?-1:2))},dependencies:[Dt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return i})(),Rt=(()=>{class i{_changeDetectorRef=s(F);_elementRef=s(j);_dateAdapter=s(w,{optional:!0});_formField=s(gt,{optional:!0});_closedSubscription=A.EMPTY;_openedSubscription=A.EMPTY;_startInput;_endInput;get value(){return this._model?this._model.selection:null}id=s(De).getId("mat-date-range-input-");focused=!1;get shouldLabelFloat(){return this.focused||!this.empty}controlType="mat-date-range-input";get placeholder(){let e=this._startInput?._getPlaceholder()||"",a=this._endInput?._getPlaceholder()||"";return e||a?`${e} ${this.separator} ${a}`:""}get rangePicker(){return this._rangePicker}set rangePicker(e){e&&(this._model=e.registerInput(this),this._rangePicker=e,this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe(),this._ariaOwns.set(this.rangePicker.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._startInput?._onTouched(),this._endInput?._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(this._model))}_rangePicker;_ariaOwns=h(null);get required(){return this._required??(this._isTargetRequired(this)||this._isTargetRequired(this._startInput)||this._isTargetRequired(this._endInput))??!1}set required(e){this._required=e}_required;get dateFilter(){return this._dateFilter}set dateFilter(e){let a=this._startInput,t=this._endInput,n=a&&a._matchesFilter(a.value),r=t&&t._matchesFilter(a.value);this._dateFilter=e,a&&a._matchesFilter(a.value)!==n&&a._validatorOnChange(),t&&t._matchesFilter(t.value)!==r&&t._validatorOnChange()}_dateFilter;get min(){return this._min}set min(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._min)||(this._min=a,this._revalidate())}_min=null;get max(){return this._max}set max(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._max)||(this._max=a,this._revalidate())}_max=null;get disabled(){return this._startInput&&this._endInput?this._startInput.disabled&&this._endInput.disabled:this._groupDisabled}set disabled(e){e!==this._groupDisabled&&(this._groupDisabled=e,this.stateChanges.next(void 0))}_groupDisabled=!1;get errorState(){return this._startInput&&this._endInput?this._startInput.errorState||this._endInput.errorState:!1}get empty(){let e=this._startInput?this._startInput.isEmpty():!1,a=this._endInput?this._endInput.isEmpty():!1;return e&&a}_ariaDescribedBy=null;_model;separator="\u2013";comparisonStart=null;comparisonEnd=null;ngControl;stateChanges=new B;disableAutomaticLabeling=!0;constructor(){this._dateAdapter,this._formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")&&this._elementRef.nativeElement.classList.add("mat-mdc-input-element","mat-mdc-form-field-input-control","mdc-text-field__input"),this.ngControl=s(Qt,{optional:!0,self:!0})}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){this._ariaDescribedBy=e.length?e.join(" "):null}onContainerClick(){!this.focused&&!this.disabled&&(!this._model||!this._model.selection.start?this._startInput.focus():this._endInput.focus())}ngAfterContentInit(){this._model&&this._registerModel(this._model),oe(this._startInput.stateChanges,this._endInput.stateChanges).subscribe(()=>{this.stateChanges.next(void 0)})}ngOnChanges(e){Pa(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe(),this.stateChanges.complete()}getStartValue(){return this.value?this.value.start:null}getThemePalette(){return this._formField?this._formField.color:void 0}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():null}_getInputMirrorValue(e){let a=e==="start"?this._startInput:this._endInput;return a?a.getMirrorValue():""}_shouldHidePlaceholders(){return this._startInput?!this._startInput.isEmpty():!1}_handleChildValueChange(){this.stateChanges.next(void 0),this._changeDetectorRef.markForCheck()}_openDatepicker(){this._rangePicker&&this._rangePicker.open()}_shouldHideSeparator(){return(!this._formField||this._formField.getLabelId()&&!this._formField._shouldLabelFloat())&&this.empty}_getAriaLabelledby(){let e=this._formField;return e&&e._hasFloatingLabel()?e._labelId:null}_getStartDateAccessibleName(){return this._startInput._getAccessibleName()}_getEndDateAccessibleName(){return this._endInput._getAccessibleName()}_updateFocus(e){this.focused=e!==null,this.stateChanges.next()}_revalidate(){this._startInput&&this._startInput._validatorOnChange(),this._endInput&&this._endInput._validatorOnChange()}_registerModel(e){this._startInput&&this._startInput._registerModel(e),this._endInput&&this._endInput._registerModel(e)}_isTargetRequired(e){return e?.ngControl?.control?.hasValidator(be.required)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["mat-date-range-input"]],hostAttrs:["role","group",1,"mat-date-range-input"],hostVars:8,hostBindings:function(a,t){a&2&&(k("id",t.id)("aria-labelledby",t._getAriaLabelledby())("aria-describedby",t._ariaDescribedBy)("data-mat-calendar",t.rangePicker?t.rangePicker.id:null),I("mat-date-range-input-hide-placeholders",t._shouldHidePlaceholders())("mat-date-range-input-required",t.required))},inputs:{rangePicker:"rangePicker",required:[2,"required","required",L],dateFilter:"dateFilter",min:"min",max:"max",disabled:[2,"disabled","disabled",L],separator:"separator",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd"},exportAs:["matDateRangeInput"],features:[K([{provide:ta,useExisting:i}]),H],ngContentSelectors:dn,decls:11,vars:5,consts:[["cdkMonitorSubtreeFocus","",1,"mat-date-range-input-container",3,"cdkFocusChange"],[1,"mat-date-range-input-wrapper"],["aria-hidden","true",1,"mat-date-range-input-mirror"],[1,"mat-date-range-input-separator"],[1,"mat-date-range-input-wrapper","mat-date-range-input-end-wrapper"]],template:function(a,t){a&1&&(Fe(on),l(0,"div",0),C("cdkFocusChange",function(r){return t._updateFocus(r)}),l(1,"div",1),ge(2),l(3,"span",2),m(4),c()(),l(5,"span",3),m(6),c(),l(7,"div",4),ge(8,1),l(9,"span",2),m(10),c()()()),a&2&&(d(4),P(t._getInputMirrorValue("start")),d(),I("mat-date-range-input-separator-hidden",t._shouldHideSeparator()),d(),P(t.separator),d(4),P(t._getInputMirrorValue("end")))},dependencies:[ht],styles:[`.mat-date-range-input {
  display: block;
  width: 100%;
}

.mat-date-range-input-container {
  display: flex;
  align-items: center;
}

.mat-date-range-input-separator {
  transition: opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0 4px;
  color: var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface));
}
.mat-form-field-disabled .mat-date-range-input-separator {
  color: var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
._mat-animation-noopable .mat-date-range-input-separator {
  transition: none;
}

.mat-date-range-input-separator-hidden {
  -webkit-user-select: none;
  user-select: none;
  opacity: 0;
  transition: none;
}

.mat-date-range-input-wrapper {
  position: relative;
  overflow: hidden;
  max-width: calc(50% - 4px);
}

.mat-date-range-input-end-wrapper {
  flex-grow: 1;
}

.mat-date-range-input-inner {
  position: absolute;
  top: 0;
  left: 0;
  font: inherit;
  background: transparent;
  color: currentColor;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  text-align: inherit;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
}
.mat-date-range-input-inner:-moz-ui-invalid {
  box-shadow: none;
}
.mat-date-range-input-inner::placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-moz-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-webkit-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner:-ms-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner[disabled] {
  color: var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
    opacity: 0;
  }
}
._mat-animation-noopable .mat-date-range-input-inner::placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder {
  transition: none;
}

.mat-date-range-input-mirror {
  -webkit-user-select: none;
  user-select: none;
  visibility: hidden;
  white-space: nowrap;
  display: inline-block;
  min-width: 2px;
}

.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix {
  width: 200px;
}
`],encapsulation:2})}return i})();function yn(i){return Et(i,!0)}function Ma(i){return i.nodeType===Node.ELEMENT_NODE}function Cn(i){return i.nodeName==="INPUT"}function wn(i){return i.nodeName==="TEXTAREA"}function Et(i,o){if(Ma(i)&&o){let a=(i.getAttribute?.("aria-labelledby")?.split(/\s+/g)||[]).reduce((t,n)=>{let r=document.getElementById(n);return r&&t.push(r),t},[]);if(a.length)return a.map(t=>Et(t,!1)).join(" ")}if(Ma(i)){let e=i.getAttribute("aria-label")?.trim();if(e)return e}if(Cn(i)||wn(i)){if(i.labels?.length)return Array.from(i.labels).map(t=>Et(t,!1)).join(" ");let e=i.getAttribute("placeholder")?.trim();if(e)return e;let a=i.getAttribute("title")?.trim();if(a)return a}return(i.textContent||"").replace(/\s+/g," ").trim()}var Oa=(()=>{class i extends Ta{_rangeInput=s(Rt);_elementRef=s(j);_defaultErrorStateMatcher=s(ia);_injector=s(ce);_rawValue=h("");_parentForm=s(Ut,{optional:!0});_parentFormGroup=s($t,{optional:!0});ngControl;_dir=s(Z,{optional:!0});_errorStateTracker;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super(),this._errorStateTracker=new ra(this._defaultErrorStateMatcher,null,this._parentFormGroup,this._parentForm,this.stateChanges)}ngOnInit(){let e=this._injector.get(Gt,null,{optional:!0,self:!0});this._errorStateTracker.formField=this._injector.get(aa,null,{optional:!0,self:!0}),e&&(this.ngControl=e,this._errorStateTracker.ngControl=e)}ngAfterContentInit(){this._register()}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._rawValue.set(this._elementRef.nativeElement.value)}isEmpty(){return this._rawValue().length===0}_getPlaceholder(){return this._elementRef.nativeElement.placeholder}focus(){this._elementRef.nativeElement.focus()}getMirrorValue(){let e=this._rawValue();return e.length>0?e:this._getPlaceholder()}updateErrorState(){this._errorStateTracker.updateErrorState()}_onInput(e){super._onInput(e),this._rangeInput._handleChildValueChange()}_openPopup(){this._rangeInput._openDatepicker()}_getMinDate(){return this._rangeInput.min}_getMaxDate(){return this._rangeInput.max}_getDateFilter(){return this._rangeInput.dateFilter}_parentDisabled(){return this._rangeInput._groupDisabled}_shouldHandleChangeEvent({source:e}){return e!==this._rangeInput._startInput&&e!==this._rangeInput._endInput}_assignValueProgrammatically(e,a){super._assignValueProgrammatically(e,a),(this===this._rangeInput._startInput?this._rangeInput._endInput:this._rangeInput._startInput)?._validatorOnChange(),this._rawValue.set(this._elementRef.nativeElement.value)}_formatValue(e){super._formatValue(e),this._rangeInput._handleChildValueChange()}_getAccessibleName(){return yn(this._elementRef.nativeElement)}static \u0275fac=function(a){return new(a||i)};static \u0275dir=z({type:i,inputs:{errorStateMatcher:"errorStateMatcher"},features:[q]})}return i})(),Na=(()=>{class i extends Oa{_startValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._model?this._model.selection.end:null;return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matStartDateInvalid:{end:t,actual:a}}};_validator=be.compose([...super._getValidators(),this._startValidator]);_register(){this._rangeInput._startInput=this}_getValueFromModel(e){return e.start}_shouldHandleChangeEvent(e){return super._shouldHandleChangeEvent(e)?e.oldValue?.start?!e.selection.start||!!this._dateAdapter.compareDate(e.oldValue.start,e.selection.start):!!e.selection.start:!1}_assignValueToModel(e){if(this._model){let a=new f(e,this._model.selection.end);this._model.updateSelection(a,this),this._rangeInput._handleChildValueChange()}}_onKeydown(e){let a=this._rangeInput._endInput,t=this._elementRef.nativeElement,n=this._dir?.value!=="rtl";(e.keyCode===39&&n||e.keyCode===37&&!n)&&t.selectionStart===t.value.length&&t.selectionEnd===t.value.length?(e.preventDefault(),a._elementRef.nativeElement.setSelectionRange(0,0),a.focus()):super._onKeydown(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=pe(i)))(t||i)}})();static \u0275dir=z({type:i,selectors:[["input","matStartDate",""]],hostAttrs:["type","text",1,"mat-start-date","mat-date-range-input-inner"],hostVars:5,hostBindings:function(a,t){a&1&&C("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("keydown",function(r){return t._onKeydown(r)})("blur",function(){return t._onBlur()}),a&2&&(T("disabled",t.disabled),k("aria-haspopup",t._rangeInput.rangePicker?"dialog":null)("aria-owns",t._rangeInput._ariaOwns()||null)("min",t._getMinDate()?t._dateAdapter.toIso8601(t._getMinDate()):null)("max",t._getMaxDate()?t._dateAdapter.toIso8601(t._getMaxDate()):null))},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[K([{provide:Ne,useExisting:i,multi:!0},{provide:Le,useExisting:i,multi:!0}]),q]})}return i})(),Ya=(()=>{class i extends Oa{_endValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._model?this._model.selection.start:null;return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matEndDateInvalid:{start:t,actual:a}}};_register(){this._rangeInput._endInput=this}_validator=be.compose([...super._getValidators(),this._endValidator]);_getValueFromModel(e){return e.end}_shouldHandleChangeEvent(e){return super._shouldHandleChangeEvent(e)?e.oldValue?.end?!e.selection.end||!!this._dateAdapter.compareDate(e.oldValue.end,e.selection.end):!!e.selection.end:!1}_assignValueToModel(e){if(this._model){let a=new f(this._model.selection.start,e);this._model.updateSelection(a,this)}}_moveCaretToEndOfStartInput(){let e=this._rangeInput._startInput._elementRef.nativeElement,a=e.value;a.length>0&&e.setSelectionRange(a.length,a.length),e.focus()}_onKeydown(e){let a=this._elementRef.nativeElement,t=this._dir?.value!=="rtl";e.keyCode===8&&!a.value?this._moveCaretToEndOfStartInput():(e.keyCode===37&&t||e.keyCode===39&&!t)&&a.selectionStart===0&&a.selectionEnd===0?(e.preventDefault(),this._moveCaretToEndOfStartInput()):super._onKeydown(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=pe(i)))(t||i)}})();static \u0275dir=z({type:i,selectors:[["input","matEndDate",""]],hostAttrs:["type","text",1,"mat-end-date","mat-date-range-input-inner"],hostVars:5,hostBindings:function(a,t){a&1&&C("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("keydown",function(r){return t._onKeydown(r)})("blur",function(){return t._onBlur()}),a&2&&(T("disabled",t.disabled),k("aria-haspopup",t._rangeInput.rangePicker?"dialog":null)("aria-owns",t._rangeInput._ariaOwns()||null)("min",t._getMinDate()?t._dateAdapter.toIso8601(t._getMinDate()):null)("max",t._getMaxDate()?t._dateAdapter.toIso8601(t._getMaxDate()):null))},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[K([{provide:Ne,useExisting:i,multi:!0},{provide:Le,useExisting:i,multi:!0}]),q]})}return i})(),La=(()=>{class i extends Ze{_forwardContentValues(e){super._forwardContentValues(e);let a=this.datepickerInput;a&&(e.comparisonStart=a.comparisonStart,e.comparisonEnd=a.comparisonEnd,e.startDateAccessibleName=a._getStartDateAccessibleName(),e.endDateAccessibleName=a._getEndDateAccessibleName())}static \u0275fac=(()=>{let e;return function(t){return(e||(e=pe(i)))(t||i)}})();static \u0275cmp=v({type:i,selectors:[["mat-date-range-picker"]],exportAs:["matDateRangePicker"],features:[K([mn,{provide:Xe,useFactory:()=>s(Xe,{optional:!0,skipSelf:!0})||new hn(s(w))},{provide:Ze,useExisting:i}]),q],decls:0,vars:0,template:function(a,t){},encapsulation:2})}return i})();var at=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=Ht({type:i});static \u0275inj=Ot({providers:[se],imports:[ba,ga,Jt,da,Fa,ke,Ia,qt,oa]})}return i})();var nt=class i{selectedDate=null;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["rui-material-datepicker-basic"]],decls:14,vars:3,consts:[["picker",""],["id","datepicker-basic",1,"mb-8"],["id","datepicker-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["appearance","outline",1,"w-full","max-w-xs"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matIconSuffix","",3,"for"],["html",`<mat-form-field appearance="outline" class="w-full max-w-xs">
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker" [(ngModel)]="selectedDate" />
  <mat-datepicker-toggle matIconSuffix [for]="picker" />
  <mat-datepicker #picker />
</mat-form-field>`,"ts",`import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

// In component imports:
imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],`]],template:function(e,a){if(e&1){let t=R();l(0,"section",1)(1,"h2",2),m(2,"Basic Datepicker"),c(),l(3,"p",3),m(4,"Single date selection with a toggle button."),c(),l(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),m(8,"Choose a date"),c(),l(9,"input",6),Y("ngModelChange",function(r){return b(t),N(a.selectedDate,r)||(a.selectedDate=r),D(r)}),c(),ue(),y(10,"mat-datepicker-toggle",7)(11,"mat-datepicker",null,0),c()(),y(13,"rui-showcase-code",8),c()}if(e&2){let t=Re(12);d(9),_("matDatepicker",t),O("ngModel",a.selectedDate),me(),d(),_("for",t)}},dependencies:[ze,Ye,Be,He,at,Ra,tt,ke,qe,je,Ke,We,Qe,sa,Ue,Ge],encapsulation:2})};var it=class i{startDate=null;endDate=null;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["rui-material-datepicker-range"]],decls:16,vars:4,consts:[["rangePicker",""],["id","datepicker-range",1,"mb-8"],["id","datepicker-range",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["appearance","outline",1,"w-full","max-w-xs"],[3,"rangePicker"],["matStartDate","","placeholder","Start date",3,"ngModelChange","ngModel"],["matEndDate","","placeholder","End date",3,"ngModelChange","ngModel"],["matIconSuffix","",3,"for"],["html",`<mat-form-field appearance="outline" class="w-full max-w-xs">
  <mat-label>Date range</mat-label>
  <mat-date-range-input [rangePicker]="rangePicker">
    <input matStartDate [(ngModel)]="startDate" placeholder="Start date" />
    <input matEndDate [(ngModel)]="endDate" placeholder="End date" />
  </mat-date-range-input>
  <mat-datepicker-toggle matIconSuffix [for]="rangePicker" />
  <mat-date-range-picker #rangePicker />
</mat-form-field>`,"ts",`import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

// In component imports:
imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],`]],template:function(e,a){if(e&1){let t=R();l(0,"section",1)(1,"h2",2),m(2,"Date Range Picker"),c(),l(3,"p",3),m(4,"Select a start and end date with mat-date-range-picker."),c(),l(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),m(8,"Date range"),c(),l(9,"mat-date-range-input",6)(10,"input",7),Y("ngModelChange",function(r){return b(t),N(a.startDate,r)||(a.startDate=r),D(r)}),c(),ue(),l(11,"input",8),Y("ngModelChange",function(r){return b(t),N(a.endDate,r)||(a.endDate=r),D(r)}),c(),ue(),c(),y(12,"mat-datepicker-toggle",9)(13,"mat-date-range-picker",null,0),c()(),y(15,"rui-showcase-code",10),c()}if(e&2){let t=Re(14);d(9),_("rangePicker",t),d(),O("ngModel",a.startDate),me(),d(),O("ngModel",a.endDate),me(),d(),_("for",t)}},dependencies:[ze,Ye,Be,He,at,ke,Rt,Na,Ya,La,qe,je,Ke,We,Qe,Ue,Ge],encapsulation:2})};var za=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["rui-material-datepicker"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(e,a){e&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"Datepicker"),c(),l(4,"p",3),m(5,"mat-datepicker for single date and range selection."),c()(),y(6,"rui-material-datepicker-basic")(7,"rui-material-datepicker-range"),c())},dependencies:[nt,it],encapsulation:2})};export{za as MaterialDatepicker};
