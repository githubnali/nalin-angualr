import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-destination-search',
  imports: [FormsModule],
  templateUrl: './destination-search.component.html',
  styleUrl: './destination-search.component.scss'
})
export class DestinationSearchComponent {

  searchTerm: string = ''

  destinationsList = [
    {
      id: 1,
      name: 'Melaka Mosque',
      imgUrl: '/assets/img/destination-list/melaka-mosque-img.png',
    },
    {
      id: 2,
      name: 'Shrubland',
      imgUrl: '/assets/img/destination-list/shrubland-img.png',
    },
    {
      id: 3,
      name: 'New York',
      imgUrl: '/assets/img/destination-list/new-york-img.png',
    },
    {
      id: 4,
      name: 'Escarpment',
      imgUrl: '/assets/img/destination-list/escarpment-img.png',
    },
    {
      id: 5,
      name: 'Westminster Abbey',
      imgUrl:
        '/assets/img/destination-list/westminster-abbey-img.png',
    },
    {
      id: 6,
      name: 'South Downs National Park',
      imgUrl:
        '/assets/img/destination-list/south-downs-national-park-img.png',
    },
    {
      id: 7,
      name: 'National Historic Site',
      imgUrl:
        '/assets/img/destination-list/national-historic-site-img.png',
    },
    {
      id: 8,
      name: 'Tower Bridge',
      imgUrl: '/assets/img/destination-list/tower-bridge-img.png',
    },
    {
      id: 9,
      name: 'Arc Here',
      imgUrl: '/assets/img/destination-list/arc-here-img.png',
    },
    {
      id: 10,
      name: 'Steeple',
      imgUrl: '/assets/img/destination-list/steeple-img.png',
    },
    {
      id: 11,
      name: 'Glaciokarst',
      imgUrl: '/assets/img/destination-list/glaciokarst-img.png',
    },
    {
      id: 12,
      name: 'Parco Nazionale delle Cinque Terre',
      imgUrl:
        '/assets/img/destination-list/parco-nazionale-delle-cinque-terre-img.png',
    },
  ]

  get filteredDestinations() {
    return this.destinationsList.filter(dest => 
      dest.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }
}
