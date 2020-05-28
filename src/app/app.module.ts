import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMoviesDirective } from './show-movies.directive';
import { ChangeStyleDirective } from './change-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesDirective,
    ChangeStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
