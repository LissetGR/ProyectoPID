import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './Content/pagina-principal/PaginaPrincipalComponent';

const routes: Routes = [
  {path: 'PaginaPrincipal' , component:PaginaPrincipalComponent},
  {path: '', pathMatch: 'full', redirectTo: 'PaginaPrincipal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
