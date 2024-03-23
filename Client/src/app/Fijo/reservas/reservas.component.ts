import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Huespedes } from 'src/app/Object/Huespedes';
import { Reserva } from 'src/app/Object/Reserva';
import { ServicioPPService } from 'src/app/Services/servicio-pp.service';
import { PaginaPrincipalComponent } from 'src/app/Content/pagina-principal/PaginaPrincipalComponent';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Habitacion } from 'src/app/Object/Habitacion';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {

  stateOptions: any[] = [{label: 'Hombre', value: 'H'}, {label: 'Mujer', value: 'M'}];
  value: string = 'F';
  datosReserva:boolean=false;
  habitacion:Habitacion=this.config.data.Hab


  huesped:Huespedes={
    nombre:'',
    CI:'',
    correo:'',
    telefono:'',
    sexo:'',
    usuario_registro:'admin1'
  }

  reserva:Reserva={
    CI_huesped:this.huesped.nombre,
    numero_habitacion: this.habitacion.numero,
    fecha_llegada: new Date(),
    fecha_salida: new Date(),
    precio:this.habitacion.precio,
    usuario_registro:'admin1'
  }

  constructor( public ref :DynamicDialogRef, public config: DynamicDialogConfig,  private servicio:ServicioPPService, private messageService: MessageService) {

  }

  public agregarHuesped(){
    this.servicio.crearHuesped(this.huesped).subscribe(
      (response)=>{
        this.datosReserva ? this.datosReserva=false : this.datosReserva=true;
        this.reserva.CI_huesped=this.huesped.CI
        this.showMessage('Success',"El huésped ha sido añadido correctamente")
      },
       (error: any)=>{
         this.showMessage('error',"Ha ocurrido un error al registrar sus datos")
       }
    )


  }



  // getDisabledDays(): Date [] {
  //   // Tengo que crear una funcion que busque en las reservas de esa habitacion los dias que estan tomados
  //   let startDay = 11;
  //   let endDay = 22;
  //   let month = 10; // Noviembre es el mes 10 en JavaScript (0-indexado)
  //   let year = 2023;

  //   let disabledDays = [];
  //   for (let day = startDay; day <= endDay; day++) {
  //       disabledDays.push(new Date(year, month, day));
  //   }


  //   return disabledDays;
  // }


  public agregarReserva(){
    console.log(this.reserva)
    this.servicio.crearReserva(this.reserva).subscribe(
      (response)=>{
        this.showMessage('Success',"Su reserva ha sido añadida correctamente")
      },
      (error)=>{
        this.showMessage('error',"Ha ocurrido un error al registrar sus datos")
      }
   )

  }

//   onDateSelectLL(event: Date) {
//     console.log('La fecha seleccionada es: ', event);
//     this.reserva.fecha_llegada = event;
//  }

//   onDateSelectS(event: Date) {
//     console.log('La fecha seleccionada es: ', event);
//     this.reserva.fecha_salida = event;
//   }

  public clean(){
    this.huesped ={
      nombre:'',
      CI:'',
      correo:' ',
      telefono:'',
      sexo:'',
      // fecha_registro: new Date(0,0,0),
      usuario_registro:' '
    }

    this.reserva={
      CI_huesped:this.huesped.CI,
      numero_habitacion:'',
      fecha_llegada:new Date(),
      fecha_salida:new Date(),
      precio:0
    }
  }


  showMessage(tipo:string, mensaje:string) {
    this.messageService.add({ key: 'tc', severity: tipo, summary: 'Advertencia', detail: mensaje });
  }

}
