import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';
import { KeyRecoveryComponent } from './key-recovery/key-recovery.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './identification/admin/admin.component';
import { CommonComponent } from './identification/common/common.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
	KeyRecoveryComponent,
	LogoutComponent,
	AdminComponent,
	CommonComponent,
	RegisterComponent
    ],
    imports: [
	CommonModule,
	SecurityRoutingModule,
	FormsModule,
	ReactiveFormsModule
    ]
})
export class SecurityModule { }
