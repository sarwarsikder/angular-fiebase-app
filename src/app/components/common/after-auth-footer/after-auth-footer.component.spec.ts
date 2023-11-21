import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAuthFooterComponent } from './after-auth-footer.component';

describe('AfterAuthFooterComponent', () => {
  let component: AfterAuthFooterComponent;
  let fixture: ComponentFixture<AfterAuthFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterAuthFooterComponent]
    });
    fixture = TestBed.createComponent(AfterAuthFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
