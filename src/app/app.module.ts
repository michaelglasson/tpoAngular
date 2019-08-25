import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QualsComponent } from './quals/quals.component';
import { RolesComponent } from './roles/roles.component';
import { TposComponent } from './tpos/tpos.component';

@NgModule({
  declarations: [
    AppComponent,
    QualsComponent,
    RolesComponent,
    TposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
