import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from 'components/first/first.component';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [FirstComponent]
})
export class ComponentsModule { }
