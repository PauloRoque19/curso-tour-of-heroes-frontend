import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: '', component:  HeroesComponent},
  { path: ':id', component: HeroDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HeroesRoutingModule { }
