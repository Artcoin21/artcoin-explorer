'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, TachacoinCoreLib) {
			return {
				getCurrentNetwork: function () {
					return TachacoinCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});