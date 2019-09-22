// cordova-plugin-battery-status
import { Injectable, NgZone } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
=======
import { Observable } from "rxjs";
>>>>>>> 89043d00595128c406f6de893527e0579aeaeb0b

import { ZoneObservable } from '../';

@Injectable()
export class BatteryStatusService {
    constructor(private zone: NgZone) {}

    batterystatus: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('batterystatus', observer.next, false);
        return () => {
            (<any>window).removeEventListener('batterystatus', observer.next, false);
        };
    });
    batterycritical: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('batterycritical', observer.next, false);
        return () => {
            (<any>window).removeEventListener('batterycritical', observer.next, false);
        };
    });
    batterylow: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('batterylow', observer.next, false);
        return () => {
            (<any>window).removeEventListener('batterylow', observer.next, false);
        };
    });
}
