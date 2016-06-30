/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
/*global define */
define(['angular', 'angular-ui-router'], function(angular) {
    'use strict';
    return angular.module('app.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        //Turn on or off HTML5 mode which uses the # hash
        //$locationProvider.html5Mode(true).hashPrefix('!');
        $locationProvider.html5Mode(false);
        console.log("hello routes");
        /**
         * Router paths
         * This is where the name of the route is matched to the controller and view template.
         */
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            /* .state('landing', {
             url: '/landing',
             templateUrl: 'views/landing.html',
             controller: 'landingCtrl'
             })*/
            .state('cockpit', {
                url: '/cockpit',
                templateUrl: 'views/cockpit.html',
                controller: 'homeCtrl'
            })
            .state('managePref', {
                url: '/managePref',
                templateUrl: 'views/manage-prefrence.html',
                controller: 'managePrefCtrl',

            })

             .state('qcr', {
                url: '/qcr',
                templateUrl: 'views/qcr.html',
                controller: 'qcrCtrl',
            })

            .state('copyQcr', {
                url: '/copyQcr',
                templateUrl: 'views/copy-qcr.html',

            })
            .state('selectpo', {
                 url: '/selectpo',
                 templateUrl: 'views/select-po.html',
                 controller:'qcrCtrl'
             })
             .state('qcrRouting', {
                url: '/qcrRouting',
                templateUrl: 'views/qcr-routing.html',
                controller:'qcrCtrl'

            })
              .state('qcrSerial', {
                url: '/qcrSerial',
                templateUrl: 'views/serial-qcr.html',
                controller:'qcrCtrl'

            })

            .state('history', {
                url: '/history',
                templateUrl: 'views/history.html',

            })
            .state('reports', {
                url: '/reports',
                templateUrl: 'views/reports.html',
                controller: 'reportsCtrl'
            })
            .state('adhoc', {
                url: '/adhoc',
                templateUrl: 'views/adhoc.html',
                controller: 'adhocCtrl'

            })
        .state('administration', {
                url: '/administration',
                templateUrl: 'views/administration.html'
            })
            .state('manageUser', {
                url: '/manageUser',
                templateUrl: 'views/manage-user.html'
            })
            .state('addUser', {
                url: '/addUser',
                templateUrl: 'views/add-user.html'
            })
            .state('manageInactiveUsers', {
                url: '/manageInactiveUsers',
                templateUrl: 'views/manage-Inactive-users.html'
            })
            .state('editUser', {
                url: '/editUser',
                templateUrl: 'views/edit-user.html',
                controller: 'editAreaCtrl'
            })
            .state('chngPwd', {
                url: '/chngPwd',
                templateUrl: 'views/chng-password.html'
            })
            .state('addUsrQueRl', {
                url: '/addUsrQueRl',
                templateUrl: 'views/add-user-queue.html'
            })
            .state('managePrivileges', {
                url: '/managePrivileges',
                templateUrl: 'views/manage-privileges.html',
                controller: 'mngPrivilegeCtrl'
            })
            .state('manageComponents', {
                url: '/manageComponents',
                templateUrl: 'views/manage-components.html'
            })
            .state('editComponent', {
                url: '/editComponent',
                templateUrl: 'views/edit-component.html'
            })
            .state('manageRoles', {
                url: '/manageRoles',
                templateUrl: 'views/manage-roles.html'
            })
            .state('manageQueues', {
                url: '/manageQueues',
                templateUrl: 'views/manage-queues.html'
            })
            .state('addQueues', {
                url: '/addQueues',
                templateUrl: 'views/add-queue.html'
            })
            .state('editQueues', {
                url: '/editQueues',
                templateUrl: 'views/edit-queue.html'
            })
            .state('manageInactiveQueue', {
                url: '/manageInactiveQueue',
                templateUrl: 'views/manage-inactive-queues.html'
            })
            .state('manageAreas', {
                url: '/manageAreas',
                templateUrl: 'views/manage-areas.html'
            })
            .state('addAreas', {
                url: '/addAreas',
                templateUrl: 'views/add-area.html'
            })
            .state('editArea', {
                url: '/editArea',
                templateUrl: 'views/edit-area.html',
                controller:'editAreaCtrl'
            })

            .state('manageSites', {
                url: '/manageSites',
                templateUrl: 'views/manage-sites.html'
            })
            .state('editSites', {
                url: '/editSites',
                templateUrl: 'views/edit-sites.html'
            })
            .state('manageSitesComps', {
                url: '/manageSitesComps',
                templateUrl: 'views/manage-site-components.html',
                controller: 'manageSiteComponentCtrl'
            })
            .state('addComp', {
                url: '/addComp',
                templateUrl: 'views/add-comp.html'
            })
            .state('addRoleCode', {
                url: '/addRoleCode',
                templateUrl: 'views/add-role-code.html'
            })
            .state('operationCode', {
                url: '/operationCode',
                templateUrl: 'views/operation-code.html'
            })
            .state('addoperationCode', {
                url: '/addoperationCode',
                templateUrl: 'views/add-operation-code.html'
            })
            .state('editoperationcode', {
                url: '/editoperationcode',
                templateUrl: 'views/edit-operation-code.html'
            })
            .state('deviationCode', {
                url: '/deviationCode',
                templateUrl: 'views/deviation-code.html'
            })
            .state('addHighDeviationCode', {
                url: '/addHighDeviationCode',
                templateUrl: 'views/add-deviation-code.html'
            })
            .state('addLowDeviationCode', {
                url: '/addLowDeviationCode',
                templateUrl: 'views/add-deviation-low-code.html'
            })
            .state('editDeviationCode', {
                url: '/editDeviationCode',
                templateUrl: 'views/edit-deviation-code.html'
            })
            .state('fileUpload', {
                url: '/fileUpload',
                templateUrl: 'views/file-upload.html',
                controller: 'fileUploadCtrl'
            })
            .state('featureCode', {
                url: '/featureCode',
                templateUrl: 'views/feature-code.html'
            })
            .state('addfeatureCode', {
                url: '/addfeatureCode',
                templateUrl: 'views/add-feature-code.html'
            })
            .state('editfeaturecode', {
                url: '/editfeaturecode',
                templateUrl: 'views/edit-feature-code.html'
            })
            .state('frameCode', {
                url: '/frameCode',
                templateUrl: 'views/frame-code.html'
            })
            .state('addframeCode', {
                url: '/addframeCode',
                templateUrl: 'views/add-frame-code.html'
            })
            .state('editframeCode', {
                url: '/editframeCode',
                templateUrl: 'views/edit-frame-code.html'
            })
            .state('inspectionCode', {
                url: '/inspectionCode',
                templateUrl: 'views/inspection-code.html'
            })
            .state('editinspectionCode', {
                url: '/editinspectionCode',
                templateUrl: 'views/edit-inspection-code.html'
            })
            .state('addinspectionCode', {
                url: '/addinspectionCode',
                templateUrl: 'views/add-inspection-code.html'
            })
            .state('locationCode', {
                url: '/locationCode',
                templateUrl: 'views/location-code.html'
            })
            .state('editlocationCode', {
                url: '/editlocationCode',
                templateUrl: 'views/edit-location-code.html'
            })
            .state('addlocationCode', {
                url: '/addlocationCode',
                templateUrl: 'views/add-location-code.html'
            })
            .state('productCode', {
                url: '/productCode',
                templateUrl: 'views/product-code.html'
            })
            .state('editproductCode', {
                url: '/editproductCode',
                templateUrl: 'views/edit-product-code.html'
            })
            .state('addproductCode', {
                url: '/addproductCode',
                templateUrl: 'views/add-product-code.html'
            })
            .state('causeCode', {
                url: '/causeCode',
                templateUrl: 'views/causeCode.html'
            })
            .state('editcauseCode', {
                url: '/editcauseCode',
                templateUrl: 'views/edit-cause-code.html'
            })
            .state('addhighcauseCode', {
                url: '/addhighcauseCode',
                templateUrl: 'views/add-high-cause-code.html'
            })
            .state('addlowcauseCode', {
                url: '/addlowcauseCode',
                templateUrl: 'views/add-low-cause-code.html'
            })
            .state('caCode', {
                url: '/caCode',
                templateUrl: 'views/ca-code.html'
            })
            .state('editcaCode', {
                url: '/editcaCode',
                templateUrl: 'views/edit-ca-code.html'
            })
            .state('addcaCode', {
                url: '/addcaCode',
                templateUrl: 'views/add-ca-code.html'
            })
            .state('areaCode', {
                url: '/areaCode',
                templateUrl: 'views/manage-area-code.html',
                controller: 'manageAreaCtrl'
            })
            .state('editareaCode', {
                url: '/editareaCode',
                templateUrl: 'views/edit-ca-code.html'
            })
            .state('addareaCode', {
                url: '/addareaCode',
                templateUrl: 'views/add-ca-code.html'
            })

            .state('error', {
                url: '/error',
                templateUrl: 'views/error.html'
                //controller: 'loginCtrl'
            })
            .state('disclaimer', {
                url: '/disclaimer',
                templateUrl: 'views/disclaimer.html',
                controller: 'disclaimerCtrl'
            })
        ;



        $urlRouterProvider
            .otherwise('login');

    }]);
});
