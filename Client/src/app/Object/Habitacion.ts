
export interface Habitacion{
    numero:string
    id_tipo:string
    descripcion:string
    info_add:string
    precio:number
    fecha_registro?: Date
    usuario_registro:string
    disponible?:boolean
}
