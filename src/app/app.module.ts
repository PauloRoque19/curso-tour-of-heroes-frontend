import { HeroesModule } from './heroes/heroes.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { HeroDetailsComponent } from './heroes/components/hero-details/hero-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //@Angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    //app
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
