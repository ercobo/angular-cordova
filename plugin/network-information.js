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
//cordova-plugin-network-information
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var Connection;
(function (Connection) {
    Connection["UNKNOWN"] = "unknown";
    Connection["ETHERNET"] = "ethernet";
    Connection["WIFI"] = "wifi";
    Connection["CELL_2G"] = "2g";
    Connection["CELL_3G"] = "3g";
    Connection["CELL_4G"] = "4g";
    Connection["NONE"] = "none";
    Connection["CELL"] = "celluar";
})(Connection = exports.Connection || (exports.Connection = {}));
var NetworkInformationService = /** @class */ (function () {
    function NetworkInformationService(zone) {
        this.zone = zone;
    }
    NetworkInformationService.prototype.online = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () {
            return __1.ZoneObservable.create(_this.zone, function (observer) {
                document.addEventListener('online', observer.next, false);
                return function () {
                    document.removeEventListener('online', observer.next, false);
                };
            });
        });
    };
    NetworkInformationService.prototype.offline = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () {
            return __1.ZoneObservable.create(_this.zone, function (observer) {
                document.addEventListener('offline', observer.next, false);
                return function () {
                    document.removeEventListener('offline', observer.next, false);
                };
            });
        });
    };
    NetworkInformationService.prototype.connectionType = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () {
            return __1.ZoneObservable.of(_this.zone, window.navigator.connection.type);
        });
    };
    NetworkInformationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], NetworkInformationService);
    return NetworkInformationService;
}());
exports.NetworkInformationService = NetworkInformationService;
