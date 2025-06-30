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
        path: 'assignments',
        loadComponent: () => {
            return import('./pages/assignments/assignments.component').then((m) => m.AssignmentsComponent)
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
            return import('./pages/cp/destination-search/destination-search.component').then((m) => m.DestinationSearchComponent)
        },
    },
    {
        path: 'simple-todo',
        loadComponent: () => {
            return import('./pages/cp/simple-todo/simple-todo.component').then((m) => m.SimpleTodoComponent)
        },
    },
    {
        path: 'cash-withdrawal',
        loadComponent: () => {
            return import('./pages/cp/cash-withdrawal/cash-withdrawal.component').then((m) => m.CashWithdrawalComponent)
        },
    },
    {
        path: 'gsearch-suggestions',
        loadComponent: () => {
            return import('./pages/cp/gsearch-suggestions/gsearch-suggestions.component').then((m) => m.GsearchSuggestionsComponent)
        },
    }
    
];
