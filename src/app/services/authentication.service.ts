import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { User } from '../entities/User';
import { RegisterUser } from '../entities/RegisterUser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>; //behaviorsubject will be able to return its latest value
    public user: Observable<User>;
    headers = new HttpHeaders();

    registerUser = new RegisterUser;

    constructor(private router: Router, private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string) {

        //add btoa headers to http get
        this.headers = new HttpHeaders(username ? {
            authorization: 'Basic ' + btoa(username + ':' + password)
        } : {});

        return this.http.get<any>(`${environment.apiUrl}/user`, { headers: this.headers })
            .pipe(map(user => {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                console.log("zalogowany " + user.authdata);//
                return user;
            }));
    }

    logout() {
        // remove user from local storage and userSubject to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(us: string, pw: string) {
        this.registerUser.username = us;
        this.registerUser.password = pw;
        return this.http.post(`${environment.apiUrl}/user/register`, this.registerUser);
    }

    //check if has role admin
    adminCheck() {
        if (this.userSubject.value ) {
          if (!!this.userSubject.value.authorities.find(x => x.authority === "ROLE_ADMIN")) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
}