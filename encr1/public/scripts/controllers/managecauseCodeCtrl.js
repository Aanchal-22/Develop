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
    controllers.controller('managecauseCodeCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {


        $scope.roleList1 = [
            { "roleName" : "A(Administrative Management)", "roleId" : "role1", "children" : [
                { "roleName" : "A01(Administrative Management Decision)", "roleId" : "role12", "children" : [] },
                { "roleName" : "A02(Planning activities Wrong/Inadequate)", "roleId" : "role11", "children" : [] },
                { "roleName" : "A04(Sourcing PO Incomplete/Wrong)", "roleId" : "role11", "children" : [] },
                { "roleName" : "FOT, Hungary", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "GEMTEC", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "GETL, Banglore", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "Global Service, Italy", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "Livorno Italy", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "REPH Russia", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "Valentina, Italy", "roleId" : "role11", "children" : [

                ] },
                { "roleName" : "Valentina, Italy", "roleId" : "role11", "children" : [

                ] },
            ]},

            /*{ "roleName" : "Admin", "roleId" : "role2", "children" : [] },

             { "roleName" : "Guest", "roleId" : "role3", "children" : [] }*/
        ];

        //test tree model 2
        $scope.roleList2 = [
            { "roleName" : "User", "roleId" : "role1", "children" : [
                { "roleName" : "subUser1", "roleId" : "role11", "collapsed" : true, "children" : [] },
                { "roleName" : "subUser2", "roleId" : "role12", "collapsed" : true, "children" : [
                    { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
                        { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
                        { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
                    ]}
                ]}
            ]},

            { "roleName" : "Admin", "roleId" : "role2", "children" : [
                { "roleName" : "subAdmin1", "roleId" : "role11", "collapsed" : true, "children" : [] },
                { "roleName" : "subAdmin2", "roleId" : "role12", "children" : [
                    { "roleName" : "subAdmin2-1", "roleId" : "role121", "children" : [
                        { "roleName" : "subAdmin2-1-1", "roleId" : "role1211", "children" : [] },
                        { "roleName" : "subAdmin2-1-2", "roleId" : "role1212", "children" : [] }
                    ]}
                ]}
            ]},

            { "roleName" : "Guest", "roleId" : "role3", "children" : [
                { "roleName" : "subGuest1", "roleId" : "role11", "children" : [] },
                { "roleName" : "subGuest2", "roleId" : "role12", "collapsed" : true, "children" : [
                    { "roleName" : "subGuest2-1", "roleId" : "role121", "children" : [
                        { "roleName" : "subGuest2-1-1", "roleId" : "role1211", "children" : [] },
                        { "roleName" : "subGuest2-1-2", "roleId" : "role1212", "children" : [] }
                    ]}
                ]}
            ]}
        ];



        //roleList1 to treeview
        $scope.roleList = $scope.roleList1;


    }]);
});
