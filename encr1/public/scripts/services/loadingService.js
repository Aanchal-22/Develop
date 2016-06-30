/**
 * Created by predix on 1/5/16.
 */
define(['angular', 'jquery', 'services-module'], function(angular, jquery, services) {
    'use strict';

    var _loadingImg = function() {

        return '<div id="ajax-loader"  align="center" >' +
            '<div class="overlay"></div>' +
            '<img id="ajax-loading" src="/images/ajax-loader-tr-img.gif" alt="ajax loading..."/>' +
            '</div>';
    }

    services.factory('loadingService', function() {

        return {

            startSpinner: function(paramId) {

                paramId.parents(".content-pane-body").addClass("loading");
                $('#body_data').hide();
                paramId.append(_loadingImg());


            },
            stopSpinner: function(paramId) {
                paramId.parents(".content-pane-body").removeClass("loading");
                $('#body_data').show();
                paramId.children('#ajax-loader').remove();

            },
        };
    });
});
