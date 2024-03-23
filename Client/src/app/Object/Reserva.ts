export interface Reserva{
  CI_huesped:string
  numero_habitacion:string
  fecha_llegada : Date
  fecha_salida:Date 
  precio:number
  activa?:Boolean
  usuario_registro?:string
}
