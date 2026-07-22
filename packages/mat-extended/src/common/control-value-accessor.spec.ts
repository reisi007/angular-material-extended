import { RuiValueAccessor } from './control-value-accessor';

class TestAccessor extends RuiValueAccessor<string> {
  triggerChange(value: string): void {
    this.markAsChanged(value);
  }

  triggerTouch(): void {
    this.markAsTouched();
  }
}

describe('RuiValueAccessor', () => {
  let accessor: TestAccessor;

  beforeEach(() => {
    accessor = new TestAccessor();
  });

  it('should default value to undefined', () => {
    expect(accessor.value).toBeUndefined();
  });

  it('should default disabled to false', () => {
    expect(accessor.disabled()).toBe(false);
  });

  it('should update value via writeValue', () => {
    accessor.writeValue('test');
    expect(accessor.value).toBe('test');
  });

  it('should call onChange when markAsChanged is triggered', () => {
    let changed: string | undefined;
    accessor.registerOnChange((v) => (changed = v));
    accessor.triggerChange('hello');
    expect(changed).toBe('hello');
    expect(accessor.value).toBe('hello');
  });

  it('should call onTouched when markAsTouched is triggered', () => {
    let touched = false;
    accessor.registerOnTouched(() => (touched = true));
    accessor.triggerTouch();
    expect(touched).toBe(true);
  });

  it('should update disabled state via setDisabledState', () => {
    accessor.setDisabledState(true);
    expect(accessor.disabled()).toBe(true);
  });

  it('should update signal value and onChange together', () => {
    let changed: string | undefined;
    accessor.registerOnChange((v) => (changed = v));
    accessor.triggerChange('world');
    expect(accessor.value).toBe('world');
    expect(changed).toBe('world');
  });
});
