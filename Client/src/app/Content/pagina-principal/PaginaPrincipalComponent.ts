import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReservasComponent } from 'src/app/Fijo/reservas/reservas.component';
import { Habitacion } from 'src/app/Object/Habitacion';
import { ServicioPPService } from 'src/app/Services/servicio-pp.service';
import { MessagesModule } from 'primeng/messages'



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
  providers: [DialogService, MessageService]
})

export class PaginaPrincipalComponent implements OnDestroy {

  habitaciones: Habitacion[] = [];

  auxiliar: Habitacion = {
    numero: ' ',
    id_tipo: ' ',
    descripcion: ' ',
    info_add: ' ',
    disponible: true,
    precio:0,
    usuario_registro: 'lissetgonzalez'
  };

  constructor(public dialogService: DialogService, private servicio:ServicioPPService, private client:HttpClient,private messageService: MessageService) {

    this.servicio.getHabitaciones().subscribe(
      (response)=>{
        this.habitaciones= response
      },
    (error: any)=>{
        this.showMessage('Error','error',"Ha ocurrido un error en el servidor")
    }
    )
  }

  ref: DynamicDialogRef | undefined;

  showReserva(Hab:Habitacion) {
    this.ref = this.dialogService.open(ReservasComponent, {
      data:{
        Hab
      },
      header: 'Formulario de reservas',
      width: 'fit-content',
      contentStyle: { overflow: 'hidden' },
      baseZIndex: 10000,
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }


  showMessage(summary:string,tipo:string, mensaje:string) {
    this.messageService.add({ key: 'tc', severity: tipo, summary: summary, detail: mensaje });
  }


}
