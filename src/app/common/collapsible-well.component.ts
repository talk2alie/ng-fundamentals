import { Component, Input } from '@angular/core';

@Component({
    selector: 'cw',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <ng-content select="[well-title]">
            </ng-content>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent {
    visible: boolean = true;

    toggleContent(): void {
        this.visible = !this.visible;
    }
}

