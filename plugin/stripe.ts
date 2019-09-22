// cordova-plugin-stripe
import { Injectable, NgZone } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
=======
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
>>>>>>> 89043d00595128c406f6de893527e0579aeaeb0b

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class StripeService {
    constructor(private zone: NgZone) {}

    createCardToken(creditCard: any): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).cordova.plugins.stripe.createCardToken(creditCard, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
}
