import { Component, OnInit, Inject } from '@angular/core';
import { IEvent } from './IEvent';
import { ActivatedRoute } from '@angular/router';
import { TOASTR_TOKEN } from '../common/toastr.service';
import { Toastr } from '../common/Toastr';

@Component({
    templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private activatedRoute: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    }

    ngOnInit(): void {
        this.events = this.activatedRoute.snapshot.data['data'];
    }

    onClick(name: string): void {
        this.toastr.success(name);
    }
}

