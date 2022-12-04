import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {lastValueFrom, Observable} from 'rxjs';
import {TokenService} from "../service/token/token.service";
import {AuthService} from "../service/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if (!this.tokenService.getToken()) {
        resolve(false);
      }
      this.authService.auth().subscribe({
        next: (jwt) => {
          this.tokenService.initData(jwt);
          resolve(true);
        }, error: (err) => {
          reject(err);
          this.tokenService.remove();
          this.router.navigate(['/login']);
        }
      })
    });
  }

}
