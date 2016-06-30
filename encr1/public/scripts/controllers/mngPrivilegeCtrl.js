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
    controllers.controller('mngPrivilegeCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
        console.log("inside Manage Privilege Ctrl");



        $scope.head={"Headers":
            [
                {"action_id":0,"name":"PQE"},
                {"action_id":1,"name":"Inspector"},
                {"action_id":2,"name":"MRP Plan"},
                {"action_id":3,"name":"Welding Engineer"},
                {"action_id":4,"name":"Cost Manager"},
                {"action_id":5,"name":"CC Engineer"},
                {"action_id":6,"name":"GT Engineer"},
                {"action_id":7,"name":"ST Engineer"},
                {"action_id":8,"name":"RC Engineer"},
                {"action_id":9,"name":"NPI Engineer"},
                {"action_id":10,"name":"IPL Engineer"},
                {"action_id":11,"name":"SER Engineer"},
                {"action_id":12,"name":"ASE(CASE MECC)"},
                {"action_id":13,"name":"EICE Engineer(CASE ELET)"},
                {"action_id":14,"name":"General User"},
                {"action_id":15,"name":"Sourcing MRP Plan"},
                {"action_id":16,"name":"Sourcing Cost Manager"},
                {"action_id":17,"name":"SYS Admin"},
                {"action_id":18,"name":"INPR Engineer"},
                {"action_id":19,"name":"FE Engineer"},
                {"action_id":20,"name":"ER MRP"},
                {"action_id":21,"name":"MRP PLAN Pack Fir"},
                {"action_id":22,"name":"MRP PLAN Pack Massa"},
                {"action_id":23,"name":"UTOF Pack"},
                {"action_id":25,"name":"PROS Engineer"},
                {"action_id":26,"name":"CVS Engineer"},
                {"action_id":27,"name":"CP Engineer"},
                {"action_id":28,"name":"RMS Engineer"},
                {"action_id":29,"name":"BV Engineer"},
                {"action_id":30,"name":"ASE/SERM Engineer"},
                {"action_id":31,"name":"AC Engineer"},
                {"action_id":32,"name":"MFG Engineer"},
                {"action_id":33,"name":"SER Operator"},
                {"action_id":34,"name":"FULL GSHOP Engineer"},
                {"action_id":35,"name":"NDE Operator"},
                {"action_id":36,"name":"MFG Engineer"},
                {"action_id":37,"name":"SQE Operating"},
                {"action_id":38,"name":"LC Usinage"},
                {"action_id":39,"name":"LC Magasian"},
                {"action_id":40,"name":"LC Essasis"},
                {"action_id":41,"name":"LC Logistique interne"},
                {"action_id":42,"name":"LC Logistique externe LP"},
                {"action_id":43,"name":"LC Logistique externe HF"},
                {"action_id":44,"name":"LC Cost Manager"},
                {"action_id":45,"name":"LC Etudes Compresseurs"},
                {"action_id":46,"name":"LC Etudes Turbines"},
                {"action_id":47,"name":"LC Etudes ASE"},
                {"action_id":48,"name":"LC Etudes CSE"},
                {"action_id":49,"name":"LC Uilisateur general"},
                {"action_id":50,"name":"LC Methods"},
                {"action_id":51,"name":"LC PQE"},
                {"action_id":52,"name":"LC Administretur"},
                {"action_id":53,"name":"LC Services"},
                {"action_id":54,"name":"LC Qualite"},
                {"action_id":55,"name":"LC Affaires"},
                {"action_id":56,"name":"LC Achats"},
                {"action_id":57,"name":"LC Techniques"}]};




        $scope.jsonbody = {"QCR Create":
            [
                {"name":"PQE","action_id":0,"status":1},
                {"name":"Inspector","action_id":1,"status":1},
                {"name":"MRP Plan","action_id":2,"status":1},
                {"name":"Welding Engineer","action_id":3,"status":1},
                {"name":"Cost Manager","action_id":4,"status":1},
                {"name":"CC Engineer","action_id":5,"status":1},
                {"name":"GT Engineer","action_id":6,"status":1},
                {"name":"ST Engineer","action_id":7,"status":1},
                {"name":"RC Engineer","action_id":8,"status":1},
                {"name":"NPI Engineer","action_id":9,"status":1},
                {"name":"IPL Engineer","action_id":10,"status":1},
                {"name":"SER Engineer","action_id":11,"status":1},

            ],
            "QCR Input/Update Data":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "QCR Final Disposition Engneering required":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1},
                    ],
            "QCR Final Disposition Engneering  not required":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1},
                   ],
            "QCR Clear/Close":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1},
                    ],
            "QCR View Only":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "QCR Pre Disposition":
                [{"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                   ],
            "QCR Review and Release Disposition":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                   ],
            "QCR Review and Approve VBB":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                   ],
            "QCR Run Reports":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1},

                    ],
            "QCR Sys Administration":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "QCR Chg/Overwrite":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1},

                   ],
            "QCR Reopen QCR":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                   ],
            "QCR Responsibility (Supervisor)":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "QCR Responsibility Quality":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "CAR Create (WRITE)":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "CAR Request":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "CAR Input/Update Data":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}
                    ],
            "CAR Correct Action Description":
                [{"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                   ],
            "CAR Accept":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "CAR Clear/Close":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "CAR view Only":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"st,atus":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "CAR Run Reports":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "CAR Sys Administration":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}

                    ],
            "CAR Complete":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1}
                    ,{"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}
                    ],
            "CAR Reject":
                [{"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}
                   ],
            "SDR Create":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "SDR Input/Update data":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "SDR Final Disposition":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}],
            "SDR Final Disposition Engneering Not Required":
                [
                    {"name":"PQE","action_id":0,"status":1},
                    {"name":"Inspector","action_id":1,"status":1},
                    {"name":"MRP Plan","action_id":2,"status":1},
                    {"name":"Welding Engineer","action_id":3,"status":1},
                    {"name":"Cost Manager","action_id":4,"status":1},
                    {"name":"CC Engineer","action_id":5,"status":1},
                    {"name":"GT Engineer","action_id":6,"status":1},
                    {"name":"ST Engineer","action_id":7,"status":1},
                    {"name":"RC Engineer","action_id":8,"status":1},
                    {"name":"NPI Engineer","action_id":9,"status":1},
                    {"name":"IPL Engineer","action_id":10,"status":1},
                    {"name":"SER Engineer","action_id":11,"status":1}]};








    }]);
});
