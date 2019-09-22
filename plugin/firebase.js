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
// cordova-plugin-firebase
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(zone) {
        this.zone = zone;
    }
    FirebaseService.prototype.getToken = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.getToken(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.onNotificationOpen = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.onNotificationOpen(function (res) {
                observer.next(res);
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.onTokenRefresh = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.onTokenRefresh(function (res) {
                observer.next(res);
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.grantPermission = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.grantPermission(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.setBadgeNumber = function (number) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.setBadgeNumber(number, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.getBadgeNumber = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.getBadgeNumber(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.subscribe = function (topic) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.subscribe(topic, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.unsubscribe = function (topic) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.unsubscribe(topic, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.logEvent = function (name, params) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.logEvent(name, params, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.setUserId = function (id) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.setUserId(id, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.setUserProperty = function (name, value) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.setUserProperty(name, value, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.fetch = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.fetch(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.activateFetched = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.activateFetched(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.getValue = function (key) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.getValue(key, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.getByteArray = function (key) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.getByteArray(key, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.getInfo = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.getInfo(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.setConfigSettings = function (settings) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.setConfigSettings(settings, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService.prototype.setDefaults = function (defaults, namespace) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.FirebasePlugin.setDefaults(defaults, namespace, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
