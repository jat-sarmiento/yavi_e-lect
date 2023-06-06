import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { VistarUsuarioComponent } from './usuario/vistar-usuario/vistar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { VistarAdministradorComponent } from './administrador/vistar-administrador/vistar-administrador.component';
import { CrearCandidatoComponent } from './candidato/crear-candidato/crear-candidato.component';
import { EditarCandidatoComponent } from './candidato/editar-candidato/editar-candidato.component';
import { VistarCandidatoComponent } from './candidato/vistar-candidato/vistar-candidato.component';
import { EliminarCandidatoComponent } from './candidato/eliminar-candidato/eliminar-candidato.component';
import { CrearCronogramaComponent } from './cronograma/crear-cronograma/crear-cronograma.component';
import { VistarCronogramaComponent } from './cronograma/vistar-cronograma/vistar-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma/editar-cronograma.component';
import { EliminarCronogramaComponent } from './cronograma/eliminar-cronograma/eliminar-cronograma.component';
import { LoginComponent } from './login/login/login.component';
import { CrearVotanteComponent } from './votante/crear-votante/crear-votante.component';
import { EditarVotanteComponent } from './votante/editar-votante/editar-votante.component';
import { EliminarVotanteComponent } from './votante/eliminar-votante/eliminar-votante.component';
import { VistarVotanteComponent } from './votante/vistar-votante/vistar-votante.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    VistarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearAdministradorComponent,
    EditarAdministradorComponent,
    EliminarAdministradorComponent,
    VistarAdministradorComponent,
    CrearCandidatoComponent,
    EditarCandidatoComponent,
    VistarCandidatoComponent,
    EliminarCandidatoComponent,
    CrearCronogramaComponent,
    VistarCronogramaComponent,
    EditarCronogramaComponent,
    EliminarCronogramaComponent,
    LoginComponent,
    CrearVotanteComponent,
    EditarVotanteComponent,
    EliminarVotanteComponent,
    VistarVotanteComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
