import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ListadoUsuariosComponent } from './Components/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './Components/dashboard/usuario/usuario.component';
import { InicioAppComponent } from './Components/inicio-app/inicio-app.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioAppComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: ListadoUsuariosComponent},
    {path: 'usuario', component: UsuarioComponent}
    //{path: 'usuario/:id', component: UsuarioComponent} Mandar la info atraves de rutas hijas
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
