import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'profile.component.html',
    styles: [`
        em { float: right; padding-left: 10px; color: #E05C65; }
    `]
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.firstName = new FormControl(this.authService.currentUser.firstName,
            [
                Validators.required
                , Validators.pattern('[A-Za-z]*')
            ]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    cancel(): void {
        this.router.navigate(['events']);
    }

    updateProfile(): void {
        if(!this.profileForm.controls.firstName.valid && this.profileForm.controls.lastName.valid){
            return;
        }

        this.authService.currentUser.firstName = this.profileForm.value.firstName;
        this.authService.currentUser.lastName = this.profileForm.value.lastName;

        this.router.navigate(['events']);
    }

    isFirstNameValid(): boolean {
        return this.profileForm.controls.firstName.valid ||
               this.profileForm.controls.firstName.untouched
    }

    isLastNameValid(): boolean {
        return this.profileForm.controls.lastName.valid ||
               this.profileForm.controls.lastName.untouched;
    }
}

