import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-withdrawal',
  imports: [],
  templateUrl: './cash-withdrawal.component.html',
  styleUrl: './cash-withdrawal.component.scss'
})
export class CashWithdrawalComponent {
  denominationsList = [
    {
      id: 1,
      value: 50,
    },
    {
      id: 2,
      value: 100,
    },
    {
      id: 3,
      value: 200,
    },
    {
      id: 4,
      value: 500,
    },
  ]

  //initial balance
  initiaBalance: number = 5000;

  addDenomination(value: number): void {
    this.initiaBalance = this.initiaBalance - value
  }
}
