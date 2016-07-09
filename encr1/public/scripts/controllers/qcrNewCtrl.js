/**
 * Renders all the widgets on the tab and triggers the datasources that are used by the widgets.
 * Customize your widgets by:
 *  - Overriding or extending widget API methods
 *  - Changing widget settings or options
 */
/* jshint unused: false */
define(['angular',
    'controllers-module'
], function(angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('qcrNewCtrl', ['$rootScope', '$scope', '$http', '$window', '$sce', 'qcrSearchService', 'qcrLovService', function($rootScope, $scope, $http, $window, $sce, qcrSearchService, qcrLovService) {

        $scope.createWindow = function(src, width, height) {
            var win = window.open(src, "_new", "width=" + width + ",height=" + height);
            win.addEventListener("resize", function() {
                //console.log("Resized");
                win.resizeTo(width, height);
            });
        };



        /* $rootScope.$on('qcrClicked', function () {
               $rootScopee.showOnGO=false;
           });*/

        /* shareDataService.getVar().then(function(resp){
            console.log(resp)
         })*/
        //$scope.callMe=false;
        /*shareDataService.getVar().then(function(){
            console.log(shareDataService.showOnGO);
        })*/

        /*
                            $scope.showOnGO = shareDataService.data;


                        $scope.$watch(function() { return shareDataService.data; }, function(newVal, oldVal) {
                           $scope.showOnGO = newVal;
                       debugger
                        }); */

        // start qct-tabs logic

        $('#tab-ul #selected').addClass('div-visible');
        $('#tab-ul li').on('click', function() {
            var i = $(this).parent().children().index(this);
            var liItem = $(this)[0];
            $(".selected-tab").removeClass("selected-tab");
            $(liItem).addClass('selected-tab tabs_bold');

            var divItem = $('#content').children()[i];

            $('.div-visible').addClass('div-invisible');
            $(divItem).removeClass('div-invisible');
            $(divItem).addClass('div-visible');

        })

        // end qcr-tabs logic
        $scope.showHtmlTag = false;
        $rootScope.hiddenValues = "value_hidden";
        $rootScope.showOnGO = false;
        $scope.goClicked = function(ncr) {

            $rootScope.showOnGO = true;
            $rootScope.hiddenValues = "";

            qcrSearchService.getQcrSearchData(ncr).success(function(result) {
                $scope.data = result;
                $scope.DevNotes = $scope.data.ncrSearchDeviation[0].ncrsearchDeviationNotes;
                $scope.DespNotes = $scope.data.ncrSearchDeviation[0].ncrSearchDispNotes;
            })

            qcrSearchService.getQcrMarkupData(ncr).success(function(res) {
                $scope.markupData = res.ncrMarkUpData;
            })

            qcrSearchService.getQcrAttachment(ncr).success(function(res) {
                $scope.attachmentList = res.attachmentList;
            })
        }

        /*preview Logic*/
        $scope.fileData = {
            attachmentPkid: ''
        };


        $scope.preview = function(rows) {
            //debugger
            $scope.fileData.attachmentPkid = rows.attachmentPkid;
            $http.post('http://10.222.194.204/EncrQCRService/service/ncrSearch/previewFile/', $scope.fileData, { responseType: 'arraybuffer' })
                .success(function(response) {
                    var file = new Blob([response], { type: rows.contentType });
                    $scope.url = (window.URL || window.webkitURL).createObjectURL(file);
                    $scope.attachcontent = $sce.trustAsResourceUrl($scope.url);

                });

        }


        /*sequenceNo logic
         */
        $scope.getQcrHeadersBySeqNo = function() {
            console.log("Getting QCR details by Seq #: " + $scope.qcrHeaderInputVO.operationNo);

            qcrLovService.getQcrHeadersBySeqNoServ($scope.qcrHeaderInputVO.operationNo).success(function(result) {

                console.log("Got QCR details by Seq #: " + $scope.qcrHeaderInputVO.operationNo);
                console.log("Got result " + result);
                $scope.showHtmlTag = true;
                $rootScope.showOnGO = false;
                $rootScope.hiddenValues = "";

                $scope.qcrHeaderInputVO.wip = result.wip_job;
                $scope.qcrHeaderInputVO.operationNo = result.sequenceNo;
                $scope.qcrHeaderInputVO.partNo = result.partNo;
                $scope.qcrHeaderInputVO.partId = result.partId;
                $scope.qcrHeaderInputVO.batch = result.batch_coc;
                $scope.qcrHeaderInputVO.so = result.projectNo;
                $scope.qcrHeaderInputVO.lotNo = result.dwg_rev;
                console.log($scope.qcrHeaderInputVO.batch);
                console.log($scope.qcrHeaderInputVO.lotNo);
                $scope.disabled = 1;


            })
        }
        console.log("New Clicked");
        qcrLovService.getQCRheaders($rootScope.loginUserInfo.pkid).success(function(result) {
                console.log("Got result " + result);
                // $scope.showHtmlTag = true;
                //$rootScope.showOnGO = false;
                $rootScope.hiddenValues = "";
                console.log("SOW" + $rootScope.hiddenValues);
                $scope.data = result.qcrHeaderValues;
                console.log($scope.data);
                $scope.areaFound = $scope.data[0].areaFound;
                console.log($scope.areaFound);



                $scope.frame = $scope.data[0].frame;
                console.log("Frame " + $scope.frame);

                $scope.matLoc = $scope.data[0].matLoc;
                $scope.inspSta = $scope.data[0].inspSta;
                $scope.stepCode = $scope.data[0].stepCode;
                $scope.uom = $scope.data[0].uom;
                $scope.product = $scope.data[0].product;
                $scope.feature = $scope.data[0].feature;
                $scope.devCode = $scope.data[0].devCode;
                $scope.comp = $scope.data[0].comp;
                $scope.causeCode = $scope.data[0].causeCode;
                $scope.location = $scope.data[0].location;
                $scope.defectOperation = $scope.data[0].defectOperation;


            })
            /*new logic*/

        /* $scope.newQcr = function() {
     console.log("New Clicked");


 }
*/

        $scope.getQcrLOVsByAreaPkid = function() {
            console.log("Changed");

            console.log("Product-->Area-->Feature");
            console.log($scope.qcrHeaderInputVO.areaPkid);
            console.log($scope.deviationInputVO.productCodePkid);
            if ($scope.qcrHeaderInputVO.areaPkid != "" && $scope.deviationInputVO.productCodePkid != "") {
                console.log("Product-->Area-->Feature");
                console.log($scope.qcrHeaderInputVO.areaPkid);
                console.log($scope.deviationInputVO.productCodePkid);
                $scope.getFeatureLovByProductAndAreaPkid();



            }

            qcrLovService.getQCRheadersByAreaPkid($rootScope.loginUserInfo.pkid, $scope.qcrHeaderInputVO.areaPkid).success(function(result) {
                console.log("Got result " + result);
                $scope.showHtmlTag = true;
                $rootScope.showOnGO = false;
                $rootScope.hiddenValues = "";
                console.log("SOW" + $rootScope.hiddenValues);
                $scope.data = result.qcrHeaderValuesByAreaPkid;
                console.log($scope.data);

                $scope.frame = $scope.data[0].frame;
                console.log("Frame " + $scope.frame);

                $scope.matLoc = $scope.data[0].matLoc;
                $scope.inspSta = $scope.data[0].inspSta;
                $scope.product = $scope.data[0].product;
                $scope.location = $scope.data[0].location;
                $scope.defectOperation = $scope.data[0].defectOperation;


            })
        }


        $scope.getFeatureLovByProductAndAreaPkid = function() {

            console.log("Area-->Product-->Feature");
            console.log($scope.qcrHeaderInputVO.areaPkid);
            console.log($scope.deviationInputVO.productCodePkid);

            if ($scope.qcrHeaderInputVO.areaPkid != "" && $scope.deviationInputVO.productCodePkid != "") {
                console.log("Area-->Product-->Feature");
                console.log($scope.qcrHeaderInputVO.areaPkid);
                console.log($scope.deviationInputVO.productCodePkid);
                qcrLovService.getQCRheadersByProductPkid($rootScope.loginUserInfo.pkid, $scope.qcrHeaderInputVO.areaPkid, $scope.deviationInputVO.productCodePkid).success(function(result) {
                    console.log("Got result " + result);
                    $scope.showHtmlTag = true;
                    $rootScope.showOnGO = false;
                    $rootScope.hiddenValues = "";
                    console.log("SOW" + $rootScope.hiddenValues);
                    $scope.data = result.qcrFeatureLOVByProductPkid;
                    console.log($scope.data);

                    $scope.feature = $scope.data[0].feature;



                })
            }


        }


        $scope.qcrHeaderInputVO = {
            areaPkid: "",
            createdUserpkid: $rootScope.loginUserInfo.pkid,
            escalated: "",
            wip: "",
            stepCodepkId: "",
            operationNo: "",
            partNo: "",
            rev: "",
            partId: "",
            frameCodepkId: "",
            locationCodepkId: "",
            inspstnCodepkId: "",
            qtyInspected: "",
            qtyDefect: "",
            totalQty: "",
            uomCodePkid: "",
            batch: "",
            so: "",
            serialNo: "",
            lotNo: "",
            rip: "",
            poNo: "",
            poLineNo: "",
            buyerCode: "",
            buyerName: "",
            materialSubRequired: "",
            materialSub: "",
            crossRef: "",
            modelListNo: "",
            draftingUnit: "",
            engHours: "",
            estReworkhrs: "",
            estLostShifts: "",
            totalCoq: "",
            scrapLabor: "",
            scrapMaterial: "",
            reworkRepair: "",
            supplierCode: ""

        };


        $scope.deviationInputVO = {
            devCodePkid: "",
            featureCodePkid: "",
            productCodePkid: "",
            reWorkRequired: "",
            dciAn: "",
            reworkComplete: "",
            gt103: "",
            greenTag: "",
            deleted: "",
            deviationQty: 2
        };


        $scope.deviationsNotesVO = {
            pkid: "",
            ncrDeviationPkid: "",
            userPkid: $rootScope.loginUserInfo.pkid,
            note: "This is test note for deviation .",
            createdDate: ""
        }

        $scope.dispositionNotesVO = {
            pkid: "",
            ncrDeviationPkid: "",
            userPkid: $rootScope.loginUserInfo.pkid,
            note: "This is test note for disposition .",
            createdDate: ""
        }

        $scope.saveQcr = function() {

            console.log("Saving Data ...");

            console.log("Area Pkid: " + $scope.qcrHeaderInputVO.areaPkid);
            console.log("WIP: " + $scope.qcrHeaderInputVO.wip);
            console.log("Step Code Pkid: " + $scope.qcrHeaderInputVO.stepCodepkId);
            console.log("Sequence #: " + $scope.qcrHeaderInputVO.operationNo);
            console.log("Part #: " + $scope.qcrHeaderInputVO.partNo);
            console.log("Rev: " + $scope.qcrHeaderInputVO.rev);
            console.log("Part id: " + $scope.qcrHeaderInputVO.partId);
            console.log("Product Code Pkid: " + $scope.deviationInputVO.productCodePkid);
            console.log();




            qcrLovService.getSaveQcr($scope.qcrHeaderInputVO, $scope.deviationInputVO, $scope.deviationsNotesVO, $scope.dispositionNotesVO).success(function(result) {
                $scope.data = result;
                console.log($scope.data);

                $scope.qcrHeaderResult = $scope.data.qcrHeaderList[0];

                $scope.qcrStatus = $scope.qcrHeaderResult.qcrStatus;
                // if($scope.qcrStatus=='1 - Initiated')
                $scope.qcrCreatedDate = $scope.qcrHeaderResult.qcrCreatedDate;
                $scope.userName = $scope.qcrHeaderResult.userName;
                $scope.initiatedFieldValue = $scope.userName + '\n' + $scope.qcrCreatedDate;


            })

        }


    }]);
});
