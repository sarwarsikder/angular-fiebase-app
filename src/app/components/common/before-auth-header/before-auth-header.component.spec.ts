import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAuthHeaderComponent } from './before-auth-header.component';

describe('BeforeAuthHeaderComponent', () => {
  let component: BeforeAuthHeaderComponent;
  let fixture: ComponentFixture<BeforeAuthHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeAuthHeaderComponent]
    });
    fixture = TestBed.createComponent(BeforeAuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
