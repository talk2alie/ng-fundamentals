import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IEvent } from './IEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventService } from './shared/event.service';

@Injectable({
    providedIn: 'root'
})
export class EventsGuard implements Resolve<IEvent[]> {

    constructor(private eventService: EventService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent[]> {
        return this.eventService.getEvents();
    }
}

