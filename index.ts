import { NgZone } from '@angular/core';

<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';
=======
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';
>>>>>>> 89043d00595128c406f6de893527e0579aeaeb0b

export namespace Cordova {
    export const platformId: string = (<any>window).cordova.platformId;
    export const deviceready: Observable<any> = Observable.create((observer: any) => {
        let fn = () => {
            observer.next(null);
            observer.complete();
        }
        (<any>document).addEventListener('deviceready', fn, false);
        return () => {
            (<any>document).removeEventListener('deviceready', fn, false);
        };
    }).pipe(share());

    deviceready.subscribe();
}

export namespace ZoneObservable {
    export function create(zone: NgZone, fn: (observer: any) => any): Observable<any> {
        return Observable.create((observer: any) => {
            fn({
                next: (emit: any) => {
                    zone.run(() => {
                        observer.next(emit)
                    });
                },
                error: (error: any) => {
                    zone.run(() => observer.error(error));
                },
                complete: () => {
                    zone.run(() => observer.complete());
                }
            });
        });
    }
    export function of(zone: NgZone, emit: any): Observable<any> {
        return Observable.create((observer: any) => {
            zone.run(() => observer.next(emit));
            zone.run(() => observer.complete());
        });
    }
}
