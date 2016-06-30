
/**
 * Created by predix on 1/4/16.
 */
define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('shareDataService', ['$q', '$http', '$rootScope',function($q, $http, $rootScope) {

 /*	var shareContract = {};
    shareContract.setVar = function(flag) {
    	//alert("setser");
	    shareContract.showOnGO=flag;
	    }

   /*  shareContract.getVar = function() {
     	alert("get");
	     return shareContract.showOnGO;
	    }*/

   // return shareContract;

 	return {
 		data :''
 	};
    }]);
});
