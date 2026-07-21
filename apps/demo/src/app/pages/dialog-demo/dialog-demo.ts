import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuiDialogService, RuiDialogSize } from '@all-the.rest/mat-extended/dialog';

@Component({
  selector: 'rui-dialog-demo',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  template: `
    <div class="max-w-4xl mx-auto space-y-8 p-4">
      <h1 class="text-2xl font-bold">Dialog / Modal</h1>

      <mat-card>
        <mat-card-header><mat-card-title>Dialog Sizes</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 flex-wrap">
          @for (size of sizes; track size) {
            <button mat-raised-button (click)="openDialog(size)">{{ size }}</button>
          }
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header><mat-card-title>Custom Dialog</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 items-end">
          <mat-form-field>
            <mat-label>Title</mat-label>
            <input matInput [(ngModel)]="dialogTitle" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Message</mat-label>
            <input matInput [(ngModel)]="dialogMessage" />
          </mat-form-field>
          <button mat-raised-button (click)="openCustomDialog()">Open Custom</button>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header><mat-card-title>Options</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 flex-wrap">
          <button mat-stroked-button (click)="openNonDismissibleDialog()">Non-dismissible</button>
          <button mat-stroked-button (click)="openFullscreenDialog()">Fullscreen</button>
        </mat-card-content>
      </mat-card>

      @if (lastResult(); as result) {
        <mat-card><mat-card-content>Dialog closed with: {{ result | json }}</mat-card-content></mat-card>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemo {
  private dialogService = inject(RuiDialogService);

  sizes: RuiDialogSize[] = ['sm', 'md', 'lg', 'xl'];
  dialogTitle = 'Custom Dialog';
  dialogMessage = 'This is a custom dialog message.';
  lastResult = signal<any>(undefined);

  openDialog(size: string): void {
    const ref = this.dialogService.open({
      header: `${size.toUpperCase()} Dialog`,
      size: size as RuiDialogSize,
    });

    ref.afterClosed.then((result) => {
      console.log('Dialog closed with:', result);
    });
  }

  openCustomDialog(): void {
    const ref = this.dialogService.open({
      header: this.dialogTitle,
      size: 'md',
    });

    ref.afterClosed.then((result) => {
      this.lastResult.set(result);
    });
  }

  openNonDismissibleDialog(): void {
    const ref = this.dialogService.open({
      header: 'Important',
      disableClose: true,
      size: 'sm',
    });

    setTimeout(() => {
      ref.close('auto-closed after 3s');
    }, 3000);
  }

  openFullscreenDialog(): void {
    const ref = this.dialogService.open({
      header: 'Fullscreen Dialog',
      size: 'fullscreen',
    });

    ref.afterClosed.then(() => {
      this.lastResult.set('fullscreen closed');
    });
  }
}
