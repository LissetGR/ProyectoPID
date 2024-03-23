import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Fijo/header/header.component';
import { FooterComponent } from './Fijo/footer/footer.component';
import { PaginaPrincipalComponent } from './Content/pagina-principal/PaginaPrincipalComponent';
import { ModuloModule } from './Module/modulo/modulo.module';
import { LoginComponent } from './Fijo/login/login.component';
import { AdministradorComponent } from './Content/administrador/administrador.component';
import { ReservasComponent } from './Fijo/reservas/reservas.component';
import { MessagesModule } from "primeng/messages";
import { ButtonModule } from "primeng/button";
import { HttpClientModule } from '@angular/common/http';
import { ServicioPPService } from './Services/servicio-pp.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PaginaPrincipalComponent,
        LoginComponent,
        AdministradorComponent,
        ReservasComponent,

    ],
    providers: [ServicioPPService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModuloModule,
        MessagesModule,
        ButtonModule,
        HttpClientModule,
    ]
})
export class AppModule { }
