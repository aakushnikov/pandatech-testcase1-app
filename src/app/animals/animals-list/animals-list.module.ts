import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AnimalsListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AnimalsListModule { }
