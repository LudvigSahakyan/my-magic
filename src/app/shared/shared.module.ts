import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
