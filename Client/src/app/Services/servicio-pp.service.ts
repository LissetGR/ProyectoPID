import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion } from '../Object/Habitacion';
import { Password } from 'primeng/password';
import { Observable } from 'rxjs';
import { Usuario } from '../Object/Usuario';
import { Huespedes } from '../Object/Huespedes';
import { Reserva } from '../Object/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ServicioPPService {

  private url:string="http://localhost:8000"

  constructor(private http: HttpClient) { }

  // Habitaciones CRUD
  public getHabitaciones(){
    return this.http.get<Habitacion[]>(this.url+ '/Habitaciones/post/')
  }

  // Usuario CRUD
  public logearUser(UserData:Usuario){
    return this.http.get<boolean>(this.url+'Cuentas/login/')
  }

  public crearUser(UserData:Usuario):Observable<{ user: Usuario, token: string }>{
    return this.http.post<{ user: Usuario, token: string }>(this.url + '/crearUsuario/', UserData)
  }

  // Huespedes CRUD
  public crearHuesped(HuespedData:Huespedes){
    return this.http.post(this.url+'/Huespedes/huesp/', HuespedData)
  }

  public getHuesped(){
    return this.http.get<Huespedes[]>(this.url+ '/Huespedes/huesp/')
  }


  // Reservas CRUD
  public crearReserva(reservaData:Reserva){
    return this.http.post(this.url+'/Reservas/reserv/', reservaData)
  }


}
