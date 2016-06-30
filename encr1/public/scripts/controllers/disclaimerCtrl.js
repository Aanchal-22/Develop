/**
 * Renders all the widgets on the tab and triggers the datasources that are used by the widgets.
 * Customize your widgets by:
 *  - Overriding or extending widget API methods
 *  - Changing widget settings or options
 */
/* jshint unused: false */
define(['angular',
    'controllers-module',
    'angular-ui-cookies'], function(angular, controllers, ngCookies) {
    'use strict';

    // Controller definition
    controllers.controller('disclaimerCtrl', ['$rootScope', '$scope', '$http','$state', '$cookies','$cookieStore', function($rootScope, $scope, $http, $state,$cookies, $cookieStore) {
        console.log("inside Disclaimer Ctrl");
        $scope.login =  $rootScope.usrLogin;
        $scope.nav = true;
        $scope.favoriteCookie = $cookieStore.get('userInfo');
        console.log("favoriteCookie"+$scope.favoriteCookie);
        //console.log($rootScope.loginUserInfo1.manageUsers[0]);
        $scope.sendUserInfo = function() {
            console.log("inside SendUserInfo Check");

           $scope.loginUser=$rootScope.loginUserInfo;
            //console.log($scope.loginUser.userType);
          // console.log($scope.loginUser.manageUsers[0]);
             /*var uploadUrl = "http://localhost:9095/EncrUserUtilityService/service/manageUsers/ncr_soni";
             $http.get(uploadUrl)
             .then(function(response) {
             $scope.userType = response.data.manageUsers[0].userType;
                     $scope.startPage = response.data.manageUsers[0].pageDesc;
                     $scope.user = response.data.manageUsers[0].userType;
                     console.log( $scope.user);
                     console.log($scope.startPage);
                     console.log("User Utility URL Called::" + angular.toJson(response.data.manageUsers[0]));
                     
                     $rootScope.indexView=true;*/
$rootScope.startPage=true;
                     
                     $rootScope.signOut=true;
                     if($scope.loginUser.userType=="Administrator"){
                         console.log("inside if");
                         $rootScope.admin=true;
                         $rootScope.qcr=true;
                         $rootScope.history=true;
                         $rootScope.report=true;
                         $rootScope.adhoc=true;
                         $rootScope.search=true;
                         $rootScope.reopen=true;
                         $rootScope.cockpit=true;
                     }else if($scope.loginUser.userType=="QCR"){
                         $rootScope.admin=false;
                         $rootScope.qcr=true;
                         $rootScope.history=true;
                         $rootScope.report=true;
                         $rootScope.adhoc=true;
                         $rootScope.search=true;
                         $rootScope.reopen=true;
                         $rootScope.cockpit=true;

                     }else if($scope.loginUser.userType=="Supplier"){
                         $rootScope.admin=false;
                         $rootScope.qcr=false;
                         $rootScope.history=true;
                         $rootScope.report=false;
                         $rootScope.adhoc=false;
                         $rootScope.search=true;
                         $rootScope.reopen=true;
                         $rootScope.cockpit=true;
                     }else if($scope.loginUser.userType=="Operator"){
                         $rootScope.admin=false;
                         $rootScope.report=false;
                         $rootScope.adhoc=false;
                         $rootScope.cockpit=true;
                         $rootScope.qcr=true;
                         $rootScope.history=true;
                         $rootScope.search=true;
                         $rootScope.reopen=true;

                     }else if($scope.loginUser.userType=="QCR/SDR"){
                         $rootScope.admin=false;
                         $rootScope.reopen=false;
                         $rootScope.cockpit=true;
                         $rootScope.qcr=true;
                         $rootScope.history=true;
                         $rootScope.search=true;
                         $rootScope.report=true;
                         $rootScope.adhoc=false;
                     }

                     if($scope.loginUser.pageDesc=="Administration"){
                         console.log("Start Page");
                         $state.go('administration', { redirect: true });

                     }else if($scope.loginUser.pageDesc=="Cockpit"){
                         $state.go('cockpit', { redirect: true });

                     }else if($scope.loginUser.pageDesc=="Creating QCR"){
                         console.log("Start Page");
                         $state.go('qcr', { redirect: true });

                     }else if($scope.loginUser.pageDesc=="Search"){
                         $state.go('disclaimer', { redirect: true });

                     }else if($scope.loginUser.pageDesc=="Regular Reports"){
                         $state.go('disclaimer', { redirect: true });

                     }else if($scope.loginUser.pageDesc=="Ad Hoc Reports"){
                         $state.go('disclaimer', { redirect: true });

                     }else if($scope.loginUser.pageDesc=="Reopen QCR"){
                         $state.go('disclaimer', { redirect: true });

                     }



                    /* $rootScope.admin=true;
                     $rootScope.qcr=true;
                     $rootScope.history=true;
                     $rootScope.report=true;
                     $rootScope.adhoc=true;
                     $rootScope.search=true;
                     $rootScope.reopen=true;
                     $rootScope.cockpit=true;*/



             }






    }]);
});
