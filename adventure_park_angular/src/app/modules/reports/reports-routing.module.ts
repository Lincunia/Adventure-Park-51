import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairgroundsComponent } from './fairgrounds/fairgrounds.component';

const routes: Routes = [
    {path: 'atracciones', component: FairgroundsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
