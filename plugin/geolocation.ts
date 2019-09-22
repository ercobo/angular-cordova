// cordova-plugin-geolocation
import { Injectable, NgZone } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
=======
import { Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';
>>>>>>> 89043d00595128c406f6de893527e0579aeaeb0b

import { Cordova, ZoneObservable } from '../';

export enum PositionError {
    PERMISSION_DENIED = 0,
    POSITION_UNAVAILABLE,
    TIMEOUT
}

@Injectable()
export class GeolocationService {
    constructor(private zone: NgZone) {}

    getCurrentPosition(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.geolocation.getCurrentPosition((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    watchPosition(options?: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let watchID = (<any>window).navigator.geolocation.watchPosition((res: any) => {
                observer.next(res);
            }, observer.error, options);
            return () => {
                (<any>window).navigator.geolocation.clearWatch(watchID);
            };
        })));
    }
}
