import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './components/comun/layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './components/comun/layout/app-layout/app-layout.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/comun/dashboard/dashboard.component';
import { AsignaturaListadoComponent } from './components/asignatura/asignatura-listado/asignatura-listado.component';
import { AsignaturaDetalleComponent } from './components/asignatura/asignatura-detalle/asignatura-detalle.component';
import { MomentoIndividualComponent } from './components/momentos-educacion/momento-individual/momento-individual.component';
import { MomentoGrupalComponent } from './components/momentos-educacion/momento-grupal/momento-grupal.component';
import { MomentoTutorialComponent } from './components/momentos-educacion/momento-tutorial/momento-tutorial.component';
import { PdfComponent } from './components/comun/pdf/pdf.component';
import { VideochatComponent } from './components/comun/videochat/videochat.component';
import { TableroComponent } from './components/comun/tablero/tablero.component';

const routes: Routes = [
  //No logueado
  { path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent}
    ]
  },
  //Logueado
  { path: '', 
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'asignaturas', component: AsignaturaListadoComponent },
      { path: 'asignatura/:id', component: AsignaturaDetalleComponent },
      { path: 'momentoindividual', component: MomentoIndividualComponent },
      { path: 'momentogrupal', component: MomentoGrupalComponent },
      { path: 'momentotutorial', component: MomentoTutorialComponent },
      { path: 'pdf', component: PdfComponent },
      { path: 'videochat', component: VideochatComponent },
      { path: 'Tablero', component: TableroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }