import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  public selectedHero: Hero;

  public heroObject = 'singh is king';
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: 'Radhaswami'
  };





  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
