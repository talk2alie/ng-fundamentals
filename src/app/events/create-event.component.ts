import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './IEvent';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em { float: right; padding-left: 10px; color: #E05C65; }
    `]
})
export class CreateEventComponent implements OnInit {
    isDirty = true;
    private homeUrl = '/events';
    newEvent: IEvent;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.newEvent = {
            date: new Date('03/28/2021'),
            id: 22,
            imageUrl: 'https://atlantablackstar.com/wp-content/uploads/2016/08/black-woman-1-e1470871902981.jpg',
            name: 'The Ultimate Black Woman Conference',
            price: 1500.00,
            time: '8:00am to 9:00pm',
            sessions: [{
                abstract: 'Winter is coming',
                duration: 2,
                id: 5,
                level: 'beginner',
                name: 'Session 1',
                presenter: 'May Reaves',
                voters: ['Colleen']
            }],
            location: {
                address: '123 Maple Street, New York',
                city: 'New York',
                country: 'USA'
            }
        }
    }

    goHome() {
        this.router.navigate([this.homeUrl]);
    }

    saveEvent(event: IEvent): void {
        console.log(event);
        console.log('New Event');
        console.log(this.newEvent);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}
