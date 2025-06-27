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

  popularTaskList = [
    {
      id: 1,
      gif: '/assets/img/popular-tasks/destination-search.gif',
      name: 'Destination Search',
      description: 'Search for the nice destinations',
      path: '/destination-search'
    },
    {
      id: 2,
      gif: '/assets/img/popular-tasks/simple-todos.gif',
      name: 'Simple Todos',
      description: "Let's try delete the todos ",
      path: '/simple-todo'
    },
    {
      id: 3,
      gif: '/assets/img/popular-tasks/cash-withdrawal.gif',
      name: 'Cash Withdrawal',
      description: "Let's check the cas withdrawal",
      path: '/cash-withdrawal'
    },  {
      id: 3,
      gif: '/assets/img/popular-tasks/cash-withdrawal.gif',
      name: 'Cash Withdrawal',
      description: "Let's check the cas withdrawal",
      path: '/cash-withdrawal'
    },  {
      id: 3,
      gif: '/assets/img/popular-tasks/cash-withdrawal.gif',
      name: 'Cash Withdrawal',
      description: "Let's check the cas withdrawal",
      path: '/cash-withdrawal'
    },  {
      id: 3,
      gif: '/assets/img/popular-tasks/cash-withdrawal.gif',
      name: 'Cash Withdrawal',
      description: "Let's check the cas withdrawal",
      path: '/cash-withdrawal'
    },
  ]
  homeMessage = signal('Hello World')

  keyUpHAndler(event: KeyboardEvent) {
    console.log(`user pressed ${event.key}`)
  }
}


