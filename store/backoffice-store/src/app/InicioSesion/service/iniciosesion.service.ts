import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {

  constructor(private http: HttpClient) { }

  public getUserById(userId: String): Observable<User> {
    let urlEndpoint: string = "http://localhost:8080/store/users/" +userId;
    return this.http.get<User>(urlEndpoint);
  }

  public register(user: User): Observable<User> {
    let urlEndpoint: string = "http://localhost:8080/store/users";
    return this.http.post<User>(urlEndpoint, user);
  }

  public deleteUser(userIdToDelete: String):Observable<any> {
    let urlEndpoint: string = "http://localhost:8080/store/users/" +userIdToDelete;
    return this.http.delete<any>(urlEndpoint);
  }

  public login(nick: string, password: string): Observable<User>{
    let urlEndpoint = 'http://localhost:8080/store/login';
    const user = new User(undefined, nick, '','','',0, password);
    return this.http.post<User>(urlEndpoint, user);
  }

}
