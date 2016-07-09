/**
 * Renders all the widgets on the tab and triggers the datasources that are used by the widgets.
 * Customize your widgets by:
 *  - Overriding or extending widget API methods
 *  - Changing widget settings or options
 */
/* jshint unused: false */
define(['angular',
    'controllers-module',
    'angular-ui-cookies'
], function(angular, controllers, ngCookies) {
    'use strict';

    // Controller definition
    controllers.controller('loginCtrl', ['$rootScope', '$scope', 'loginService', '$http', '$state', '$cookies', '$cookieStore', '$translate', function($rootScope, $scope, loginService, $http, $state, $cookies, $cookieStore, $translate) {
        console.log("inside login Ctrl");
        $scope.login = true;
        $scope.nav = true;
        $scope.loginCheck = function() {

            console.log("inside login Check");
            var login = $scope.loginId;
            console.log($scope.loginId);
            $rootScope.usrLogin = login;
            $scope.success = true;
            loginService.getLoginUserData($scope.loginId).success(function(result) {
                    $rootScope.loginUserInfo1 = result;

                    // console.log("Checking Result Data::" + angular.toJson($rootScope.loginUserInfo1));
                    $rootScope.loginUserInfo = result.manageUsers[0];
                    $rootScope.dfltRole = result.userDfltRole;
                    $rootScope.dfltPrivilege = result.userDfltPrivilege;
                    console.log($rootScope.dfltRole);
                    console.log($rootScope.dfltPrivilege);
                    $rootScope.userRole = angular.fromJson(result.userRole),
                        console.log($rootScope.userRole);
                    $rootScope.userPrivilege = angular.fromJson(result.userPrivilege);
                    console.log($rootScope.userPrivilege);

                    var log = [];
                    /*Storing User Role in An Array   */
                    angular.forEach($rootScope.userRole, function(value, key) {
                        console.log(key + "   " + value);
                        log.push(value);

                    }, log);

                    console.log("length" + log);
                    var role = [];
                    var temp = [];
                    for (var i = 0; i < log.length; i++) {
                        temp = log[i];
                        for (var j = 0; j < temp.length; j++) {
                            role.push(temp[j]);
                        }
                    }
                    console.log(role);

                    /*Storing User Privilege In An Array */
                    var log1 = [];
                    angular.forEach($rootScope.userPrivilege, function(value, key) {
                        console.log(key + "   " + value);
                        log1.push(value);

                    }, log1);

                    console.log("length" + log1);
                    var privilege = [];
                    var temp1 = [];
                    for (var i = 0; i < log1.length; i++) {
                        temp1 = log1[i];
                        for (var j = 0; j < temp1.length; j++) {
                            privilege.push(temp1[j]);
                        }
                    }
                    console.log(privilege);


                    $cookieStore.put('userInfo', $rootScope.loginUserInfo);
                    $cookieStore.put('usrDfltRole', $rootScope.dfltRole);
                    $cookieStore.put('usrDfltPrivilege', $rootScope.dfltPrivilege);
                    $cookieStore.put('userRole', role);
                    $cookieStore.put('userPrivilege', privilege);

                    console.log("request data for Login Screen::" + angular.toJson($rootScope.loginUserInfo));
                    /*  $scope.getReqJsonFromResult( result);*/

                    console.log($rootScope.loginUserInfo.languagePkid);
                    if ($rootScope.loginUserInfo.languagePkid == 1) {
                        $translate.use('en');

                    } else if ($rootScope.loginUserInfo.languagePkid == 3) {

                        $translate.use('fr');

                    } else {

                        $translate.use('it');
                    }


                    $state.go('disclaimer', { redirect: true });

                })
                .error(function(data, status) {
                    $state.go('error', { redirect: true });
                })


        }
    }]);
});
