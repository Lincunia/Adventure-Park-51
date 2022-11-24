import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePlanComponent } from './create-plan/create-plan.component';
import { GetPlanComponent } from './get-plan/get-plan.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { DeletePlanComponent } from './delete-plan/delete-plan.component';
import { MainPlanComponent } from './main-plan/main-plan.component';

const routes: Routes = [
    { path: 'reservar', component: CreatePlanComponent },
    { path: 'obtener', component: GetPlanComponent },
    { path: 'desechar', component: UpdatePlanComponent },
    { path: 'editar', component: UpdatePlanComponent },
    { path: 'principal', component: MainPlanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
