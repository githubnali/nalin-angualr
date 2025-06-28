import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HeaderComponent, FooterComponent],
  template: `
   <app-header/>
   <main>
     <router-outlet/>
   </main>
   <app-footer/>
  `,
  styles: [
    `
      main {
        max-width: 1000px;
        margin: 50px auto;
      }
    `
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
