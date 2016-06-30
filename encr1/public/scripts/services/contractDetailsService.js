/*
myApp.factory('contractDetailsService', ['$http','$interval','$q', function($http,$interval,$q){


var  contractDetailsService={};
contractDetailsService.dataLoad=function(qID){
 contractDetailsService.data=$http.get("http://localhost:2001/getContractDetails?quoteID="+qID);


}

return contractDetailsService

}])
*/

define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('contractDetailsService', ['$q', '$http', function($q, $http) {

        var getContractDetailsService = function(qID) {
            return $http.get("https://customerandcontractdataservice-new.run.aws-usw02-pr.ice.predix.io/getContractDetails?quoteID=" + qID);
        }


        return {
            getContractDetailsService: getContractDetailsService
        };
    }]);
});
