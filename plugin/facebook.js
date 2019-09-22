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
// cordova-plugin-facebook4
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var FacebookService = /** @class */ (function () {
    function FacebookService(zone) {
        this.zone = zone;
    }
    FacebookService.prototype.login = function (permissions) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.login(permissions, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.showDialog = function (options) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.showDialog(options, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.api = function (path, permissions) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.api(path, permissions, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.getAccessToken = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.getAccessToken(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.getLoginStatus = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.getLoginStatus(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.logout = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.logout(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.logEvent = function (name, params, value) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.logEvent(name, params, value, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.logPurchase = function (value, currency) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.logPurchase(value, currency, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.appInvite = function (options) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.appInvite(options, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.getDeferredApplink = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.getDeferredApplink(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService.prototype.activateApp = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.facebookConnectPlugin.activateApp(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FacebookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FacebookService);
    return FacebookService;
}());
exports.FacebookService = FacebookService;
