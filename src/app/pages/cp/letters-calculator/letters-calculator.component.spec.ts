import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCalculatorComponent } from './letters-calculator.component';

describe('LettersCalculatorComponent', () => {
  let component: LettersCalculatorComponent;
  let fixture: ComponentFixture<LettersCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
