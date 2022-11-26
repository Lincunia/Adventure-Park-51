import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './identification/admin/admin.component';
import { CommonComponent } from './identification/common/common.component';
import { RegisterComponent } from './register/register.component';
import { KeyRecoveryComponent } from './key-recovery/key-recovery.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    {path: 'identify-common', component: CommonComponent},
    {path: 'identify-rare', component: AdminComponent},
    {path: 'new-one', component: RegisterComponent},
    {path: 'key-recovery', component: KeyRecoveryComponent},
    {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
