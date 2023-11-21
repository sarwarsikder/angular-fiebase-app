import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAuthManuComponent } from './after-auth-manu.component';

describe('AfterAuthManuComponent', () => {
  let component: AfterAuthManuComponent;
  let fixture: ComponentFixture<AfterAuthManuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterAuthManuComponent]
    });
    fixture = TestBed.createComponent(AfterAuthManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
