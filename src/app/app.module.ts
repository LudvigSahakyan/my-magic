import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarModule } from './bar/bar.module';
import { CardsModule } from './cards/cards.module';
import { DeckModule } from './deck/deck.module';
import { AppRoutingModule } from './app-routing.module';
import { FooComponent } from './foo/foo.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BarModule,
    CardsModule,
    DeckModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
