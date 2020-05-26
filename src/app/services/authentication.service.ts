import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { AuthResponse } from '../auth/auth-response';
import { User } from '../auth/user';
import { HttpClient } from  '@angular/common/http';
import { tap } from 'rxjs/operators';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
  authenticationState = new BehaviorSubject(null);
  constructor(private storage: Storage,
              private plt: Platform ,
              private  httpClient:  HttpClient         
    ) {
      this.plt.ready().then(() => {
      this.checkToken();
      });
     }

    login(){
      return this.storage.set(TOKEN_KEY, 'Bearer123456').then(res=> {
        this.authenticationState.next(true);
      });
    }

    logout(){
      return this.storage.remove(TOKEN_KEY).then(res=> {
        this.authenticationState.next(false);
      });
    }

    register(user: User): Observable<AuthResponse> {
      return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user)
      .pipe(
        tap(async (res:  AuthResponse ) => {
          if (res.user) {
            await this.storage.set("ACCESS_TOKEN", res.user.access_token);
            await this.storage.set("EXPIRES_IN", res.user.expires_in);
            this.authenticationState.next(true);
          }
        })
  
      );
    }    
    isAuthenticated(){
      return this.authenticationState.value;
    }

    checkToken(){
      return this.storage.get(TOKEN_KEY).then(res=> {
        if(res) {
          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
      });

    }
}
