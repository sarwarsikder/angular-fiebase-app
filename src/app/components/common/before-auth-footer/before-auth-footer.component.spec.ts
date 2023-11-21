import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAuthFooterComponent } from './before-auth-footer.component';

describe('BeforeAuthFooterComponent', () => {
  let component: BeforeAuthFooterComponent;
  let fixture: ComponentFixture<BeforeAuthFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeAuthFooterComponent]
    });
    fixture = TestBed.createComponent(BeforeAuthFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
