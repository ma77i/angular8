export interface LoginResponse{
    success:boolean
    usuario:User
    token:string
}

export interface User{
    nombre:string
    apellido:string
    email:string
    tipo:string
    usuario:string
}