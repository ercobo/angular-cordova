// cordova-plugin-device-motion
import { Injectable, NgZone } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
=======
import { Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';
>>>>>>> 89043d00595128c406f6de893527e0579aeaeb0b

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class DeviceMotionService {
    constructor(private zone: NgZone) {}

    getCurrentAcceleration(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.accelerometer.getCurrentAcceleration((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    watchAcceleration(options?: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let watchID = (<any>window).navigator.accelerometer.watchAcceleration((res: any) => {
                observer.next(res);
            }, observer.error, options);
            return () => {
                (<any>window).navigator.accelerometer.clearWatch(watchID);
            };
        })));
    }
}
