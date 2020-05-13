import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { last } from '@angular/router/src/utils/collection';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser: IUser;

    login(userName: string, password: string): void {
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: userName
        };
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
