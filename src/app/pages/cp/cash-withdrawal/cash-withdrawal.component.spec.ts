import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashWithdrawalComponent } from './cash-withdrawal.component';

describe('CashWithdrawalComponent', () => {
  let component: CashWithdrawalComponent;
  let fixture: ComponentFixture<CashWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashWithdrawalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
