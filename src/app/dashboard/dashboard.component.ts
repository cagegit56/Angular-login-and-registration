import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
     userClaims: any;
     UserData: any;
  constructor(private router: Router, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;      
    });
  }

  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['./home']);
  }

}
