import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-todo',
  imports: [],
  templateUrl: './simple-todo.component.html',
  styleUrl: './simple-todo.component.scss'
})
export class SimpleTodoComponent {
  initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]
  
  deleteTodo(id: number): void {
    this.initialTodosList = this.initialTodosList.filter(todo => todo.id !== id)
  }
}
