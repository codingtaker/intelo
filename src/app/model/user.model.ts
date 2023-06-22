export interface User{
    id:string;
    name:string;
    email:string; 
    mpd:string;
    admin:boolean;
}

export interface PageUser{
    users : User[];
    page : number;
    size : number;
    totalPages : number
}