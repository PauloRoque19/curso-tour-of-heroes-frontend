import { SharedModule } from './../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeroesComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HeroesModule { }
