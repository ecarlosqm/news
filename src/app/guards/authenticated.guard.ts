import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../context/auth/domain/auth_service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  private readonly redirectTo = 'login';

  constructor(private auth:AuthService, private router:Router){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.isAuthenticated();
  }

  async isAuthenticated():Promise<boolean | UrlTree>{
    return await this.auth.userIsAuthenticated() ? true: this.router.parseUrl(this.redirectTo);
  }
}