import{b as P}from"./chunk-25Q6VWJN.js";import"./chunk-4ZKHVPKX.js";import{a as L,b as $}from"./chunk-4BW2AZAQ.js";import"./chunk-2HNBJR46.js";import"./chunk-ZGOZ4WAY.js";import{b as N,c as B}from"./chunk-KHMA3PY5.js";import{a as k}from"./chunk-PFXLYJGD.js";import{a as R,e as z}from"./chunk-RQ6LY3TZ.js";import"./chunk-NKP4UQB5.js";import{b as j,e as q}from"./chunk-NE3B7GI5.js";import"./chunk-PHDQMSJ4.js";import{j as H,l as x,o as M,t as U}from"./chunk-ROGFBH7V.js";import{a as T,b as E,c as D,f as w,j as I}from"./chunk-7SAILWZ5.js";import"./chunk-E7N562OR.js";import{ja as A}from"./chunk-45MN3S43.js";import"./chunk-OZMPAIOK.js";import"./chunk-MJUAA4UW.js";import{Mb as h,Nb as _,Qb as v,Rb as S,Sb as n,Tb as a,Ub as i,Vb as p,cc as s,ec as C,jb as l,nb as g,ob as F,tc as r,vc as f,wc as y,xb as b,ya as u}from"./chunk-N476DBZA.js";var J=(d,o)=>o.id;function K(d,o){if(d&1&&(a(0,"li"),r(1),i()),d&2){let t=o.$implicit;l(),y("",t.file.name," \u2014 ",t.status)}}function O(d,o){if(d&1&&(a(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),r(3,"Uploaded Files"),i()(),a(4,"mat-card-content")(5,"ul",18),v(6,K,2,2,"li",null,J),i()()()),d&2){let t=C();l(6),S(t.uploadedFiles())}}var G=class d{multipleFiles=u(!0);maxFileSize=u(5*1024*1024);autoUploadEnabled=u(!1);uploadedFiles=u([]);fileControl=new x([]);uploadHandler=async o=>{for(let t=0;t<=100;t+=10)await new Promise(e=>setTimeout(e,100)),o.progress=t};imageUploadHandler=async o=>{o.progress=50,await new Promise(t=>setTimeout(t,500)),o.progress=100};basicHtml=`<rui-file-upload
  [multiple]="true"
  [maxSize]="maxFileSize"
  [uploadHandler]="uploadHandler"
/>`;basicTs=`import { RuiFileUpload } from '@all-the.rest/mat-extended/file-upload';
import type { RuiUploadHandler } from '@all-the.rest/mat-extended/file-upload';

@Component({
  imports: [RuiFileUpload],
})
export class MyComponent {
  uploadHandler: RuiUploadHandler = async (file) => {
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 100));
      file.progress = i;
    }
  };
}`;acceptHtml=`<rui-file-upload
  accept="image/*"
  [maxFiles]="5"
  dropzoneText="Drop images here or click to browse"
  uploadButtonText="Upload Images"
  [uploadHandler]="handler"
/>`;acceptTs=`// Accept only images, limit to 5 files
<rui-file-upload accept="image/*" [maxFiles]="5" />

// Accept specific extensions
<rui-file-upload accept=".pdf,.doc,.docx" />

// Accept exact MIME types
<rui-file-upload accept="application/pdf,text/csv" />`;formsHtml=`<rui-file-upload
  [formControl]="fileControl"
  [uploadHandler]="uploadHandler"
/>`;formsTs=`import { FormControl, ReactiveFormsModule } from '@angular/forms';

fileControl = new FormControl<RuiFileItem[]>([]);

// Read files from control
const files = this.fileControl.value;`;sortableHtml=`<rui-file-upload
  [sortable]="true"
  [editable]="true"
  [uploadHandler]="handler"
/>`;sortableTs=`// sortable enables drag & drop reordering with up/down buttons
// editable enables inline rename on double-click (pencil icon)
<rui-file-upload [sortable]="true" [editable]="true" />`;onUploadStart(o){this.uploadedFiles.update(t=>[...t,...o])}onMaxSizeChange(o){let t=o.target;this.maxFileSize.set(Number(t.value))}static \u0275fac=function(t){return new(t||d)};static \u0275cmp=b({type:d,selectors:[["rui-file-upload-demo"]],decls:42,vars:26,consts:[[1,"max-w-4xl","mx-auto","space-y-8","p-4"],[1,"font-bold"],["id","basic"],[1,"flex","gap-4","items-center","flex-wrap"],[3,"change","checked"],[1,"w-48"],["matInput","","type","number",3,"input","value"],[3,"uploadStart","multiple","maxSize","autoUpload","uploadHandler"],[3,"html","ts"],["id","accept"],["accept","image/*","dropzoneText","Drop images here or click to browse","uploadButtonText","Upload Images",3,"maxFiles","uploadHandler"],["id","reactive-forms"],[1,"flex","flex-col","gap-3"],[3,"formControl","uploadHandler"],[1,"text-sm","text-[var(--mat-sys-on-surface-variant)]"],["mat-flat-button","",1,"self-start",3,"click"],["id","sortable-editable"],[3,"sortable","editable","dropzoneText","uploadHandler"],[1,"list-disc","pl-5"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"h1",1),r(2,"File Upload Demo"),i(),a(3,"h2",2),r(4,"Basic Usage"),i(),a(5,"mat-card")(6,"mat-card-header")(7,"mat-card-title"),r(8,"Configuration"),i()(),a(9,"mat-card-content",3)(10,"mat-slide-toggle",4),s("change",function(m){return e.multipleFiles.set(m.checked)}),r(11," Multiple files "),i(),a(12,"mat-form-field",5)(13,"mat-label"),r(14,"Max file size (bytes)"),i(),a(15,"input",6),s("input",function(m){return e.onMaxSizeChange(m)}),i()(),a(16,"mat-slide-toggle",4),s("change",function(m){return e.autoUploadEnabled.set(m.checked)}),r(17," Auto Upload "),i()()(),a(18,"rui-file-upload",7),s("uploadStart",function(m){return e.onUploadStart(m)}),i(),p(19,"rui-showcase-code",8),h(20,O,8,0,"mat-card"),a(21,"h2",9),r(22,"File Type Filtering"),i(),p(23,"rui-file-upload",10)(24,"rui-showcase-code",8),a(25,"h2",11),r(26,"Reactive Forms Integration"),i(),a(27,"mat-card")(28,"mat-card-header")(29,"mat-card-title"),r(30,"Form Control"),i()(),a(31,"mat-card-content",12),p(32,"rui-file-upload",13),g(),a(33,"p",14),r(34),i(),a(35,"button",15),s("click",function(){return e.fileControl.disable()}),r(36),i()()(),p(37,"rui-showcase-code",8),a(38,"h2",16),r(39,"Sortable & Editable"),i(),p(40,"rui-file-upload",17)(41,"rui-showcase-code",8),i()),t&2&&(l(10),n("checked",e.multipleFiles()),l(5),n("value",e.maxFileSize()),l(),n("checked",e.autoUploadEnabled()),l(2),n("multiple",e.multipleFiles())("maxSize",e.maxFileSize())("autoUpload",e.autoUploadEnabled())("uploadHandler",e.uploadHandler),l(),n("html",e.basicHtml)("ts",e.basicTs),l(),_(e.uploadedFiles().length>0?20:-1),l(3),n("maxFiles",5)("uploadHandler",e.imageUploadHandler),l(),n("html",e.acceptHtml)("ts",e.acceptTs),l(8),n("formControl",e.fileControl)("uploadHandler",e.uploadHandler),F(),l(2),f(" Files in control: ",e.fileControl.value?.length??0," "),l(2),f(" ",e.fileControl.disabled?"Enable":"Disable"," form control "),l(),n("html",e.formsHtml)("ts",e.formsTs),l(3),n("sortable",!0)("editable",!0)("dropzoneText","Drop files, then reorder and rename")("uploadHandler",e.uploadHandler),l(),n("html",e.sortableHtml)("ts",e.sortableTs))},dependencies:[P,I,T,D,w,E,$,L,k,z,R,B,N,q,j,U,H,M,A],encapsulation:2})};export{G as FileUploadDemo};
