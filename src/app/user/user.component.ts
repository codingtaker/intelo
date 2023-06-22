import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  user! : Array<User> ;

  currentPage : number=0;

  pageSize : number = 5;

  totalPages : number = 0;

  errorMessage! : string;
  
  searchFormGroup! : FormGroup;

  currentAction : string="all";


  constructor(private userService : UserService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      Recherche : this.fb.control(null),
    })

    this.userService.getAllUsers();
  }

  getPageUsers(){
    this.userService.getPageUsers(this.currentPage,this.pageSize).subscribe({
      next : (data)=>{
        this.user=data.users;
        this.totalPages=data.totalPages;
      },
      error : (err:any)=>{
        this.errorMessage=err;

      }
    });
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next : (data:any)=>{
        this.user=data;
      },
      error : (err:any)=>{
        this.errorMessage=err;

      }
    });
  }

  deleteUser(u:any){
   this.userService.deleteUser(u.id).subscribe({
    next:()=>{
      let index=this.user.indexOf(u);
      this.user.splice(index,1);
    }
   })
  }

  setAdmin(u:User) {
    let administrateur = u.admin;
    this.userService.setAdmin(u.id).subscribe({
      next:()=>{
        u.admin=!administrateur;
      },
      error : err =>{
        this.errorMessage=err;
      }
    })
  }

  handleSearchUsers(){
    this.currentAction="Recherche"
    let Recherche = this.searchFormGroup.value.Recherche;

    this.userService.searchUser(Recherche, this.currentPage, this.pageSize).subscribe({
      next:(data)=>{
        this.user= data.users;
        this.totalPages=data.totalPages;
      },
    })

  }

  goToPage(i:number){
    this.currentPage=i;
    this.getAllUsers();
    this.getPageUsers();
  }
}
