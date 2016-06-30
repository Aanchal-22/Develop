/*myApp.controller('contractDetailsCtrl', ['$scope','$http', '$log','$location', 'contractDetailsService', 'shareDataService', function ($scope, $http,$log ,$location , contractDetailsService,shareDataService) {
//$scope.contractDetails=shareDataService.contractData;
$scope.contractDetails;

/!*Get Data from service*!/
(function(){
  contractDetailsService.data.success(function(data){
    $scope.contractDetails=data[0];
})
})();


}]);*/

define(['angular',
    'controllers-module'
], function(angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('contractDetailsCtrl', ['$scope', '$rootScope', '$http', '$log', '$location',
        '$stateParams', 'contractDetailsService', 'loadingService',
        function($scope, $rootScope, $http, $log, $location,
            $stateParams, contractDetailsService, loadingService) {

            $scope.quoteID = $stateParams.quoteID;

            var _placeholder = $('#module_loadData');
            (function() {

                loadingService.startSpinner(_placeholder);
                contractDetailsService.getContractDetailsService($scope.quoteID).success(function(result) {
                    $scope.contractDetails = result;
                    console.log("result contractDetails is::" + angular.toJson($scope.contractDetails));
                    loadingService.stopSpinner(_placeholder);
                })
            })();



        }
    ]);

});
