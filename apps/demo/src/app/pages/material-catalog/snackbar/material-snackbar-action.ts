import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-snackbar-action',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, ShowcaseCode],
  template: `
    <section id="snackbar-action" class="mb-8">
      <h2 id="snackbar-action" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Snackbar with Action</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">A snackbar with an action button (Undo) that lets users reverse the last operation.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-2 flex-wrap items-center">
        <button mat-raised-button color="primary" (click)="openSnackbar()">Delete Item</button>
      </div>

      <rui-showcase-code
        html="<button mat-raised-button color=&quot;primary&quot; (click)=&quot;openSnackbar()&quot;>Delete Item</button>"
        ts="import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

readonly #snackbar = inject(MatSnackBar);

openSnackbar(): void {
  const ref = this.#snackbar.open('Item deleted', 'Undo', { duration: 3000 });
  ref.onAction().subscribe(() => {
    // Handle undo logic here
  });
}

// In component imports: [MatSnackBarModule, MatButtonModule]"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarAction {
  readonly #snackbar = inject(MatSnackBar);

  openSnackbar(): void {
    const ref = this.#snackbar.open('Item deleted', 'Undo', { duration: 3000 });
    ref.onAction().subscribe(() => {
      this.#snackbar.open('Undo successful', undefined, { duration: 2000 });
    });
  }
}
