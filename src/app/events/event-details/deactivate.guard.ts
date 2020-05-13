import { CreateEventComponent } from '../create-event.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export function checkComponentState(component: CreateEventComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return component.isDirty;
}

