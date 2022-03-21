import { HeroService } from './../../../core/services/hero.service';
import { Hero } from './../../../core/models/hero.model';
import { Observable, Subject, switchMap } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  @Input() label = '';

  private searchTerms = new Subject<string>();
  @Output() private selected = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      switchMap(term => this.heroService.search(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    const hero: Hero = selectedItem.option.value;
    this.searchTerms.next('');
    this.selected.emit(hero);
  }

}
