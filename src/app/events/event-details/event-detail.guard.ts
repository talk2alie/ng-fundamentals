import { Injectable, Inject } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service';
import { CreateEventComponent } from '../create-event.component';
import { TOASTR_TOKEN } from 'src/app/common/toastr.service';
import { Toastr } from 'src/app/common/Toastr';

@Injectable({
    providedIn: 'root'
})
export class EventDetailGuard implements CanActivate, CanDeactivate<CreateEventComponent> {

    constructor(private router: Router, private eventService: EventService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    }

    canDeactivate(component: CreateEventComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
        return component.isDirty;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const eventId = +route.url[1].path;
        const eventExists = !!this.eventService.getEvent(eventId);
        if(eventExists) {
            return true;
        }

        this.toastr.error('The given event does not exist');
        this.router.navigate(['/error']);
        return eventExists;
    }
}