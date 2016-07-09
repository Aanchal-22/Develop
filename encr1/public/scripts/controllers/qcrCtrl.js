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
    controllers.controller('qcrCtrl', ['$rootScope', '$scope', '$http', '$window', '$sce','qcrSearchService', '$cookies', '$cookieStore','loadingService', function($rootScope, $scope, $http, $window,$sce, qcrSearchService, $cookies, $cookieStore,loadingService) {

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
        $scope.userId = $cookieStore.get('usrId');
        $scope.userType = $cookieStore.get('usrType');
        $scope.usrDfltRole = $cookieStore.get('usrDfltRole');
        $scope.usrDfltPrivilege = $cookieStore.get('usrDfltPrivilege');
        $scope.userRole = $cookieStore.get('userRole');
        $scope.userPrivilege = $cookieStore.get('userPrivilege');
        $scope.enableToggle = true;
        $scope.displayToggle = true;
        $scope.selected;
        $scope.goClicked = function(ncr) {
            console.log($scope.ncr);
            var data1 = {
                ncrNumber: $scope.ncr,
                userId: $scope.userId,
                userType: $scope.userType,
                userRole: $scope.userRole,
                userPrivilege: $scope.userPrivilege
            }
            $scope.selected = 0;
            console.log("Input Data" + data1);
            console.log("Inside Go Clicked");
            console.log($scope.usrDfltRole);
            console.log($scope.usrDfltPrivilege);
            console.log($scope.userRole);
            console.log($scope.userPrivilege);
            $rootScope.showOnGO = true;
            $rootScope.hiddenValues = "";
var _placeholder = $('#module_loadData');
                    loadingService.startSpinner(_placeholder);
            $scope.displayToggle1 = false;
            qcrSearchService.getQcrSearchData(data1).success(function(result) {
                $scope.data = result;
                  loadingService.stopSpinner(_placeholder);
                $scope.viewAllDev = $scope.data.ncrSearchDeviation;
                //console.log(angular.toJson($scope.data));
                $scope.lckForEdit = $scope.data.lockForEdit;
                if ($scope.lckForEdit === "disable") {
                    console.log("************");
                    $scope.enableToggle = false;
                    $scope.displayToggle = true;
                    $scope.displayToggle1 = false;

                } else if ($scope.lckForEdit === "displayFalse") {
                    $scope.enableToggle = false;
                    $scope.displayToggle = false;
                    $scope.displayToggle1 = false;

                } else if ($scope.lckForEdit === "displayAndEnable") {
                    $scope.enableToggle = true;
                    $scope.displayToggle = true;
                    $scope.displayToggle1 = false;
                } else {
                    $scope.displayToggle1 = true;
                    $scope.displayToggle = false;
                }
                console.log("Lock For Edit Variable" + $scope.lckForEdit);
                $scope.DevNotes = $scope.data.ncrSearchDeviation[0].ncrsearchDeviationNotes;
                $scope.DespNotes = $scope.data.ncrSearchDeviation[0].ncrSearchDispNotes;

                //console.log($scope.data.ncrSearchDeviation.length)
                $scope.selectedItem = 0;
                $scope.devData = $scope.data.ncrSearchDeviation[0];


                $scope.currDeviation = function(ind) {
                    $scope.devData = $scope.data.ncrSearchDeviation[ind];
                }


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
        $scope.markupFileData = {
            markupPKID: ''
        };


        $scope.preview = function(rows) {
            //debugger
            $scope.fileData.attachmentPkid = rows.attachmentPkid;
            $http.post('/EncrQCRService/service/ncrSearch/previewFile/', $scope.fileData, { responseType: 'arraybuffer' })
                .success(function(response) {
                    var file = new Blob([response], { type: rows.contentType });
                    $scope.url = (window.URL || window.webkitURL).createObjectURL(file);
                    $scope.attachcontent = $sce.trustAsResourceUrl($scope.url);

                });

        }
        $scope.markUpPeview = function(rows) {
            //debugger
            $scope.markupFileData.markupPKID = rows.markupPKID;
            $http.post('/EncrQCRService/service/ncrSearch/previewMarkupFile/', $scope.markupFileData, { responseType: 'arraybuffer' })
                .success(function(response) {
                    var file = new Blob([response], { type: rows.contentType });
                    $scope.url = (window.URL || window.webkitURL).createObjectURL(file);
                    $scope.markupattachcontent = $sce.trustAsResourceUrl($scope.url);

                });

        }






    }]);
});
