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
// cordova-plugin-device-orientation
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var CompassError;
(function (CompassError) {
    CompassError[CompassError["COMPASS_INTERNAL_ERR"] = 0] = "COMPASS_INTERNAL_ERR";
    CompassError[CompassError["COMPASS_NOT_SUPPORTED"] = 20] = "COMPASS_NOT_SUPPORTED";
})(CompassError = exports.CompassError || (exports.CompassError = {}));
var DeviceOrientationService = /** @class */ (function () {
    function DeviceOrientationService(zone) {
        this.zone = zone;
    }
    DeviceOrientationService.prototype.getCurrentHeading = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.compass.getCurrentHeading(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    DeviceOrientationService.prototype.watchHeading = function (options) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            var watchID = window.navigator.compass.watchHeading(function (res) {
                observer.next(res);
            }, observer.error, options);
            return function () {
                window.navigator.compass.clearWatch(watchID);
            };
        }); });
    };
    DeviceOrientationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], DeviceOrientationService);
    return DeviceOrientationService;
}());
exports.DeviceOrientationService = DeviceOrientationService;
