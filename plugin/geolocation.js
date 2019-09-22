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
// cordova-plugin-geolocation
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var PositionError;
(function (PositionError) {
    PositionError[PositionError["PERMISSION_DENIED"] = 0] = "PERMISSION_DENIED";
    PositionError[PositionError["POSITION_UNAVAILABLE"] = 1] = "POSITION_UNAVAILABLE";
    PositionError[PositionError["TIMEOUT"] = 2] = "TIMEOUT";
})(PositionError = exports.PositionError || (exports.PositionError = {}));
var GeolocationService = /** @class */ (function () {
    function GeolocationService(zone) {
        this.zone = zone;
    }
    GeolocationService.prototype.getCurrentPosition = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.geolocation.getCurrentPosition(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    GeolocationService.prototype.watchPosition = function (options) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            var watchID = window.navigator.geolocation.watchPosition(function (res) {
                observer.next(res);
            }, observer.error, options);
            return function () {
                window.navigator.geolocation.clearWatch(watchID);
            };
        }); });
    };
    GeolocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], GeolocationService);
    return GeolocationService;
}());
exports.GeolocationService = GeolocationService;
