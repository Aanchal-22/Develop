/**
 * Renders all the widgets on the tab and triggers the datasources that are used by the widgets.
 * Customize your widgets by:
 *  - Overriding or extending widget API methods
 *  - Changing widget settings or options
 */
/* jshint unused: false */
define(['angular',
    'controllers-module'
], function(angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('landingCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

        $scope.message = "GE Aviation is a world-leading provider of jet and turboprop engines, components and integrated systems for commercial, military, business and general aviation aircraft, and ship propulsion applications. GE Aviation has a global service network to support these offerings.";
        /*$http.get('http://customerandcontractdataservice.run.aws-usw02-pr.ice.predix.io/getContractList').success(function(result){
            $scope.customerContractDetails=result;
            console.log("result customerContractDetails is::"+angular.toJson( $scope.customerContractDetails));
        })*/
        console.log("Flow in home controller:");


        $(window).resize(function() {
            setHeight();
        });

        function setHeight() {
            var imageHt = $("#right-content").height();
            $('#left-content').css({ 'height': imageHt + 'px' });
        }

    }]);
});
