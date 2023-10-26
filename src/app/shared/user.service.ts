import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Response} from "@angular/http";
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:55758';
  constructor(private http: HttpClient) { }


  registerUser(user: User){
            const body: User = {
               UserName: user.UserName,
              Password: user.Password,
              Email: user.Email,
              FirstName: user.FirstName,
              LastName: user.LastName
            }
            return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

  userAuthentication(userName: any, password: any){
    var data = "username="+userName+"&password="+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl+'/token', data, {headers: reqHeader});
  }


  getUserClaims(){    
      const token = localStorage.getItem("userToken");
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
      return this.http.get('http://localhost:55758/api/GetUserClaims', { headers });
  }


}
