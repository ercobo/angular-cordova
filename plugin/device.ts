// cordova-plugin-device
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
export class DeviceService {
    constructor(private zone: NgZone) {}

    platform(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.platform)));
    }
    version(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.version)));
    }
    uuid(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.uuid)));
    }
    manufacturer(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.manufacturer)));
    }
    cordova(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.cordova)));
    }
    model(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.model)));
    }
    isVirtual(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.isVirtual)));
    }
    serial(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).device.serial)));
    }
}
