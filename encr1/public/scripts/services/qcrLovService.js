/**
 * Created by 703172607 on 6/30/2016.
 */

define(['angular', 'services-module'], function(angular, services) {
    'use strict';

    services.factory('qcrLovService', ['$q', '$http', function($q, $http) {

        var getQCRheaders = function(userPkid) {
            /*return $http.get("http://3.206.230.46:9005/EncrQCRService/getQCRheaders/4580");*/
            return $http.get("http://3.206.230.19:9005/EncrQCRService/getQCRheaders/" + userPkid);

        }

        var getQCRheadersByAreaPkid = function(userPkid, areaPkid) {
            /*return $http.get("http://3.206.230.46:9005/EncrQCRService/getQCRheadersByAreaPkid/4580/"+areaPkid);*/
            return $http.get("http://3.206.230.19:9005/EncrQCRService/getQCRheadersByAreaPkid/" + userPkid + "/" + areaPkid);

        }

        var getQCRheadersByProductPkid = function(userPkid, areaPkid, productPkid) {
            console.log("http://3.206.230.19:9005/EncrQCRService/getFeatureLOVByProductPkid/" + userPkid + "/" + areaPkid + "/" + productPkid);
            /*return $http.get("http://3.206.230.46:9005/EncrQCRService/getFeatureLOVByProductPkid/4580/"+areaPkid+"/"+productPkid);*/
            return $http.get("http://3.206.230.19:9005/EncrQCRService/getFeatureLOVByProductPkid/" + userPkid + "/" + areaPkid + "/" + productPkid);

        }

        var getSaveQcr = function(qcrheader, deviation, deviationNotes, dispositionNotes) {

            console.log("Inside saving data");

            var saveQcrURL = "http://3.206.230.25:9092/EncrQcrService/service/saveQcr";
            //console.log("request data for save Scenario data service::" + angular.toJson(data));
            return $http.post(saveQcrURL, JSON.stringify({ qcrheader: qcrheader, deviation: deviation, deviationnotes: deviationNotes, dispostionnotes: dispositionNotes }));
        }


        var getQcrHeadersBySeqNoServ = function(sequenceNo) {
            console.log("http://3.206.230.19:9005/EncrQCRService/getQCRheadersBySequenceNumber/" + sequenceNo);
            return $http.get("http://3.206.230.19:9005/EncrQCRService/getQCRheadersBySequenceNumber/" + sequenceNo);

        }


        return {
            getQCRheaders: getQCRheaders,
            getQCRheadersByAreaPkid: getQCRheadersByAreaPkid,
            getQCRheadersByProductPkid: getQCRheadersByProductPkid,
            getSaveQcr: getSaveQcr,
            getQcrHeadersBySeqNoServ: getQcrHeadersBySeqNoServ
        };
    }]);
});
