import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { PageUser, User } from '../model/user.model';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user! : Array<User>;

  constructor() {
    this.user=[
      {id:UUID.UUID(), name:"Komi", email:"Komi@gmail.com", mpd:UUID.UUID(),admin:true},
      {id:UUID.UUID(), name:"Said", email:"Said@gmail.com", mpd:UUID.UUID(),admin:false},
      {id:UUID.UUID(), name:"Abdul", email:"Abdul@gmail.com", mpd:UUID.UUID(),admin:true},
      {id:UUID.UUID(), name:"Yanick", email:"Yanick@gmail.com", mpd:UUID.UUID(),admin:false},

    ];
    for (let i = 0; i <10; i++){
      this.user.push({id:UUID.UUID(), name:"Komi", email:"Komi@gmail.com", mpd:UUID.UUID(),admin:true},),
      this.user.push({id:UUID.UUID(), name:"Said", email:"Said@gmail.com", mpd:UUID.UUID(),admin:false},),
      this.user.push({id:UUID.UUID(), name:"Abdul", email:"Abdul@gmail.com", mpd:UUID.UUID(),admin:true}),
      this.user.push({id:UUID.UUID(), name:"Yanick", email:"Yanick@gmail.com", mpd:UUID.UUID(),admin:false},)

    }
   }


  public getAllUsers() : Observable<Array<User>>{
    return of([...this.user]);
  }

  public getPageUsers(page:number, size: number) : Observable<PageUser>{
    
    let index = page*size;
    let totalPages = ~(~this.users.length/size);
    if(this.users.length % size !=0)
      totalPages++;
     let pageUsers = this.user.slice(index,index+size);
     return of({page:page, size:size, totalPages:totalPages, users : pageUsers});
  }

  public deleteUser(id: string) : Observable<boolean>{
    let user = this.users.filter(u=>u.id!=id);
    return of(true);
  }


  public setAdmin (id: string) : Observable<boolean>{
    let user = this.user.find(u=>u.id==id);
    if(user !=undefined){
      user.admin=!user.admin;
      return of(true);
    } else return throwError(()=>new Error("user not found"));

  }  

  public searchUser (Recherche: string, page : number, size : number) : Observable<PageUser>{
    let result = this.user.filter(u=>u.name.includes(Recherche));
    let index =page*size;
    let totalPages = ~~(result.length/size);
    if(this.user.length % size !=0)
    totalPages++;
    let pageUsers = result.slice(index,index+size);
    return of({page:page, size:size, totalPages:totalPages, users : pageUsers});
  }  
}