// cordova-plugin-device-orientation
import { Injectable, NgZone } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
=======
import { Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';
>>>>>>> 89043d00595128c406f6de893527e0579aeaeb0b

import { Cordova, ZoneObservable } from '../';

export enum CompassError {
    COMPASS_INTERNAL_ERR = 0,
    COMPASS_NOT_SUPPORTED = 20
}


@Injectable()
export class DeviceOrientationService {
    constructor(private zone: NgZone) {}

    getCurrentHeading(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.compass.getCurrentHeading((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    watchHeading(options?: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let watchID = (<any>window).navigator.compass.watchHeading((res: any) => {
                observer.next(res);
            }, observer.error, options);
            return () => {
                (<any>window).navigator.compass.clearWatch(watchID);
            };
        })));
    }
}
