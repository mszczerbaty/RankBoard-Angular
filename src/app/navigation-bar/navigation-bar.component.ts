import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  //check if logged in
  logCheck() {
    if (this.authenticationService.userValue) {
      return true;
    } else {
      return false;
    }
  }

  admin(){
    return this.authenticationService.adminCheck();
  }

  //check if has role admin
  // adminCheck() {
  //   if (this.authenticationService.userValue ) {
  //     if (!!this.authenticationService.userValue.authorities.find(x => x.authority === "ROLE_ADMIN")) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }

}
