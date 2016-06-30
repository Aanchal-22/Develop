define(['angular', 'jquery', 'controllers-module'],
    function(angular, jquery, controllers) {
        'use strict';

        // Controller definition
        controllers.controller('scenarioManagerCtrl', ['$scope', '$rootScope', '$http', '$log', '$location',
            '$stateParams', 'scenarioManagerService', '$state', 'loadingService', '$window',
            function($scope, $rootScope, $http, $log, $location,
                $stateParams, scenarioManagerService, $state, loadingService, $window) {

                $scope.bestCashFlowValues = [];
                $scope.secBestCashFlowValues = [];
                $scope.worstCashFlowValues = [];

                $scope.bestMaxDbValues = [];
                $scope.secBestMaxDbValues = [];
                $scope.worstMaxDbValues = [];
                $scope.quoteID = $rootScope.scrquoteID;

                $scope.scrtotalGEBilling = $rootScope.scrtotalGEBilling;
                $scope.scrtotalTyTrueCost = $rootScope.scrtotalTyTrueCost;
                $scope.scrtyOm = $rootScope.scrtyOm;
                $scope.tytslv = $rootScope.tytslv;
                $scope.scrtyOmPerc = $rootScope.scrtyOmPerc;

                $scope.scrRsp = $rootScope.scrRsp;
                $scope.scrTotalRsp = $rootScope.scrtyOmPerc;
                $scope.totalMonthly = $rootScope.scrTotalMonthly;
                $scope.totalTyBilling = $rootScope.scrtotalTyBilling;
                $scope.engineID = $rootScope.screngineID;
                console.log($scope.scrtotalGEBilling);
                console.log($scope.scrtotalTyTrueCost);
                console.log($scope.scrtyOm);
                console.log($scope.tytslv);
                console.log($scope.scrRsp);
                console.log($scope.scrTotalRsp);


                $scope.ScreensDropDownData = {

                    CovScenarioDDData: [{ id: "1", value: "1" },
                        { id: "2", value: "2" },
                        { id: "3", value: "3" },
                        { id: "4", value: "4" },
                        { id: "5", value: "5" },
                        { id: "6", value: "6" },
                        { id: "7", value: "7" },
                        { id: "8", value: "8" },
                        { id: "9", value: "9" },
                        { id: "10", value: "10" }
                    ],
                    CovLLPDDData: [{ id: "Included", value: "Included" },
                        { id: "Exclusive", value: "Exclusive" },
                        { id: "No", value: "No" }
                    ],
                    CovEngineLeasingDDData: [{ id: "Leasing", value: "Leasing" },
                        { id: "GSEA", value: "GSEA" },
                        { id: "No", value: "No" }
                    ],
                    CovServiceCreditDDData: [{ id: "Yes", value: "Yes" },
                        { id: "No", value: "No" }
                    ],
                    CovMiscCostEFHDDData: [{ id: "Yes", value: "Yes" },
                        { id: "No", value: "No" }
                    ],
                    CovMiscCostSVDDData: [{ id: "Yes", value: "Yes" },
                        { id: "No", value: "No" }
                    ],
                    CovMiscCostYRDDData: [{ id: "Yes", value: "Yes" },
                        { id: "No", value: "No" }
                    ],
                    CovFLLRUDDData: [{ id: "Yes", value: "Yes" },
                        { id: "No", value: "No" }
                    ],
                    BillingScenarioDDData: [{ id: "1", value: "1" },
                        { id: "2", value: "2" },
                        { id: "3", value: "3" },
                        { id: "4", value: "4" },
                        { id: "5", value: "5" },
                        { id: "6", value: "6" },
                        { id: "7", value: "7" },
                        { id: "8", value: "8" },
                        { id: "9", value: "9" },
                        { id: "10", value: "10" }
                    ],
                    firstDD: [{ id: "1", value: "1" }],
                    BillingStructureDDData: [{ id: "Restored", value: "Restored" },
                        { id: "Popular", value: "Popular" },
                        { id: "Hybrid", value: "Hybrid" }
                    ],
                    CurrentStatusDDData: [{ id: "Match Base OM%", value: "Match Base OM%" },
                        { id: "Match Specific OM%", value: "Match Specific OM%" },
                        { id: "Match The Rates", value: "Match The Rates" }
                    ]

                }

                $scope.data = [{
                    "1": [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    "2": [
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    "3": [
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    "4": [
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    "5": [
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    "6": [
                        "7",
                        "8",
                        "9",
                        "10",
                        "11"
                    ],
                    "7": [
                        "8",
                        "9",
                        "10"
                    ],
                    "8": [
                        "9",
                        "10",
                        "11"
                    ],
                    "9": [
                        "10"
                    ],
                    "10": [
                        "11"
                    ],
                    "11": []
                }];



                $scope.displayupdateButton = true;
                $scope.CovScenarioDDDataSelected = $scope.ScreensDropDownData.CovScenarioDDData[0].id;
                $scope.CovLLPDDDataSelected = $scope.ScreensDropDownData.CovLLPDDData[0].id;
                $scope.CovEngineLeasingDDDataSelected = $scope.ScreensDropDownData.CovEngineLeasingDDData[0].id;
                $scope.CovServiceCreditDDDataSelected = $scope.ScreensDropDownData.CovServiceCreditDDData[0].id;
                $scope.CovMiscCostEFHDDDataSelected = $scope.ScreensDropDownData.CovMiscCostEFHDDData[0].id;
                $scope.miscCostEFH = "10";
                $scope.CovMiscCostSVDDDataSelected = $scope.ScreensDropDownData.CovMiscCostSVDDData[0].id;
                $scope.miscCostSV = "10";
                $scope.CovMiscCostYRDDDataSelected = $scope.ScreensDropDownData.CovMiscCostYRDDData[0].id;
                $scope.miscCostYR = "10";
                $scope.CovFLLRUDDDataSelected = $scope.ScreensDropDownData.CovFLLRUDDData[0].id;
                $scope.value0 = $scope.ScreensDropDownData.firstDD[0].id;
                $scope.v = $scope.data[0][$scope.value0][0];
                $scope.value1 = $scope.data[0][$scope.v][0];
                $scope.value2 = $scope.data[0][$scope.value1][0];
                $scope.value3 = $scope.data[0][$scope.value2][0];
                $scope.BillingScenarioDDDataSelected = $scope.ScreensDropDownData.BillingScenarioDDData[0].id;
                $scope.BillingStructureDDDataSelected = $scope.ScreensDropDownData.BillingStructureDDData[0].id;
                $scope.CurrentStatusDDDataSelected1 = $scope.ScreensDropDownData.CurrentStatusDDData[0].id;
                $scope.CurrentStatusDDDataSelected2 = $scope.ScreensDropDownData.CurrentStatusDDData[0].id;
                $scope.CurrentStatusDDDatavalue1 = "50";
                $scope.CurrentStatusDDDatavalue2 = "4";
                $scope.restoredValue1 = "100.00";
                $scope.restoredValue2 = "120.00";
                $scope.restoredValue3 = "140.00";
                $scope.restoredValue4 = "140.00";
                $scope.restoredValue5 = "";


                $scope.popularValue1 = "10.00";
                $scope.popularValue2 = "20.00";
                $scope.popularValue3 = "40.00";
                $scope.popularValue4 = "40.00";
                $scope.popularValue5 = "40.00";

                $scope.serviceValue1 = "1000";
                $scope.serviceValue2 = "2000";
                $scope.serviceValue3 = "2000";
                $scope.serviceValue4 = "5000";
                $scope.serviceValue5 = "5000";
                $scope.serviceValue6 = "";
                $scope.serviceValue7 = "";
                $scope.serviceValue8 = "";
                $scope.serviceValue9 = "";
                $scope.serviceValue10 = "";
                $scope.serviceValue11 = "";




                $scope.items = [];






                $(function() {
                    var chart = new Highcharts.Chart({
                        credits: {
                            enabled: false
                        },
                        itemHoverStyle: {
                            color: '#000'
                        },
                        chart: {
                            type: 'line',
                            renderTo: 'SVStream',
                            borderWidth: 1,
                            height: 250,
                            borderColor: '#cccccc',
                            animation: true,

                        },
                        annotationsOptions: {
                            enabledButtons: false
                        },
                        shadow: {
                            color: 'yellow',
                            width: 10,
                            offsetX: 0,
                            offsetY: 0
                        },
                        title: {
                            text: 'SV Stream',
                            x: -20, //center,
                            style: {
                                color: 'black'
                            }
                        },
                        subtitle: {
                            text: '',
                            x: -20
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: 'black' //left label color
                                }
                            },
                            gridLineColor: '#d3d3d3', //horizontal lines color
                            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                        },
                        yAxis: {
                            labels: {
                                style: {
                                    color: 'black' //left label color
                                }
                            },
                            gridLineColor: '#d3d3d3', //horizontal lines color

                            title: {
                                text: ''
                            },
                            plotLines: [{
                                value: 0.00,
                                width: 1,
                                color: '#808080'
                            }]
                        },
                        tooltip: {
                            valueSuffix: ''
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            borderWidth: 0
                        },
                        series: [{
                            name: 'SV Stream',
                            data: [1.7, 5.1, 2.3, 4, 5.1, 1.1, 2.3, 2.9, 1.1, 1.1, 1.1]
                        }]
                    });

                    var chart1 = new Highcharts.Chart({

                        credits: {
                            enabled: false
                        },
                        chart: {
                            type: 'line',
                            renderTo: 'DBStream',
                            borderWidth: 1,
                            height: 250,
                            borderColor: '#cccccc',
                        },
                        title: {
                            text: 'DB Stream',
                            x: -20 //center
                        },
                        annotationsOptions: {
                            enabledButtons: false
                        },
                        subtitle: {
                            text: '',
                            x: -20
                        },
                        xAxis: {
                            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                        },
                        yAxis: {
                            title: {
                                text: 'Cost $'
                            },
                            plotLines: [{
                                value: 0,
                                width: 1,
                                color: '#808080'
                            }]
                        },
                        tooltip: {
                            valueSuffix: '$'
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            borderWidth: 0
                        },
                        series: [{
                            name: 'Current',
                            data: [-1, -1.2, 2.2, -1.4, -0.2, 0.5, 0.5, 0.5, 0.5, 0.7, -0.8, 0.0]
                        }, {
                            name: '2nd Best',
                            data: [-1, -1.2, 0.6, -1.4, -0.2, -0.2, -0.2, -0.2, -0.2, 0.4, -0.8, 0.0]
                        }, {
                            name: 'Best',
                            data: [-1, -1.2, 0.5, -1.4, -0.2, -0.2, -0.2, -0.2, -0.2, 0.2, -0.8, 0.0]
                        }, {
                            name: 'Worst',
                            data: [-1, -1.2, 2.3, -1.4, -0.2, -0.2, -0.2, -0.2, -0.2, 0.2, -0.8, 0.0]
                        }]

                    });

                    var chart2 = new Highcharts.Chart({
                        credits: {
                            enabled: false
                        },
                        chart: {
                            type: 'line',
                            renderTo: 'CFStream',
                            borderWidth: 1,
                            height: 250,
                            borderColor: '#cccccc',
                        },
                        title: {
                            text: 'CF Stream',
                            x: -20 //center
                        },
                        annotationsOptions: {
                            enabledButtons: false
                        },
                        subtitle: {
                            text: '',
                            x: -20
                        },
                        xAxis: {
                            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                        },
                        yAxis: {
                            min: -150,
                            max: 10,
                            tickInterval: 20,


                            title: {
                                text: 'Cost $'
                            },

                            plotLines: [{
                                value: 0,
                                width: 1,
                                color: '#808080'
                            }]
                        },
                        tooltip: {
                            valueSuffix: '$'
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            borderWidth: 0
                        },
                        series: [{
                            name: 'Current',
                            data: [-1, -1.2, 2.2, -1.4, -0.2, 0.5, 0.5, 0.5, 0.5, 0.7, -0.8, 0.0]
                        }, {
                            name: '2nd Best',
                            data: [-1, -1.2, 0.6, -1.4, -0.2, -0.2, -0.2, -0.2, -0.2, 0.4, -0.8, 0.0]
                        }, {
                            name: 'Best',
                            data: [-1, -1.2, 0.6, -1.4, -0.2, -0.2, -0.2, -0.2, -0.2, 0.4, -0.8, 0.0]
                        }, {
                            name: 'Worst',
                            data: [-1, -1.2, 0.6, -1.4, -0.2, -0.2, -0.2, -0.2, -0.2, 0.4, -0.8, 0.0]
                        }]

                    });
                });



                $scope.submitScenarioManagerData = function() {
                    // alert("inside save data");

                    var data = {
                        c_quoteID: $scope.quoteID,
                        c_engineID: $scope.engineID,
                        n_scenario: $scope.CovScenarioDDDataSelected,
                        c_selectedLLP: $scope.CovLLPDDDataSelected,
                        c_selectedEngine_Leasing: $scope.CovEngineLeasingDDDataSelected,
                        c_selectedServiceCredit: $scope.CovServiceCreditDDDataSelected,
                        c_selectedMiscCost_EFH: $scope.CovMiscCostEFHDDDataSelected,
                        n_selectedMiscCost_EFH_Value: $scope.miscCostEFH,
                        c_selectedMiscCostSV: $scope.CovMiscCostSVDDDataSelected,
                        n_selectedMiscCost_SV_Value: $scope.miscCostSV,
                        c_selectedMiscCostYr: $scope.CovMiscCostYRDDDataSelected,
                        n_selectedMiscCost_YR_Value: $scope.miscCostYR,
                        c_selectedFLLRU: $scope.CovFLLRUDDDataSelected,
                        n_stepYear1: $scope.value0,
                        n_stepYear2: $scope.v,
                        n_stepYear3: $scope.value1,
                        n_stepYear4: $scope.value2,
                        n_stepYear5: $scope.value3,
                        n_restoredValue1: $scope.restoredValue1,
                        n_restoredValue2: $scope.restoredValue2,
                        n_restoredValue3: $scope.restoredValue3,
                        n_restoredValue4: $scope.restoredValue4,
                        n_restoredValue5: $scope.restoredValue5,

                        n_popularValue1: $scope.popularValue1,
                        n_popularValue2: $scope.popularValue2,
                        n_popularValue3: $scope.popularValue3,
                        n_popularValue4: $scope.popularValue4,
                        n_popularValue5: $scope.popularValue5,

                        n_serviceValue1: $scope.serviceValue1,
                        n_serviceValue2: $scope.serviceValue2,
                        n_serviceValue3: $scope.serviceValue3,
                        n_serviceValue4: $scope.serviceValue4,
                        n_serviceValue5: $scope.serviceValue5,
                        n_serviceValue6: $scope.serviceValue6,
                        n_serviceValue7: $scope.serviceValue7,
                        n_serviceValue8: $scope.serviceValue8,
                        n_serviceValue9: $scope.serviceValue9,
                        n_serviceValue10: $scope.serviceValue10,
                        n_serviceValue11: $scope.serviceValue11,

                        n_tyOmPerc: $scope.scrtyOmPerc,
                        n_totalMonthly: $scope.totalMonthly,
                        n_totalTyBilling: $scope.totalTyBilling

                    }


                    console.log($scope.restoredValue3);
                    console.log($scope.restoredValue4);
                    console.log($scope.restoredValue5);

                    console.log($scope.popularValue3);
                    console.log($scope.popularValue4);
                    console.log($scope.popularValue5);


                    scenarioManagerService.saveScenarioManagerServiceData(data).success(function(result) {
                        //  $state.go('scenarioManager', { redirect : true });

                        $scope.savesummaryInfo = result;
                        console.log("result Scenario summary is::" + angular.toJson($scope.savesummaryInfo));
                        // refreshing the page
                        $scope.quoteID = $rootScope.scrquoteID;
                        $scope.engineID = $rootScope.screngineID;

                        $scope.scrtotalGEBilling = $rootScope.scrtotalGEBilling;
                        $scope.scrtotalTyTrueCost = $rootScope.scrtotalTyTrueCost;
                        $scope.scrtyOm = $rootScope.scrtyOm;
                        $scope.tytslv = $rootScope.tytslv;
                        $scope.scrtyOmPerc = $rootScope.scrtyOmPerc;

                        $scope.scrRsp = $rootScope.scrRsp;
                        $scope.scrTotalRsp = $rootScope.scrtyOmPerc;
                        $scope.totalMonthly = $rootScope.scrTotalMonthly;
                        $scope.totalTyBilling = $rootScope.scrtotalTyBilling;
                        console.log($scope.scrtotalGEBilling);
                        console.log($scope.scrtotalTyTrueCost);
                        console.log($scope.scrtyOm);
                        console.log($scope.tytslv);
                        console.log($scope.scrRsp);
                        console.log($scope.scrTotalRsp);



                        $scope.data = [{
                            "1": [
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            "2": [
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            "3": [
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            "4": [
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            "5": [
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            "6": [
                                "7",
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            "7": [
                                "8",
                                "9",
                                "10"
                            ],
                            "8": [
                                "9",
                                "10",
                                "11"
                            ],
                            "9": [
                                "10"
                            ],
                            "10": [
                                "11"
                            ],
                            "11": []
                        }];
                        for (var i = 0; i < $scope.ScreensDropDownData.CovScenarioDDData.length; i++) {
                            if ($scope.ScreensDropDownData.CovScenarioDDData[i].value == $scope.CovScenarioDDDataSelected) {
                                var item = $scope.ScreensDropDownData.CovScenarioDDData[i];
                                //alert("inside");
                                var index = $scope.ScreensDropDownData.CovScenarioDDData.indexOf(item);
                                //alert(index);
                                // $scope.items.push(item);

                                $scope.ScreensDropDownData.CovScenarioDDData.splice(index, 1);


                            }

                        }


                        //alert($scope.ScreensDropDownData.CovScenarioDDData.length);


                        $scope.displayupdateButton = true;
                        $scope.CovScenarioDDDataSelected = $scope.ScreensDropDownData.CovScenarioDDData[0].id;
                        $scope.CovLLPDDDataSelected = $scope.ScreensDropDownData.CovLLPDDData[0].id;
                        $scope.CovEngineLeasingDDDataSelected = $scope.ScreensDropDownData.CovEngineLeasingDDData[0].id;
                        $scope.CovServiceCreditDDDataSelected = $scope.ScreensDropDownData.CovServiceCreditDDData[0].id;
                        $scope.CovMiscCostEFHDDDataSelected = $scope.ScreensDropDownData.CovMiscCostEFHDDData[0].id;
                        $scope.miscCostEFH = "10";
                        $scope.CovMiscCostSVDDDataSelected = $scope.ScreensDropDownData.CovMiscCostSVDDData[0].id;
                        $scope.miscCostSV = "10";
                        $scope.CovMiscCostYRDDDataSelected = $scope.ScreensDropDownData.CovMiscCostYRDDData[0].id;
                        $scope.miscCostYR = "10";
                        $scope.CovFLLRUDDDataSelected = $scope.ScreensDropDownData.CovFLLRUDDData[0].id;
                        $scope.value0 = $scope.ScreensDropDownData.firstDD[0].id;
                        $scope.v = $scope.data[0][$scope.value0][0];
                        $scope.value1 = $scope.data[0][$scope.v][0];
                        $scope.value2 = $scope.data[0][$scope.value1][0];
                        $scope.value3 = $scope.data[0][$scope.value2][0];
                        $scope.BillingScenarioDDDataSelected = $scope.ScreensDropDownData.BillingScenarioDDData[0].id;
                        $scope.BillingStructureDDDataSelected = $scope.ScreensDropDownData.BillingStructureDDData[0].id;
                        $scope.CurrentStatusDDDataSelected1 = $scope.ScreensDropDownData.CurrentStatusDDData[0].id;
                        $scope.CurrentStatusDDDataSelected2 = $scope.ScreensDropDownData.CurrentStatusDDData[0].id;
                        $scope.CurrentStatusDDDatavalue1 = "50";
                        $scope.CurrentStatusDDDatavalue2 = "4";
                        $scope.restoredValue1 = "100.00";
                        $scope.restoredValue2 = "120.00";
                        $scope.restoredValue3 = "140.00";
                        $scope.restoredValue4 = "140.00";
                        $scope.restoredValue5 = "";


                        $scope.popularValue1 = "10.00";
                        $scope.popularValue2 = "20.00";
                        $scope.popularValue3 = "40.00";
                        $scope.popularValue4 = "40.00";
                        $scope.popularValue5 = "40.00";

                        $scope.serviceValue1 = "1000";
                        $scope.serviceValue2 = "2000";
                        $scope.serviceValue3 = "2000";
                        $scope.serviceValue4 = "5000";
                        $scope.serviceValue5 = "5000";
                        $scope.serviceValue6 = "";
                        $scope.serviceValue7 = "";
                        $scope.serviceValue8 = "";
                        $scope.serviceValue9 = "";
                        $scope.serviceValue10 = "";
                        $scope.serviceValue11 = "";



                        var data1 = {
                            c_quoteID: "1-1ABFI8N",
                            n_scenario: $scope.CovScenarioDDDataSelected
                        }


                        scenarioManagerService.getScenarioSummaryData(data1).success(function(result) {
                            debugger;
                            $scope.summaryInfo = result;
                            console.log("result Scenario summary is::" + angular.toJson($scope.summaryInfo));
                            console.log(result.bestCashFlowArray.length);
                            console.log(result.secCashFlowArray.length);
                            console.log(result.worstCashFlowArray.length);
                            $scope.getReqJsonFromResult(result);


                        });

                        $scope.getReqJsonFromResult = function(data) {
                            console.log("inside getReqjson");
                            // console.log(data[0].length);
                            for (var i = 0; i < data.resultDataObj1.length; i++) {
                                $scope.bestGEBilling = data.resultDataObj1[i].n_totalGEbilling;
                                $scope.bestTotalCost = data.resultDataObj1[i].n_totalCost;
                                $scope.bestRsp = 0;
                                $scope.bestPostRsp = $scope.bestGEBilling - $scope.bestTotalCost;
                                $scope.bestOmperc = data.resultDataObj1[i].n_oMPerc * 100;
                                $scope.bestMinCash = data.resultDataObj1[i].n_minCashFlow;
                                $scope.bestMaxDb = data.resultDataObj1[i].n_max_max_db;
                            }
                            for (var i = 0; i < data.resultDataObj2.length; i++) {

                                $scope.secbestGEBilling = data.resultDataObj2[i].n_totalGEbilling;
                                $scope.secbestTotalCost = data.resultDataObj2[i].n_totalCost;
                                $scope.secbestRsp = 0;
                                $scope.secbestPostRsp = $scope.bestGEBilling - $scope.bestTotalCost;
                                $scope.secbestOmperc = data.resultDataObj2[i].n_oMPerc * 100;
                                $scope.secbestMinCash = data.resultDataObj2[i].n_minCashFlow;
                                $scope.secbestMaxDb = data.resultDataObj2[i].n_max_max_db;
                            }
                            for (var i = 0; i < data.resultDataObj3.length; i++) {

                                $scope.worstGEBilling = data.resultDataObj3[i].n_totalGEbilling;
                                $scope.worstTotalCost = data.resultDataObj3[i].n_totalCost;
                                $scope.worstRs = 0;
                                $scope.worstPostRsp = $scope.bestGEBilling - $scope.bestTotalCost;
                                $scope.worstOmperc = data.resultDataObj3[i].n_oMPerc * 100;
                                $scope.worstMinCash = data.resultDataObj3[i].n_minCashFlow;
                                $scope.worstMaxDb = data.resultDataObj3[i].n_max_max_db;
                            }
                            for (var i = 0; i < data.bestCashFlowArray.length; i++) {
                                $scope.bestCashFlowValues.push(data.bestCashFlowArray[i].cashFlowArray);
                                $scope.bestMaxDbValues.push(data.bestCashFlowArray[i].maxDbArray);
                                console.log(data.bestCashFlowArray[i].cashFlowArray);
                            }

                            for (var i = 0; i < data.secCashFlowArray.length; i++) {
                                $scope.secBestCashFlowValues.push(data.secCashFlowArray[i].cashFlowArray);
                                $scope.secBestMaxDbValues.push(data.secCashFlowArray[i].maxDbArray);
                            }

                            for (var i = 0; i < data.worstCashFlowArray.length; i++) {
                                $scope.worstCashFlowValues.push(data.worstCashFlowArray[i].cashFlowArray);
                                $scope.worstMaxDbValues.push(data.secCashFlowArray[i].maxDbArray);
                            }

                        };



                        $(function() {
                            var chart = new Highcharts.Chart({
                                credits: {
                                    enabled: false
                                },
                                itemHoverStyle: {
                                    color: '#000'
                                },
                                chart: {
                                    type: 'line',
                                    renderTo: 'SVStream',
                                    borderWidth: 1,
                                    height: 250,
                                    borderColor: '#cccccc',
                                    animation: true,

                                },
                                annotationsOptions: {
                                    enabledButtons: false
                                },
                                shadow: {
                                    color: 'yellow',
                                    width: 10,
                                    offsetX: 0,
                                    offsetY: 0
                                },
                                title: {
                                    text: 'SV Stream',
                                    x: -20, //center,
                                    style: {
                                        color: 'black'
                                    }
                                },
                                subtitle: {
                                    text: '',
                                    x: -20
                                },
                                xAxis: {
                                    labels: {
                                        style: {
                                            color: 'black' //left label color
                                        }
                                    },
                                    gridLineColor: '#d3d3d3', //horizontal lines color
                                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                                },
                                yAxis: {
                                    labels: {
                                        style: {
                                            color: 'black' //left label color
                                        }
                                    },
                                    gridLineColor: '#d3d3d3', //horizontal lines color

                                    title: {
                                        text: ''
                                    },
                                    plotLines: [{
                                        value: 0.00,
                                        width: 1,
                                        color: '#808080'
                                    }]
                                },
                                tooltip: {
                                    valueSuffix: ''
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'right',
                                    verticalAlign: 'middle',
                                    borderWidth: 0
                                },
                                series: [{
                                    name: 'SV Stream',
                                    data: [1.7, 5.1, 2.3, 4, 5.1, 1.1, 2.3, 2.9, 1.1, 1.1, 1.1]
                                }]
                            });

                            var chart1 = new Highcharts.Chart({

                                credits: {
                                    enabled: false
                                },
                                chart: {
                                    type: 'line',
                                    renderTo: 'DBStream',
                                    borderWidth: 1,
                                    height: 250,
                                    borderColor: '#cccccc',
                                },
                                annotationsOptions: {
                                    enabledButtons: false
                                },
                                title: {
                                    text: 'DB Stream',
                                    x: -20 //center
                                },
                                subtitle: {
                                    text: '',
                                    x: -20
                                },
                                xAxis: {
                                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                                },
                                yAxis: {
                                    title: {
                                        text: 'Cost $'
                                    },
                                    plotLines: [{
                                        value: -2,
                                        width: 1,
                                        color: '#808080'
                                    }]
                                },
                                tooltip: {
                                    valueSuffix: '$'
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'right',
                                    verticalAlign: 'middle',
                                    borderWidth: 0
                                },
                                series: [{
                                    name: 'Current',
                                    data: [-1, -1.2, 2.2, -1.4, -0.2, 0.5, 0.5, 0.5, 0.5, 0.7, -0.8, 0.0]
                                }, {
                                    name: '2nd Best',
                                    data: $scope.secBestMaxDbValues
                                }, {
                                    name: 'Best',
                                    data: $scope.bestMaxDbValues
                                }, {
                                    name: 'Worst',
                                    data: $scope.worstMaxDbValues
                                }]

                            });

                            var chart2 = new Highcharts.Chart({
                                credits: {
                                    enabled: false
                                },
                                chart: {
                                    type: 'line',
                                    renderTo: 'CFStream',
                                    borderWidth: 1,
                                    height: 250,
                                    borderColor: '#cccccc',
                                },
                                annotationsOptions: {
                                    enabledButtons: false
                                },
                                title: {
                                    text: 'CF Stream',
                                    x: -20 //center
                                },
                                subtitle: {
                                    text: '',
                                    x: -20
                                },
                                xAxis: {
                                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                                },
                                yAxis: {
                                    title: {
                                        text: 'Cost $'
                                    },
                                    plotLines: [{
                                        value: -150,
                                        width: 15,
                                        color: '#808080'
                                    }]
                                },
                                tooltip: {
                                    valueSuffix: '$'
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'right',
                                    verticalAlign: 'middle',
                                    borderWidth: 0
                                },
                                series: [{
                                    name: 'Current',
                                    data: [-1, -1.2, 2.2, -1.4, -0.2, 0.5, 0.5, 0.5, 0.5, 0.7, -0.8, 0.0]
                                }, {
                                    name: '2nd Best',
                                    data: $scope.secBestCashFlowValues
                                }, {
                                    name: 'Best',
                                    data: $scope.bestCashFlowValues
                                }, {
                                    name: 'Worst',
                                    data: $scope.worstCashFlowValues
                                }]

                            });
                        });


                        //End of refresh


                    });

                };


            }
        ]);

    });
