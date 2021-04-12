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
import { DurationPipe } from './events/shared/duration.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TOASTR_TOKEN, Toastr, JQUERY_TOKEN, CollapsibleWellComponent } from './common/index';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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

