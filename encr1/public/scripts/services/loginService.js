/**
 * Created by 703125940 on 6/24/2016.
 */

define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('loginService', ['$q', '$http', function($q, $http) {

        var getLoginUserData = function(loginUser) {
            console.log("Inside LoginService")
            return $http.get("http://3.235.198.61:9095/EncrUserUtilityService/service/manageUsers/" + loginUser);
            //return $http.get(testData);

        }


        return {
            getLoginUserData: getLoginUserData
        };
    }]);
});
