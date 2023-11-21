import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAuthComponent } from './after-auth.component';

describe('AfterAuthComponent', () => {
  let component: AfterAuthComponent;
  let fixture: ComponentFixture<AfterAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterAuthComponent]
    });
    fixture = TestBed.createComponent(AfterAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
