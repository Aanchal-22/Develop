/**
 * Created by predix on 12/29/15.
 */

/**
 * Created by predix on 12/23/15.
 */
define(['angular',
    'controllers-module'
], function (angular,controllers) {
    'use strict';

    // Controller definition
    controllers.controller('ppfInfoCtrl',
        ['$scope', '$rootScope','$http', '$log', '$location',
            '$stateParams', 'ppfInformationService','loadingService',
            function ($scope,$rootScope,$http, $log , $location ,
                      $stateParams, ppfInformationService,loadingService) {

                $scope.quoteID = $stateParams.quoteID;

                var _placeholder = $('#module_loadData');
                (function () {

                    loadingService.startSpinner(_placeholder);
                    ppfInformationService.getPPFInformationData($scope.quoteID).success(function (result) {
                        $scope.ppfInfo = result;
                        console.log("result ppfInfo is::" + angular.toJson($scope.ppfInfo));
                        $scope.getReqJsonFromResult(result);

                        loadingService.stopSpinner(_placeholder);
                    })
                })();


                $scope.getReqJsonFromResult = function (data) {

                    var onlyPPRData = [];
                    var onlyActualData = [];

                    for (var i = 0; i < data.length; i++) {
                        if (onlyPPRData.indexOf(data[i].triggerValue) === -1 && data[i].costType == "PPR") {
                            onlyPPRData.push(data[i]);
                        } else if (onlyActualData.indexOf(data[i].triggerValue) === -1 && data[i].costType == "ACTUAL") {
                            onlyActualData.push(data[i]);
                        }
                    }

                    console.log("Only PPR data is::" + angular.toJson(onlyPPRData));
                    console.log("only Actual data is::" + angular.toJson(onlyActualData));

                    $scope.pprData = [];
                    var uniquePPRTriggerValues = [];

                    for (var i = 0; i < onlyPPRData.length; i++) {
                        if (uniquePPRTriggerValues.indexOf(data[i].triggerValue) === -1) {
                            uniquePPRTriggerValues.push(data[i].triggerValue);
                        }
                    }

                    console.log("unique PPR triggers::" + uniquePPRTriggerValues);


                    for (var i = 0; i < uniquePPRTriggerValues.length; i++) {

                        var tempArray = [];
                        for (var j = 0; j < onlyPPRData.length; j++) {

                            if (uniquePPRTriggerValues[i] == onlyPPRData[j].triggerValue) {
                                tempArray.push(onlyPPRData[j]);
                            }

                        }

                        $scope.pprData.push(tempArray);
                    }


                    console.log("final PPR DATA array::" + angular.toJson($scope.pprData));


                    $scope.actualData = [];
                    var uniqueActualTriggerValues = [];

                    for (var i = 0; i < onlyActualData.length; i++) {
                        if (uniqueActualTriggerValues.indexOf(data[i].triggerValue) === -1) {
                            uniqueActualTriggerValues.push(data[i].triggerValue);
                        }
                    }

                    console.log("unique actual triggers::" + uniqueActualTriggerValues);


                    for (var i = 0; i < uniqueActualTriggerValues.length; i++) {

                        var tempArrayActual = [];
                        for (var j = 0; j < onlyActualData.length; j++) {

                            if (uniqueActualTriggerValues[i] == onlyActualData[j].triggerValue) {
                                tempArrayActual.push(onlyActualData[j]);
                            }

                        }

                        $scope.actualData.push(tempArrayActual);
                    }


                    console.log("final Actual DATA array::" + angular.toJson($scope.actualData));
                }


                $scope.costType = {
                    pprTYpe: false,
                    actualType: false
                }

                $scope.displaySubmitButton=false;



                $scope.checkCostType = function () {

                    if($scope.costType.pprTYpe && !$scope.costType.actualType) {
                        $scope.costTypeSelected = "PPR";
                        $scope.displaySubmitButton=true;
                    }else if($scope.costType.actualType && !$scope.costType.pprTYpe){
                        $scope.costTypeSelected = "ACTUAL";
                        $scope.displaySubmitButton=true;
                    }else if(!$scope.costType.actualType && !$scope.costType.pprTYpe){
                        $scope.displaySubmitButton=false;
                    }else if($scope.costType.actualType && $scope.costType.pprTYpe){
                        $scope.displaySubmitButton=false;
                    }


                    console.log("cost type selected is ::"+$scope.costTypeSelected);
                }

            }]);

});

