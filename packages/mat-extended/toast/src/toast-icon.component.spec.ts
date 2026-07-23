import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RuiToastIconComponent } from './toast-icon.component';
import { RuiToastKind } from './toast.types';

describe('RuiToastIconComponent', () => {
  let fixture: ComponentFixture<RuiToastIconComponent>;

  function create(kind: RuiToastKind): void {
    fixture.componentRef.setInput('kind', kind);
    fixture.detectChanges();
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RuiToastIconComponent],
    });
    fixture = TestBed.createComponent(RuiToastIconComponent);
    fixture.detectChanges();
  });

  it('should render an SVG for info kind', () => {
    create('info');
    const iconSpan = fixture.nativeElement.querySelector('.rui-toast-icon');
    expect(iconSpan.innerHTML).toContain('svg');
    expect(iconSpan.innerHTML).toContain('circle');
  });

  it('should render an SVG for success kind', () => {
    create('success');
    const iconSpan = fixture.nativeElement.querySelector('.rui-toast-icon');
    expect(iconSpan.innerHTML).toContain('svg');
    expect(iconSpan.innerHTML).toContain('polyline');
  });

  it('should render an SVG for error kind', () => {
    create('error');
    const iconSpan = fixture.nativeElement.querySelector('.rui-toast-icon');
    expect(iconSpan.innerHTML).toContain('svg');
    expect(iconSpan.innerHTML).toContain('circle');
    expect(iconSpan.innerHTML).toContain('line');
  });

  it('should render an SVG for warning kind', () => {
    create('warning');
    const iconSpan = fixture.nativeElement.querySelector('.rui-toast-icon');
    expect(iconSpan.innerHTML).toContain('svg');
    expect(iconSpan.innerHTML).toContain('path');
  });

  it('should have aria-hidden="true" on icon span', () => {
    create('info');
    const iconSpan = fixture.nativeElement.querySelector('.rui-toast-icon');
    expect(iconSpan.getAttribute('aria-hidden')).toBe('true');
  });

  it('should have the icon CSS class', () => {
    create('info');
    const iconSpan = fixture.nativeElement.querySelector('.rui-toast-icon');
    expect(iconSpan.classList.contains('rui-toast-icon')).toBe(true);
  });
});
