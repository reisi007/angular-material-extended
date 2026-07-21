import{a as T}from"./chunk-NOQ3PPWJ.js";import{g as f,ja as j}from"./chunk-45MN3S43.js";import{e as B,f as P}from"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Dc as A,Lb as _,Na as x,Tb as l,Ub as s,Vb as p,Wb as w,Xb as v,ca as D,ea as H,fc as S,ga as c,gc as b,hc as L,jc as $,kc as R,tc as o,xb as d,yb as I}from"./chunk-N476DBZA.js";var u=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new M(this.rowIndex,t)}_findMatchingGap(e){if(e>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${e} is wider than grid with cols="${this.tracker.length}".`);let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}},M=class{row;col;constructor(e,t){this.row=e,this.col=t}};var N=["*"];var Z=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,Q=new H("MAT_GRID_LIST"),E=(()=>{class n{_element=c(x);_gridList=c(Q,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(f(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(f(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,r){i&2&&_("rowspan",r.rowspan)("colspan",r.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:N,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,r){i&1&&(S(),w(0,"div",0),b(1),v())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return n})();var U=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,h=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,r){this._gutterSize=O(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=r}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":m(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let r=100/this._cols,a=(this._cols-1)/this._cols;this.setColStyles(e,i,r,a),this.setRowStyles(e,t,r,a)}setColStyles(e,t,i,r){let a=this.getBaseTileSize(i,r),g=this._direction==="rtl"?"right":"left";e._setStyle(g,this.getTilePosition(a,t)),e._setStyle("width",m(this.getTileSize(a,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},z=class extends h{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,r){super.init(e,t,i,r),this.fixedRowHeight=O(this.fixedRowHeight),U.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",m(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",m(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},C=class extends h{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,r){let a=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(a,r),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",m(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",m(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},G=class extends h{setRowStyles(e,t){let i=100/this._rowspan,r=(this._rows-1)/this._rows,a=this.getBaseTileSize(i,r);e._setStyle("top",this.getTilePosition(a,t)),e._setStyle("height",m(this.getTileSize(a,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function m(n){return`calc(${n})`}function O(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var J="fit",V=(()=>{class n{_element=c(x);_dir=c(B,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(f(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===J?this._tileStyler=new G:t&&t.indexOf(":")>-1?this._tileStyler=new C(t):this._tileStyler=new z(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new u);let t=this._tileCoordinator,i=this._tiles.filter(a=>!a._gridList||a._gridList===this),r=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,r),i.forEach((a,g)=>{let k=t.positions[g];this._tileStyler.setStyle(a,k.row,k.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["mat-grid-list"]],contentQueries:function(i,r,a){if(i&1&&L(a,E,5),i&2){let g;$(g=R())&&(r._tiles=g)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,r){i&2&&_("cols",r.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[A([{provide:Q,useExisting:n}])],ngContentSelectors:N,decls:2,vars:0,template:function(i,r){i&1&&(S(),w(0,"div"),b(1),v())},styles:[Z],encapsulation:2})}return n})(),W=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=D({imports:[T,P,T]})}return n})();var y=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["rui-material-grid-list-basic"]],decls:24,vars:0,consts:[["id","grid-list-basic",1,"mb-8"],["id","grid-list-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"mb-4","rounded-lg","border","border-amber-600/30","bg-amber-600/10","p-3","text-sm","text-amber-700","dark:text-amber-400"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["cols","3","rowHeight","100px"],[1,"bg-[var(--mat-sys-primary-container)]","text-[var(--mat-sys-on-primary-container)]","font-medium"],[1,"bg-[var(--mat-sys-secondary-container)]","text-[var(--mat-sys-on-secondary-container)]","font-medium"],[1,"bg-[var(--mat-sys-tertiary-container)]","text-[var(--mat-sys-on-tertiary-container)]","font-medium"],["html",`<mat-grid-list cols="3" rowHeight="100px">
  <mat-grid-tile>Tile 1</mat-grid-tile>
  <mat-grid-tile>Tile 2</mat-grid-tile>
  <mat-grid-tile>Tile 3</mat-grid-tile>
  <mat-grid-tile>Tile 4</mat-grid-tile>
  <mat-grid-tile>Tile 5</mat-grid-tile>
  <mat-grid-tile>Tile 6</mat-grid-tile>
</mat-grid-list>`,"ts",`import { MatGridListModule } from '@angular/material/grid-list';

// In component imports:
imports: [MatGridListModule],`]],template:function(t,i){t&1&&(l(0,"section",0)(1,"h2",1),o(2,"Basic Grid List"),s(),l(3,"div",2)(4,"strong"),o(5,"Note:"),s(),o(6," mat-grid-list is deprecated. CSS Grid is recommended instead. "),s(),l(7,"p",3),o(8,"mat-grid-list with 3 columns and 100px row height."),s(),l(9,"div",4)(10,"mat-grid-list",5)(11,"mat-grid-tile",6),o(12,"Tile 1"),s(),l(13,"mat-grid-tile",7),o(14,"Tile 2"),s(),l(15,"mat-grid-tile",8),o(16,"Tile 3"),s(),l(17,"mat-grid-tile",6),o(18,"Tile 4"),s(),l(19,"mat-grid-tile",7),o(20,"Tile 5"),s(),l(21,"mat-grid-tile",8),o(22,"Tile 6"),s()()(),p(23,"rui-showcase-code",9),s())},dependencies:[W,V,E,j],encapsulation:2})};var q=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["rui-material-grid-list"]],decls:7,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Grid List"),s(),l(4,"p",3),o(5,"mat-grid-list (deprecated \u2014 use CSS Grid instead)."),s()(),p(6,"rui-material-grid-list-basic"),s())},dependencies:[y],encapsulation:2})};export{q as MaterialGridList};
