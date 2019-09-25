export interface  User  {
    title: string
    description: string
    movies: [ DetalleUser]
    
}

export interface DetalleUser{
    id: string
    title:string
    releaseYear: string
}