"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// cordova-plugin-battery-status
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var BatteryStatusService = /** @class */ (function () {
    function BatteryStatusService(zone) {
        this.zone = zone;
        this.batterystatus = __1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('batterystatus', observer.next, false);
            return function () {
                window.removeEventListener('batterystatus', observer.next, false);
            };
        });
        this.batterycritical = __1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('batterycritical', observer.next, false);
            return function () {
                window.removeEventListener('batterycritical', observer.next, false);
            };
        });
        this.batterylow = __1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('batterylow', observer.next, false);
            return function () {
                window.removeEventListener('batterylow', observer.next, false);
            };
        });
    }
    BatteryStatusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], BatteryStatusService);
    return BatteryStatusService;
}());
exports.BatteryStatusService = BatteryStatusService;
