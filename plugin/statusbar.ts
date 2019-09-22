// cordova-plugin-statusbar
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
export class StatusbarService {
    constructor(private zone: NgZone) {}

    overlaysWebView(bool: boolean): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.overlaysWebView(bool))));
    }
    styleDefault(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleDefault())));
    }
    styleLightContent(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleLightContent())));
    }
    styleBlackTranslucent(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleBlackTranslucent())));
    }
    styleBlackOpaque(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleBlackOpaque())));
    }
    backgroundColorByName(color: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.backgroundColorByName(color))));
    }
    backgroundColorByHexString(colorHex: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.backgroundColorByHexString(colorHex))));
    }
    hide(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.hide())));
    }
    show(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.show())));
    }
    isVisible(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.isVisible())));
    }
}
