/*Screen 4 Data*/
/*myApp.factory('partInformationService', ['$http','$interval', function($http,$interval){

   var  partInformationService={};

   partInformationService.dataLoad=function(){
        return $http.get('http://localhost:2003/getEngineDeliverySchedule?quoteID=Q-00153280');
   }

   return partInformationService


}])*/


define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('partInformationService', ['$q', '$http', function($q, $http) {

        var getPartInformationData = function(quoteId) {
            return $http.get("https://csa-enginedetails-service-new.run.aws-usw02-pr.ice.predix.io/getEngineDeliverySchedule?quoteID=" + quoteId);

        }

        return {
            getPartInformationData: getPartInformationData
        };
    }]);
});
