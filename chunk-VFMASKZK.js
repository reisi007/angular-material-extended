import{a as k}from"./chunk-F6ZRY6ZL.js";import{e as E,f as U}from"./chunk-FNYIKTZP.js";import{a as T,b as N}from"./chunk-4BW2AZAQ.js";import"./chunk-2HNBJR46.js";import"./chunk-ZGOZ4WAY.js";import{e as $}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import"./chunk-ROGFBH7V.js";import{a as x,b as R,c as M,f as V,j as C}from"./chunk-7SAILWZ5.js";import"./chunk-E7N562OR.js";import{ja as S}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Qb as h,Rb as D,Sb as p,Tb as m,Ub as o,Vb as v,a as f,ac as w,b as I,cc as g,ec as r,jb as s,la as l,ma as d,tc as c,vc as y,xb as F,ya as _}from"./chunk-N476DBZA.js";var b=(u,i)=>i.id;function H(u,i){if(u&1){let e=w();m(0,"rui-file-upload-item",17),g("remove",function(){let a=l(e).$implicit,n=r();return d(n.removeSortable(a.id))})("moveUp",function(){let a=l(e).$index,n=r();return d(n.moveSortableUp(a))})("moveDown",function(){let a=l(e).$index,n=r();return d(n.moveSortableDown(a))}),o()}if(u&2){let e=i.$implicit;p("item",e)("sortable",!0)("dragStartDelay",200)("fileManagement",!1)}}function j(u,i){if(u&1){let e=w();m(0,"rui-file-upload-item",18),g("startRename",function(){let a=l(e).$implicit,n=r();return d(n.onStartRename(a))})("confirmRename",function(){let a=l(e).$implicit,n=r();return d(n.onConfirmRename(a))})("cancelRename",function(){l(e);let a=r();return d(a.onCancelRename())})("editInputChange",function(a){l(e);let n=r();return d(n.renameValue.set(a))})("remove",function(){let a=l(e).$implicit,n=r();return d(n.removeEditable(a.id))}),o()}if(u&2){let e=i.$implicit,t=r();p("item",e)("editable",!0)("editableExtension",t.allowExtEdit())("fileManagement",!0)("editingItemId",t.renameItemId())("editInputValue",t.renameValue())}}function z(u,i){if(u&1){let e=w();m(0,"rui-file-upload-item",19),g("remove",function(){let a=l(e).$implicit,n=r();return d(n.removeManagement(a.id))})("retry",function(){let a=l(e).$implicit,n=r();return d(n.onMgmtRetry(a))})("cancelUpload",function(){let a=l(e).$implicit,n=r();return d(n.onMgmtCancel(a.id))})("startRename",function(){let a=l(e).$implicit,n=r();return d(n.onMgmtStartRename(a))})("confirmRename",function(){let a=l(e).$implicit,n=r();return d(n.onMgmtConfirmRename(a))})("cancelRename",function(){l(e);let a=r();return d(a.onMgmtCancelRename())})("editInputChange",function(a){l(e);let n=r();return d(n.mgmtRenameValue.set(a))})("moveUp",function(){let a=l(e).$index,n=r();return d(n.moveManagementUp(a))})("moveDown",function(){let a=l(e).$index,n=r();return d(n.moveManagementDown(a))}),o()}if(u&2){let e=i.$implicit,t=r();p("item",e)("sortable",t.showSortable())("dragStartDelay",200)("editable",t.showEditable())("fileManagement",t.showFileMgmt())("editingItemId",t.mgmtRenameId())("editInputValue",t.mgmtRenameValue())}}var L=class u{selectedItem={id:"demo-selected",file:new File([],"document.pdf",{type:"application/pdf"}),status:"selected",progress:0,editName:"document.pdf"};uploadingItem={id:"demo-uploading",file:new File([],"photo.jpg",{type:"image/jpeg"}),status:"uploading",progress:65,editName:"photo.jpg",preview:""};doneItem={id:"demo-done",file:new File([],"archive.zip",{type:"application/zip"}),status:"done",progress:100,editName:"archive.zip"};errorItem={id:"demo-error",file:new File([],"data.csv",{type:"text/csv"}),status:"error",progress:0,error:"Network timeout",editName:"data.csv"};onRetry(i){i.status="uploading",i.progress=0,i.error=void 0,setTimeout(()=>{i.status="done",i.progress=100},1500)}sortableItems=_([{id:"s1",file:new File([],"1-alpha.txt"),status:"selected",progress:0,editName:"1-alpha.txt"},{id:"s2",file:new File([],"2-bravo.txt"),status:"selected",progress:0,editName:"2-bravo.txt"},{id:"s3",file:new File([],"3-charlie.txt"),status:"selected",progress:0,editName:"3-charlie.txt"}]);onDrop(i){let e=[...this.sortableItems()],[t]=e.splice(i.previousIndex,1);e.splice(i.currentIndex,0,t),this.sortableItems.set(e)}removeSortable(i){this.sortableItems.update(e=>e.filter(t=>t.id!==i))}moveSortableUp(i){if(i<=0)return;let e=[...this.sortableItems()];[e[i-1],e[i]]=[e[i],e[i-1]],this.sortableItems.set(e)}moveSortableDown(i){let e=[...this.sortableItems()];i>=e.length-1||([e[i],e[i+1]]=[e[i+1],e[i]],this.sortableItems.set(e))}editableItems=_([{id:"e1",file:new File([],"report-v1.pdf"),status:"done",progress:100,editName:"report-v1.pdf"},{id:"e2",file:new File([],"invoice-2024.csv"),status:"done",progress:100,editName:"invoice-2024.csv"}]);renameItemId=_(null);renameValue=_("");allowExtEdit=_(!1);onStartRename(i){this.renameItemId.set(i.id);let e=i.editName??i.file.name;if(this.allowExtEdit())this.renameValue.set(e);else{let t=e.lastIndexOf(".");this.renameValue.set(t>0?e.slice(0,t):e)}}onConfirmRename(i){let e=this.renameValue().trim();if(e){if(!this.allowExtEdit()){let t=i.editName??i.file.name,a=t.lastIndexOf(".");a>0&&(e=e+t.slice(a))}this.editableItems.update(t=>t.map(a=>a.id===i.id?I(f({},a),{editName:e}):a)),this.renameItemId.set(null),this.renameValue.set("")}}onCancelRename(){this.renameItemId.set(null),this.renameValue.set("")}removeEditable(i){this.editableItems.update(e=>e.filter(t=>t.id!==i))}showFileMgmt=_(!0);showEditable=_(!1);showSortable=_(!1);managementItems=_([{id:"m1",file:new File([],"contract.pdf"),status:"done",progress:100,editName:"contract.pdf"},{id:"m2",file:new File([],"photo.jpg"),status:"uploading",progress:45,editName:"photo.jpg",preview:""},{id:"m3",file:new File([],"data.csv"),status:"error",progress:0,error:"Upload failed",editName:"data.csv"}]);mgmtRenameId=_(null);mgmtRenameValue=_("");onMgmtDrop(i){let e=[...this.managementItems()],[t]=e.splice(i.previousIndex,1);e.splice(i.currentIndex,0,t),this.managementItems.set(e)}removeManagement(i){this.managementItems.update(e=>e.filter(t=>t.id!==i))}onMgmtRetry(i){this.managementItems.update(e=>e.map(t=>t.id===i.id?I(f({},t),{status:"uploading",progress:0,error:void 0}):t)),setTimeout(()=>{this.managementItems.update(e=>e.map(t=>t.id===i.id?I(f({},t),{status:"done",progress:100}):t))},1500)}onMgmtCancel(i){this.managementItems.update(e=>e.map(t=>t.id===i?I(f({},t),{status:"selected",progress:0}):t))}onMgmtStartRename(i){this.mgmtRenameId.set(i.id),this.mgmtRenameValue.set(i.editName??i.file.name)}onMgmtConfirmRename(i){let e=this.mgmtRenameValue().trim();e&&this.managementItems.update(t=>t.map(a=>a.id===i.id?I(f({},a),{editName:e}):a)),this.mgmtRenameId.set(null),this.mgmtRenameValue.set("")}onMgmtCancelRename(){this.mgmtRenameId.set(null),this.mgmtRenameValue.set("")}moveManagementUp(i){if(i<=0)return;let e=[...this.managementItems()];[e[i-1],e[i]]=[e[i],e[i-1]],this.managementItems.set(e)}moveManagementDown(i){let e=[...this.managementItems()];i>=e.length-1||([e[i],e[i+1]]=[e[i+1],e[i]],this.managementItems.set(e))}statesHtml=`<rui-file-upload-item [item]="selectedItem" />
<rui-file-upload-item [item]="uploadingItem" />
<rui-file-upload-item [item]="doneItem" />
<rui-file-upload-item [item]="errorItem" />`;statesTs=`import { RuiFileUploadItem } from '@all-the.rest/mat-extended/file-upload';
import type { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';

@Component({ imports: [RuiFileUploadItem] })
export class MyComponent {
  selectedItem: RuiFileItem = {
    id: '1', file: new File([], 'doc.pdf'),
    status: 'selected', progress: 0,
  };
  doneItem: RuiFileItem = { ...selectedItem, status: 'done', progress: 100 };
}`;sortableHtml=`<div cdkDropList (cdkDropListDropped)="onDrop($event)">
  @for (item of items(); track item.id; let idx = $index) {
    <rui-file-upload-item
      [item]="item"
      [sortable]="true"
      [dragStartDelay]="200"
      [fileManagement]="false"
      (remove)="removeItem(item.id)"
      (moveUp)="moveUp(idx)"
      (moveDown)="moveDown(idx)"
    />
  }
</div>`;sortableTs=`import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { signal } from '@angular/core';

items = signal<RuiFileItem[]>([...]);

onDrop(event: CdkDragDrop<RuiFileItem[]>): void {
  const items = [...this.items()];
  const [removed] = items.splice(event.previousIndex, 1);
  items.splice(event.currentIndex, 0, removed!);
  this.items.set(items);
}

moveUp(index: number): void {
  if (index <= 0) return;
  const items = [...this.items()];
  [items[index - 1], items[index]] = [items[index]!, items[index - 1]!];
  this.items.set(items);
}

moveDown(index: number): void {
  const items = [...this.items()];
  if (index >= items.length - 1) return;
  [items[index], items[index + 1]] = [items[index + 1]!, items[index]!];
  this.items.set(items);
}`;editableHtml=`<rui-file-upload-item
  [item]="item"
  [editable]="true"
  [fileManagement]="true"
  [editingItemId]="editingId()"
  [editInputValue]="editValue()"
  (startRename)="onStartRename(item)"
  (confirmRename)="onConfirmRename(item)"
  (cancelRename)="onCancelRename()"
  (editInputChange)="editValue.set($event)"
/>`;editableTs=`editingId = signal<string | null>(null);
editValue = signal('');

onStartRename(item: RuiFileItem): void {
  this.editingId.set(item.id);
  this.editValue.set(item.editName ?? item.file.name);
}

onConfirmRename(item: RuiFileItem): void {
  const name = this.editValue().trim();
  if (name) {
    this.items.update(items =>
      items.map(i => i.id === item.id ? { ...i, editName: name } : i),
    );
  }
  this.editingId.set(null);
  this.editValue.set('');
}`;managementHtml=`<div class="flex items-center gap-4 mb-4">
  <mat-slide-toggle [checked]="showFileMgmt()" (change)="showFileMgmt.set($event.checked)">
    File Management
  </mat-slide-toggle>
  <mat-slide-toggle [checked]="showSortable()" (change)="showSortable.set($event.checked)">
    Sortable
  </mat-slide-toggle>
  <mat-slide-toggle [checked]="showEditable()" (change)="showEditable.set($event.checked)">
    Editable
  </mat-slide-toggle>
</div>
<div cdkDropList [cdkDropListDisabled]="!showSortable()" (cdkDropListDropped)="onDrop($event)">
  @for (item of items(); track item.id; let idx = $index) {
    <rui-file-upload-item
      [item]="item"
      [sortable]="showSortable()"
      [dragStartDelay]="200"
      [editable]="showEditable()"
      [fileManagement]="showFileMgmt()"
      (remove)="removeItem(item.id)"
      (retry)="retryItem(item)"
      (cancelUpload)="cancelItem(item.id)"
      (moveUp)="moveUp(idx)"
      (moveDown)="moveDown(idx)"
    />
  }
</div>`;managementTs=`showFileMgmt = signal(true);
showSortable = signal(false);
showEditable = signal(false);
items = signal<RuiFileItem[]>([...]);

onDrop(event: CdkDragDrop<RuiFileItem[]>): void {
  const items = [...this.items()];
  const [removed] = items.splice(event.previousIndex, 1);
  items.splice(event.currentIndex, 0, removed!);
  this.items.set(items);
}

retryItem(item: RuiFileItem): void {
  this.items.update(items =>
    items.map(i => i.id === item.id
      ? { ...i, status: 'uploading', progress: 0, error: undefined }
      : i,
    ),
  );
}

cancelItem(id: string): void {
  this.items.update(items =>
    items.map(i => i.id === id
      ? { ...i, status: 'selected', progress: 0 }
      : i,
    ),
  );
}`;static \u0275fac=function(e){return new(e||u)};static \u0275cmp=F({type:u,selectors:[["rui-file-upload-item-demo"]],decls:55,vars:18,consts:[[1,"max-w-4xl","mx-auto","space-y-8","p-4"],[1,"font-bold"],[1,"flex","flex-col","gap-2"],[3,"item"],[3,"retry","item"],[3,"html","ts"],["id","sortable"],["cdkDropList","",1,"flex","flex-col","gap-2",3,"cdkDropListDropped"],[3,"item","sortable","dragStartDelay","fileManagement"],["id","editable"],[1,"mb-3",3,"change","checked"],[3,"item","editable","editableExtension","fileManagement","editingItemId","editInputValue"],["id","file-management"],[1,"flex","items-center","gap-4","mb-4"],[3,"change","checked"],["cdkDropList","",1,"flex","flex-col","gap-2",3,"cdkDropListDropped","cdkDropListDisabled"],[3,"item","sortable","dragStartDelay","editable","fileManagement","editingItemId","editInputValue"],[3,"remove","moveUp","moveDown","item","sortable","dragStartDelay","fileManagement"],[3,"startRename","confirmRename","cancelRename","editInputChange","remove","item","editable","editableExtension","fileManagement","editingItemId","editInputValue"],[3,"remove","retry","cancelUpload","startRename","confirmRename","cancelRename","editInputChange","moveUp","moveDown","item","sortable","dragStartDelay","editable","fileManagement","editingItemId","editInputValue"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"h1",1),c(2,"File Management"),o(),m(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),c(6,"Standalone Item States"),o()(),m(7,"mat-card-content",2),v(8,"rui-file-upload-item",3)(9,"rui-file-upload-item",3)(10,"rui-file-upload-item",3),m(11,"rui-file-upload-item",4),g("retry",function(){return t.onRetry(t.errorItem)}),o()()(),v(12,"rui-showcase-code",5),m(13,"h2",6),c(14,"Sortable Items"),o(),m(15,"mat-card")(16,"mat-card-header")(17,"mat-card-title"),c(18,"Drag & Drop Reorder"),o()(),m(19,"mat-card-content")(20,"div",7),g("cdkDropListDropped",function(n){return t.onDrop(n)}),h(21,H,1,4,"rui-file-upload-item",8,b),o()()(),v(23,"rui-showcase-code",5),m(24,"h2",9),c(25,"Editable Items (Rename)"),o(),m(26,"mat-card")(27,"mat-card-header")(28,"mat-card-title"),c(29,"Inline Rename"),o()(),m(30,"mat-card-content")(31,"mat-slide-toggle",10),g("change",function(n){return t.allowExtEdit.set(n.checked)}),c(32),o(),m(33,"div",2),h(34,j,1,6,"rui-file-upload-item",11,b),o()()(),v(36,"rui-showcase-code",5),m(37,"h2",12),c(38,"File Management (Retry, Cancel, Remove)"),o(),m(39,"mat-card")(40,"mat-card-header")(41,"mat-card-title"),c(42,"Full File Management"),o()(),m(43,"mat-card-content")(44,"div",13)(45,"mat-slide-toggle",14),g("change",function(n){return t.showFileMgmt.set(n.checked)}),c(46," File Management "),o(),m(47,"mat-slide-toggle",14),g("change",function(n){return t.showEditable.set(n.checked)}),c(48," Editable "),o(),m(49,"mat-slide-toggle",14),g("change",function(n){return t.showSortable.set(n.checked)}),c(50," Sortable "),o()(),m(51,"div",15),g("cdkDropListDropped",function(n){return t.onMgmtDrop(n)}),h(52,z,1,7,"rui-file-upload-item",16,b),o()()(),v(54,"rui-showcase-code",5),o()),e&2&&(s(8),p("item",t.selectedItem),s(),p("item",t.uploadingItem),s(),p("item",t.doneItem),s(),p("item",t.errorItem),s(),p("html",t.statesHtml)("ts",t.statesTs),s(9),D(t.sortableItems()),s(2),p("html",t.sortableHtml)("ts",t.sortableTs),s(8),p("checked",t.allowExtEdit()),s(),y(" Edit extension (",t.allowExtEdit()?"on":"off \u2014 extension preserved",") "),s(2),D(t.editableItems()),s(2),p("html",t.editableHtml)("ts",t.editableTs),s(9),p("checked",t.showFileMgmt()),s(2),p("checked",t.showEditable()),s(2),p("checked",t.showSortable()),s(2),p("cdkDropListDisabled",!t.showSortable()),s(),D(t.managementItems()),s(2),p("html",t.managementHtml)("ts",t.managementTs))},dependencies:[k,U,E,C,x,M,V,R,N,T,$,S],encapsulation:2})};export{L as FileUploadItemDemo};
