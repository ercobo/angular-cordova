"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/mergeMap");
var __1 = require("../");
var MediaStatus;
(function (MediaStatus) {
    MediaStatus[MediaStatus["MEDIA_NONE"] = 0] = "MEDIA_NONE";
    MediaStatus[MediaStatus["MEDIA_STARTING"] = 1] = "MEDIA_STARTING";
    MediaStatus[MediaStatus["MEDIA_RUNNING"] = 2] = "MEDIA_RUNNING";
    MediaStatus[MediaStatus["MEDIA_PAUSED"] = 3] = "MEDIA_PAUSED";
    MediaStatus[MediaStatus["MEDIA_STOPPED"] = 4] = "MEDIA_STOPPED";
})(MediaStatus = exports.MediaStatus || (exports.MediaStatus = {}));
var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["MEDIA_ERR_ABORTED"] = 1] = "MEDIA_ERR_ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["MEDIA_ERR_NETWORK"] = 2] = "MEDIA_ERR_NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["MEDIA_ERR_DECODE"] = 3] = "MEDIA_ERR_DECODE";
    MEDIA_ERROR[MEDIA_ERROR["MEDIA_ERR_NONE_SUPPORTED"] = 4] = "MEDIA_ERR_NONE_SUPPORTED";
})(MEDIA_ERROR = exports.MEDIA_ERROR || (exports.MEDIA_ERROR = {}));
var MediaError = /** @class */ (function () {
    function MediaError() {
    }
    return MediaError;
}());
exports.MediaError = MediaError;
var MediaService = /** @class */ (function () {
    function MediaService(zone) {
        this.zone = zone;
    }
    MediaService.prototype.createMedia = function (src, mediaSuccess, mediaError, mediaStatus) {
        var _this = this;
        return __1.Cordova.deviceready.mergeMap(function () {
            return __1.ZoneObservable.of(_this.zone, new window.Media(src, mediaSuccess, mediaError, mediaStatus));
        });
    };
    return MediaService;
}());
exports.MediaService = MediaService;
