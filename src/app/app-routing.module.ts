import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OutcomeListComponent } from './components/outcome-list/outcome-list.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'outcomes',component:OutcomeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
