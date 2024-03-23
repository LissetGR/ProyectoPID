import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/Object/Usuario';
import { ServicioPPService } from 'src/app/Services/servicio-pp.service';
import { MessageService } from 'primeng/api';
import { PaginaPrincipalComponent } from 'src/app/Content/pagina-principal/PaginaPrincipalComponent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DynamicDialogRef]
})
export class LoginComponent implements OnInit {

   login:boolean=true
   usuarioConfirmado:boolean=false
   confirmarContrasenna:string=''

   usuario:Usuario={
      username:'',
      password:'',
   }


   constructor( public ref: DynamicDialogRef,private cd: ChangeDetectorRef, private servicio:ServicioPPService, private client:HttpClient,private messageService: MessageService) {}

   ngOnInit(){

   }

   public cambiarLogin(){
       this.login ? this.login=false : this.login=true
   }


   public logear(){

     this.servicio.logearUser(this.usuario).subscribe(
       (response)=>(
          this.usuarioConfirmado=response
       ),
       (error)=>(
         this.showMessage('Error','error','Ocurrio un error con sus datos')
       )
     )

      // if(this.usuarioConfirmado){
      //   alert('usuario logueado correctamente')    //Aqui agregar un mensaje bonito
      // }else{
      //   alert('Los datos introducidos no coinciden')
      // }
   }


   public crearCuentaUsuario(){

      if(this.usuario.password==this.confirmarContrasenna){
          this.servicio.crearUser(this.usuario).subscribe(
            (response)=>{
              this.showMessage('Exito','success','El usuario ha sido creado exitosamente')
            },
            (error)=>{
              this.showMessage('Error','error','Ocurrio un error al registrarse')
            }
          )
      }else{
              this.showMessage('Advertencia','warn','Sus contraseñas no coinciden')
      }
    }

    showMessage(summary:string,tipo:string, mensaje:string) {
      this.messageService.add({ key: 'tc', severity: tipo, summary: summary, detail: mensaje });
    }

}
