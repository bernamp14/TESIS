import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/comun/header/header.component';
import { FooterComponent } from './components/comun/footer/footer.component';
import { DashboardComponent } from './components/comun/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AsignaturaListadoComponent } from './components/asignatura/asignatura-listado/asignatura-listado.component';
import { AsignaturaResumenComponent } from './components/asignatura/asignatura-resumen/asignatura-resumen.component';
import { AsignaturaDetalleComponent } from './components/asignatura/asignatura-detalle/asignatura-detalle.component';
import { TemaListadoComponent } from './components/tema/tema-listado/tema-listado.component';
import { TemaActividadComponent } from './components/tema/tema-actividad/tema-actividad.component';
import { TemaMaterialComponent } from './components/tema/tema-material/tema-material.component';
import { TemaActividadConfigComponent } from './components/tema/tema-actividad-config/tema-actividad-config.component';
import { TemaMaterialConfigComponent } from './components/tema/tema-material-config/tema-material-config.component';
import { MomentoIndividualComponent } from './components/momentos-educacion/momento-individual/momento-individual.component';
import { MomentoGrupalComponent } from './components/momentos-educacion/momento-grupal/momento-grupal.component';
import { MomentoTutorialComponent } from './components/momentos-educacion/momento-tutorial/momento-tutorial.component';
import { SidebarComponent } from './components/comun/sidebar/sidebar.component';
import { SiteLayoutComponent } from './components/comun/layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './components/comun/layout/app-layout/app-layout.component';
import { TabsComponent } from './components/comun/control/tabs/tabs.component';
import { TableComponent } from './components/comun/control/table/table.component';
import { PdfComponent } from './components/comun/pdf/pdf.component';
import { VideochatComponent } from './components/comun/videochat/videochat.component';
import { ChatComponent } from './components/comun/chat/chat.component';
import { TableroComponent } from './components/comun/tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AsignaturaListadoComponent,
    AsignaturaResumenComponent,
    AsignaturaDetalleComponent,
    TemaListadoComponent,
    TemaActividadComponent,
    TemaMaterialComponent,
    TemaActividadConfigComponent,
    TemaMaterialConfigComponent,
    MomentoIndividualComponent,
    MomentoGrupalComponent,
    MomentoTutorialComponent,
    SidebarComponent,
    SiteLayoutComponent,
    AppLayoutComponent,
    TabsComponent,
    TableComponent,
    PdfComponent,
    VideochatComponent,
    ChatComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
