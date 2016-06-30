define(['angular',
    'controllers-module'
], function (angular,controllers) {
    'use strict';

    // Controller definition
    controllers.controller('costInfoCtrl',
        ['$scope', '$rootScope','$http', '$log', '$location',
            '$stateParams','loadingService','costInfoService',
            function ($scope,$rootScope,$http, $log , $location ,
                      $stateParams,loadingService,costInfoService) {

                $scope.quoteID = $stateParams.quoteID;
                $scope.costType=$stateParams.costTypeSelected

                var _placeholder = $('#module_loadData');

                $scope.loadCostInfoData = function() {

                    loadingService.startSpinner(_placeholder);
                     costInfoService.getCostInfoData($scope.quoteID, $scope.costType).success(function (result) {

                         $scope.costInfoResponse = result;
                         console.log("cost info response data is::" + angular.toJson($scope.costInfoResponse));

                         console.log("size of temp array::"+$scope.costInfoResponse.length)



                         $scope.yearData=[];
                         $scope.avgMtlCostsData=[];
                         $scope.avgNewMtlCosts=[];
                         $scope.avgUsdMtlCosts=[];
                         $scope.lclPurMtlCosts=[];
                         $scope.avgLbrHours=[];
                         $scope.avgLbrCosts=[];
                         $scope.avgcompRepairCosts=[];
                         $scope.avgOutsideVendorCosts=[];




                         angular.forEach($scope.costInfoResponse, function(value, key){
                             console.log("inside foreach value is::"+value.year);
                             console.log("inside foreach key is::"+key);
                             $scope.yearData.push(value.year);
                             $scope.avgMtlCostsData.push(value.avgMtlCosts);
                             $scope.avgNewMtlCosts.push(value.avgNewMtlCosts);
                             $scope.avgUsdMtlCosts.push(value.avgUsdMtlCosts);
                             $scope.lclPurMtlCosts.push(value.lclPurMtlCosts);
                             $scope.avgLbrHours.push(value.avgLbrHours);
                             $scope.avgLbrCosts.push(value.avgLbrCosts);
                             $scope.avgcompRepairCosts.push(value.avgcompRepairCosts);
                             $scope.avgOutsideVendorCosts.push(value.avgOutsideVendorCosts);


                         });

                         console.log("year data::"+angular.toJson($scope.yearData));
                         console.log("avgMtlCostsData data::"+angular.toJson($scope.avgMtlCostsData));
                         console.log("avgNewMtlCosts data::"+angular.toJson($scope.avgNewMtlCosts));
                         console.log("avgUsdMtlCosts data::"+angular.toJson($scope.avgUsdMtlCosts));
                         console.log("lclPurMtlCosts data::"+angular.toJson($scope.lclPurMtlCosts));
                         console.log("avgLbrHours data::"+angular.toJson($scope.avgLbrHours));
                         console.log("avgLbrCosts data::"+angular.toJson($scope.avgLbrCosts));
                         console.log("avgcompRepairCosts data::"+angular.toJson($scope.avgcompRepairCosts));
                         console.log("avgOutsideVendorCosts data::"+angular.toJson($scope.avgOutsideVendorCosts));

                         loadingService.stopSpinner(_placeholder);

                     });

                };


               $scope.loadCostInfoData();




            }]);
});
