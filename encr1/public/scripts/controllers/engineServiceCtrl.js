define(['angular', 'jquery',
    'controllers-module'
], function(angular, jquery, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('engineServiceCtrl', ['$scope', '$rootScope', '$http', '$log', '$location',
        '$stateParams', 'engineServiceInfoService', 'loadingService', '$state',
        function($scope, $rootScope, $http, $log, $location,
            $stateParams, engineServiceInfoService, loadingService, $state) {

            $scope.quoteID = $stateParams.quoteID;

            //$.noConflict();

            var _placeholder = $('#module_loadData');

            $scope.loadEngineServiceData = function() {

                loadingService.startSpinner(_placeholder);
                engineServiceInfoService.getEngineServiceInfoData($scope.quoteID).success(function(result) {
                    var engineServiceResponse = result;
                    $scope.engineServiceResponseData = engineServiceResponse[0];
                    console.log("response data from engineService::" + angular.toJson(engineServiceResponse));
                    $scope.ScreensDropDownData = {
                        ModelTypeDDData: [{ id: "New Deal", value: "New Deal" },
                            { id: "CMR", value: "CMR" },
                            { id: "Commercial Action", value: "Commercial Action" },
                            { id: "OOQ Error Correction", value: "OOQ Error Correction" },
                            { id: "Simplification", value: "Simplification" },
                            { id: "ScratchPad", value: "ScratchPad" }
                        ],

                        DescriptionDDData: [{ id: "What-if", value: "What-if" },
                            { id: "OM/Customer Neutral", value: "OM/Customer Neutral" },
                            { id: "On The Table", value: "On The Table" },
                            { id: "As Approved", value: "As Approved" },
                            { id: "Scored", value: "Scored" },
                            { id: "Backlog BRE", value: "Backlog BRE" }
                        ],

                        ContractTypeDDData: [{ id: "MCPH", value: "MCPH" },
                            { id: "MBTH", value: "MBTH" },
                            { id: "SCG", value: "SCG" },
                            { id: "MCG", value: "MCG" }
                        ],

                        NewOrUsedEngineType: [{ id: "New", value: "New" },
                            { id: "Used", value: "Used" }
                        ],

                        EngineModelDDData: [{ id: "CF34-8C5", value: "CF34-8C5" },
                            { id: "CF34-3B1-OC", value: "CF34-3B1-OC" },
                            { id: "GE90-115", value: "GE90-115" },
                            { id: "CFM56-3B", value: "CFM56-3B" },
                            { id: "CFM56-3C", value: "CFM56-3C" },
                            { id: "CFM56-5A", value: "CFM56-5A" },
                            { id: "CFM56-5B", value: "CFM56-5B" },
                            { id: "CFM56-5B_P", value: "CFM56-5B_P" },
                            { id: "MCG", value: "MCG" }
                        ],

                        pricingTypeDD: [{ id: "Monthly", value: "Monthly" },
                            { id: "TSLSV", value: "TSLSV" }
                        ],

                        overhauleShopDDData: [{ id: "Caledonian", value: "Caledonian" },
                            { id: "Celma", value: "Celma" },
                            { id: "Dallas", value: "Dallas" },
                            { id: "Malaysia", value: "Malaysia" },
                            { id: "Ontario", value: "Ontario" },
                            { id: "Strother", value: "Strother" },
                            { id: "Wales GP", value: "Wales GP" },
                            { id: "Wales", value: "Wales" },
                            { id: "H &amp; S", value: "H &amp; S" }
                        ],

                        pprEnvironmentDDData: [{ id: "Regular", value: "Regular" },
                            { id: "China", value: "China" },
                            { id: "Middle East", value: "Middle East" },
                            { id: "N/A", value: "N/A" }
                        ],

                        CFMThrustDDData: [{ id: "High", value: "High" },
                            { id: "Low", value: "Low" },
                            { id: "N/A", value: "N/A" }
                        ],

                        CFMTechInsertionDDData: [{ id: "IT", value: "IT" },
                            { id: "Non IT", value: "Non IT" }
                        ],

                        pricingOutpuDDData: [{ id: "IT", value: "IT" },
                            { id: "Non IT", value: "Non IT" }
                        ],

                        ACLeasedDDData: [{ id: "Y", value: "Y" },
                            { id: "N", value: "N" }
                        ]

                    }

                    $scope.ModelTypeDDDataSelected = $scope.ScreensDropDownData.ModelTypeDDData[0].id;
                    $scope.DescriptionDDDataSelected = $scope.ScreensDropDownData.DescriptionDDData[0].id;
                    $scope.ContractTypeDDDataSelected = $scope.ScreensDropDownData.ContractTypeDDData[0].id;
                    $scope.baseOverHaulePricingSelected = $scope.ScreensDropDownData.pricingTypeDD[0].id;
                    $scope.llpPricingSelected = $scope.ScreensDropDownData.pricingTypeDD[0].id;
                    $scope.pprEnvironmentSelected = $scope.ScreensDropDownData.pprEnvironmentDDData[0].id;
                    $scope.CFMThrustSelected = $scope.ScreensDropDownData.CFMThrustDDData[0].id;
                    $scope.CFMTechInsertionSelected = $scope.ScreensDropDownData.CFMTechInsertionDDData[0].id;
                    $scope.pricingOutputSelected = $scope.ScreensDropDownData.pricingOutpuDDData[0].id;
                    $scope.ACLeasedSelected = $scope.ScreensDropDownData.ACLeasedDDData[0].id;
                    $scope.bussinessJetSelected = false;
                    $scope.returnConditionsSelected = false;
                    $scope.bussinessPlanInclusionSelected = false;
                    $scope.engineModelSelected = $scope.ScreensDropDownData.EngineModelDDData[0].id;
                    $scope.contractSummaryEngineType = '0.00E+00';
                    $scope.contractSummaryEngineSeries = $scope.engineServiceResponseData.c_engine_series;
                    $scope.contractSummaryAircraft = $scope.engineServiceResponseData.c_aircraft;
                    $scope.contractSummaryMceStartDate = $scope.engineServiceResponseData.d_contract_due_date;
                    $scope.contractSummaryMceBaseYear = $scope.engineServiceResponseData.n_base_fiscal_year;
                    $scope.contractSummaryContractStartDate = $scope.engineServiceResponseData.d_contract_due_date;
                    $scope.contractSummaryContractNumberOfAircraft = $scope.engineServiceResponseData.n_aircraft_qty;
                    $scope.contractSummaryContractNumberOfEngines = $scope.engineServiceResponseData.n_engine_qty;
                    $scope.contractSummaryContractNumberOfSpareEngines = $scope.engineServiceResponseData.n_spare_engine_qty;
                    $scope.contractSummaryContractMCENumber = $scope.engineServiceResponseData.n_mce_number;


                    var defaultEngineTypeIndex = identifyEngineTypeIndex($scope.ScreensDropDownData.NewOrUsedEngineType,
                        $scope.engineServiceResponseData.c_fleet_age);

                    $scope.NewOrUsedEngineTypeSelected = $scope.ScreensDropDownData.NewOrUsedEngineType[defaultEngineTypeIndex].id;

                    var defaultoverhauleShopIndex = identifyoverhauleShopIndex($scope.ScreensDropDownData.overhauleShopDDData,
                        $scope.engineServiceResponseData.c_shop_name);

                    $scope.overhauleShopSelected = $scope.ScreensDropDownData.overhauleShopDDData[defaultoverhauleShopIndex].id;


                    // Option External Section Data

                    $scope.OptionExternalDropDownData = {

                        diagCDData: [{ id: "CD", value: "CD" },
                            { id: "CD+R(T1)", value: "CD+R(T1)" },
                            { id: "CD+E", value: "CD+E" },
                            { id: "CD+F", value: "CD+F" },
                            { id: "CD+R+E", value: "CD+R+E" },
                            { id: "CD+R+F", value: "CD+R+F" },
                            { id: "CD+E+F", value: "CD+E+F" },
                            { id: "CD+R+E+F(T3)", value: "CD+R+E+F(T3)" }
                        ],
                        engineLeasingDDData: [{ id: "Lease Days", value: "Lease Days" },
                            { id: "GSEA", value: "GSEA" }
                        ],
                        lruRepairDDData: [{ id: "BE", value: "BE" },
                            { id: "BE,QEC", value: "BE,QEC" },
                            { id: "BE,QEC,EBU", value: "BE,QEC,EBU" },
                            { id: "BE,QEC,EBU,Nac", value: "BE,QEC,EBU,Nac" },
                            { id: "BE,QEC,EBU,Nac,Exp", value: "BE,QEC,EBU,Nac,Exp" }
                        ],
                        fduCoverageDDData: [{ id: "Deductible", value: "Deductible" },
                            { id: "Full", value: "Full" },
                            { id: "Original", value: "Original" }
                        ]

                    }

                    $scope.diagCDSelected = $scope.OptionExternalDropDownData.diagCDData[0].id;
                    $scope.engineLeasingSelected = $scope.OptionExternalDropDownData.engineLeasingDDData[0].id;
                    $scope.lruRepairSelected = $scope.OptionExternalDropDownData.lruRepairDDData[0].id;
                    $scope.fduCoverageSelected = $scope.OptionExternalDropDownData.fduCoverageDDData[0].id;

                    $scope.diagCostValue = "3.5";
                    $scope.rdMarginValue = "100.00";
                    $scope.owsPriceValue = "63.00";
                    $scope.engineLeasingOptionSelected = false;
                    $scope.engineLeasingpriceValue = "0.0";
                    $scope.lruPricingMarginValue = "55.0";
                    $scope.fodCoverageValue = "3.5";
                    $scope.fduCoverageOptionSelected = false;
                    $scope.deductablePriceValue = "100.00";
                    $scope.numOfFODEvents = "100.00";
                    $scope.uncapSBADPriceValue = "3.5";
                    $scope.PPRFinancialYear = "2015";
                    if ($scope.engineServiceResponseData.c_diagnostic_mmp === 'YES') {
                        $scope.diagCostSelected = true
                    }
                    if ($scope.engineServiceResponseData.c_on_wing_support_mmp === 'YES') {
                        $scope.OwsPriceSelected = true;
                    }

                    if ($scope.engineServiceResponseData.c_on_wing_support_mmp === 'YES') {
                        $scope.engineLeasingSelected = true;
                    }

                    if ($scope.engineServiceResponseData.c_flightline_lru === 'YES') {
                        $scope.lruRepairCostSelected = true;
                    }

                    if ($scope.engineServiceResponseData.c_service_bulletin_coverage === 'YES') {
                        $scope.uncapSBADSelected = true;
                    }

                    $scope.fodCoveragePriceSelected = false;






                    // option pricing section Data

                    $scope.OptionPricingDropDownData = {

                        monthlyOrTSLVDDData: [{ id: "Monthly", value: "Monthly" },
                            { id: "TSLSV", value: "TSLSV" }
                        ]
                    }


                    var defaultRDIndex = identifyMonthOrTSLVIndex($scope.OptionPricingDropDownData.monthlyOrTSLVDDData,
                        $scope.engineServiceResponseData.c_rd_inv_freq);

                    $scope.rdTypeSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[defaultRDIndex].id;

                    var defaultOWSIndex = identifyMonthOrTSLVIndex($scope.OptionPricingDropDownData.monthlyOrTSLVDDData,
                        $scope.engineServiceResponseData.c_ows_inv_freq);

                    $scope.owsTypeSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[defaultOWSIndex].id;

                    var defaultLRUIndex = identifyMonthOrTSLVIndex($scope.OptionPricingDropDownData.monthlyOrTSLVDDData,
                        $scope.engineServiceResponseData.c_lru_inv_freq);

                    $scope.lruTypeSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[defaultLRUIndex].id;

                    var defaultfodIndex = identifyMonthOrTSLVIndex($scope.OptionPricingDropDownData.monthlyOrTSLVDDData,
                        $scope.engineServiceResponseData.c_fod_coverage_inv_freq);

                    $scope.fodTypeSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[defaultfodIndex].id;

                    var defaultuncappedSBADIndex = identifyMonthOrTSLVIndex($scope.OptionPricingDropDownData.monthlyOrTSLVDDData,
                        $scope.engineServiceResponseData.c_uncapped_sb_ad_inv_freq);

                    $scope.uncappedSBADTypeSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[defaultuncappedSBADIndex].id;

                    var defaultleasingFeesIndex = identifyMonthOrTSLVIndex($scope.OptionPricingDropDownData.monthlyOrTSLVDDData,
                        $scope.engineServiceResponseData.c_leasing_fee_inv_freq);

                    $scope.leasingFeeTypeSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[defaultleasingFeesIndex].id;

                    $scope.miscCost1to4Selected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[0].id;
                    $scope.miscCost5to8Selected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[0].id;
                    $scope.additionalBillingSelected = $scope.OptionPricingDropDownData.monthlyOrTSLVDDData[0].id;


                    // option coverage section Data

                    $scope.optionCoverageData = {

                        transportDDData: [{ id: "Round Trip", value: "Round Trip" },
                            { id: "One Way", value: "One Way" },
                            { id: "GE Reimb Round Trip", value: "GE Reimb Round Trip" },
                            { id: "GE Reimb One Way", value: "GE Reimb One Way" }
                        ]

                    }

                    $scope.transportDDSelected = $scope.optionCoverageData.transportDDData[0].id;

                    $scope.optionCoverageSectionData = {
                        newMaterialValue: false,
                        lifeTimeParts: false,
                        supplimentallifeTimeParts: false,
                        internalCompRepairs: false,
                        internalCompRepairOverwrite: false,
                        externalCompRepair: false,
                        labourSelection: false,
                        transportOverwriteSelection: false,
                        transportSelection: false,
                        testCell: false,
                        internalCompRepairData: '0.6',
                        internalCompRepairOverwriteData: '0.4',
                        transportOverwriteData: '26.0',
                        transportData: '45.0',

                    }

                    $scope.checkTransportOverwrite = function() {

                        if ($scope.optionCoverageSectionData.transportOverwriteSelection) {
                            $scope.optionCoverageSectionData.transportData = $scope.optionCoverageSectionData.transportOverwriteData

                        } else {
                            $scope.optionCoverageSectionData.transportData = '45.0';
                        }
                    }

                    $scope.checkInternalCompRepOverwrite = function() {

                        if ($scope.optionCoverageSectionData.internalCompRepairOverwrite) {
                            $scope.optionCoverageSectionData.internalCompRepairData = $scope.optionCoverageSectionData.internalCompRepairOverwriteData

                        } else {
                            $scope.optionCoverageSectionData.internalCompRepairData = '0.6';
                        }
                    }

                    //Additional billing and cost section data

                    $scope.additionalBillingAndCostData = {
                        miscCost1Value: '36.0',
                        miscCost2Value: '7.0',
                        miscCost3Value: '0.0',
                        yearlyMgmtFee: '10.0',
                        serviceCredits: '0.0',
                        additionalBilling1Value: '0.0',
                        additionalBilling2Value: '0.0',
                        additionalBilling3Value: '0.0',
                        additionalBilling4Value: '0.0',
                        additionalBillingsValue: '0.0',
                        miscCost1Selected: false,
                        miscCost2Selected: false,
                        miscCost3Selected: false,
                        yearlyMgmtSelected: false



                    }

                    // Escalation Section Data

                    $scope.escalationSectionData = {

                        billingEscalationDDData: [{ id: "Spare Cats", value: "Spare Cats" },
                            { id: "CPI+1", value: "CPI+1" },
                            { id: "CPI", value: "CPI" },
                            { id: "EPI", value: "EPI" },
                            { id: "Other", value: "Other" }
                        ],
                        capEscalationDDData: [{ id: "Np Cap", value: "Np Cap" },
                            { id: "Annual", value: "Annual" },
                            { id: "Cum", value: "Cum" },
                            { id: "Fixed", value: "Fixed" }
                        ],
                        escalationMonth: [{ id: "January", value: "January" },
                            { id: "Febuary", value: "Febuary" },
                            { id: "March", value: "March" },
                            { id: "April", value: "April" },
                            { id: "May", value: "May" },
                            { id: "June", value: "June" },
                            { id: "July", value: "July" },
                            { id: "August", value: "August" },
                            { id: "September", value: "September" },
                            { id: "October", value: "October" },
                            { id: "November", value: "November" },
                            { id: "December", value: "December" }
                        ],

                        billingEscalationValue: '3.5',
                        billingEscalationSelected: false,
                        catalogContributionVal: '75.00',
                        catalogContributionSelected: false,
                        capPercentValue: $scope.engineServiceResponseData.n_cap_percentage,
                        fixedPercent: $scope.engineServiceResponseData.n_fix_percentage,
                        minimumPercent: '0.00',
                        escalationHyperOut: $scope.engineServiceResponseData.n_hyper_out_percentage,
                        custShareHyperOut: $scope.engineServiceResponseData.n_ge_share_percentage,
                        uniqueLLpEscalationValue: '0.00',
                        uniqueLLpEscalationSelected: false


                    }

                    $scope.billingEscalationDDSelected = $scope.escalationSectionData.billingEscalationDDData[0].id;
                    $scope.capEscalationSelected = $scope.escalationSectionData.capEscalationDDData[0].id;
                    $scope.escalationMonthSelected = $scope.escalationSectionData.escalationMonth[0].id;


                    // Cliff and Material Section Data

                    $scope.CliffAndMaterialData = {

                        overWriteSvCliffSelected: false,
                        overWriteSvCliffValue: '4.00',
                        svCliffSelected: false,
                        svCliffValue: '',
                        leapCondRestoreHoursSelected: false,
                        geNonLLP: '84.00',
                        geLLP: '100.00',
                        cmsFleetModeled: [{ id: "50", value: "50" },
                            { id: "75", value: "75" },
                            { id: "100", value: "100" }
                        ]
                    }

                    $scope.cmsFleetModeledSelected = $scope.CliffAndMaterialData.cmsFleetModeled[0].value;

                    $scope.checkSVCliffOverwrite = function() {

                        if ($scope.CliffAndMaterialData.overWriteSvCliffSelected) {
                            $scope.CliffAndMaterialData.svCliffValue = $scope.CliffAndMaterialData.overWriteSvCliffValue

                        } else {
                            $scope.CliffAndMaterialData.svCliffValue = '';
                        }
                    }

                })

                loadingService.stopSpinner(_placeholder);
            }


            $scope.loadEngineServiceData();

            var identifyEngineTypeIndex = function(data, value) {

                var tempvalue;
                var index;
                if (value.length > 4) {
                    tempvalue = value.substring(0, 3)

                } else {
                    tempvalue = value;
                }

                for (var i = 0; i < data.length; i++) {
                    if (data[i].id === tempvalue) {
                        index = i;
                    }
                }

                return index;
            }

            var identifyoverhauleShopIndex = function(data, value) {
                console.log("overhaule shop value is::" + value);
                var index;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id === value) {
                        index = i;
                    }
                }
                console.log("overhaule shop index is::" + index);
                return index;
            }

            var identifyMonthOrTSLVIndex = function(data, value) {
                console.log("month or tslv value::" + value);
                var index;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id === value) {
                        index = i;
                    }
                }
                console.log("month or tslv index is::" + index);
                return index;
            }


            $('a[data-toggle="collapse"]').on('click', function() {
                var objectID = $(this).attr('id');
                if ($(objectID).hasClass('in')) {
                    $(objectID).collapse('hide');
                } else {
                    $(objectID).collapse('show');
                }
            });

            $('#expandAll').on('click', function() {

                $('a[data-toggle="collapse"]').each(function() {
                    var objectID = $(this).attr('href');
                    if ($(objectID).hasClass('in') === false) {
                        $(objectID).collapse('show');
                    }
                });
            });

            $('#collapseAll').on('click', function() {

                $('a[data-toggle="collapse"]').each(function() {
                    var objectID = $(this).attr('href');
                    $(objectID).collapse('hide');
                });
            });

            $scope.submitEngineServiceData = function() {

                console.log("called");
                loadingService.startSpinner(_placeholder);

                var data = {
                    c_quoteID: $scope.quoteID,
                    c_ModelTypeSelected: $scope.ModelTypeDDDataSelected,
                    c_DescriptionTypeSelected: $scope.DescriptionDDDataSelected,
                    c_ContractTypeSelected: $scope.ContractTypeDDDataSelected,
                    c_NewOrUsedEngineTypeSelected: $scope.NewOrUsedEngineTypeSelected,
                    c_EngineModelSelected: $scope.engineModelSelected,
                    c_ContractSummaryEngineType: $scope.contractSummaryEngineType,
                    c_ContractSummaryEngineSeries: $scope.contractSummaryEngineSeries,
                    c_bussinessJetSelected: $scope.bussinessJetSelected,
                    c_ContractSummaryAircraft: $scope.contractSummaryAircraft,
                    c_baseOverHaulePricingSelected: $scope.baseOverHaulePricingSelected,
                    c_llpPricingSelected: $scope.llpPricingSelected,
                    c_overhauleShopSelected: $scope.overhauleShopSelected,
                    c_contractSummaryMceStartDate: $scope.contractSummaryMceStartDate,
                    c_contractSummaryContractStartDate: $scope.contractSummaryContractStartDate,
                    c_contractSummaryContractNumberOfAircraft: $scope.contractSummaryContractNumberOfAircraft,
                    c_contractSummaryContractNumberOfEngines: $scope.contractSummaryContractNumberOfEngines,
                    c_contractSummaryContractNumberOfSpareEngines: $scope.contractSummaryContractNumberOfSpareEngines,
                    c_pprEnvironmentSelected: $scope.pprEnvironmentSelected,
                    c_CFMThrustSelected: $scope.CFMThrustSelected,
                    c_CFMTechInsertionSelected: $scope.CFMTechInsertionSelected,
                    c_ACLeasedSelected: $scope.ACLeasedSelected,
                    c_returnConditionsSelected: $scope.returnConditionsSelected,
                    c_contractSummaryContractMCENumber: $scope.contractSummaryContractMCENumber,
                    c_bussinessPlanInclusionSelected: $scope.bussinessPlanInclusionSelected,
                    c_pricingOutputSelected: $scope.pricingOutputSelected,

                    // Option External data
                    c_diagCDSelected: $scope.diagCDSelected,
                    c_diagCostSelected: $scope.diagCostSelected,
                    c_diagCostValue: $scope.diagCostValue,
                    c_rdMarginValue: $scope.rdMarginValue,
                    c_OwsPriceSelected: $scope.OwsPriceSelected,
                    c_owsPriceValue: $scope.owsPriceValue,
                    c_engineLeasingSelected: $scope.engineLeasingSelected,
                    c_engineLeasingOptionSelected: $scope.engineLeasingOptionSelected,
                    c_engineLeasingpriceValue: $scope.engineLeasingpriceValue,
                    c_lruRepairSelected: $scope.lruRepairSelected,
                    c_lruRepairCostSelected: $scope.lruRepairCostSelected,
                    c_lruPricingMarginValue: $scope.lruPricingMarginValue,
                    c_fduCoverageSelected: $scope.fduCoverageSelected,
                    c_fduCoverageOptionSelected: $scope.fduCoverageOptionSelected,
                    c_fodCoverageValue: $scope.fodCoverageValue,
                    c_deductablePriceValue: $scope.deductablePriceValue,
                    c_numOfFODEvents: $scope.numOfFODEvents,
                    c_uncapSBADSelected: $scope.uncapSBADSelected,
                    c_uncapSBADPriceValue: $scope.uncapSBADPriceValue,
                    c_PPRFinancialYear: $scope.PPRFinancialYear,

                    //option pricing data

                    c_rdTypeSelected: $scope.rdTypeSelected,
                    c_owsTypeSelected: $scope.owsTypeSelected,
                    c_lruTypeSelected: $scope.lruTypeSelected,
                    c_fodTypeSelected: $scope.fodTypeSelected,
                    c_uncappedSBADTypeSelected: $scope.uncappedSBADTypeSelected,
                    c_miscCost1to4Selected: $scope.miscCost1to4Selected,
                    c_miscCost5to8Selected: $scope.miscCost5to8Selected,
                    c_additionalBillingSelected: $scope.additionalBillingSelected,
                    c_leasingFeeTypeSelected: $scope.leasingFeeTypeSelected,

                    //option coverage data

                    c_newMaterialValue: $scope.optionCoverageSectionData.newMaterialValue,
                    c_lifeTimeParts: $scope.optionCoverageSectionData.lifeTimeParts,
                    c_supplimentallifeTimeParts: $scope.optionCoverageSectionData.supplimentallifeTimeParts,
                    c_internalCompRepairOverwrite: $scope.optionCoverageSectionData.internalCompRepairOverwrite,
                    c_internalCompRepairOverwriteData: $scope.optionCoverageSectionData.internalCompRepairOverwriteData,
                    c_internalCompRepairs: $scope.optionCoverageSectionData.internalCompRepairs,
                    c_internalCompRepairData: $scope.optionCoverageSectionData.internalCompRepairData,
                    c_externalCompRepair: $scope.optionCoverageSectionData.externalCompRepair,
                    c_labourSelection: $scope.optionCoverageSectionData.labourSelection,
                    c_transportOverwriteSelection: $scope.optionCoverageSectionData.transportOverwriteSelection,
                    c_transportOverwriteData: $scope.optionCoverageSectionData.transportOverwriteData,
                    c_transportSelection: $scope.optionCoverageSectionData.transportSelection,
                    c_transportData: $scope.optionCoverageSectionData.transportData,
                    c_transportDDSelected: $scope.transportDDSelected,
                    c_testCell: $scope.optionCoverageSectionData.testCell,


                    //additional billing data

                    c_miscCost1Selected: $scope.additionalBillingAndCostData.miscCost1Selected,
                    c_miscCost1Value: $scope.additionalBillingAndCostData.miscCost1Value,
                    c_miscCost2Selected: $scope.additionalBillingAndCostData.miscCost2Selected,
                    c_miscCost2Value: $scope.additionalBillingAndCostData.miscCost2Value,
                    c_miscCost3Selected: $scope.additionalBillingAndCostData.miscCost3Selected,
                    c_miscCost3Value: $scope.additionalBillingAndCostData.miscCost3Value,
                    c_yearlyMgmtSelected: $scope.additionalBillingAndCostData.yearlyMgmtSelected,
                    c_yearlyMgmtFee: $scope.additionalBillingAndCostData.yearlyMgmtFee,
                    c_serviceCredits: $scope.additionalBillingAndCostData.serviceCredits,
                    c_additionalBilling1Value: $scope.additionalBillingAndCostData.additionalBilling1Value,
                    c_additionalBilling2Value: $scope.additionalBillingAndCostData.additionalBilling2Value,
                    c_additionalBilling3Value: $scope.additionalBillingAndCostData.additionalBilling3Value,
                    c_additionalBilling4Value: $scope.additionalBillingAndCostData.additionalBilling4Value,
                    c_additionalBillingsValue: $scope.additionalBillingAndCostData.additionalBillingsValue,


                    // Escalation data

                    c_billingEscalationDDSelected: $scope.billingEscalationDDSelected,
                    c_billingEscalationSelected: $scope.escalationSectionData.billingEscalationSelected,
                    c_billingEscalationValue: $scope.escalationSectionData.billingEscalationValue,
                    c_catalogContributionSelected: $scope.escalationSectionData.catalogContributionSelected,
                    c_catalogContributionVal: $scope.escalationSectionData.catalogContributionVal,
                    c_capEscalationSelected: $scope.capEscalationSelected,
                    c_capPercentValue: $scope.escalationSectionData.capPercentValue,
                    c_fixedPercent: $scope.escalationSectionData.fixedPercent,
                    c_minimumPercent: $scope.escalationSectionData.minimumPercent,
                    c_escalationHyperOut: $scope.escalationSectionData.escalationHyperOut,
                    c_custShareHyperOut: $scope.escalationSectionData.custShareHyperOut,
                    c_escalationMonthSelected: $scope.escalationMonthSelected,
                    c_uniqueLLpEscalationSelected: $scope.escalationSectionData.uniqueLLpEscalationSelected,
                    c_uniqueLLpEscalationValue: $scope.escalationSectionData.uniqueLLpEscalationValue,


                    // Cliff material data

                    c_overWriteSvCliffSelected: $scope.CliffAndMaterialData.overWriteSvCliffSelected,
                    c_overWriteSvCliffValue: $scope.CliffAndMaterialData.overWriteSvCliffValue,
                    c_svCliffSelected: $scope.CliffAndMaterialData.svCliffSelected,
                    c_svCliffValue: $scope.CliffAndMaterialData.svCliffValue,
                    c_leapCondRestoreHoursSelected: $scope.CliffAndMaterialData.leapCondRestoreHoursSelected,
                    c_geNonLLP: $scope.CliffAndMaterialData.geNonLLP,
                    c_geLLP: $scope.CliffAndMaterialData.geLLP,
                    c_cmsFleetModeledSelected: $scope.cmsFleetModeledSelected

                }

                engineServiceInfoService.saveEngineServiceData(data);

                // engineServiceInfoService.setOutPutScreenResponse(outputscreenResponseData);

                loadingService.stopSpinner(_placeholder);

                $state.go('output', { redirect: true });

            }

        }
    ]);

});
