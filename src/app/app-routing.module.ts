import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqComponent } from './faq/faq.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
