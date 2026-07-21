import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-snackbar-basic',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, ShowcaseCode],
  template: `
    <section id="snackbar-basic" class="mb-8">
      <h2 id="snackbar-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Snackbar</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">A simple snackbar with a text message that auto-dismisses after a few seconds.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-2 flex-wrap items-center">
        <button mat-raised-button color="primary" (click)="openSnackbar()">Show Snackbar</button>
      </div>

      <rui-showcase-code
        html="<button mat-raised-button color=&quot;primary&quot; (click)=&quot;openSnackbar()&quot;>Show Snackbar</button>"
        ts="import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

readonly #snackbar = inject(MatSnackBar);

openSnackbar(): void {
  this.#snackbar.open('Item saved successfully', 'Close', { duration: 3000 });
}

// In component imports: [MatSnackBarModule, MatButtonModule]"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarBasic {
  readonly #snackbar = inject(MatSnackBar);

  openSnackbar(message = 'This is a snackbar message'): void {
    this.#snackbar.open(message, undefined, { duration: 3000 });
  }
}
