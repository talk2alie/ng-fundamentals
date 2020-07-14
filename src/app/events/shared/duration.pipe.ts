import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {

    private durations: {[id: number]: string} = {
        1: "Half Hour",
        2: "1 Hour",
        3: "Half Day",
        4: "Full Day"
    };

    transform(value: number): string {
        return this.durations[value];
    }
}
