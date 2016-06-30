/*Screen 1 & 2 Data*/
define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('customerContractDetailsService', ['$q', '$http', function($q, $http) {

        var getCustomerContractDetailsService = function() {
            return $http.get("https://customerandcontractdataservice-new.run.aws-usw02-pr.ice.predix.io/getContractList");
        }

        return {
            getCustomerContractDetailsService: getCustomerContractDetailsService
        };
    }]);
});
