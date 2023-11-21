import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAuthComponent } from './before-auth.component';

describe('BeforeAuthComponent', () => {
  let component: BeforeAuthComponent;
  let fixture: ComponentFixture<BeforeAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeAuthComponent]
    });
    fixture = TestBed.createComponent(BeforeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
