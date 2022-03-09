import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
