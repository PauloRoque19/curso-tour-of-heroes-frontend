import { ConfirmationDialogComponent } from './../../../core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from './../../../core/models/dialog-data.model';
import { HeroService } from '../../../core/services/hero.service';

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';

import { MessageService } from '../../../core/services/message.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  displayedColumns: string [] = ['id','name', 'actions'];

  constructor(private dialog: MatDialog,private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll().subscribe((resul)=>{
      this.heroes = resul;
    });
  }

  delete(hero: Hero): void {

    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.heroService.delete(hero).subscribe(() => {
          this.getHeroes();
        })
      }
    });

  }

  onSelected(hero: Hero): void {
    this.delete(hero);
  }
}
