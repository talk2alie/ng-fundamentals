import { Component, Input } from '@angular/core';
import { IEvent } from './IEvent';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [
        `
            .thumbnail { min-height: 210px; }
            h2 {
                margin: 5px auto 20px auto;
            }
            .pad-left { margin-left: 10px; }
            .well div { color: #bbb; }
            .well .green { color: #003300 }
            .well .bold { font-weight: bold }
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    print(): void {
        console.log(this.event.name);
    }

    getStartTimeStyle(): any {
        const isEarlySrart = this.event.time && this.event.time === '8:00 am';
        if (isEarlySrart) {
            return {color: '#003300', fontWeight: 'bold'};
        }

        return {};
    }
}
