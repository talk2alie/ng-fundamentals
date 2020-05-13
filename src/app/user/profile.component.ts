import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        let firstName = new FormControl(this.authService.currentUser.firstName);
        let lastName = new FormControl(this.authService.currentUser.lastName);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    cancel(): void {
        this.router.navigate(['events']);
    }

    updateProfile(): void {
        this.authService.currentUser.firstName = this.profileForm.value.firstName;
        this.authService.currentUser.lastName = this.profileForm.value.lastName;

        this.router.navigate(['events']);
    }
}

