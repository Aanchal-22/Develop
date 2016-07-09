/*define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('qcrSearchService', ['$q', '$http', function($q, $http) {

        var getQcrSearchData = function(ncrNumber) {
            return $http.get("http://10.222.194.204/EncrQCRService/service/ncrSearch/" + ncrNumber);

        }


        var getQcrMarkupData=function(ncrNumber) {
            return $http.get("http://10.222.194.204/EncrQCRService/service/ncrSearch/markUp/" + ncrNumber);
        }
         var getQcrAttachment=function(ncrNumber) {
            return $http.get("http://10.222.194.204/EncrQCRService/service/ncrSearch/attachments/" + ncrNumber);
        }
       
        return {
            getQcrSearchData: getQcrSearchData,
            getQcrMarkupData:getQcrMarkupData,
            getQcrAttachment:getQcrAttachment
        };
    }]);
});


    */

define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('qcrSearchService', ['$q', '$http', function($q, $http) {

        var getQcrSearchData = function(data1) {

            var getQcrSearchDataURL = "http://10.222.194.204/EncrQCRService/service/ncrSearch";
            console.log("request data getQcrSearchData::" + angular.toJson(data1));
            //return $http.get("http://10.222.194.204/EncrQCRService/service/ncrSearch/" + ncrNumber);
            return $http.post(getQcrSearchDataURL, JSON.stringify(data1));

        }

        var getQcrMarkupData = function(ncrNumber) {
            return $http.get("http://10.222.194.204/EncrQCRService/service/ncrSearch/markUp/" + ncrNumber);
        }
        var getQcrAttachment = function(ncrNumber) {
            return $http.get("http://10.222.194.204/EncrQCRService/service/ncrSearch/attachments/" + ncrNumber);
        }

        return {
            getQcrSearchData: getQcrSearchData,
            getQcrMarkupData: getQcrMarkupData,
            getQcrAttachment: getQcrAttachment
        };
    }]);
});
