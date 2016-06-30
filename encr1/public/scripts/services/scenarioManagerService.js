/**
 * Created by predix on 1/4/16.
 */
define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('scenarioManagerService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {




        var saveScenarioManagerServiceData = function(data) {

            alert("Inside saving data");
            var saveScenarioManagerDataUrl = "https://csa-scenariomanager-service-test.run.aws-usw02-pr.ice.predix.io/saveScenarioManagerServiceInfo";
            console.log("request data for save Scenario data service::" + angular.toJson(data));
            return $http.post(saveScenarioManagerDataUrl, JSON.stringify(data));
        }
        var getScenarioSummaryData = function(data1) {

            console.log("inside scenario Summary");
            var scenarioSummaryrDataUrl = "https://scenariosummary-service-test.run.aws-usw02-pr.ice.predix.io/getScenarioSummary?quoteID=" + data1.c_quoteID;
            //return $http.get(testData);

            console.log("request data for  Scenario Summary data service::" + angular.toJson(data1));
            //return $http.get(scenarioSummaryrDataUrl, JSON.stringify(data1));
            return $http.get(scenarioSummaryrDataUrl);
        }

        return {
            getScenarioSummaryData: getScenarioSummaryData,
            saveScenarioManagerServiceData: saveScenarioManagerServiceData
        };
    }]);
});
