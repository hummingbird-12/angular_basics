// Component symbol is always imported from Angular core library
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// @Component : decor function with metadata of the component
@Component({
  selector: 'app-heroes',                   /* component's CSS element selector */
  templateUrl: './heroes.component.html',   /* component's template file */
  styleUrls: ['./heroes.component.css']     /* component's private CSS styles */
})

// Always export the component class
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // lifecycle hook, called shortly after creating the component
  ngOnInit() {
  }

}
