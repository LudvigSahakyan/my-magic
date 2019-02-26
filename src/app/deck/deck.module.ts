import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck.component';

@NgModule({
  declarations: [DeckComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DeckComponent
  ]
})
export class DeckModule { }
