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
// cordova-plugin-camera
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var CameraDestinationType;
(function (CameraDestinationType) {
    CameraDestinationType[CameraDestinationType["DATA_URL"] = 0] = "DATA_URL";
    CameraDestinationType[CameraDestinationType["FILE_URI"] = 1] = "FILE_URI";
    CameraDestinationType[CameraDestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(CameraDestinationType = exports.CameraDestinationType || (exports.CameraDestinationType = {}));
var CameraEncodingType;
(function (CameraEncodingType) {
    CameraEncodingType[CameraEncodingType["JPEG"] = 0] = "JPEG";
    CameraEncodingType[CameraEncodingType["PNG"] = 1] = "PNG";
})(CameraEncodingType = exports.CameraEncodingType || (exports.CameraEncodingType = {}));
var CameraMediaType;
(function (CameraMediaType) {
    CameraMediaType[CameraMediaType["PICTURE"] = 0] = "PICTURE";
    CameraMediaType[CameraMediaType["VIDEO"] = 1] = "VIDEO";
    CameraMediaType[CameraMediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(CameraMediaType = exports.CameraMediaType || (exports.CameraMediaType = {}));
var CameraPictureSourceType;
(function (CameraPictureSourceType) {
    CameraPictureSourceType[CameraPictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    CameraPictureSourceType[CameraPictureSourceType["CAMERA"] = 1] = "CAMERA";
    CameraPictureSourceType[CameraPictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(CameraPictureSourceType = exports.CameraPictureSourceType || (exports.CameraPictureSourceType = {}));
var CameraPopoverArrowDirection;
(function (CameraPopoverArrowDirection) {
    CameraPopoverArrowDirection[CameraPopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    CameraPopoverArrowDirection[CameraPopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    CameraPopoverArrowDirection[CameraPopoverArrowDirection["ARROW_LEFT"] = 4] = "ARROW_LEFT";
    CameraPopoverArrowDirection[CameraPopoverArrowDirection["ARROW_RIGHT"] = 8] = "ARROW_RIGHT";
    CameraPopoverArrowDirection[CameraPopoverArrowDirection["ARROW_ANY"] = 15] = "ARROW_ANY";
})(CameraPopoverArrowDirection = exports.CameraPopoverArrowDirection || (exports.CameraPopoverArrowDirection = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection[CameraDirection["BACK"] = 0] = "BACK";
    CameraDirection[CameraDirection["FRONT"] = 1] = "FRONT";
})(CameraDirection = exports.CameraDirection || (exports.CameraDirection = {}));
var CameraService = /** @class */ (function () {
    function CameraService(zone) {
        this.zone = zone;
        this.cameraDefaults = {
            quality: 50,
            destinationType: CameraDestinationType.FILE_URI,
            sourceType: CameraPictureSourceType.CAMERA,
            encodingType: CameraEncodingType.JPEG,
            mediaType: CameraMediaType.PICTURE,
            cameraDirection: CameraDirection.BACK
        };
    }
    CameraService.prototype.getPicture = function (options) {
        var _this = this;
        var opts = Object.assign({}, this.cameraDefaults, options);
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.camera.getPicture(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error, opts);
        }); });
    };
    CameraService.prototype.cleanup = function () {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () { return __1.ZoneObservable.create(_this.zone, function (observer) {
            window.navigator.camera.cleanup(function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    CameraService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CameraService);
    return CameraService;
}());
exports.CameraService = CameraService;
