define(['angular', 'services-module'], function(angular, services) {
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
