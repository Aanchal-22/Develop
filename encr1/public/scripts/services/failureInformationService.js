/*myApp.factory('failureInformationService',function($http){

var  failureInformationService={};

var endUrl ="http://localhost:2004/getWeiBullEngineData";

failureInformationService.dataLoad=function(partInfo){
// failureInformationService.data=partInfo;
 failureInformationService.failureInfo=[];
 failureInformationService.data=$http.post(endUrl, JSON.stringify(partInfo));
  console.log("result from service::"+angular.toJson(partInfo));
 }

return failureInformationService



})*/

define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('failureInformationService', ['$q', '$http', function($q, $http) {

        var getWeibullEngineData = function(quoteId) {
            return $http.get("https://csa-enginedetails-service-new.run.aws-usw02-pr.ice.predix.io/getWeibullInfo?quoteID=" + quoteId);
            //return $http.get(testData);

        }


        return {
            getWeibullEngineData: getWeibullEngineData
        };
    }]);
});
