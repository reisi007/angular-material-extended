import{a as C,b as y,c as h,d as M,e as _,f as g,g as D,h as x,i as v,j as w,l as E,n as T,o as B,p as H}from"./chunk-2ESF74Y7.js";import"./chunk-ZC4H5EHS.js";import{ja as S}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Fb as l,Sb as f,Tb as i,Ub as a,Vb as s,Zb as c,_b as d,jb as o,tc as n,uc as p,xb as u}from"./chunk-N476DBZA.js";function F(e,t){e&1&&(i(0,"th",15),n(1,"Name"),a())}function $(e,t){if(e&1&&(i(0,"td",16),n(1),a()),e&2){let r=t.$implicit;o(),p(r.name)}}function P(e,t){e&1&&(i(0,"th",15),n(1,"Calories"),a())}function z(e,t){if(e&1&&(i(0,"td",16),n(1),a()),e&2){let r=t.$implicit;o(),p(r.calories)}}function k(e,t){e&1&&(i(0,"th",15),n(1,"Fat (g)"),a())}function G(e,t){if(e&1&&(i(0,"td",16),n(1),a()),e&2){let r=t.$implicit;o(),p(r.fat)}}function j(e,t){e&1&&(i(0,"th",15),n(1,"Carbs (g)"),a())}function q(e,t){if(e&1&&(i(0,"td",16),n(1),a()),e&2){let r=t.$implicit;o(),p(r.carbs)}}function A(e,t){e&1&&(i(0,"th",15),n(1,"Protein (g)"),a())}function J(e,t){if(e&1&&(i(0,"td",16),n(1),a()),e&2){let r=t.$implicit;o(),p(r.protein)}}function K(e,t){e&1&&s(0,"tr",17)}function L(e,t){e&1&&s(0,"tr",18)}var b=class e{displayedColumns=["name","calories","fat","carbs","protein"];dataSource=[{name:"Frozen yogurt",calories:159,fat:"6.0",carbs:"24",protein:"4.0"},{name:"Ice cream sandwich",calories:237,fat:"9.0",carbs:"37",protein:"4.3"},{name:"Eclair",calories:262,fat:"16.0",carbs:"24",protein:"6.0"},{name:"Cupcake",calories:305,fat:"3.7",carbs:"67",protein:"4.3"},{name:"Gingerbread",calories:356,fat:"16.0",carbs:"49",protein:"3.9"}];codeHtml=`<table mat-table [dataSource]="dataSource" matSort>
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
    <td mat-cell *matCellDef="let d">{{ d.name }}</td>
  </ng-container>
  <ng-container matColumnDef="calories">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>Calories</th>
    <td mat-cell *matCellDef="let d">{{ d.calories }}</td>
  </ng-container>
  <!-- ... additional columns ... -->
  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let r; columns: displayedColumns;"></tr>
</table>`;codeTs=`import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

interface Dessert {
  name: string;
  calories: number;
  fat: string;
  carbs: string;
  protein: string;
}

export class MyComponent {
  displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs', 'protein'];
  dataSource: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: '6.0', carbs: '24', protein: '4.0' },
    { name: 'Ice cream sandwich', calories: 237, fat: '9.0', carbs: '37', protein: '4.3' },
    { name: 'Eclair', calories: 262, fat: '16.0', carbs: '24', protein: '6.0' },
  ];
}`;static \u0275fac=function(r){return new(r||e)};static \u0275cmp=u({type:e,selectors:[["rui-material-sort-basic"]],decls:25,vars:5,consts:[["id","sort-basic",1,"mb-8"],["id","sort-basic",1,"font-bold","text-[var(--mat-sys-on-surface)]","mb-1"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mb-4"],[1,"rounded-lg","border","border-[var(--mat-sys-outline-variant)]","bg-[var(--mat-sys-surface)]","p-5"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","calories"],["matColumnDef","fat"],["matColumnDef","carbs"],["matColumnDef","protein"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"html","ts"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(r,m){r&1&&(i(0,"section",0)(1,"h2",1),n(2,"Basic Sort Header"),a(),i(3,"p",2),n(4,"Sortable table columns using mat-sort-header with matSort directive."),a(),i(5,"div",3)(6,"table",4),c(7,5),l(8,F,2,0,"th",6)(9,$,2,1,"td",7),d(),c(10,8),l(11,P,2,0,"th",6)(12,z,2,1,"td",7),d(),c(13,9),l(14,k,2,0,"th",6)(15,G,2,1,"td",7),d(),c(16,10),l(17,j,2,0,"th",6)(18,q,2,1,"td",7),d(),c(19,11),l(20,A,2,0,"th",6)(21,J,2,1,"td",7),d(),l(22,K,1,0,"tr",12)(23,L,1,0,"tr",13),a()(),s(24,"rui-showcase-code",14),a()),r&2&&(o(6),f("dataSource",m.dataSource),o(16),f("matHeaderRowDef",m.displayedColumns),o(),f("matRowDefColumns",m.displayedColumns),o(),f("html",m.codeHtml)("ts",m.codeTs))},dependencies:[H,T,B,E,C,h,D,M,y,x,_,g,v,w,S],encapsulation:2})};var R=class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=u({type:e,selectors:[["rui-material-sort"]],decls:7,vars:0,consts:[[1,"p-4","md:p-6","space-y-2"],[1,"mb-6"],[1,"font-bold","text-[var(--mat-sys-on-surface)]"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]","mt-1"]],template:function(r,m){r&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"Sort Header"),a(),i(4,"p",3),n(5,"mat-sort-header enables column-based sorting on tables and lists."),a()(),s(6,"rui-material-sort-basic"),a())},dependencies:[b],encapsulation:2})};export{R as MaterialSort};
