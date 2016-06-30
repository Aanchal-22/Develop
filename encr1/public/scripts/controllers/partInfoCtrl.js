/**
 * Created by predix on 12/23/15.
 */
define(['angular',
    'controllers-module'
], function (angular,controllers) {
    'use strict';

    // Controller definition
    controllers.controller('partInfoCtrl',
        ['$scope', '$rootScope','$http', '$log', '$location',
            '$stateParams', 'partInformationService','loadingService',
            function ($scope,$rootScope,$http, $log , $location ,
                      $stateParams, partInformationService,loadingService) {

                $scope.quoteID = $stateParams.quoteID;

                var _placeholder = $('#module_loadData');

                (function(){
                    loadingService.startSpinner(_placeholder);
                    partInformationService.getPartInformationData($scope.quoteID).success(function(result)
                    {
                        $scope.partInfo=result;
                        console.log("result partInfo is::"+angular.toJson( $scope.partInfo));
                        loadingService.stopSpinner(_placeholder);
                    })
                })();

            }]);

});
