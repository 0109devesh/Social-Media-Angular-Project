import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],

})
export class SharedModule { }
