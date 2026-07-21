import{a as h,b as w,c as C,d as M,e as S,f as T,g as _,h as D,i as v,j as x,l as E,n as f,o as F,p as $}from"./chunk-2ESF74Y7.js";import{a as g,b as L}from"./chunk-2ZRY66ZH.js";import"./chunk-GJTHMFQN.js";import"./chunk-QSZHYC6H.js";import"./chunk-45R6WZGA.js";import"./chunk-HMATP3KQ.js";import"./chunk-3AAYRBXX.js";import"./chunk-5ETSWK6G.js";import"./chunk-ZC4H5EHS.js";import"./chunk-7LJ5SCFJ.js";import"./chunk-PFXLYJGD.js";import"./chunk-RQ6LY3TZ.js";import"./chunk-NKP4UQB5.js";import"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-ROGFBH7V.js";import"./chunk-E7N562OR.js";import{ja as y}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Ec as I,Fb as r,Sb as s,Tb as n,Ub as i,Vb as d,Wc as B,Zb as c,_b as p,jb as l,mc as N,nc as R,tc as o,uc as u,xb as b}from"./chunk-N476DBZA.js";function A(e,t){e&1&&(n(0,"th",14),o(1,"No."),i())}function q(e,t){if(e&1&&(n(0,"td",15),o(1),i()),e&2){let a=t.$implicit;l(),u(a.position)}}function V(e,t){e&1&&(n(0,"th",14),o(1,"Name"),i())}function j(e,t){if(e&1&&(n(0,"td",15),o(1),i()),e&2){let a=t.$implicit;l(),u(a.name)}}function k(e,t){e&1&&(n(0,"th",14),o(1,"Weight"),i())}function G(e,t){if(e&1&&(n(0,"td",15),o(1),i()),e&2){let a=t.$implicit;l(),u(a.weight)}}function J(e,t){e&1&&(n(0,"th",14),o(1,"Symbol"),i())}function K(e,t){if(e&1&&(n(0,"td",15),o(1),i()),e&2){let a=t.$implicit;l(),u(a.symbol)}}function U(e,t){e&1&&d(0,"tr",16)}function X(e,t){e&1&&d(0,"tr",17)}var H=class e{displayedColumns=["position","name","weight","symbol"];dataSource=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}];codeHtml=`<table mat-table [dataSource]="dataSource" class="w-full">
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef>No.</th>
    <td mat-cell *matCellDef="let e">{{ e.position }}</td>
  </ng-container>
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef>Name</th>
    <td mat-cell *matCellDef="let e">{{ e.name }}</td>
  </ng-container>
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef>Weight</th>
    <td mat-cell *matCellDef="let e">{{ e.weight }}</td>
  </ng-container>
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef>Symbol</th>
    <td mat-cell *matCellDef="let e">{{ e.symbol }}</td>
  </ng-container>
  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let r; columns: displayedColumns;"></tr>
</table>`;codeTs=`import { MatTableModule } from '@angular/material/table';

interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

export class MyComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // ...
  ];
}`;static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["rui-material-table-basic"]],decls:22,vars:5,consts:[["id","table-basic",1,"mb-8"],["id","table-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","class","font-medium",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"html","ts"],["mat-header-cell","",1,"font-medium"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,m){a&1&&(n(0,"section",0)(1,"h2",1),o(2,"Basic Table"),i(),n(3,"p",2),o(4,"mat-table displaying periodic elements with static data."),i(),n(5,"div",3)(6,"table",4),c(7,5),r(8,A,2,0,"th",6)(9,q,2,1,"td",7),p(),c(10,8),r(11,V,2,0,"th",6)(12,j,2,1,"td",7),p(),c(13,9),r(14,k,2,0,"th",6)(15,G,2,1,"td",7),p(),c(16,10),r(17,J,2,0,"th",6)(18,K,2,1,"td",7),p(),r(19,U,1,0,"tr",11)(20,X,1,0,"tr",12),i()(),d(21,"rui-showcase-code",13),i()),a&2&&(l(6),s("dataSource",m.dataSource),l(13),s("matHeaderRowDef",m.displayedColumns),l(),s("matRowDefColumns",m.displayedColumns),l(),s("html",m.codeHtml)("ts",m.codeTs))},dependencies:[E,h,C,_,M,w,D,S,T,v,x,y],encapsulation:2})};var Y=()=>[5,10];function Z(e,t){e&1&&(n(0,"th",15),o(1,"No."),i())}function ee(e,t){if(e&1&&(n(0,"td",16),o(1),i()),e&2){let a=t.$implicit;l(),u(a.position)}}function te(e,t){e&1&&(n(0,"th",15),o(1,"Name"),i())}function ae(e,t){if(e&1&&(n(0,"td",16),o(1),i()),e&2){let a=t.$implicit;l(),u(a.name)}}function ie(e,t){e&1&&(n(0,"th",15),o(1,"Weight"),i())}function ne(e,t){if(e&1&&(n(0,"td",16),o(1),i()),e&2){let a=t.$implicit;l(),u(a.weight)}}function oe(e,t){e&1&&(n(0,"th",15),o(1,"Symbol"),i())}function le(e,t){if(e&1&&(n(0,"td",16),o(1),i()),e&2){let a=t.$implicit;l(),u(a.symbol)}}function me(e,t){e&1&&d(0,"tr",17)}function re(e,t){e&1&&d(0,"tr",18)}var P=class e{sort=B(f);paginator=B(g);displayedColumns=["position","name","weight","symbol"];dataSource=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}];codeHtml=`<table mat-table [dataSource]="dataSource" matSort class="w-full">
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th>
    <td mat-cell *matCellDef="let e">{{ e.position }}</td>
  </ng-container>
  <!-- ... additional columns ... -->
  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let r; columns: displayedColumns;"></tr>
</table>
<mat-paginator
  [pageSizeOptions]="[5, 10]"
  [showFirstLastButtons]="true"
  aria-label="Table paginator"
></mat-paginator>`;codeTs=`import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

export class MyComponent {
  readonly sort = viewChild(MatSort);
  readonly paginator = viewChild(MatPaginator);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [ /* ... */ ];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort();
    this.dataSource.paginator = this.paginator();
  }
}`;static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["rui-material-table-sort-paginated"]],viewQuery:function(a,m){a&1&&N(m.sort,f,5)(m.paginator,g,5),a&2&&R(2)},decls:23,vars:8,consts:[["id","table-sort-paginated",1,"mb-8"],["id","table-sort-paginated",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","mat-sort-header","","class","font-medium",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Table paginator",1,"mt-2",3,"pageSizeOptions","showFirstLastButtons"],[3,"html","ts"],["mat-header-cell","","mat-sort-header","",1,"font-medium"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,m){a&1&&(n(0,"section",0)(1,"h2",1),o(2,"Sortable & Paginated Table"),i(),n(3,"p",2),o(4,"mat-table with matSort and mat-paginator for interactive sorting and page navigation."),i(),n(5,"div",3)(6,"table",4),c(7,5),r(8,Z,2,0,"th",6)(9,ee,2,1,"td",7),p(),c(10,8),r(11,te,2,0,"th",6)(12,ae,2,1,"td",7),p(),c(13,9),r(14,ie,2,0,"th",6)(15,ne,2,1,"td",7),p(),c(16,10),r(17,oe,2,0,"th",6)(18,le,2,1,"td",7),p(),r(19,me,1,0,"tr",11)(20,re,1,0,"tr",12),i(),d(21,"mat-paginator",13),i(),d(22,"rui-showcase-code",14),i()),a&2&&(l(6),s("dataSource",m.dataSource),l(13),s("matHeaderRowDef",m.displayedColumns),l(),s("matRowDefColumns",m.displayedColumns),l(),s("pageSizeOptions",I(7,Y))("showFirstLastButtons",!0),l(),s("html",m.codeHtml)("ts",m.codeTs))},dependencies:[E,h,C,_,M,w,D,S,T,v,x,$,f,F,L,g,y],encapsulation:2})};var Q=class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["rui-material-table"]],decls:8,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(a,m){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Table"),i(),n(4,"p",3),o(5,"mat-table is a flexible data table component with sorting and pagination."),i()(),d(6,"rui-material-table-basic")(7,"rui-material-table-sort-paginated"),i())},dependencies:[H,P],encapsulation:2})};export{Q as MaterialTable};
