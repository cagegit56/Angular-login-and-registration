import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   user: User;
   
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  this.user = {
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: ''
  }
  this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user = {
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: ''
    }
    }

    OnSubmit(form : NgForm){
this.userService.registerUser(form.value)
.subscribe((data: any) => {
  if (data.succeeded == true)
  alert('Successfully registered')
  this.resetForm(form);
  
},err=>{
  alert('Something went wrong')
  // this.resetForm(form);
}

)
    }


}
