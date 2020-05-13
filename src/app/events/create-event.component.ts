import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
    isDirty = true;
    private homeUrl = '/events';

    constructor(private router: Router) {
    }

    goHome() {
        this.router.navigate([this.homeUrl]);
    }
}
