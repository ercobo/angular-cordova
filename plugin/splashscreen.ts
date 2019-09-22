// cordova-plugin-splashscreen
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
export class SplashscreenService {
    constructor(private zone: NgZone) {}

    hide(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.splashscreen.hide())));
    }
    show(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.splashscreen.show())));
    }
}
