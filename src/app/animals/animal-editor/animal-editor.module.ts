import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalEditorComponent } from './animal-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AnimalEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AnimalEditorModule { }
