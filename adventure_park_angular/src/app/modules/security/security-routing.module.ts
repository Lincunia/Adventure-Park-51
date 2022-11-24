import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './identification/identification.component';
import { KeyChangeComponent } from './key-change/key-change.component'
import { KeyRecoveryComponent } from './key-recovery/key-recovery.component'
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
    { path: 'identificar', component: IdentificationComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'cambiar-clave', component: KeyChangeComponent },
    { path: 'recuperar-clave', component: KeyRecoveryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityRoutingModule { }
