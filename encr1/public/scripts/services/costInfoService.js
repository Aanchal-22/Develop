/**
 * Created by predix on 1/6/16.
 */

define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('costInfoService', ['$q', '$http', function($q, $http) {

        // http://csa-failuredistribution-service.run.aws-usw02-pr.ice.predix.io/getFailurePattern?quoteID=1-1ABFI8N&costType=ACTUAL
        var getCostInfoData = function(quoteId, costType) {

            var urlStr = "https://failuredistributionanalyticsservice.run.aws-usw02-pr.ice.predix.io/getFailurePattern?quoteID=" + quoteId + "&costType=" + costType;

            console.log("request url::" + urlStr);
            return $http.get("https://failuredistributionanalyticsservice.run.aws-usw02-pr.ice.predix.io/getFailurePattern?quoteID=" + quoteId + "&costType=" + costType);

        }


        return {
            getCostInfoData: getCostInfoData
        };
    }]);
});
