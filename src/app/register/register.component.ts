import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.authenticationService.register(this.formControls.username.value, this.formControls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/boardGames']);
        },
        error => {
          this.error = error;
        });
  }

}
