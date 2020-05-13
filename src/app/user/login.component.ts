import { Component, OnInit } from '@angular/core';
import { ILogin } from './login.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: ILogin;
    mouseOverLogin: boolean;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    login(form: ILogin): void {
        this.authService.login(form.userName, form.password);

        this.router.navigate(['events']);
    }

    cancel(): void {
        this.router.navigate(['events']);
    }
}
