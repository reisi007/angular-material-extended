import { Component, ChangeDetectionStrategy, signal, type WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule, moveItemInArray, type CdkDragDrop } from '@angular/cdk/drag-drop';
import { ShowcaseCode } from '../../shared/showcase-code';

@Component({
  selector: 'rui-multi-select-demo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    DragDropModule,
    ShowcaseCode,
  ],
  template: `
<div class="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
  <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Multi-Select</h1>
  <div class="pt-4 space-y-8">
    <section id="signal-forms">
      <h2 id="signal-forms" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Signal Forms (options order)</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Items appear in the same order as the dropdown options.</p>
      <mat-card>
        <mat-card-content class="space-y-3 pt-4">
          <mat-form-field class="w-full">
            <mat-label>Select fruits</mat-label>
            <mat-select
              [value]="selectedFruits()"
              (selectionChange)="onSignalSelectionChange($event)"
              multiple>
              <mat-select-trigger>
                <mat-chip-set>
                  @for (fruit of selectedFruits(); track fruit) {
                    <mat-chip
                      (removed)="removeSignalFruit(fruit)">
                      {{ fruit }}
                      <mat-icon matChipRemove>cancel</mat-icon>
                    </mat-chip>
                  }
                </mat-chip-set>
              </mat-select-trigger>
              @for (fruit of fruits; track fruit) {
                <mat-option [value]="fruit">{{ fruit }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
            Selected: {{ selectedFruits() | json }}
          </p>
        </mat-card-content>
      </mat-card>
      <rui-showcase-code [html]="optionsOrderHtmlCode" [ts]="optionsOrderTsCode" />
    </section>

    <section id="reactive-forms">
      <h2 id="reactive-forms" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Reactive Forms (selection order + drag reorder)</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Items keep selection order and can be reordered by dragging the chips.</p>
      <mat-card>
        <mat-card-content class="space-y-3 pt-4">
          <mat-form-field class="w-full">
            <mat-label>Select fruits</mat-label>
            <mat-select
              [formControl]="reactiveFruitsControl"
              (selectionChange)="onReactiveSelectionChange($event)"
              multiple>
              <mat-select-trigger>
                <mat-chip-set
                  cdkDropList
                  cdkDropListOrientation="horizontal"
                  (cdkDropListDropped)="onReactiveDrop($event)">
                  @for (fruit of reactiveFruitsControl.value ?? []; track fruit) {
                    <mat-chip
                      cdkDrag
                      (removed)="removeReactiveFruit(fruit)">
                      {{ fruit }}
                      <mat-icon matChipRemove>cancel</mat-icon>
                    </mat-chip>
                  }
                </mat-chip-set>
              </mat-select-trigger>
              @for (fruit of fruits; track fruit) {
                <mat-option [value]="fruit">{{ fruit }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
            Selected: {{ reactiveFruitsControl.value | json }}
          </p>
        </mat-card-content>
      </mat-card>
      <rui-showcase-code [html]="reactiveHtmlCode" [ts]="reactiveTsCode" />
    </section>
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectDemo {
  readonly fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  readonly selectedFruits: WritableSignal<string[]> = signal<string[]>(['Apple', 'Banana']);

  readonly reactiveFruitsControl = new FormControl<string[]>([]);
  readonly selectionOrder: WritableSignal<string[]> = signal<string[]>([]);

  private _previousReactiveValue: string[] = [];

  onSignalSelectionChange(event: MatSelectChange): void {
    this.selectedFruits.set(event.value as string[]);
  }

  removeSignalFruit(fruit: string): void {
    this.selectedFruits.update(fruits => fruits.filter(f => f !== fruit));
  }

  onReactiveSelectionChange(event: MatSelectChange): void {
    const old = this._previousReactiveValue;
    const next = event.value as string[];

    const removed = old.filter(f => !next.includes(f));
    const added = next.filter(f => !old.includes(f));

    this.selectionOrder.update(order => {
      order = order.filter(f => !removed.includes(f));
      return [...order, ...added];
    });

    const ordered = this.selectionOrder().filter(f => next.includes(f));
    this.reactiveFruitsControl.setValue(ordered, { emitEvent: false });
    this._previousReactiveValue = [...ordered];
  }

  onReactiveDrop(event: CdkDragDrop<string[]>): void {
    const arr = [...(this.reactiveFruitsControl.value ?? [])];
    const item = arr[event.previousIndex];
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.reactiveFruitsControl.setValue(arr, { emitEvent: false });
    this._previousReactiveValue = [...arr];

    if (item) {
      const order = [...this.selectionOrder()];
      const idx = order.indexOf(item);
      if (idx >= 0) {
        moveItemInArray(order, idx, event.currentIndex);
        this.selectionOrder.set(order);
      }
    }
  }

  removeReactiveFruit(fruit: string): void {
    const next = (this.reactiveFruitsControl.value ?? []).filter(f => f !== fruit);
    this.reactiveFruitsControl.setValue(next);
    this.selectionOrder.update(order => order.filter(f => f !== fruit));
    this._previousReactiveValue = [...next];
  }

  protected optionsOrderHtmlCode = [
    `<mat-form-field>`,
    `  <mat-label>Select fruits</mat-label>`,
    `  <mat-select`,
    `    [value]="selectedFruits()"`,
    `    (selectionChange)="onSelectionChange($event)"`,
    `    multiple>`,
    `    <mat-select-trigger>`,
    `      <mat-chip-set>`,
    `        @for (fruit of selectedFruits(); track fruit) {`,
    `          <mat-chip`,
    `            (removed)="removeFruit(fruit)">`,
    `            {{ fruit }}`,
    `            <mat-icon matChipRemove>cancel</mat-icon>`,
    `          </mat-chip>`,
    `        }`,
    `      </mat-chip-set>`,
    `    </mat-select-trigger>`,
    `    @for (fruit of fruits; track fruit) {`,
    `      <mat-option [value]="fruit">{{ fruit }}</mat-option>`,
    `    }`,
    `  </mat-select>`,
    `</mat-form-field>`,
  ].join('\n');

  protected optionsOrderTsCode = [
    `  readonly selectedFruits = signal<string[]>(['Apple', 'Banana']);`,
    ``,
    `  onSelectionChange(event: MatSelectChange): void {`,
    `    this.selectedFruits.set(event.value as string[]);`,
    `  }`,
    ``,
    `  removeFruit(fruit: string): void {`,
    `    this.selectedFruits.update(fruits => fruits.filter(f => f !== fruit));`,
    `  }`,
  ].join('\n');

  protected reactiveHtmlCode = [
    `<mat-form-field>`,
    `  <mat-label>Select fruits</mat-label>`,
    `  <mat-select`,
    `    [formControl]="fruitsControl"`,
    `    (selectionChange)="onSelectionChange($event)"`,
    `    multiple>`,
    `    <mat-select-trigger>`,
    `      <mat-chip-set`,
    `        cdkDropList`,
    `        cdkDropListOrientation="horizontal"`,
    `        (cdkDropListDropped)="onDrop($event)">`,
    `        @for (fruit of fruitsControl.value ?? []; track fruit) {`,
    `          <mat-chip`,
    `            cdkDrag`,
    `            (removed)="removeFruit(fruit)">`,
    `            {{ fruit }}`,
    `            <mat-icon matChipRemove>cancel</mat-icon>`,
    `          </mat-chip>`,
    `        }`,
    `      </mat-chip-set>`,
    `    </mat-select-trigger>`,
    `    @for (fruit of fruits; track fruit) {`,
    `      <mat-option [value]="fruit">{{ fruit }}</mat-option>`,
    `    }`,
    `  </mat-select>`,
    `</mat-form-field>`,
  ].join('\n');

  protected reactiveTsCode = [
    `  readonly fruitsControl = new FormControl<string[]>([]);`,
    `  readonly selectionOrder = signal<string[]>([]);`,
    ``,
    `  onSelectionChange(event: MatSelectChange): void {`,
    `    const old = this.fruitsControl.value ?? [];`,
    `    const next = event.value as string[];`,
    `    const removed = old.filter(f => !next.includes(f));`,
    `    const added = next.filter(f => !old.includes(f));`,
    ``,
    `    this.selectionOrder.update(order => {`,
    `      order = order.filter(f => !removed.includes(f));`,
    `      return [...order, ...added];`,
    `    });`,
    ``,
    `    this.fruitsControl.setValue(`,
    `      this.selectionOrder().filter(f => next.includes(f)),`,
    `      { emitEvent: false },`,
    `    );`,
    `  }`,
    ``,
    `  onDrop(event: CdkDragDrop<string[]>): void {`,
    `    const arr = [...(this.fruitsControl.value ?? [])];`,
    `    const item = arr[event.previousIndex];`,
    `    moveItemInArray(arr, event.previousIndex, event.currentIndex);`,
    `    this.fruitsControl.setValue(arr, { emitEvent: false });`,
    ``,
    `    if (item) {`,
    `      const order = [...this.selectionOrder()];`,
    `      const idx = order.indexOf(item);`,
    `      if (idx >= 0) {`,
    `        moveItemInArray(order, idx, event.currentIndex);`,
    `        this.selectionOrder.set(order);`,
    `      }`,
    `    }`,
    `  }`,
    ``,
    `  removeFruit(fruit: string): void {`,
    `    const next = (this.fruitsControl.value ?? []).filter(f => f !== fruit);`,
    `    this.fruitsControl.setValue(next);`,
    `    this.selectionOrder.update(order => order.filter(f => f !== fruit));`,
    `  }`,
  ].join('\n');
}
