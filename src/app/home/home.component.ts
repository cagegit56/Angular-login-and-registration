import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isLoginError : boolean = false;
  constructor(private userService: UserService, private router : Router ) { }

  ngOnInit(): void {
  }


  OnSubmit(userName: any, password: any){
this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
  localStorage.setItem('userToken', data.access_token);
  this.router.navigate(['/dashboard']);
},
  (err : HttpErrorResponse)=>{
       this.isLoginError = true;
  });
}

}
