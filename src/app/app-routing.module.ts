import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElaSummaryComponent } from './ela-summary/ela-summary.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '**',
    redirectTo: '/ela-summary'},
    { path: 'ela-summary', component: ElaSummaryComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
