import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showAllTAsks: boolean = false;

  popularTaskList = [
    {
      id: 1,
      gif: '/assets/img/popular-tasks/destination-search.gif',
      name: 'Destination Search',
      description: 'Search and filter popular destinations by typing keywords dynamically.',
      path: '/destination-search'
    },
    {
      id: 2,
      gif: '/assets/img/popular-tasks/simple-todos.gif',
      name: 'Simple Todos',
      description: "Add, complete, and delete daily tasks using a todo list.",
      path: '/simple-todo'
    },
    {
      id: 3,
      gif: '/assets/img/popular-tasks/cash-withdrawal.gif',
      name: 'Cash Withdrawal',
      description: "Withdraw money by selecting denominations with real-time balance",
      path: '/cash-withdrawal'
    }, 
    {
      id: 4,
      gif: '/assets/img/popular-tasks/gsearch-suggestion.gif',
      name: 'G-Search Suggestions',
      description: "Display live suggestions as user types, mimicking Google search behavior.",
      path: '/gsearch-suggestions'
    },
    {
      id: 5,
      gif: '/assets/img/popular-tasks/letters-cal.gif',
      name: 'Letters Calculator',
      description: "Calculate the number of letters in a given text, updating dynamically.",
      path: '/letters-calculator'
    },
  ]
  // homeMessage = signal('Hello World')

  // keyUpHAndler(event: KeyboardEvent) {
  //   console.log(`user pressed ${event.key}`)
  // }

  get visibleTaskList() {
    return this.showAllTAsks ? this.popularTaskList : this.popularTaskList.slice(0, 3);
  }

  toggleShowAll() {
    this.showAllTAsks = !this.showAllTAsks;
  }
}


