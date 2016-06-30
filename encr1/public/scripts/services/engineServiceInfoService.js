/**
 * Created by predix on 1/4/16.
 */
define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('engineServiceInfoService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {



        var getEngineServiceInfoData = function(quoteId) {
            return $http.get("https://csa-enginedetails-service-new.run.aws-usw02-pr.ice.predix.io/getControlViewInfo?quoteID=" + quoteId);
            //return $http.get(testData);

        }

        var engineServiceOutputResponsedata;

        $rootScope.isEngineServiceDataSaved = false;
        var saveEngineServiceData = function(data) {
            $rootScope.OutputScreenRequestData = data;
            console.log($rootScope.OutputScreenRequestData)

        }


        var OutputScreenData = '';

        var getoutputScreenData = function(data) {

            var saveEngineDataUrl = "https://failuredistributionanalyticsservice.run.aws-usw02-pr.ice.predix.io/saveEngineServiceInfo";

            console.log("request data for save engine data service::" + angular.toJson(data));

            /*$http.post(saveEngineDataUrl, JSON.stringify(data)).success(function(result) {

                console.log("result from save engine data service::"+angular.toJson(result));

                OutputScreenData = result;

            })*/

            return $http.post(saveEngineDataUrl, JSON.stringify(data));
            // return OutputScreenData;
        }

        return {
            getEngineServiceInfoData: getEngineServiceInfoData,
            saveEngineServiceData: saveEngineServiceData,
            getoutputScreenData: getoutputScreenData
        };
    }]);
});
