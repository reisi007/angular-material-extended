import { Component, ChangeDetectionStrategy, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-dialog-template',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ShowcaseCode],
  template: `
    <section id="dialog-template" class="mb-8">
      <h2 id="dialog-template" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Dialog with Template</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">Open a dialog using an ng-template reference instead of a separate component.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-2 flex-wrap items-center">
        <button mat-raised-button color="primary" (click)="openDialog()">Open Template Dialog</button>
      </div>

      <ng-template #dialogTemplate>
        <h2 mat-dialog-title class="text-lg font-semibold text-[var(--mat-sys-on-surface)]">Template Dialog</h2>
        <mat-dialog-content class="text-sm text-[var(--mat-sys-on-surface-variant)]">
          <p>This dialog content is defined as an ng-template.</p>
          <p class="mt-2">Templates are useful for simple dialogs that don't need a separate component.</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="gap-2">
          <button mat-button mat-dialog-close>Close</button>
        </mat-dialog-actions>
      </ng-template>

      <rui-showcase-code
        html="<ng-template #dialogTemplate>
  &lt;h2 mat-dialog-title&gt;Template Dialog&lt;/h2&gt;
  &lt;mat-dialog-content&gt;
    &lt;p&gt;Dialog content&lt;/p&gt;
  &lt;/mat-dialog-content&gt;
  &lt;mat-dialog-actions&gt;
    &lt;button mat-button mat-dialog-close&gt;Close&lt;/button&gt;
  &lt;/mat-dialog-actions&gt;
&lt;/ng-template&gt;"
        ts="import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

readonly #dialog = inject(MatDialog);
@ViewChild('dialogTemplate') private readonly dialogTemplate!: TemplateRef&lt;unknown&gt;;

openDialog(): void {
  this.#dialog.open(this.dialogTemplate);
}

// In component imports: [MatDialogModule, MatButtonModule]"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogTemplate {
  readonly #dialog = inject(MatDialog);

  @ViewChild('dialogTemplate') private readonly dialogTemplate!: TemplateRef<unknown>;

  openDialog(): void {
    this.#dialog.open(this.dialogTemplate);
  }
}
