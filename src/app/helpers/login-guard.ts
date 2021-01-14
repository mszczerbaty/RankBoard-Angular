import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router,
        private authenticationService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.authenticationService.userValue) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
    }
}