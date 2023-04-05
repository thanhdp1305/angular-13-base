import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastTemplateComponent } from './toast-template.component';

describe('ToastTemplateComponent', () => {
  let component: ToastTemplateComponent;
  let fixture: ComponentFixture<ToastTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
