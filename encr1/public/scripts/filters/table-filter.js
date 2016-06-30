/**
 * Created by predix on 3/4/16.
 */

'use strict';

define(['angular','filters-module'], function(angular,filters) {

    /* Filters */

    filters.filter('pagination', function()
    {
        return function(input,start)
        {   start = +start;
            return input.slice(start);
        };
    });
});
