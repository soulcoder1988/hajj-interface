import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API: string = "http://localhost:9090";
  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(username: string, password: string) {
    return this.httpClient.post(this.PATH_OF_API + "/authenticate", { username, password }, { headers: this.requestHeader });
  }

  /*
  public roleMatch(allowsRoles) {
    let isMatch = false;



  }
  */
}
