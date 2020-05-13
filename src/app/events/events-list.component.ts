import { Component, OnInit } from '@angular/core';
import { IEvent } from './IEvent';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.events = this.activatedRoute.snapshot.data['data'];
    }

    onClick(name: string): void {
        this.toastr.success(name);
    }
}
