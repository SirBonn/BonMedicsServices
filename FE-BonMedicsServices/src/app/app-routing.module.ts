import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/mainPage/main/main.component';
import { LoginComponent } from './components/logPages/login/login.component';
import { SignupComponent } from './components/logPages/signup/signup.component';
import { PagesComponent } from './components/pages/pages.component';
import { PacienteComponent } from './components/pages/modules/paciente/paciente.component';
import { MedicComponent } from './components/pages/modules/medic/medic.component';
import { LaboratorioComponent } from './components/pages/modules/laboratorio/laboratorio.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'module',
    component: PagesComponent,
    children: [
      { path: 'pacient', component: PacienteComponent },
      { path: 'medic', component: MedicComponent },
      { path: 'laboraotio', component: LaboratorioComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
