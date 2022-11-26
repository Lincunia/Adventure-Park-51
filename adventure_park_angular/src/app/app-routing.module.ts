import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './templates/main/main.component';
import { ErrorComponent } from './templates/error/error.component';

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
	path: 'normal',
	loadChildren: ()=>import('./modules/parametrization/parametrization.module').then(x=>x.ParametrizationModule)
    },
    {
	path: 'documentation',
	loadChildren: ()=>import('./modules/documentation/documentation.module').then(x=>x.DocumentationModule)
    },
    {
	path: '**',
	component: ErrorComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
