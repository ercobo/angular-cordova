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
// cordova-plugin-device
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var DeviceService = /** @class */ (function () {
    function DeviceService(zone) {
        this.zone = zone;
    }
    DeviceService.prototype.platform = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.platform); });
    };
    DeviceService.prototype.version = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.version); });
    };
    DeviceService.prototype.uuid = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.uuid); });
    };
    DeviceService.prototype.manufacturer = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.manufacturer); });
    };
    DeviceService.prototype.cordova = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.cordova); });
    };
    DeviceService.prototype.model = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.model); });
    };
    DeviceService.prototype.isVirtual = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.isVirtual); });
    };
    DeviceService.prototype.serial = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.device.serial); });
    };
    DeviceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
