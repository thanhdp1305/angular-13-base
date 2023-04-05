import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestMainComponent } from './guest-main.component';

describe('GuestMainComponent', () => {
  let component: GuestMainComponent;
  let fixture: ComponentFixture<GuestMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
