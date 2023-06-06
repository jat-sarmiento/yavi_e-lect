import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { VistarAdministradorComponent } from './administrador/vistar-administrador/vistar-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { CrearCandidatoComponent } from './candidato/crear-candidato/crear-candidato.component';
import { VistarCandidatoComponent } from './candidato/vistar-candidato/vistar-candidato.component';
import { EditarCandidatoComponent } from './candidato/editar-candidato/editar-candidato.component';
import { EliminarCandidatoComponent } from './candidato/eliminar-candidato/eliminar-candidato.component';
import { CrearCronogramaComponent } from './cronograma/crear-cronograma/crear-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma/editar-cronograma.component';
import { EliminarCronogramaComponent } from './cronograma/eliminar-cronograma/eliminar-cronograma.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { VistarCronogramaComponent } from './cronograma/vistar-cronograma/vistar-cronograma.component';
import { VistarUsuarioComponent } from './usuario/vistar-usuario/vistar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CrearVotanteComponent } from './votante/crear-votante/crear-votante.component';
import { VistarVotanteComponent } from './votante/vistar-votante/vistar-votante.component';
import { EditarVotanteComponent } from './votante/editar-votante/editar-votante.component';
import { EliminarVotanteComponent } from './votante/eliminar-votante/eliminar-votante.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'crear-administrador', component: CrearAdministradorComponent },
  { path: 'vistar-administrador', component: VistarAdministradorComponent },
  { path: 'editar-administrador', component: EditarAdministradorComponent },
  { path: 'eliminar-administrador', component: EliminarAdministradorComponent },
  { path: 'crear-candidato', component: CrearCandidatoComponent },
  { path: 'vistar-candidato', component: VistarCandidatoComponent },
  { path: 'editar-candidato', component: EditarCandidatoComponent },
  { path: 'eliminar-candidato', component: EliminarCandidatoComponent },
  { path: 'crear-cronograma', component: CrearCronogramaComponent },
  { path: 'vistar-cronograma', component: VistarCronogramaComponent },
  { path: 'editar-cronograma', component: EditarCronogramaComponent },
  { path: 'eliminar-cronograma', component: EliminarCronogramaComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'vistar-usuario', component: VistarUsuarioComponent },
  { path: 'editar-usuario', component: EditarUsuarioComponent },
  { path: 'eliminar-usuario', component: EliminarUsuarioComponent },
  { path: 'crear-votante', component: CrearVotanteComponent },
  { path: 'vistar-votante', component: VistarVotanteComponent },
  { path: 'editar-votante', component: EditarVotanteComponent },
  { path: 'eliminar-votante', component: EliminarVotanteComponent },
  { path: 'dashboard', component: DashboardComponent },
  




];

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
