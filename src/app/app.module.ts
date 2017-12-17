import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import {profileReducer}  from './reducers/ProfileReducer';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api/api.service';
import { CashData } from './cash/cash';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContragentComponent } from './contragent/contragent.component';
import { ROUTES } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { AuditorComponent } from './auditor/auditor.component';
import { ClientComponent } from './client/client.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { MainComponent } from './main/main.component';

import { ClientAuthorized } from './routing/ClientAuthorized';
import { AdminAuthorized } from './routing/AdminAuthorized';
import { AuditorAuthorized } from './routing/AuditorAuthorized';
import { ContragentAuthorized } from './routing/ContragentAuthorized';
import { SupervisorAuthorized } from './routing/SupervisorAuthorized';
import { EnsureAuthorized } from './routing/EnsureAuthorized';
import { UserService } from './services/user/user.service';
import { UserProfileResolver } from './routing/UserProfileResolver';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContragentComponent,
    AdminComponent,
    AuditorComponent,
    ClientComponent,
    SupervisorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({profile: profileReducer})
  ],
  providers: [
    AuthService,
    UserService,
    ApiService,
    CashData,
    ClientAuthorized,
    ContragentAuthorized,
    AuditorAuthorized,
    AdminAuthorized,
    SupervisorAuthorized,
    EnsureAuthorized,
    UserProfileResolver
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

//!!!дефект - на мобильных устройствах пропадают пункты меню - простетировать и отладить этот момент
//https://www.youtube.com/watch?v=f97ICOaekNU
