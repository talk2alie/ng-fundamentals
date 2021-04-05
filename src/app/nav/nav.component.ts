import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';
import { JQUERY_TOKEN } from '../common/jQuery.token';
import { ISession } from '../events/ISession';

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
    searchTerm: string;
    foundSessions: ISession[];

    get firstName(): string {
        return this.authService.isAuthenticated() ? this.authService.currentUser.firstName : 'Anonymous';
    }

    get isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }

    constructor(private authService: AuthService
        , private eventService: EventService
        , @Inject(JQUERY_TOKEN)private $: any) {

    }

    searchSessions(searchTerm: string): void {
        this.eventService.searchSessions(searchTerm)
                         .subscribe(sessions => {
                             this.foundSessions = sessions;
                             console.log(this.foundSessions);
                         });
    }
}
