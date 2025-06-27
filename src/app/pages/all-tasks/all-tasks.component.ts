import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-tasks',
  imports: [RouterLink],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
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
}
