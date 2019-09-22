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
// cordova-plugin-statusbar
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var StatusbarService = /** @class */ (function () {
    function StatusbarService(zone) {
        this.zone = zone;
    }
    StatusbarService.prototype.overlaysWebView = function (bool) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.overlaysWebView(bool)); });
    };
    StatusbarService.prototype.styleDefault = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.styleDefault()); });
    };
    StatusbarService.prototype.styleLightContent = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.styleLightContent()); });
    };
    StatusbarService.prototype.styleBlackTranslucent = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.styleBlackTranslucent()); });
    };
    StatusbarService.prototype.styleBlackOpaque = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.styleBlackOpaque()); });
    };
    StatusbarService.prototype.backgroundColorByName = function (color) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.backgroundColorByName(color)); });
    };
    StatusbarService.prototype.backgroundColorByHexString = function (colorHex) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.backgroundColorByHexString(colorHex)); });
    };
    StatusbarService.prototype.hide = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.hide()); });
    };
    StatusbarService.prototype.show = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.show()); });
    };
    StatusbarService.prototype.isVisible = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.of(_this.zone, window.StatusBar.isVisible()); });
    };
    StatusbarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], StatusbarService);
    return StatusbarService;
}());
exports.StatusbarService = StatusbarService;
