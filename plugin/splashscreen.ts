// cordova-plugin-splashscreen
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class SplashscreenService {
    constructor(private zone: NgZone) {}

    hide(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.splashscreen.hide()));
    }
    show(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.splashscreen.show()));
    }
}
