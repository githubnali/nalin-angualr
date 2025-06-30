import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gsearch-suggestions',
  imports: [FormsModule],
  templateUrl: './gsearch-suggestions.component.html',
  styleUrl: './gsearch-suggestions.component.scss'
})
export class GsearchSuggestionsComponent {
  searchTerm: string = '';

  suggestionsList = [
    {id: 1, suggestion: 'Price of Ethereum'},
    {id: 2, suggestion: 'Oculus Quest 2 specs'},
    {id: 3, suggestion: 'Tesla Share Price'},
    {id: 4, suggestion: 'Price of Ethereum today'},
    {id: 5, suggestion: 'Latest trends in AI'},
    {id: 6, suggestion: 'Latest trends in ML'},
    { id: 7, suggestion: "React tutorial" },
    { id: 8, suggestion: "React useState" },
    { id: 9, suggestion: "React Router" },
    { id: 10, suggestion: "React Hooks" },
    { id: 11, suggestion: "Redux toolkit" },
    { id: 12, suggestion: "JavaScript map function" },
    { id: 13, suggestion: "JavaScript array methods" },
    { id: 14, suggestion: "Node.js express" },
    { id: 15, suggestion: "CSS Flexbox" },
    { id: 16, suggestion: "CSS Grid" },
    { id: 17, suggestion: "HTML5 semantic tags" },
    { id: 18, suggestion: "How to center a div" },
    { id: 19, suggestion: "TypeScript basics" },
    { id: 20, suggestion: "Async await in JavaScript" }
  ]

  get filteredGSuggestions() {
    return this.suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())   
  );
  } 


  onClickSuggestion(id: number): void {
    const selectedSuggestion = this.suggestionsList.find(suggestion => suggestion.id === id);
    if (selectedSuggestion) {
      this.searchTerm = selectedSuggestion.suggestion;
    }
  }
}
