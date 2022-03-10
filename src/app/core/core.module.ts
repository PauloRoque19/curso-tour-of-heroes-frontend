import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessageComponent } from './components/message/message.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';




const COMPONENTS = [
  ToolbarComponent,
  MessageComponent,
  PageNotFoundComponent
];

const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule
]


@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, CommonModule],
  exports: [COMPONENTS,MODULES]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule.')
    }
  }
}
