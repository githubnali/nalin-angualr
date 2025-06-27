import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'api',
        loadComponent: () => {
            return import('./pages/jobby-app/jobby-app.component').then((m) => m.JobbyAppComponent)
        }
    },
    {
        path: 'tasks',
        loadComponent: () => {
            return import('./pages/all-tasks/all-tasks.component').then((m) => m.AllTasksComponent)
        }
    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos.component').then((m) => m.TodosComponent)
        },
    },
    {
        path: 'destination-search',
        loadComponent: () => {
            return import('./pages/destination-search/destination-search.component').then((m) => m.DestinationSearchComponent)
        },
    },
    {
        path: 'simple-todo',
        loadComponent: () => {
            return import('./pages/simple-todo/simple-todo.component').then((m) => m.SimpleTodoComponent)
        },
    },
    {
        path: 'cash-withdrawal',
        loadComponent: () => {
            return import('./pages/cash-withdrawal/cash-withdrawal.component').then((m) => m.CashWithdrawalComponent)
        },
    }
    
];
