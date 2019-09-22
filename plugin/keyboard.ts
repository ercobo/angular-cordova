// cordova-plugin-keyboard
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
export class KeyboardService {
    constructor(private zone: NgZone) { }

    keyboardDidShow: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('keyboardDidShow', observer.next, false);
        return () => {
            (<any>window).removeEventListener('keyboardDidShow', observer.next, false);
        };
    });
    keyboardDidHide: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('keyboardDidHide', observer.next, false);
        return () => {
            (<any>window).removeEventListener('keyboardDidHide', observer.next, false);
        };
    });
    keyboardWillShow: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('keyboardWillShow', observer.next, false);
        return () => {
            (<any>window).removeEventListener('keyboardWillShow', observer.next, false);
        };
    });
    keyboardWillHide: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('keyboardWillHide', observer.next, false);
        return () => {
            (<any>window).removeEventListener('keyboardWillHide', observer.next, false);
        };
    });
    keyboardHeightWillChange: Observable<any> = ZoneObservable.create(this.zone, (observer: any) => {
        (<any>window).addEventListener('keyboardHeightWillChange', observer.next, false);
        return () => {
            (<any>window).removeEventListener('keyboardHeightWillChange', observer.next, false);
        };
    });
    shrinkView(bool: boolean): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.shrinkView(bool))));
    }
    hideFormAccessoryBar(bool: boolean): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.hideFormAccessoryBar(bool))));
    }
    disableScrollingInShrinkView(bool: boolean): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.disableScrollingInShrinkView(bool))));
    }
    hide(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.hide())));
    }
    show(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.show())));
    }
    isVisible(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.isVisible())));
    }
    automaticScrollToTopOnHiding(bool: boolean): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).Keyboard.automaticScrollToTopOnHiding = bool)));
    }
}
