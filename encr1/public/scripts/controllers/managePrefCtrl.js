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
    controllers.controller('managePrefCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

        $scope.queues = ['AC Engineer', 'ALG Cost Manager', 'ALG Engineer', 'ALG Inspector',
            'ALG Planner', 'ALG PM', 'ALG PQE', 'ALG Sourcing', 'ASE Engineer', 'AUS GATE 0/1', 'AUS GATE 0/1',
            'AUS COST MANAGER', 'AUS INSPECTOR', 'AUS PLANNER', 'AUS PM', 'AUS PQE', 'AUS REPAIR eNGINEER',
            'AUS SOURCING', 'BV Engineer', 'CC Engineer', 'CCE Engineer', 'Cost Manager', 'CP Engineer',
            'CVS Engineer', 'DE as Shipped'
        ]

        $scope.columns = ['NCR#', 'Initiated Date', 'Days Open', 'Frame', 'S/O#', 'Mat Loc', 'Deviation Description', 'Disposition',
            'Imputation Code', 'Attachements', 'Append Note', 'CAR Implementation Date', 'Dev Serial#', 'Disposition Description', 'Model List#',
            'NCE SignOff', 'NCE SignOff Date', 'NCE Area', 'NCE Status', 'Note', 'Notify(CNP) Signoff', 'Notify(CNP) Signoff Date',
            'Part ID', 'Part #', 'PM Signoff', 'PM Signoff Date', 'Serial#', 'Sp Job Signoff', 'Sp Job Signoff Date', 'WIP-Job',
        ]

    }]);
});
