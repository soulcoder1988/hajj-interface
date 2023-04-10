import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): []{
    return JSON.parse(localStorage.getItem("roles")!);
  }

  public setToken(jwtToken: string){
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem("jwtToken")!;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return (this.getRoles() != null && this.getRoles().length > 0) && (this.getToken()!= null && this.getToken().length > 0);
  }
}
