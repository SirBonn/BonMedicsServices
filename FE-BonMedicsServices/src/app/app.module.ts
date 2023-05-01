import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/mainPage/main/main.component';
import { NavBarComponent } from './components/mainPage/nav-bar/nav-bar.component';
import { FooterComponent } from './components/mainPage/footer/footer.component';
import { SignupComponent } from './components/logPages/signup/signup.component';
import { LoginComponent } from './components/logPages/login/login.component';
import { AdminComponent } from './components/pages/modules/admin/admin.component';
import { MedicComponent } from './components/pages/modules/medic/medic.component';
import { LaboratorioComponent } from './components/pages/modules/laboratorio/laboratorio.component';
import { PacienteComponent } from './components/pages/modules/paciente/paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './components/pages/pages.component';
import { NavBarPacientComponent } from './components/pages/modules/paciente/nav-bar-pacient/nav-bar-pacient.component';
import { NavBarMedicComponent } from './components/pages/modules/medic/nav-bar-medic/nav-bar-medic.component';
import { NavBarLabComponent } from './components/pages/modules/laboratorio/nav-bar-lab/nav-bar-lab.component';
import { NavBarAdminComponent } from './components/pages/modules/admin/nav-bar-admin/nav-bar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    MedicComponent,
    LaboratorioComponent,
    PacienteComponent,
    PagesComponent,
    NavBarPacientComponent,
    NavBarMedicComponent,
    NavBarLabComponent,
    NavBarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
