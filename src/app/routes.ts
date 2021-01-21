import { Route } from '@angular/compiler/src/core';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailGuard } from './events/event-details/event-detail.guard';
import { ErrorComponent } from './errors/error.component';
import { EventsGuard } from './events/events.guard';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
    {path: 'events', component: EventsListComponent, resolve: {data: EventsGuard}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: [EventDetailGuard]},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailGuard]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'user', loadChildren: () => UserModule},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
];
