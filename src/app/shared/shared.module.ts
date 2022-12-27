import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastUtils } from './utils/toast.utils';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ToastUtils
  ]
})

export class SharedModule { }
