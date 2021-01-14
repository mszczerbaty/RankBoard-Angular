import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router,
        private authenticationService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.authenticationService.adminCheck()) {
            console.log('jestes adminem');//
            return true;
          } else {
            console.log('NIE jestes adminem');//
            this.router.navigate(['/login']);
            return false;
          }
    }
}