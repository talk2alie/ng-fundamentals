import { ILocation } from './ILocation';
import { ISession } from './ISession';

export interface IEvent {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    onlineUrl?: string;
    location?: ILocation;
    sessions: ISession[];
}
