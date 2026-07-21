import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuiToastService, RuiToastPosition } from '@all-the.rest/mat-extended/toast';
import { ShowcaseCode } from '../../shared/showcase-code';

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
    ShowcaseCode,
  ],
  template: `
<div class="max-w-4xl mx-auto space-y-8 p-4">
  <h1 class="font-bold">Toast / Notification</h1>

  <div class="pt-4 space-y-6">
    <h2 id="toast-types" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Toast Types</h2>
    <mat-card>
      <mat-card-header><mat-card-title>Toast Types</mat-card-title></mat-card-header>
      <mat-card-content class="space-y-3">
        <div class="flex gap-4 flex-wrap">
          <button mat-raised-button color="primary" (click)="showSuccess()">Success</button>
          <button mat-raised-button color="warn" (click)="showError()">Error</button>
          <button mat-raised-button (click)="showInfo()">Info</button>
          <button mat-raised-button (click)="showWarning()">Warning</button>
          <button mat-raised-button (click)="dismissAll()">Dismiss All</button>
        </div>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="toastTypesHtml" [ts]="toastTypesTs" />

    <h2 id="toast-custom-duration" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Custom Duration</h2>
    <mat-card>
      <mat-card-header><mat-card-title>Custom Duration</mat-card-title></mat-card-header>
      <mat-card-content class="space-y-3">
        <div class="flex gap-4 items-end">
          <mat-form-field>
            <mat-label>Message</mat-label>
            <input matInput [(ngModel)]="customMessage" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Duration (ms)</mat-label>
            <input matInput type="number" [(ngModel)]="customDuration" />
          </mat-form-field>
          <button mat-raised-button (click)="showCustom()">Show Custom</button>
        </div>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="customDurationHtml" [ts]="customDurationTs" />

    <h2 id="toast-default-config" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Default Configuration</h2>
    <mat-card>
      <mat-card-header><mat-card-title>Default Configuration</mat-card-title></mat-card-header>
      <mat-card-content class="space-y-3">
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
          Override global toast defaults via the <code>RUI_TOAST_DEFAULT_OPTIONS</code> injection token in your app config.
        </p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="defaultConfigHtml" [ts]="defaultConfigTs" />

    <h2 id="toast-position" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Position</h2>
    <mat-card>
      <mat-card-header><mat-card-title>Position</mat-card-title></mat-card-header>
      <mat-card-content class="space-y-3">
        <div class="flex gap-4 flex-wrap">
          @for (pos of positions; track pos) {
            <button mat-stroked-button (click)="showAtPosition(pos)">{{ pos }}</button>
          }
        </div>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="positionsHtml" [ts]="positionsTs" />
  </div>
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

  protected toastTypesHtml = `<button mat-raised-button color="primary" (click)="showSuccess()">Success</button>
<button mat-raised-button color="warn" (click)="showError()">Error</button>
<button mat-raised-button (click)="showInfo()">Info</button>
<button mat-raised-button (click)="showWarning()">Warning</button>`;

  protected toastTypesTs = [
    `import { RuiToastService } from '@all-the.rest/mat-extended/toast';`,
    ``,
    `const toast = inject(RuiToastService);`,
    ``,
    `toast.success('Operation completed!', {`,
    `  action: { label: 'Undo', onClick: () => ... }`,
    `});`,
    `toast.error('Something went wrong!');`,
    `toast.info('You have new messages.');`,
    `toast.warning('Session expiring soon.');`,
  ].join('\n');

  protected customDurationHtml = `<mat-form-field>
  <mat-label>Message</mat-label>
  <input matInput [(ngModel)]="message" />
</mat-form-field>
<mat-form-field>
  <mat-label>Duration (ms)</mat-label>
  <input matInput type="number" [(ngModel)]="duration" />
</mat-form-field>
<button mat-raised-button (click)="showCustom()">Show Custom</button>`;

  protected customDurationTs = [
    `toast.show({`,
    `  message: 'Custom message',`,
    `  duration: 5000,`,
    `  kind: 'info',`,
    `});`,
  ].join('\n');

  protected positionsHtml = `@for (pos of positions; track pos) {
  <button mat-stroked-button (click)="showAtPosition(pos)">{{ pos }}</button>
}`;

  protected positionsTs = [
    `toast.show({`,
    `  message: 'Toast message',`,
    `  position: 'top-end',`,
    `  duration: 3000,`,
    `});`,
  ].join('\n');

  protected defaultConfigHtml = `<!-- Default config is set via provider -->`;

  protected defaultConfigTs = [
    `import { ApplicationConfig } from '@angular/core';`,
    `import { RUI_TOAST_DEFAULT_OPTIONS }`,
    `  from '@all-the.rest/mat-extended/toast';`,
    ``,
    `export const appConfig: ApplicationConfig = {`,
    `  providers: [`,
    `    {`,
    `      provide: RUI_TOAST_DEFAULT_OPTIONS,`,
    `      useValue: {`,
    `        duration: 3000,`,
    `        position: 'bottom-start',`,
    `        kind: 'info',`,
    `      },`,
    `    },`,
    `  ],`,
    `};`,
  ].join('\n');

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
