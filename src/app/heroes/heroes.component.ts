// Component symbol is always imported from Angular core library
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// @Component : decor function with metadata of the component
@Component({
  selector: 'app-heroes',                   /* component's CSS element selector */
  templateUrl: './heroes.component.html',   /* component's template file */
  styleUrls: [ './heroes.component.css' ]     /* component's private CSS styles */
})

// Always export the component class
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  constructor(private heroService: HeroService) {
  }

  // Lifecycle hook, called shortly after creating the component
  ngOnInit() {
    this.getHeroes();
  }

}
