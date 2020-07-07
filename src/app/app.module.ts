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

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes)
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
        SessionListComponent
    ],
    providers: [{ provide: checkComponentState, useValue: checkComponentState }],
    bootstrap: [AppComponent]
})
export class AppModule { }