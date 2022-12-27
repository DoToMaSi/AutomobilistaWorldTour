import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ], exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})

export class CoreModule { }
