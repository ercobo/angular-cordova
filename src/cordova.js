'use strict';
angular.module('ngCordova', [])
.provider('$cordova', [function() {
    var _this = this;

    var callbacks = [];
    var listeners = {};
    var events = {};
    var ready = false;

    var execute = function(event, args) {
        if (events[event]) {
            for (var i = 0; i < events[event].length; i++) {
                events[event][i].apply(events[event][i], args || []);
            }
        }
    };

    _this.platformId = window.cordova.platformId;

    _this.register = function(element, event) {
        if (event.split(":").length !== 2) {
            console.error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format $module:event, e.g. $cordova:deviceready');
        }

        if (listeners[event]) {
            console.error('angular-cordova: event "' + String(event) + '" is already registered');
            return;
        }

        listeners[event] = function() {
            execute(event, arguments);
        };

        element.addEventListener(event.split(":")[1], listeners[event], false);
    };

    _this.unregister = function(element, event) {
        if (!listeners[event]) {
            console.error('angular-cordova: "' + String(event) + '" is not a registered event');
            return;
        }

        element.removeEventListener(event.split(":")[1], listeners[event], false);
    };

    _this.register(document, '$cordova:deviceready');

    _this.$on = function(event, fn, prefix) {
        if (!prefix && event && event.split(":").length === 0) {
            prefix = "$cordova";
        }

        if (prefix) {
            event = prefix + ":" + event;
        }

        if (event.split(":").length !== 2) {
            console.error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format $module:event, e.g. $cordova:deviceready');
        }

        if (!listeners[event]) {
            console.error('angular-cordova: "' + String(event) + '" is not a registered event');
            return;
        }

        if (!events[event]) {
            events[event] = [];
        }

        events[event].push(fn);
    };

    _this.$on('$cordova:deviceready', function() {
        ready = true;

        angular.forEach(callbacks, function(callback) {
            callback();
        });
    });

    _this.$get = ['$q', function($q) {
        var deviceready = function() {
            return function() {
                var q = $q.defer();

                if (ready) {
                    q.resolve();
                } else {
                    callbacks.push(function() {
                        q.resolve();
                    });
                }

                q.promise.abort = q.reject;

                return q.promise;
            };
        };

        return {
            register: _this.register,
            uregister: _this.unregister,
            $on: _this.$on,
            $q: function(fn) {
                return function() {
                    var q = $q.defer();
                    var args = Array.from(arguments);
                    args.push(q);

                    var promise = deviceready().then(function() {
                        fn.apply(fn, args);
                    });

                    q.promise.abort = function() {
                        promise.abort();
                        q.reject();
                    };

                    q.promise.clearWatch = q.promise.abort;

                    return q.promise;
                };
            },
            platformId: _this.platformId
        };
    }];
}]);
