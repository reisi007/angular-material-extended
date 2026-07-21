import{a as Ae,b as Ne,c as Fe,d as Ue,e as Pe,f as Ve,g as $e,h as Oe,i as Le,j as ze,k as We,l as je,m as Be,n as W,o as He,p as Qe}from"./chunk-2ESF74Y7.js";import{a as Ge,b as Ke,c as Xe,d as Ze}from"./chunk-QV23FJVA.js";import{a as j,b as B}from"./chunk-2ZRY66ZH.js";import"./chunk-GJTHMFQN.js";import{a as Ye,b as H}from"./chunk-RJ6KZUGB.js";import{a as qe,b as Je}from"./chunk-JAACJFM6.js";import"./chunk-QSZHYC6H.js";import{a as et,b as tt}from"./chunk-2RCIUV4V.js";import{b as $,c as M}from"./chunk-XT355LQ6.js";import"./chunk-2HNBJR46.js";import"./chunk-45R6WZGA.js";import"./chunk-HMATP3KQ.js";import"./chunk-3AAYRBXX.js";import"./chunk-5ETSWK6G.js";import"./chunk-ZC4H5EHS.js";import"./chunk-7LJ5SCFJ.js";import{b as Me,c as z}from"./chunk-KHMA3PY5.js";import{a as L}from"./chunk-PFXLYJGD.js";import{a as we,e as Ee}from"./chunk-RQ6LY3TZ.js";import"./chunk-NKP4UQB5.js";import{e as ke}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import{s as O}from"./chunk-ROGFBH7V.js";import{a as xe,b as Te,c as ve,f as Se,j as Re}from"./chunk-7SAILWZ5.js";import"./chunk-E7N562OR.js";import{ja as Ie}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import{h as Ce,i as he,j as De}from"./chunk-MJUAA4UW.js";import{$b as U,Ac as le,Bc as fe,Ec as S,Fb as C,Fc as re,Ga as K,Hc as me,Ic as de,Jc as be,Kb as X,Lb as F,Mb as f,Nb as b,Nc as se,Qb as Z,Rb as ee,Sb as m,Tb as n,Tc as R,Ub as o,Uc as u,Vb as p,Vc as ye,Zb as w,_b as E,a as N,ac as v,cc as _,ea as ue,ec as d,ga as pe,ic as _e,jb as l,jc as te,kc as ae,la as D,ma as x,oc as P,pc as V,qc as ge,tc as r,uc as y,vc as ie,xb as h,ya as T,yc as ne,zc as oe}from"./chunk-N476DBZA.js";var ce=new ue("RUI_DATA_TABLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>Q}),Q={pageSize:10,pageSizeOptions:[5,10,25,50],sortable:!0,filterable:!1,selectable:!1,stickyHeader:!0};function ot(t,i){if(t&1){let e=v();n(0,"mat-form-field",0)(1,"mat-label"),r(2,"Filter"),o(),n(3,"input",1),_("input",function(s){D(e);let c=d();return x(c.onInput(s.target.value))}),o()()}if(t&2){let e=d();l(3),m("value",e.filterValue())}}var q=class t{filterValue=u("");filterable=u(!1);filterChange=R();onInput(i){this.filterChange.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["rui-data-table-filter"]],hostAttrs:[1,"block"],inputs:{filterValue:[1,"filterValue"],filterable:[1,"filterable"]},outputs:{filterChange:"filterChange"},decls:1,vars:1,consts:[[1,"w-full","mb-2"],["matInput","","placeholder","Search...",3,"input","value"]],template:function(e,a){e&1&&f(0,ot,4,1,"mat-form-field",0),e&2&&b(a.filterable()?0:-1)},dependencies:[O,L,Ee,we,z,Me],encapsulation:2})};function lt(t,i){if(t&1&&(n(0,"div",0),p(1,"mat-spinner",1),o()),t&2){let e=d();l(),m("diameter",e.diameter())}}var J=class t{loading=u(!1);diameter=u(32);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["rui-data-table-loading"]],hostAttrs:[1,"block"],inputs:{loading:[1,"loading"],diameter:[1,"diameter"]},decls:1,vars:1,consts:[[1,"flex","justify-center","py-6"],[3,"diameter"]],template:function(e,a){e&1&&f(0,lt,2,1,"div",0),e&2&&b(a.loading()?0:-1)},dependencies:[H,Ye],encapsulation:2})};var Y=class t{message=u("No data available");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["rui-data-table-empty-state"]],hostAttrs:[1,"block"],inputs:{message:[1,"message"]},decls:5,vars:1,consts:[[1,"flex","flex-col","items-center","justify-center","py-8"],[1,"text-[var(--mat-sys-on-surface-variant)]","!text-5xl","mb-4"],[1,"text-[var(--mat-sys-on-surface-variant)]","m-0"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"mat-icon",1),r(2,"inbox"),o(),n(3,"p",2),r(4),o()()),e&2&&(l(4),y(a.message()))},dependencies:[M,$],encapsulation:2})};var G=class t{pageSize=u(10);pageSizeOptions=u([5,10,25,50]);pageChange=R();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["rui-data-table-paginator"]],hostAttrs:[1,"block"],inputs:{pageSize:[1,"pageSize"],pageSizeOptions:[1,"pageSizeOptions"]},outputs:{pageChange:"pageChange"},decls:1,vars:2,consts:[["showFirstLastButtons","","aria-label","Select page",3,"page","pageSize","pageSizeOptions"]],template:function(e,a){e&1&&(n(0,"mat-paginator",0),_("page",function(c){return a.pageChange.emit(c)}),o()),e&2&&m("pageSize",a.pageSize())("pageSizeOptions",a.pageSizeOptions())},dependencies:[B,j],encapsulation:2})};var at=t=>({$implicit:t}),mt=()=>["_expandedDetail"],dt=(t,i)=>i.key,st=(t,i)=>i.label;function ct(t,i){if(t&1){let e=v();n(0,"th",17)(1,"mat-checkbox",18),_("change",function(){D(e);let s=d(2);return x(s.toggleAllRows())}),o()()}if(t&2){let e=d(2);l(),m("checked",e.isAllSelected())("indeterminate",e.selectedItems().length>0&&!e.isAllSelected()),X("aria-label",e.checkboxLabel())}}function ut(t,i){if(t&1){let e=v();n(0,"td",19)(1,"mat-checkbox",20),_("click",function(s){return s.stopPropagation()})("change",function(){let s=D(e).$implicit,c=d(2);return x(c.toggleRow(s))}),o()()}if(t&2){let e=i.$implicit,a=d(2);l(),m("checked",a.selectedItems().includes(e)),X("aria-label",a.checkboxLabel(e))}}function pt(t,i){t&1&&(w(0,5),C(1,ct,2,3,"th",15)(2,ut,2,2,"td",16),E())}function _t(t,i){t&1&&p(0,"th",17)}function gt(t,i){if(t&1){let e=v();n(0,"td",19)(1,"button",21),_("click",function(s){let c=D(e).$implicit;return d(2).toggleRowExpansion(c),x(s.stopPropagation())}),n(2,"mat-icon"),r(3),o()()()}if(t&2){let e=i.$implicit,a=d(2);l(),F("aria-label",a.isRowExpanded(e)?"Collapse row":"Expand row"),l(2),y(a.isRowExpanded(e)?"expand_less":"expand_more")}}function ft(t,i){t&1&&(w(0,6),C(1,_t,1,0,"th",15)(2,gt,4,2,"td",16),E())}function bt(t,i){t&1&&U(0)}function yt(t,i){if(t&1&&C(0,bt,1,0,"ng-container",25),t&2){let e=d(2).$implicit;m("ngTemplateOutlet",e.headerTemplate)}}function Ct(t,i){if(t&1&&r(0),t&2){let e=d(2).$implicit;ie(" ",e.header," ")}}function ht(t,i){if(t&1&&(n(0,"th",24),f(1,yt,1,1,"ng-container")(2,Ct,1,1),o()),t&2){let e=d().$implicit;V("min-width",e.width||"auto"),m("mat-sort-header",fe(e.sortable!==!1?e.key:"")),l(),b(e.headerTemplate?1:2)}}function Dt(t,i){t&1&&U(0)}function xt(t,i){if(t&1&&C(0,Dt,1,0,"ng-container",27),t&2){let e=d().$implicit,a=d().$implicit;m("ngTemplateOutlet",a.cellTemplate)("ngTemplateOutletContext",re(2,at,e))}}function Tt(t,i){if(t&1&&r(0),t&2){let e=d().$implicit,a=d().$implicit;ie(" ",a.cell?a.cell(e):e[a.key]," ")}}function vt(t,i){if(t&1&&(n(0,"td",26),f(1,xt,1,4,"ng-container")(2,Tt,1,1),o()),t&2){let e=d().$implicit;V("min-width",e.width||"auto"),l(),b(e.cellTemplate?1:2)}}function St(t,i){if(t&1&&(w(0,7),C(1,ht,3,5,"th",22)(2,vt,3,3,"td",23),E()),t&2){let e=i.$implicit;m("matColumnDef",e.key)("sticky",e.sticky||!1)}}function Rt(t,i){t&1&&p(0,"th",30)}function wt(t,i){t&1&&p(0,"mat-divider")}function Et(t,i){if(t&1&&(n(0,"mat-icon"),r(1),o()),t&2){let e=d(2).$implicit;l(),y(e.icon)}}function Mt(t,i){if(t&1){let e=v();n(0,"button",34),_("click",function(){D(e);let s=d().$implicit,c=d().$implicit;return x(s.action(c))}),f(1,Et,2,1,"mat-icon"),n(2,"span"),r(3),o()()}if(t&2){let e=d().$implicit,a=d().$implicit;m("disabled",e.disabled?.(a)),l(),b(e.icon?1:-1),l(2),y(e.label)}}function It(t,i){if(t&1&&f(0,wt,1,0,"mat-divider")(1,Mt,4,3,"button",33),t&2){let e=i.$implicit;b(e.divider?0:1)}}function kt(t,i){if(t&1&&(n(0,"td",31)(1,"button",32),_("click",function(a){return a.stopPropagation()}),n(2,"mat-icon"),r(3,"more_vert"),o()(),n(4,"mat-menu",null,0),Z(6,It,2,1,null,null,st),o()()),t&2){let e=P(5),a=d(2);l(),m("matMenuTriggerFor",e),l(5),ee(a.actions())}}function At(t,i){t&1&&(w(0,8),C(1,Rt,1,0,"th",28)(2,kt,8,1,"td",29),E())}function Nt(t,i){t&1&&U(0)}function Ft(t,i){if(t&1&&(n(0,"div",36),C(1,Nt,1,0,"ng-container",27),o()),t&2){let e=d().$implicit,a=d(2);l(),m("ngTemplateOutlet",a.expandedRowTemplate())("ngTemplateOutletContext",re(2,at,e))}}function Ut(t,i){if(t&1&&(n(0,"td",26),f(1,Ft,2,4,"div",36),o()),t&2){let e=i.$implicit,a=d(2);F("colspan",a.displayedColumns().length),l(),b(a.isRowExpanded(e)?1:-1)}}function Pt(t,i){t&1&&(w(0,9),C(1,Ut,2,2,"td",35),E())}function Vt(t,i){t&1&&p(0,"tr",37)}function $t(t,i){if(t&1){let e=v();n(0,"tr",38),_("click",function(){let s=D(e).$implicit,c=d();return x(c.expandedRowTemplate()?c.toggleRowExpansion(s):void 0)}),o()}if(t&2){let e=d();ge("cursor-pointer",!!e.expandedRowTemplate())}}function Ot(t,i){if(t&1&&p(0,"tr",40),t&2){let e=i.$implicit,a=d(2);V("display",a.isRowExpanded(e)?"":"none")}}function Lt(t,i){t&1&&C(0,Ot,1,2,"tr",39),t&2&&m("matRowDefColumns",S(1,mt))}function zt(t,i){if(t&1&&(n(0,"tr",40)(1,"td"),p(2,"rui-data-table-empty-state",41),o()()),t&2){let e=d();l(),F("colspan",e.displayedColumns().length),l(),m("message",e.emptyMessage())}}var A=class t{data=u([]);columns=u([]);config=u({});loading=u(!1);emptyMessage=u("No data available");actions=u([]);expandedRowTemplate=u(void 0);sortChange=R();selectionChange=R();pageChange=R();selectedItems=ye([]);dataSource=new Be([]);displayedColumns=T([]);filterValue=T("");expandedRows=T(new Set);matSort;matPaginator;_defaults=pe(ce,{optional:!0});mergedConfig=se(()=>{let i=this._defaults??{};return N(N(N({},Q),i),this.config())});hasActions=se(()=>this.actions().length>0);constructor(){K(()=>{this.dataSource.data=this.data()}),K(()=>{let i=this.columns(),e=this.mergedConfig().selectable,a=this.expandedRowTemplate(),s=i.map(g=>g.key),c=[];e&&c.push("_select"),a&&c.push("_expand"),c.push(...s),this.hasActions()&&c.push("_actions"),this.displayedColumns.set(c)})}ngAfterViewInit(){this.dataSource.sort=this.matSort,this.dataSource.paginator=this.matPaginator}onSortChange(i){this.sortChange.emit({key:i.active,direction:i.direction})}onFilterInput(i){this.filterValue.set(i),this.dataSource.filter=i.trim().toLowerCase()}isAllSelected(){let i=this.dataSource.data;return i.length>0&&i.every(e=>this.selectedItems().includes(e))}toggleAllRows(){this.isAllSelected()?this.selectedItems.set([]):this.selectedItems.set([...this.dataSource.data]),this.emitSelection()}toggleRow(i){let e=[...this.selectedItems()],a=e.indexOf(i);a>=0?e.splice(a,1):e.push(i),this.selectedItems.set(e),this.emitSelection()}checkboxLabel(i){return i?`${this.selectedItems().includes(i)?"deselect":"select"} row`:`${this.isAllSelected()?"deselect":"select"} all`}toggleRowExpansion(i){this.expandedRows.update(e=>{let a=new Set(e);return a.has(i)?a.delete(i):a.add(i),a})}isRowExpanded(i){return this.expandedRows().has(i)}emitSelection(){this.selectionChange.emit({selected:this.selectedItems(),allSelected:this.isAllSelected()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["rui-data-table"]],viewQuery:function(e,a){if(e&1&&_e(W,5)(j,5),e&2){let s;te(s=ae())&&(a.matSort=s.first),te(s=ae())&&(a.matPaginator=s.first)}},hostAttrs:[1,"block"],inputs:{data:[1,"data"],columns:[1,"columns"],config:[1,"config"],loading:[1,"loading"],emptyMessage:[1,"emptyMessage"],actions:[1,"actions"],expandedRowTemplate:[1,"expandedRowTemplate"],selectedItems:[1,"selectedItems"]},outputs:{sortChange:"sortChange",selectionChange:"selectionChange",pageChange:"pageChange",selectedItems:"selectedItemsChange"},decls:16,vars:14,consts:[["rowMenu","matMenu"],[3,"filterChange","filterValue","filterable"],[3,"loading"],[1,"overflow-x-auto"],["mat-table","","matSort","",1,"w-full",3,"matSortChange","dataSource","multiTemplateDataRows"],["matColumnDef","_select"],["matColumnDef","_expand"],[3,"matColumnDef","sticky"],["matColumnDef","_actions"],["matColumnDef","_expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"cursor-pointer","click",4,"matRowDef","matRowDefColumns"],["mat-row","",3,"display"],["mat-row","",4,"matNoDataRow"],[3,"pageChange","pageSize","pageSizeOptions"],["mat-header-cell","","class","w-[48px]",4,"matHeaderCellDef"],["mat-cell","","class","w-[48px]",4,"matCellDef"],["mat-header-cell","",1,"w-[48px]"],[3,"change","checked","indeterminate","aria-label"],["mat-cell","",1,"w-[48px]"],[3,"click","change","checked","aria-label"],["mat-icon-button","",3,"click"],["mat-header-cell","",3,"mat-sort-header","min-width",4,"matHeaderCellDef"],["mat-cell","",3,"min-width",4,"matCellDef"],["mat-header-cell","",3,"mat-sort-header"],[4,"ngTemplateOutlet"],["mat-cell",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-header-cell","","class","w-[56px]",4,"matHeaderCellDef"],["mat-cell","","class","w-[56px]",4,"matCellDef"],["mat-header-cell","",1,"w-[56px]"],["mat-cell","",1,"w-[56px]"],["mat-icon-button","","aria-label","Row actions",3,"click","matMenuTriggerFor"],["mat-menu-item","",3,"disabled"],["mat-menu-item","",3,"click","disabled"],["mat-cell","",4,"matCellDef"],[1,"p-4"],["mat-header-row",""],["mat-row","",3,"click"],["mat-row","",3,"display",4,"matRowDef","matRowDefColumns"],["mat-row",""],[3,"message"]],template:function(e,a){e&1&&(n(0,"div")(1,"rui-data-table-filter",1),_("filterChange",function(c){return a.onFilterInput(c)}),o(),p(2,"rui-data-table-loading",2),n(3,"div",3)(4,"table",4),_("matSortChange",function(c){return a.onSortChange(c)}),f(5,pt,3,0,"ng-container",5),f(6,ft,3,0,"ng-container",6),Z(7,St,3,2,"ng-container",7,dt),f(9,At,3,0,"ng-container",8),f(10,Pt,2,0,"ng-container",9),C(11,Vt,1,0,"tr",10)(12,$t,1,2,"tr",11),f(13,Lt,1,2,"tr",12),C(14,zt,3,2,"tr",13),o()(),n(15,"rui-data-table-paginator",14),_("pageChange",function(c){return a.pageChange.emit(c)}),o()()),e&2&&(l(),m("filterValue",a.filterValue())("filterable",a.mergedConfig().filterable),l(),m("loading",a.loading()),l(2),m("dataSource",a.dataSource)("multiTemplateDataRows",!!a.expandedRowTemplate()),l(),b(a.mergedConfig().selectable?5:-1),l(),b(a.expandedRowTemplate()?6:-1),l(),ee(a.columns()),l(2),b(a.hasActions()?9:-1),l(),b(a.expandedRowTemplate()?10:-1),l(),m("matHeaderRowDef",a.displayedColumns()),l(),m("matRowDefColumns",a.displayedColumns()),l(),b(a.expandedRowTemplate()?13:-1),l(2),m("pageSize",a.mergedConfig().pageSize)("pageSizeOptions",a.mergedConfig().pageSizeOptions))},dependencies:[De,Ce,O,je,Ae,Fe,$e,Ue,Ne,Oe,Pe,Ve,Le,ze,We,Qe,W,He,B,Je,qe,L,z,H,M,$,Ze,Ke,Ge,Xe,tt,et,q,J,Y,G],encapsulation:2})};var Wt=()=>({selectable:!0,sortable:!1}),jt=()=>({selectable:!0,sortable:!0}),Bt=()=>({filterable:!0}),it=()=>({sortable:!0});function Ht(t,i){if(t&1&&(n(0,"div",21)(1,"div")(2,"span",22),r(3,"Department:"),o(),n(4,"span",23),r(5),o()(),n(6,"div")(7,"span",22),r(8,"Joined:"),o(),n(9,"span",23),r(10),o()(),n(11,"div")(12,"span",22),r(13,"Phone:"),o(),n(14,"span",23),r(15),o()(),n(16,"div")(17,"span",22),r(18,"Email:"),o(),n(19,"span",23),r(20),o()(),n(21,"div")(22,"span",22),r(23,"Role:"),o(),n(24,"span",23),r(25),o()(),n(26,"div")(27,"span",22),r(28,"Active:"),o(),n(29,"span",23),r(30),o()()()),t&2){let e=i.$implicit;l(5),y(e.department),l(5),y(e.joined),l(5),y(e.phone),l(5),y(e.email),l(5),y(e.role),l(5),y(e.active?"Yes":"No")}}var nt=class t{selectedItemsNoSort=T([]);selectedItemsWithSort=T([]);users=T([{id:1,name:"Alice",email:"alice@example.com",role:"Admin",active:!0},{id:2,name:"Bob",email:"bob@example.com",role:"User",active:!0},{id:3,name:"Charlie",email:"charlie@example.com",role:"Editor",active:!1},{id:4,name:"Diana",email:"diana@example.com",role:"User",active:!0},{id:5,name:"Eve",email:"eve@example.com",role:"Viewer",active:!1},{id:6,name:"Frank",email:"frank@example.com",role:"Admin",active:!0},{id:7,name:"Grace",email:"grace@example.com",role:"Editor",active:!0},{id:8,name:"Heidi",email:"heidi@example.com",role:"User",active:!1},{id:9,name:"Ivan",email:"ivan@example.com",role:"Viewer",active:!0},{id:10,name:"Judy",email:"judy@example.com",role:"Admin",active:!0},{id:11,name:"Karl",email:"karl@example.com",role:"User",active:!0},{id:12,name:"Linda",email:"linda@example.com",role:"Editor",active:!1}]);usersWithDetails=T([{id:1,name:"Alice",email:"alice@example.com",role:"Admin",active:!0,department:"Engineering",joined:"2023-01-15",phone:"+1-555-0101"},{id:2,name:"Bob",email:"bob@example.com",role:"User",active:!0,department:"Marketing",joined:"2023-03-22",phone:"+1-555-0102"},{id:3,name:"Charlie",email:"charlie@example.com",role:"Editor",active:!1,department:"Design",joined:"2022-11-08",phone:"+1-555-0103"},{id:4,name:"Diana",email:"diana@example.com",role:"User",active:!0,department:"Engineering",joined:"2024-02-01",phone:"+1-555-0104"},{id:5,name:"Eve",email:"eve@example.com",role:"Viewer",active:!1,department:"HR",joined:"2023-06-14",phone:"+1-555-0105"},{id:6,name:"Frank",email:"frank@example.com",role:"Admin",active:!0,department:"Engineering",joined:"2022-09-30",phone:"+1-555-0106"}]);columns=[{key:"id",header:"ID",sortable:!0,width:"60px"},{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0,filterable:!0},{key:"active",header:"Active",sortable:!0,cell:i=>i.active?"Yes":"No"}];rowActions=T([{label:"Edit",icon:"edit",action:i=>alert(`Edit user ${i.name}`)},{label:"Delete",icon:"delete",action:i=>alert(`Delete user ${i.name}`),disabled:i=>i.role==="Admin"},{divider:!0,label:"",action:()=>{}},{label:"Duplicate",icon:"content_copy",action:i=>alert(`Duplicate user ${i.name}`)}]);selectNoSortCode=`<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true, sortable: false }"
  [(selectedItems)]="selectedItems"
/>`;selectNoSortTs=`import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
  ];
  selectedItems = signal<User[]>([]);
}`;selectSortCode=`<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true, sortable: true }"
  (sortChange)="onSortChange($event)"
  [(selectedItems)]="selectedItems"
/>`;selectSortTs=`import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataSortEvent } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
  ];
  selectedItems = signal<User[]>([]);

  onSortChange(event: RuiDataSortEvent): void {
    console.log('Sort changed:', event);
  }
}`;filterCode=`<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ filterable: true }"
/>`;filterTs=`import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', filterable: true },
  ];
}`;actionsCode=`<rui-data-table
  [data]="users"
  [columns]="columns"
  [actions]="rowActions"
  [config]="{ sortable: true }"
/>`;actionsTs=`import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataAction } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
  ];
  rowActions = signal<RuiDataAction<User>[]>([
    { label: 'Edit', icon: 'edit', action: (row) => console.log(row) },
  ]);
}`;expandableCode=`<ng-template #expandedRow let-user>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    <div>Department: {{ user.department }}</div>
    ...
  </div>
</ng-template>

<rui-data-table
  [data]="usersWithDetails"
  [columns]="columns"
  [expandedRowTemplate]="expandedRow"
  [config]="{ sortable: true }"
/>`;expandableTs=`import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  usersWithDetails = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
  ];
}`;htmlCode=`<rui-data-table
  [data]="users"
  [columns]="columns"
  [actions]="rowActions"
  [expandedRowTemplate]="expandedRow"
  [config]="{ sortable: true, selectable: true, filterable: true }"
  (sortChange)="onSortChange($event)"
  (selectionChange)="onSelectionChange($event)"
  [(selectedItems)]="selectedItems"
/>`;tsCode=`import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataAction, RuiDataSortEvent, RuiDataSelectionEvent } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', filterable: true },
  ];
  rowActions = signal<RuiDataAction<User>[]>([
    { label: 'Edit', icon: 'edit', action: (row) => console.log(row) },
  ]);
  selectedItems = signal<User[]>([]);

  onSortChange(_event: RuiDataSortEvent): void {}
  onSelectionChange(_event: RuiDataSelectionEvent<User>): void {}
}`;onSortChange(i){}onSelectionChange(i){}onSelectionChangeSort(i){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["rui-data-table-demo"]],decls:77,vars:42,consts:[["expandedRow",""],[1,"p-4","md:p-6","space-y-6"],[1,"font-bold"],["id","data-table-select-no-sort",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"space-y-4"],[3,"selectionChange","selectedItemsChange","data","columns","config","selectedItems"],[3,"html","ts"],["id","data-table-select-sort",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[3,"selectionChange","sortChange","selectedItemsChange","data","columns","config","selectedItems"],["id","data-table-filter",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[3,"data","columns","config"],["id","data-table-selection",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","font-medium","text-[var(--mat-sys-on-surface)]"],[1,"bg-[var(--mat-sys-surface-container-high)]","p-3","rounded","text-xs","overflow-auto","max-h-40"],["id","data-table-actions",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[3,"data","columns","actions","config"],["id","data-table-expandable",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[3,"data","columns","expandedRowTemplate","config"],["id","data-table-usage",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"space-y-3"],["label","Usage",3,"html","ts"],[1,"grid","grid-cols-2","md:grid-cols-3","gap-3","text-sm"],[1,"font-medium","text-[var(--mat-sys-on-surface)]"],[1,"text-[var(--mat-sys-on-surface-variant)]"]],template:function(e,a){if(e&1){let s=v();n(0,"div",1)(1,"h1",2),r(2,"Data Table"),o(),n(3,"h2",3),r(4,"Multi-select without sorting"),o(),n(5,"mat-card")(6,"mat-card-header")(7,"mat-card-title"),r(8,"Multi-select without sorting"),o()(),n(9,"mat-card-content",4)(10,"rui-data-table",5),_("selectionChange",function(g){return a.onSelectionChange(g)}),le("selectedItemsChange",function(g){return D(s),oe(a.selectedItemsNoSort,g)||(a.selectedItemsNoSort=g),x(g)}),o(),p(11,"rui-showcase-code",6),o()(),n(12,"h2",7),r(13,"Multi-select with sorting"),o(),n(14,"mat-card")(15,"mat-card-header")(16,"mat-card-title"),r(17,"Multi-select with sorting"),o()(),n(18,"mat-card-content",4)(19,"rui-data-table",8),_("selectionChange",function(g){return a.onSelectionChangeSort(g)})("sortChange",function(g){return a.onSortChange(g)}),le("selectedItemsChange",function(g){return D(s),oe(a.selectedItemsWithSort,g)||(a.selectedItemsWithSort=g),x(g)}),o(),p(20,"rui-showcase-code",6),o()(),n(21,"h2",9),r(22,"Filter"),o(),n(23,"mat-card")(24,"mat-card-header")(25,"mat-card-title"),r(26,"Filter"),o()(),n(27,"mat-card-content",4),p(28,"rui-data-table",10)(29,"rui-showcase-code",6),o()(),n(30,"h2",11),r(31,"Selection output"),o(),n(32,"mat-card")(33,"mat-card-header")(34,"mat-card-title"),r(35,"Selection output"),o()(),n(36,"mat-card-content",4)(37,"div")(38,"p",12),r(39,"No sorting table:"),o(),n(40,"pre",13),r(41),me(42,"json"),o()(),n(43,"div")(44,"p",12),r(45,"With sorting table:"),o(),n(46,"pre",13),r(47),me(48,"json"),o()()()(),n(49,"h2",14),r(50,"Row Actions Menu"),o(),n(51,"mat-card")(52,"mat-card-header")(53,"mat-card-title"),r(54,"Row Actions Menu"),o()(),n(55,"mat-card-content",4),p(56,"rui-data-table",15)(57,"rui-showcase-code",6),o()(),n(58,"h2",16),r(59,"Expandable Rows"),o(),n(60,"mat-card")(61,"mat-card-header")(62,"mat-card-title"),r(63,"Expandable Rows"),o()(),n(64,"mat-card-content",4),C(65,Ht,31,6,"ng-template",null,0,be),p(67,"rui-data-table",17)(68,"rui-showcase-code",6),o()(),n(69,"h2",18),r(70,"Usage"),o(),n(71,"mat-card")(72,"mat-card-header")(73,"mat-card-title"),r(74,"Usage"),o()(),n(75,"mat-card-content",19),p(76,"rui-showcase-code",20),o()()()}if(e&2){let s=P(66);l(10),m("data",a.users())("columns",a.columns)("config",S(37,Wt)),ne("selectedItems",a.selectedItemsNoSort),l(),m("html",a.selectNoSortCode)("ts",a.selectNoSortTs),l(8),m("data",a.users())("columns",a.columns)("config",S(38,jt)),ne("selectedItems",a.selectedItemsWithSort),l(),m("html",a.selectSortCode)("ts",a.selectSortTs),l(8),m("data",a.users())("columns",a.columns)("config",S(39,Bt)),l(),m("html",a.filterCode)("ts",a.filterTs),l(12),y(de(42,33,a.selectedItemsNoSort())),l(6),y(de(48,35,a.selectedItemsWithSort())),l(9),m("data",a.users())("columns",a.columns)("actions",a.rowActions())("config",S(40,it)),l(),m("html",a.actionsCode)("ts",a.actionsTs),l(10),m("data",a.usersWithDetails())("columns",a.columns)("expandedRowTemplate",s)("config",S(41,it)),l(),m("html",a.expandableCode)("ts",a.expandableTs),l(8),m("html",a.htmlCode)("ts",a.tsCode)}},dependencies:[Re,xe,ve,Se,Te,M,ke,A,Ie,he],encapsulation:2})};export{nt as DataTableDemo};
