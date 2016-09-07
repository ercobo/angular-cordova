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
// cordova-plugin-keyboard
var core_1 = require('@angular/core');
require('rxjs/add/operator/mergeMap');
var cordova_1 = require('../../cordova');
var zone_1 = require('../../zone');
var KeyboardService = (function () {
    function KeyboardService(zone) {
        this.zone = zone;
    }
    KeyboardService.prototype.keyboardDidShow = function () {
        return zone_1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('keyboardDidShow', observer.next, false);
            return function () {
                window.removeEventListener('keyboardDidShow', observer.next, false);
            };
        });
    };
    KeyboardService.prototype.keyboardDidHide = function () {
        return zone_1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('keyboardDidHide', observer.next, false);
            return function () {
                window.removeEventListener('keyboardDidHide', observer.next, false);
            };
        });
    };
    KeyboardService.prototype.keyboardWillShow = function () {
        return zone_1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('keyboardWillShow', observer.next, false);
            return function () {
                window.removeEventListener('keyboardWillShow', observer.next, false);
            };
        });
    };
    KeyboardService.prototype.keyboardWillHide = function () {
        return zone_1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('keyboardWillHide', observer.next, false);
            return function () {
                window.removeEventListener('keyboardWillHide', observer.next, false);
            };
        });
    };
    KeyboardService.prototype.keyboardHeightWillChange = function () {
        return zone_1.ZoneObservable.create(this.zone, function (observer) {
            window.addEventListener('keyboardHeightWillChange', observer.next, false);
            return function () {
                window.removeEventListener('keyboardHeightWillChange', observer.next, false);
            };
        });
    };
    KeyboardService.prototype.shrinkView = function (bool) {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.shrinkView(bool)); });
    };
    KeyboardService.prototype.hideFormAccessoryBar = function (bool) {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.hideFormAccessoryBar(bool)); });
    };
    KeyboardService.prototype.disableScrollingInShrinkView = function (bool) {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.disableScrollingInShrinkView(bool)); });
    };
    KeyboardService.prototype.hide = function () {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.hide()); });
    };
    KeyboardService.prototype.show = function () {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.show()); });
    };
    KeyboardService.prototype.isVisible = function () {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.isVisible()); });
    };
    KeyboardService.prototype.automaticScrollToTopOnHiding = function (bool) {
        var _this = this;
        return cordova_1.Cordova.deviceready.mergeMap(function () { return zone_1.ZoneObservable.of(_this.zone, window.Keyboard.automaticScrollToTopOnHiding = bool); });
    };
    KeyboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], KeyboardService);
    return KeyboardService;
}());
exports.KeyboardService = KeyboardService;
