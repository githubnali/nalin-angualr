import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-letters-calculator',
  imports: [FormsModule],
  templateUrl: './letters-calculator.component.html',
  styleUrl: './letters-calculator.component.scss'
})
export class LettersCalculatorComponent {
  enterInput: string = '';
  wordsCount: number = 0;

  calculateCounts(): void {
    // Count all non-whitespace characters (letters, digits, symbols)
    const nonSpaceChars = this.enterInput.replace(/\s/g, '');
    this.wordsCount = nonSpaceChars.length;
  }
}
