import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styles: [`
        li a.active {
            color: #F97924;
            background-color: #2b3e50;
        }
    `]
})
export class NavComponent {
    get firstName(): string {
        return this.authService.isAuthenticated() ? this.authService.currentUser.firstName : 'Anonymous';
    }

    get isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }

    constructor(private authService: AuthService) {

    }
}
