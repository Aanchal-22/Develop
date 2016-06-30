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
    controllers.controller('manageSiteComponentCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {


        $scope.roleList1 = [
            { "roleName" : "Sites", "roleId" : "role1", "children" : [
                { "roleName" : "Bari, Italy", "roleId" : "role12", "children" : [

                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},

                ] },
                { "roleName" : "Brasil", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "Florence, Italy", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "FOT, Hungary", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "GEMTEC", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "GETL, Banglore", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "Global Service, Italy", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "Livorno Italy", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "REPH Russia", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "Valentina, Italy", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
                ] },
                { "roleName" : "Valentina, Italy", "roleId" : "role11", "children" : [
                    { "roleName" : "Components", "roleId" : "role121","children" : [
                        { "roleName" : "011", "roleId" : "role1212"},
                        { "roleName" : "012", "roleId" : "role1212"},
                        { "roleName" : "013", "roleId" : "role1212"},
                        { "roleName" : "014", "roleId" : "role1212"},
                        { "roleName" : "015", "roleId" : "role1212"},
                        { "roleName" : "016", "roleId" : "role1212"},
                        { "roleName" : "017", "roleId" : "role1212"},
                        { "roleName" : "018", "roleId" : "role1212"},
                        { "roleName" : "019", "roleId" : "role1212"},
                        { "roleName" : "020", "roleId" : "role1212"},
                        { "roleName" : "021", "roleId" : "role1212"},
                        { "roleName" : "023", "roleId" : "role1212"},
                        { "roleName" : "024", "roleId" : "role1212"},
                        { "roleName" : "025", "roleId" : "role1212"},

                    ]},
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
       /* $scope.roleList1[0].selected = "selected";
        $scope.myTreeId.currentNode = $scope.roleList1;*/

       $scope.roleList = $scope.roleList1;
        $scope.printParent = function ($event) {
            console.log('selected Node details:');
            var root = $scope;
            var currentScope = angular.element($event.target).scope();
            console.log('selected Node details: ', currentScope.node);
            currentScope = currentScope.$parent;
            console.log('parents::')
            while (currentScope.$id !== root.$id) {
                console.log(currentScope.node);
                currentScope = currentScope.$parent;
            }


        }


    }]);
});
