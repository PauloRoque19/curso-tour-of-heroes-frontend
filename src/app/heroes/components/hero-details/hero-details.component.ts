import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id =  this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(Number(id)).subscribe(hero => {
      this.hero = hero;
    })
  }

  goBack(): void {
    this.location.back();
  }

}
