import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../ISession';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    filteredSessions: ISession[];
    @Input() filterBy: string;

    @Input() sortBy: string;

    ngOnChanges(changes: SimpleChanges): void {
        if(!this.filterBy || this.filterBy === 'all') {
            this.filteredSessions = this.sessions;
        }
        else {
            this.filteredSessions = this.sessions.filter(session => session.level.toLowerCase() === this.filterBy);
        }

        this.sortBy === 'votes'
        ? this.filteredSessions.sort(this.sortByVotesDesc)
        : this.filteredSessions.sort(this.sortByNameAsc);
    }

    private sortByNameAsc(left: ISession, right: ISession) {
        if(left.name > right.name)
        {
            return 1
        }
        else if(left.name === right.name)
        {
            return 0;
        }
        else
        {
            return -1;
        }
    }

    private sortByVotesDesc(left: ISession, right: ISession): number {
        return  right.voters.length - left.voters.length;
    }
}

