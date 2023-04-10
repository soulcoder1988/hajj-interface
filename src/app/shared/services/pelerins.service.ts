import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class PelerinsService {

  private userUrl: string;

constructor(private http: HttpClient) {
  this.userUrl = 'http://localhost:8080/users';
 }

public getAllUsers() : Observable<IUser[]>{
  return this.http.get<IUser[]>(this.userUrl);
}

}
