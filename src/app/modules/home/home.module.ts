import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'components/components.module';

const routes: Routes = [
  { path: ":id", component: HomeContentComponent },
  { path: "", component: HomeContentComponent },
];
  
@NgModule({
  declarations: [
    HomeContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule
  ],
  exports: []
})
export class HomeModule { }
