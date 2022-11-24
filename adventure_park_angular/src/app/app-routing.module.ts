import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './template/main/main.component';
import { FailureComponent } from './template/failure/failure.component';

const routes: Routes = [
    {
	path: 'inicio',
	component: MainComponent 
    },
    {
	path: '',
	pathMatch: 'full',
	redirectTo: '/inicio'
    },
    {
	path: 'security',
	loadChildren: ()=>import('./modules/security/security.module').then(x=>x.SecurityModule)
    },
    {
	path: 'administration',
	loadChildren: ()=>import('./modules/administration/administration.module').then(x=>x.AdministrationModule)
    },
    {
	path: 'plans',
	loadChildren: ()=>import('./modules/plans/plans.module').then(x=>x.PlansModule)
    },
    {
	path: '**',
	component: FailureComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
