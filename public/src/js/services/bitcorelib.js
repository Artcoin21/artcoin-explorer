'use strict';

angular.module('insight.tachacoincorelib').factory('TachacoinCoreLib',
    function() {
        var TachacoinCoreLib = require('tachacoincore-lib');
        return TachacoinCoreLib;
    });

