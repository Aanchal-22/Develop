/**
 * Created by predix on 3/4/16.
 */
/**
 * Created by 703134813 on 3/3/2016.
 */
define(['angular',
    'controllers-module'
], function (angular,controllers) {
    'use strict';

    // Controller definition
    controllers.controller('InventoryMaintenanceCtrl', ['$rootScope','$scope', '$http', '$location', '$window','loadingService', '$filter'
        ,function ($rootScope,$scope, $http, $location, $window,loadingService,$filter) {


        console.log("entering InventoryMaintenanceCtrl");

        $scope.inventoryData={
            partTye:'',
            downTimecost:'',
            dukeCostOfCapital:'',
            serviceLevelRequired:'',
            inventoryCarryingCost:'',
            fixedCostPerOrder:''
        }

        $scope.serviceLevel=[{id:"66",value:"66"},
            {id:"95",value:"95"},
            {id:"99",value:"99"}];

        $scope.inventoryData.serviceLevelRequired=$scope.serviceLevel[0].value;


        var _placeholder = $('#module_loadData');
        $scope.displayCalcData =false;

        $scope.loadPartsDDInfo = function(){

            $http.get("http://localhost:5004/partsInfoDDData").success(function(result)
            {
                console.log("response for partsInfoDDData"+angular.toJson(result));
                $scope.partsDropDownData = result;
            });
        }

        // $scope.loadPartsDDInfo();

        $scope.loadPartsInfo = function(data){
            console.log("part type selected is::"+angular.toJson(data));
        }



        $scope.doInventoryCalculation = function(data){
            loadingService.startSpinner(_placeholder);
            console.log("request data::"+angular.toJson(data));

            $http.post("https://inventorymaintenanceservices.run.aws-usw02-pr.ice.predix.io/inventoryCalculatedData", JSON.stringify(data)).success(function(result) {

                console.log("result post data service::"+angular.toJson(result));
                $scope.displayCalcData = true;
                $scope.calculatedInventoryDataList = result;
                $scope.calculatedInventoryData = $scope.calculatedInventoryDataList;
                $scope.numberOfPages=0;
                $scope.curPage = 0;
                $scope.pageSize = 5;
                $scope.numberOfPages=Math.ceil( $scope.calculatedInventoryData.length/ $scope.pageSize);

                //responsiveTables.init();

                loadingService.stopSpinner(_placeholder);

            })
        }

        $scope.searchRequestTable=function()
        {
            console.log("entering earch data in table function::"+$scope.searchText);
            $scope.curPage = 0;
            if($scope.searchText=='')
                $scope.calculatedInventoryData=$scope.calculatedInventoryDataList;
            else
                $scope.calculatedInventoryData=$filter('filter')($scope.calculatedInventoryData,$scope.searchText);
            console.log("in else check, datalist size:"+$scope.calculatedInventoryData.length)
            $scope.numberOfPages=Math.ceil($scope.calculatedInventoryData.length/ $scope.pageSize);
        }


        var responsiveTables = {
            init: function() {
                console.log("entering responsiveTables init function::")
                $(document).find('.fixed-columns').each(function (i, elem) {
                    console.log("responsiveTables init -- inside each::")
                    responsiveTables.fixColumns(elem);
                });
            },

            fixColumns: function(table, columns) {
                var $table = $(table);
                $table.removeClass('fixed-columns');
                var $fixedColumns = $table.clone().attr('id', $table.attr('id') + '-fixed').insertBefore($table).addClass('fixed-columns-fixed');

                $fixedColumns.find('*').each(function (i, elem) {
                    if ($(this).attr('id') !== undefined) {
                        $table.find("[id='" + $(this).attr("id") + "']").attr('id', $(this).attr('id') + '-hidden');
                    }
                    if ($(this).attr('name') !== undefined) {
                        $table.find("[name='" + $(this).attr("name") + "']").attr('name', $(this).attr('name') + '-hidden');
                    }
                });

                if (columns !== undefined) {
                    $fixedColumns.find('tr').each(function (x, elem) {
                        $(elem).find('th,td').each(function (i, elem) {
                            if (i >= columns) {
                                $(elem).remove();
                            }
                        });
                    });
                } else {
                    $fixedColumns.find('tr').each(function (x, elem) {
                        $(elem).find('th,td').each(function (i, elem) {
                            if (!$(elem).hasClass('fixed-column')) {
                                $(elem).remove();
                            }
                        });
                    });
                }

                $fixedColumns.find('tr').each(function (i, elem) {
                    $(this).height($table.find('tr:eq(' + i + ')').height());
                });
            }
        };



    }]);

});

