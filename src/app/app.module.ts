import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventDetailsComponent, EventThumbnailComponent, EventsListComponent } from './index';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { ErrorComponent } from './errors/error.component';
import { checkComponentState } from './events/event-details/deactivate.guard';

@NgModule({
    imports: [
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
        ErrorComponent
    ],
    providers: [{ provide: checkComponentState, useValue: checkComponentState }],
    bootstrap: [AppComponent]
})
export class AppModule { }