import { HeroService } from '../../../core/services/hero.service';

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';

import { MessageService } from '../../../core/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  displayedColumns: string [] = ['id','name']

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((resul)=>{
      this.heroes = resul;
    });
  }
}
