import { Component, OnInit } from '@angular/core';
import { IEvent } from '../IEvent';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private eventService: EventService, private activateRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.activateRoute.snapshot.params['id']);
    }
}
