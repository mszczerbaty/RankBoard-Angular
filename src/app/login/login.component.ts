import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

        this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
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
