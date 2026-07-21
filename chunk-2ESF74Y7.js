import{c as Xe}from"./chunk-ZC4H5EHS.js";import{B as $e,L as qe,M as Ke,N as re,O as Ye,P as Ge,S as Ze,T as Je,V as et,f as Ve,fa as tt,h as Qe,j as We}from"./chunk-45MN3S43.js";import{a as je,e as Ue,f as ne}from"./chunk-OZMPAIOK.js";import{$b as w,$c as me,D as K,Dc as C,Eb as m,F as Oe,Ja as V,Ka as y,Lb as he,Mb as O,Na as S,Nb as I,Qc as Le,Tb as N,Ub as A,Wb as ie,X as P,Xb as X,Yb as Be,ad as oe,ca as U,cc as ze,cd as g,ea as Y,fc as q,ga as l,gc as R,hc as fe,ib as G,j as k,jb as E,jc as M,k as L,kb as Q,kc as T,l as Me,m as Te,n as Fe,na as Ie,pa as Ne,q as j,qa as Ae,qb as Pe,qc as B,s as Ee,sb as W,ta as te,u as ee,v as F,xb as x,ya as He,yb as $,zb as u}from"./chunk-N476DBZA.js";var gt=[[["caption"]],[["colgroup"],["col"]],"*"],wt=["caption","colgroup, col","*"];function Dt(i,n){i&1&&R(0,2)}function Ct(i,n){i&1&&(N(0,"thead",0),w(1,1),A(),N(2,"tbody",0),w(3,2)(4,3),A(),N(5,"tfoot",0),w(6,4),A())}function vt(i,n){i&1&&w(0,1)(1,2)(2,3)(3,4)}var b=new Y("CDK_TABLE");var le=(()=>{class i{template=l(Q);static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),ce=(()=>{class i{template=l(Q);static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),rt=(()=>{class i{template=l(Q);static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),H=(()=>{class i{_table=l(b,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,r){if(t&1&&fe(r,le,5)(r,ce,5)(r,rt,5),t&2){let s;M(s=T())&&(o.cell=s.first),M(s=T())&&(o.headerCell=s.first),M(s=T())&&(o.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",g],stickyEnd:[2,"stickyEnd","stickyEnd",g]}})}return i})(),ae=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},st=(()=>{class i extends ae{constructor(){super(l(H),l(S))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[m]})}return i})();var at=(()=>{class i extends ae{constructor(){let e=l(H),t=l(S);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[m]})}return i})();var pe=(()=>{class i{template=l(Q);_differs=l(me);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof J?e.headerCell.template:this instanceof ye?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,features:[V]})}return i})(),J=(()=>{class i extends pe{_table=l(b,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",g]},features:[m,V]})}return i})(),ye=(()=>{class i extends pe{_table=l(b,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",g]},features:[m,V]})}return i})(),de=(()=>{class i extends pe{_table=l(b,{optional:!0});when;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[m]})}return i})(),z=(()=>{class i{_viewContainer=l(W);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),ge=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&w(0,0)},dependencies:[z],encapsulation:2,changeDetection:1})}return i})();var we=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&w(0,0)},dependencies:[z],encapsulation:2,changeDetection:1})}return i})(),ue=(()=>{class i{templateRef=l(Q);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),it=["top","bottom","left","right"],_e=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,o=!0,r,s,a){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=o,this.direction=r,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let o of n)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));G({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,o=!0,r=!0){if(!n.length||!this._isBrowser||!(e.some(v=>v)||t.some(v=>v))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],a=s.children.length,c=this.direction==="rtl",d=c?"right":"left",h=c?"left":"right",f=e.lastIndexOf(!0),_=t.indexOf(!0),p,ke,Se;r&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),G({earlyRead:()=>{p=this._getCellWidths(s,o),ke=this._getStickyStartColumnPositions(p,e),Se=this._getStickyEndColumnPositions(p,t)},write:()=>{for(let v of n)for(let D=0;D<a;D++){let xe=v.children[D];e[D]&&this._addStickyStyle(xe,d,ke[D],D===f),t[D]&&this._addStickyStyle(xe,h,Se[D],D===_)}this._positionListener&&p.some(v=>!!v)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:p.slice(0,f+1).map((v,D)=>e[D]?v:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:_===-1?[]:p.slice(_).map((v,D)=>t[D+_]?v:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let o=t==="bottom"?n.slice().reverse():n,r=t==="bottom"?e.slice().reverse():e,s=[],a=[],c=[];G({earlyRead:()=>{for(let d=0,h=0;d<o.length;d++){if(!r[d])continue;s[d]=h;let f=o[d];c[d]=this._isNativeHtmlTable?Array.from(f.children):[f];let _=this._retrieveElementSize(f).height;h+=_,a[d]=_}},write:()=>{let d=r.lastIndexOf(!0);for(let h=0;h<o.length;h++){if(!r[h])continue;let f=s[h],_=h===d;for(let p of c[h])this._addStickyStyle(p,t,f,_)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&G({write:()=>{let t=n.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let o of e)n.style[o]="",n.classList.remove(this._borderCellCss[o]);it.some(o=>e.indexOf(o)===-1&&n.style[o])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,o){n.classList.add(this._stickCellCss),o&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of it)n.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=n.children;for(let r=0;r<o.length;r++){let s=o[r];t.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],o=0;for(let r=0;r<n.length;r++)e[r]&&(t[r]=o,o+=n[r]);return t}_getStickyEndColumnPositions(n,e){let t=[],o=0;for(let r=n.length;r>0;r--)e[r]&&(t[r]=o,o+=n[r]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,o),this._resizeObserver.observe(n,{box:"border-box"})),o}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&Rt(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Rt(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>i.classList.contains(n))}var Z=new Y("STICKY_POSITIONING_LISTENER");var De=(()=>{class i{viewContainer=l(W);elementRef=l(S);constructor(){let e=l(b);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","rowOutlet",""]]})}return i})(),Ce=(()=>{class i{viewContainer=l(W);elementRef=l(S);constructor(){let e=l(b);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),ve=(()=>{class i{viewContainer=l(W);elementRef=l(S);constructor(){let e=l(b);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),Re=(()=>{class i{viewContainer=l(W);elementRef=l(S);constructor(){let e=l(b);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),be=(()=>{class i{_differs=l(me);_changeDetectorRef=l(oe);_elementRef=l(S);_dir=l(Ue,{optional:!0});_platform=l(Ve);_viewRepeater;_viewportRuler=l(Ze);_injector=l(Ne);_virtualScrollViewport=l(Je,{optional:!0,host:!0});_positionListener=l(Z,{optional:!0})||l(Z,{optional:!0,skipSelf:!0});_document=l(Ae);_data;_renderedRange;_onDestroy=new k;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new k;_footerRowStickyUpdates=new k;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new k;_dataStream=new k;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new te;viewChange=new L({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){l(new Le("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(P(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ge:new Xe,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),re(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,r,s)=>this._getEmbeddedViewArgs(o.item,s),o=>o.item.data,o=>{o.operation===Ye.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let r=t.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=ot(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=ot(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,s)=>{this._addStickyColumnStyles([r],this._headerRowDefs[s])}),this._rowDefs.forEach(r=>{let s=[];for(let a=0;a<t.length;a++)this._renderRows[a].rowDef===r&&s.push(t[a]);this._addStickyColumnStyles(s,r)}),o.forEach((r,s)=>{this._addStickyColumnStyles([r],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let s=this._data[r],a=this._getRenderRowsForData(s,r,o.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let d=a[c],h=this._cachedRenderRowsMap.get(d.data);h.has(d.rowDef)?h.get(d.rowDef).push(d):h.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(s=>{let a=o&&o.has(s)?o.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=t,c}else return{data:e,rowDef:s,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),se(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=se(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=se(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=se(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||o||r}_switchDataSource(e){this._data=[],re(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;re(this.dataSource)?e=this.dataSource.connect(this):Ee(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=j(this.dataSource)),this._renderChangeSubscription=F([e,this.viewChange]).pipe(P(this._onDestroy)).subscribe(([t,o])=>{this._data=t||[],this._renderedRange=o,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(a=>{let c=this._columnDefsByName.get(a);return c}),r=o.map(a=>a.sticky),s=o.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let r=e.viewContainer.get(o);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(s=>s.when&&s.when(t,e))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,r={$implicit:e.data};return{templateRef:o.template,context:r,index:t}}_renderRow(e,t,o,r={}){let s=e.viewContainer.createEmbeddedView(t.template,r,o);return this._renderCellTemplateForItem(t,r),s}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))z.mostRecentCellOutlet&&z.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let s=e.get(t).context;s.count=o,s.first=t===0,s.last=t===o-1,s.even=t%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[t].dataIndex,s.renderIndex=t):s.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new _e(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:j()).pipe(P(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Fe:Te;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Oe(0,t),P(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,r)=>this._measureRangeSize(o,r)}),F([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(P(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let s=0;s<r.elements.length;s++){let a=r.elements[s];if(a){let c=r.offsets[s],d=o!==0?Math.max(o-c,c):-c;for(let h of a)h.style.top=`${-d}px`}}}),F([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(P(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let s=0;s<r.elements.length;s++){let a=r.elements[s];if(a)for(let c of a)c.style.bottom=`${o+r.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let r=o.createEmbeddedView(e.templateRef),s=r.rootNodes[0];if(r.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let o=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<o.start||e.end>o.end;let s=e.start-o.start,a=e.end-e.start,c,d;for(let _=0;_<a;_++){let p=r.get(_+s);if(p&&p.rootNodes.length){c=d=p.rootNodes[0];break}}for(let _=a-1;_>-1;_--){let p=r.get(_+s);if(p&&p.rootNodes.length){d=p.rootNodes[p.rootNodes.length-1];break}}let h=c?.getBoundingClientRect?.(),f=d?.getBoundingClientRect?.();return h&&f?f.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,o,r){if(t&1&&fe(r,ue,5)(r,H,5)(r,de,5)(r,J,5)(r,ye,5),t&2){let s;M(s=T())&&(o._noDataRow=s.first),M(s=T())&&(o._contentColumnDefs=s),M(s=T())&&(o._contentRowDefs=s),M(s=T())&&(o._contentHeaderRowDefs=s),M(s=T())&&(o._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,o){t&2&&B("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",g],fixedLayout:[2,"fixedLayout","fixedLayout",g],recycleRows:[2,"recycleRows","recycleRows",g]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[C([{provide:b,useExisting:i},{provide:Z,useValue:null}])],ngContentSelectors:wt,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(q(gt),R(0),R(1,1),O(2,Dt,1,0),O(3,Ct,7,0)(4,vt,4,0)),t&2&&(E(2),I(o._isServer?2:-1),E(),I(o._isNativeHtmlTable?3:4))},dependencies:[Ce,De,Re,ve],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function se(i,n){return i.concat(Array.from(n))}function ot(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var lt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$({type:i});static \u0275inj=U({imports:[et]})}return i})();var bt=[[["caption"]],[["colgroup"],["col"]],"*"],kt=["caption","colgroup, col","*"];function St(i,n){i&1&&R(0,2)}function xt(i,n){i&1&&(N(0,"thead",0),w(1,1),A(),N(2,"tbody",2),w(3,3)(4,4),A(),N(5,"tfoot",0),w(6,5),A())}function Mt(i,n){i&1&&w(0,1)(1,3)(2,4)(3,5)}var wi=(()=>{class i extends be{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,o){t&2&&B("mat-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[C([{provide:be,useExisting:i},{provide:b,useExisting:i},{provide:Z,useValue:null}]),m],ngContentSelectors:kt,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(q(bt),R(0),R(1,1),O(2,St,1,0),O(3,xt,7,0)(4,Mt,4,0)),t&2&&(E(2),I(o._isServer?2:-1),E(),I(o._isNativeHtmlTable?3:4))},dependencies:[Ce,De,Re,ve],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return i})(),Di=(()=>{class i extends le{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","matCellDef",""]],features:[C([{provide:le,useExisting:i}]),m]})}return i})(),Ci=(()=>{class i extends ce{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","matHeaderCellDef",""]],features:[C([{provide:ce,useExisting:i}]),m]})}return i})();var vi=(()=>{class i extends H{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[C([{provide:H,useExisting:i}]),m]})}return i})(),Ri=(()=>{class i extends st{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[m]})}return i})();var bi=(()=>{class i extends at{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[m]})}return i})();var ki=(()=>{class i extends J{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",g]},features:[C([{provide:J,useExisting:i}]),m]})}return i})();var Si=(()=>{class i extends de{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275dir=u({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[C([{provide:de,useExisting:i}]),m]})}return i})(),xi=(()=>{class i extends ge{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[C([{provide:ge,useExisting:i}]),m],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&w(0,0)},dependencies:[z],encapsulation:2,changeDetection:1})}return i})();var Mi=(()=>{class i extends we{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[C([{provide:we,useExisting:i}]),m],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&w(0,0)},dependencies:[z],encapsulation:2,changeDetection:1})}return i})(),Ti=(()=>{class i extends ue{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["ng-template","matNoDataRow",""]],features:[C([{provide:ue,useExisting:i}]),m]})}return i})();var Fi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$({type:i});static \u0275inj=U({imports:[lt,ne]})}return i})(),Tt=9007199254740991,ct=class extends Ke{_data;_renderData=new L([]);_filter=new L("");_internalPageChanges=new k;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let t=n[e];if(Qe(t)){let o=Number(t);return o<Tt?o:t}return t};sortData=(n,e)=>{let t=e.active,o=e.direction;return!t||o==""?n:n.sort((r,s)=>{let a=this.sortingDataAccessor(r,t),c=this.sortingDataAccessor(s,t),d=typeof a,h=typeof c;d!==h&&(d==="number"&&(a+=""),h==="number"&&(c+=""));let f=0;return a!=null&&c!=null?a>c?f=1:a<c&&(f=-1):a!=null?f=1:c!=null&&(f=-1),f*(o=="asc"?1:-1)})};filterPredicate=(n,e)=>{let t=e.trim().toLowerCase();return Object.values(n).some(o=>`${o}`.toLowerCase().includes(t))};constructor(n=[]){super(),this._data=new L(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?K(this._sort.sortChange,this._sort.initialized):j(null),e=this._paginator?K(this._paginator.page,this._internalPageChanges,this._paginator.initialized):j(null),t=this._data,o=F([t,this._filter]).pipe(ee(([a])=>this._filterData(a))),r=F([o,n]).pipe(ee(([a])=>this._orderData(a))),s=F([r,e]).pipe(ee(([a])=>this._pageData(a)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=s.subscribe(a=>this._renderData.next(a))}_filterData(n){return this.filteredData=this.filter==null||this.filter===""?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,o=Math.min(e.pageIndex,t);o!==e.pageIndex&&(e.pageIndex=o,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Ft=["*",[["","matSortHeaderIcon",""]]],Et=["*","[matSortHeaderIcon]"];function Ot(i,n){i&1&&(Ie(),ie(0,"svg",3),Be(1,"path",4),X())}function It(i,n){i&1&&(ie(0,"div",2),R(1,1,null,Ot,2,0),X())}var dt=new Y("MAT_SORT_DEFAULT_OPTIONS"),Nt=(()=>{class i{_defaultOptions;_initializedStream=new Me(1);sortables=new Map;_stateChanges=new k;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new te;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,o=At(e.start||this.start,t),r=o.indexOf(this.direction)+1;return r>=o.length&&(r=0),o[r]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||i)(Pe(dt,8))};static \u0275dir=u({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",g],disabled:[2,"matSortDisabled","disabled",g]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[V]})}return i})();function At(i,n){let e=["asc","desc"];return i=="desc"&&e.reverse(),n||e.push(""),e}var Zi=(()=>{class i{_sort=l(Nt,{optional:!0});_columnDef=l(H,{optional:!0});_changeDetectorRef=l(oe);_focusMonitor=l(We);_elementRef=l(S);_ariaDescriber=l($e,{optional:!0});_renderChanges;_animationsDisabled=qe();_recentlyCleared=He(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){l(je).load(tt);let e=l(dt,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=K(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,o){t&1&&ze("click",function(){return o._toggleOnInteraction()})("keydown",function(s){return o._handleKeydown(s)})("mouseleave",function(){return o._recentlyCleared.set(null)}),t&2&&(he("aria-sort",o._getAriaSortAttribute()),B("mat-sort-header-disabled",o._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",g],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",g]},exportAs:["matSortHeader"],ngContentSelectors:Et,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,o){t&1&&(q(Ft),ie(0,"div",0)(1,"div",1),R(2),X(),O(3,It,3,0,"div",2),X()),t&2&&(B("mat-sort-header-sorted",o._isSorted())("mat-sort-header-position-before",o.arrowPosition==="before")("mat-sort-header-descending",o._sort.direction==="desc")("mat-sort-header-ascending",o._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",o._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",o._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",o._animationsDisabled),he("tabindex",o._isDisabled()?null:0)("role",o._isDisabled()?null:"button"),E(3),I(o._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return i})(),Ji=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$({type:i});static \u0275inj=U({imports:[ne]})}return i})();export{wi as a,Di as b,Ci as c,vi as d,Ri as e,bi as f,ki as g,Si as h,xi as i,Mi as j,Ti as k,Fi as l,ct as m,Nt as n,Zi as o,Ji as p};
