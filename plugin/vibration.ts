// cordova-plugin-vibration
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class VibrationService {
    constructor(private zone: NgZone) {}

    vibrate(time_or_pattern: number | number[]): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.vibrate(time_or_pattern)));
    }
}
