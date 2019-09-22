// cordova-plugin-dialogs
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
export class DialogsService {
    constructor(private zone: NgZone) {}

    alert(message: string, title?: string, buttonName?: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.notification.alert(message, (res: any) => {
                observer.next(res);
                observer.complete();
            }, title, buttonName);
        })));
    }
    confirm(message: string, title?: string, buttonLabels?: string[]): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.notification.confirm(message, (res: any) => {
                observer.next(res);
                observer.complete();
            }, title, buttonLabels);
        })));
    }
    prompt(message: string, title?: string, buttonLabels?: string[], defaultText?: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.notification.prompt(message, (res: any) => {
                observer.next(res);
                observer.complete();
            }, title, buttonLabels, defaultText);
        })));
    }
    beep(times: number): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.notification.beep(times))));
    }
}
