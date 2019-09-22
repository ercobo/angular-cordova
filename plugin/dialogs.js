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
// cordova-plugin-dialogs
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var DialogsService = /** @class */ (function () {
    function DialogsService(zone) {
        this.zone = zone;
    }
    DialogsService.prototype.alert = function (message, title, buttonName) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.notification.alert(message, function (res) {
                observer.next(res);
                observer.complete();
            }, title, buttonName);
        }); });
    };
    DialogsService.prototype.confirm = function (message, title, buttonLabels) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.notification.confirm(message, function (res) {
                observer.next(res);
                observer.complete();
            }, title, buttonLabels);
        }); });
    };
    DialogsService.prototype.prompt = function (message, title, buttonLabels, defaultText) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.notification.prompt(message, function (res) {
                observer.next(res);
                observer.complete();
            }, title, buttonLabels, defaultText);
        }); });
    };
    DialogsService.prototype.beep = function (times) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.navigator.notification.beep(times)); });
    };
    DialogsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], DialogsService);
    return DialogsService;
}());
exports.DialogsService = DialogsService;
