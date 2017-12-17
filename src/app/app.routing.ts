import { LoginComponent } from './login/login.component';
import { ContragentComponent } from './contragent/contragent.component';
import { Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AuditorComponent} from './auditor/auditor.component';
import {ClientComponent} from './client/client.component';
import {SupervisorComponent} from './supervisor/supervisor.component';
import {MainComponent} from './main/main.component';
import {EnsureAuthorized} from './routing/EnsureAuthorized';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Contragent',
    component: ContragentComponent,
    canActivate: [EnsureAuthorized]
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [EnsureAuthorized]
  },
  {
    path: 'Auditor',
    component: AuditorComponent,
    canActivate: [EnsureAuthorized]
  },
  {
    path: 'Client',
    component: ClientComponent,
    canActivate: [EnsureAuthorized]
  },
  {
    path: 'Supervisor',
    component: SupervisorComponent,
    canActivate: [EnsureAuthorized]
  }
];
