define(['angular',
    'controllers-module'
], function(angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('technicalModellingCtrl', ['$rootScope',
        '$scope',
        '$log',
        '$location',
        'customerContractDetailsService',
        'contractDetailsService',
        'loadingService',
        function($rootScope,
            $scope,
            $log,
            $location,
            customerContractDetailsService,
            contractDetailsService,
            loadingService) {

            $scope.selected = null;

            var _placeholder = $('#module_loadData');
            (function() {
                loadingService.startSpinner(_placeholder);
                customerContractDetailsService.getCustomerContractDetailsService().success(function(result) {
                    $scope.customerContractDetails = result;

                    loadingService.stopSpinner(_placeholder);

                })
            })();


            // Show right column on selecting customer
            $scope.showContract = function(custName, $index) {
                //$scope.selectedContract = null;
                $scope.selected = $index;
                $scope.contractList = custName.quoteDtoList;
            }
            $scope.setQuoteId = function(index) {
                $rootScope.quoteId = $scope.contractList[index].quoteID;

                //contractDetailsService.getContractDetailsService(qId);
            }


        }
    ]);
});
