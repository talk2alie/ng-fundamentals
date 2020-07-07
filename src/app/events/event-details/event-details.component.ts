import { Component, OnInit } from '@angular/core';
import { IEvent } from '../IEvent';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../ISession';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    inAddMode: boolean;

    constructor(private eventService: EventService, private activateRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.activateRoute.snapshot.params['id']);
    }

    addViewSessions(): void {
        this.inAddMode = true;
    }

    cancel(): void {
        this.inAddMode = false;
    }

    saveSession(session: ISession): void {
        this.event.sessions.push(session);
        this.cancel();
    }
}
