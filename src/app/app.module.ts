import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventDetailsComponent, EventThumbnailComponent, EventsListComponent, SessionListComponent } from './index';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { ErrorComponent } from './errors/error.component';
import { checkComponentState } from './events/event-details/deactivate.guard';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Toastr } from './common/Toastr';
import { TOASTR_TOKEN } from './common/toastr.service';
import {JQUERY_TOKEN} from './common/jQuery.token';

// In newer versions of Angular, we can use:
// let toastr: Toastr = window['toastr']
// This is because the toastr object ultimately ends up as a global property on the window object
declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavComponent,
        EventDetailsComponent,
        CreateEventComponent,
        ErrorComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [
        {
            provide: checkComponentState,
            useValue: checkComponentState
        },
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQUERY_TOKEN,
            useValue: jQuery
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

