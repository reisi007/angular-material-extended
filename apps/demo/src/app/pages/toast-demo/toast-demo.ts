import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuiToastService, RuiToastPosition } from '@all-the.rest/mat-extended/toast';

@Component({
  selector: 'rui-toast-demo',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  template: `
    <div class="max-w-4xl mx-auto space-y-8 p-4">
      <h1 class="text-2xl font-bold">Toast / Notification</h1>

      <mat-card>
        <mat-card-header><mat-card-title>Trigger Toasts</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 flex-wrap">
          <button mat-raised-button color="primary" (click)="showSuccess()">Success</button>
          <button mat-raised-button color="warn" (click)="showError()">Error</button>
          <button mat-raised-button (click)="showInfo()">Info</button>
          <button mat-raised-button (click)="showWarning()">Warning</button>
          <button mat-raised-button (click)="dismissAll()">Dismiss All</button>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header><mat-card-title>Custom Toast</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 items-end">
          <mat-form-field>
            <mat-label>Message</mat-label>
            <input matInput [(ngModel)]="customMessage" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Duration (ms)</mat-label>
            <input matInput type="number" [(ngModel)]="customDuration" />
          </mat-form-field>
          <button mat-raised-button (click)="showCustom()">Show Custom</button>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header><mat-card-title>Position</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 flex-wrap">
          @for (pos of positions; track pos) {
            <button mat-stroked-button (click)="showAtPosition(pos)">{{ pos }}</button>
          }
        </mat-card-content>
      </mat-card>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDemo {
  private toastService = inject(RuiToastService);

  customMessage = 'Custom toast message';
  customDuration = 3000;
  positions: RuiToastPosition[] = [
    'top-start',
    'top-center',
    'top-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
  ];

  showSuccess(): void {
    this.toastService.success('Operation completed successfully!', {
      action: { label: 'Undo', onClick: () => console.log('undo') },
    });
  }

  showError(): void {
    this.toastService.error('Something went wrong. Please try again.');
  }

  showInfo(): void {
    this.toastService.info('You have 3 new messages.');
  }

  showWarning(): void {
    this.toastService.warning('Your session will expire in 5 minutes.');
  }

  showCustom(): void {
    this.toastService.show({
      message: this.customMessage,
      duration: this.customDuration,
      kind: 'info',
    });
  }

  showAtPosition(pos: RuiToastPosition): void {
    this.toastService.show({
      message: `Toast at ${pos}`,
      position: pos,
      duration: 3000,
    });
  }

  dismissAll(): void {
    this.toastService.dismissAll();
  }
}
