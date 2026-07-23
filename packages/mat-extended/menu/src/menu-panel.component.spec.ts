import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiMenuPanel } from './menu-panel.component';
import type { RuiMenuItem } from './menu.types';

describe('RuiMenuPanel', () => {
  let fixture: ComponentFixture<RuiMenuPanel>;
  let component: RuiMenuPanel;

  const handler = vi.fn();
  const testItems: RuiMenuItem[] = [
    { label: 'Item 1', handler },
    { label: 'Item 2', icon: '✎' },
    { separator: true } as RuiMenuItem,
    { label: 'Item 3', disabled: true, handler: vi.fn() },
    { label: 'Item 4', children: [{ label: 'Sub' }] },
  ];

  beforeEach(async () => {
    handler.mockClear();

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RuiMenuPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(RuiMenuPanel);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', testItems);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component host has role="menu"', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('menu');
  });

  it('renders menu items from config, skipping separators', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    expect(buttons.length).toBe(4);
  });

  it('renders separator divs', () => {
    const separators = fixture.nativeElement.querySelectorAll('.rui-menu-separator');
    expect(separators.length).toBe(1);
  });

  it('renders item labels', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    expect(buttons[0].textContent).toContain('Item 1');
    expect(buttons[1].textContent).toContain('Item 2');
  });

  it('renders icons when provided', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    const iconSpan = buttons[1].querySelector('.rui-menu-item__icon');
    expect(iconSpan).toBeTruthy();
    expect(iconSpan.textContent).toBe('✎');
  });

  it('renders sub-arrow for items with children', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    const subArrow = buttons[3].querySelector('.rui-menu-item__sub-arrow');
    expect(subArrow).toBeTruthy();
    expect(subArrow.textContent).toBe('›');
  });

  it('disabled item has disabled attribute and --disabled class', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    // Index 2 corresponds to "Item 3" (after separator, which is idx 2 but button count is offset)
    // Items: Item1(0), Item2(1), Item3(2, disabled), Item4(3)
    const disabledBtn = buttons[2];
    expect(disabledBtn.disabled).toBe(true);
    expect(disabledBtn.classList.contains('rui-menu-item--disabled')).toBe(true);
  });

  it('item click selects item', () => {
    const spy = vi.fn();
    component.selectedItem.subscribe(spy);

    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    buttons[0].click();
    expect(spy).toHaveBeenCalledWith(testItems[0]);
  });

  it('disabled item does not trigger onSelect', () => {
    const spy = vi.fn();
    component.selectedItem.subscribe(spy);

    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    buttons[2].click();
    expect(spy).not.toHaveBeenCalled();
  });

  it('ArrowDown navigates to next non-disabled item', () => {
    component.activeIndex.set(0);
    component.onArrowDown();
    expect(component.activeIndex()).toBe(1);
  });

  it('ArrowDown skips disabled items', () => {
    component.activeIndex.set(1);
    component.onArrowDown(); // should skip separator (idx 2) and Item3 idx 3 (disabled)
    // After Item2(idx1): idx2=separator(skip), idx3=disabled(skip), idx4=Item4(OK)
    // Actually let me trace:
    // items: Item1(0), Item2(1), Item3(disabled), Item4(2)
    // Wait, the items array is: [Item1, Item2, separator, Item3(disabled), Item4(children)]
    // So the filter loop: start at idx=1, next=2 -> separator, skip. next=3 -> disabled, skip. next=4 -> Item4, OK
    expect(component.activeIndex()).toBe(4);
  });

  it('ArrowDown wraps around', () => {
    component.activeIndex.set(4); // Item 4
    component.onArrowDown(); // wraps to 0 (Item 1)
    expect(component.activeIndex()).toBe(0);
  });

  it('ArrowUp navigates to previous non-disabled item', () => {
    component.activeIndex.set(4);
    component.onArrowUp();
    expect(component.activeIndex()).toBe(1); // skip idx 3 (disabled), idx 2 (separator)
  });

  it('ArrowUp wraps around', () => {
    component.activeIndex.set(0);
    component.onArrowUp(); // wraps to last non-separator, non-disabled item
    expect(component.activeIndex()).toBe(4);
  });

  it('mouseenter sets activeIndex', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    buttons[1].dispatchEvent(new MouseEvent('mouseenter'));
    expect(component.activeIndex()).toBe(1);
  });

  it('items have role="menuitem"', () => {
    const items = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    items.forEach((btn: Element) => {
      expect(btn.getAttribute('role')).toBe('menuitem');
    });
  });

  it('active item has tabindex="0", others have tabindex="-1"', () => {
    component.activeIndex.set(1);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button[role="menuitem"]');
    expect(buttons[1].getAttribute('tabindex')).toBe('0');
    expect(buttons[0].getAttribute('tabindex')).toBe('-1');
    expect(buttons[2].getAttribute('tabindex')).toBe('-1');
  });

  it('emits closePanel on escape keydown via host', () => {
    const spy = vi.fn();
    component.closePanel.subscribe(spy);
    fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(spy).toHaveBeenCalled();
  });
});
