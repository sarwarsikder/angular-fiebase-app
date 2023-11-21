import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAuthHeaderComponent } from './after-auth-header.component';

describe('AfterAuthHeaderComponent', () => {
  let component: AfterAuthHeaderComponent;
  let fixture: ComponentFixture<AfterAuthHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterAuthHeaderComponent]
    });
    fixture = TestBed.createComponent(AfterAuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
