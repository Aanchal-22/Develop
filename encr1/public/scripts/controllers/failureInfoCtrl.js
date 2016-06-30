/**
 * Created by predix on 12/23/15.
 */
define(['angular',
    'controllers-module'
], function (angular,controllers) {
    'use strict';

    // Controller definition
    controllers.controller('failureInfoCtrl',
        ['$scope', '$rootScope','$http', '$log', '$location',
            '$stateParams', 'failureInformationService','loadingService',
            function ($scope,$rootScope,$http, $log , $location ,
                      $stateParams, failureInformationService,loadingService) {

                $scope.quoteID = $stateParams.quoteID;


                var _placeholder = $('#module_loadData');
                (function(){

                    loadingService.startSpinner(_placeholder);
                    failureInformationService.getWeibullEngineData($scope.quoteID).success(function(result)
                    {
                        $scope.failureInfo=result;
                        $scope.getReqJsonFromResult( result);
                        console.log("result failureInfo is::"+angular.toJson( $scope.failureInfo));
                        console.log("first index data::"+$scope.failureInfo[0].weiBullName);
                        loadingService.stopSpinner(_placeholder);
                    })
                })();

                var uniqueTrigegrValues = [];
                $scope.getReqJsonFromResult = function(data){

                    for(var i = 0; i< data.length; i++){
                        if(uniqueTrigegrValues.indexOf(data[i].triggerValue) === -1){
                            uniqueTrigegrValues.push(data[i].triggerValue);
                        }
                    }

                    console.log("unique triggers::"+uniqueTrigegrValues);
                    $scope.finalArray =[];
                    for(var i=0;i<uniqueTrigegrValues.length;i++){

                            var tempArray=[];
                        for(var j = 0; j< data.length; j++){

                            if(uniqueTrigegrValues[i] == data[j].triggerValue){
                                tempArray.push(data[j]);
                            }

                        }

                        $scope.finalArray.push(tempArray);
                    }


                    console.log("final array::"+angular.toJson($scope.finalArray));
                }



            }]);

});
