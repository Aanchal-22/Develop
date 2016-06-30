/**
 * Created by predix on 3/4/16.
 */
/**
 * Created by 703134813 on 2/17/2016.
 */
define(['angular',
    'controllers-module'
], function (angular,controllers) {
    'use strict';

    // Controller definition
    controllers.controller('MapViewCtrl', ['$rootScope','$scope','$http','$location','$window','loadingService'
        ,function ($rootScope,$scope,$http,$location,$window,loadingService) {


        console.log("Flow in MapViewCtrl controller:");
        $('#globalNavList').show();
        var _placeholder = $('#module_loadData');
            $rootScope.dukeFlow=true;
        $scope.init_map = function(){

            loadingService.startSpinner(_placeholder);
            console.log("entering init_map to load map data");
            /*$scope.loading = true;*/
            var mapData=[];
            $http.get("http://sitelocationservices.run.aws-usw02-pr.ice.predix.io/getAllFarmLocations").success(function(result)
            {
                mapData=result;
                console.log("result mapdata is::"+angular.toJson( mapData));

                var map;
                var bounds = new google.maps.LatLngBounds();
                var mapOptions = {
                    mapTypeId: 'roadmap',
                    elementType: 'labels',
                    backgroundColor: '#FFFFFF',
                    stylers: [
                        { saturation: -100 },
                        { invert_lightness: true }
                    ]
                };

                var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
                // Display a map on the page
                //var var_map = new google.maps.Map(document.getElementById("map-container"), var_mapoptions);
                map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
                map.setTilt(45);

                // Multiple Markers
                /*var markers = [
                 ['London Eye, London', 51.503454,-0.119562],
                 ['Palace of Westminster, London', 51.499633,-0.124755]
                 ];*/

                /*var markers = [
                 [data[0].siteCity, data[0].siteLongtitude,data[0].siteLatitude],
                 [data[1].siteCity, data[1].siteLongtitude,data[1].siteLatitude],
                 [data[2].siteCity, data[2].siteLongtitude,data[2].siteLatitude],
                 [data[3].siteCity, data[3].siteLongtitude,data[3].siteLatitude],
                 ]*/

                /* var markers = [
                 [mapData[0].farmState, 40.388763,-78.676358],
                 [mapData[1].farmState, 31.834804,-102.779538],
                 [mapData[2].farmState, 32.381874,-100.349789],
                 [mapData[3].farmState, 32.381874,-100.349789],
                 [mapData[4].farmState, 43.048943,-105.406808],
                 [mapData[5].farmState, 39.384451,-102.529803],
                 [mapData[6].farmState, 32.381874,-100.349789],
                 [mapData[7].farmState, 43.048943,-105.406808],
                 [mapData[8].farmState, 32.381874,-100.349789],
                 [mapData[9].farmState, 26.494822,-97.698227],
                 [mapData[10].farmState, 38.930034,-83.869923],
                 [mapData[11].farmState, 32.381874,-100.349789],
                 [mapData[12].farmState, 43.048943,-105.406808],
                 [mapData[13].farmState, 35.335256,-100.890310],
                 [mapData[14].farmState, 37.654007,-99.812494],
                 [mapData[15].farmState, 41.272000,-77.102490],
                 [mapData[16].farmState, 26.494822,-97.698227],
                 [mapData[17].farmState, 41.426956,-104.845462],
                 [mapData[18].farmState, 39.2873463,-76.964306],
                 [mapData[19].farmState, 41.426956,-104.845462],
                 [mapData[20].farmState, 31.834804,-102.779538],
                 [mapData[21].farmState, 26.494822,-97.698227],
                 [mapData[22].farmState, 26.494822,-97.698227]
                 ]*/

                console.log("length os mapdata is::"+mapData.length)
                var markers=[];

                for(var i=0;i<mapData.length;i++){
                    var temparaay = [mapData[i].farmState,mapData[i].farmLatitude,mapData[i].farmLongtitude];
                    markers.push(temparaay);
                }


                console.log("markers data is"+markers);
                // Info Window Content
                /* var infoWindowContent = [
                 ['<div class="info_content">' +
                 '<h3> <font color="red">City:</font>' +data[0].siteCity+'</h3>'+
                 '<p> <font color="red">Customer:</font>'+data[0].siteCustomer+'&nbsp;&nbsp;&nbsp'+data[0].siteName +'</p>' + '</div>'],
                 ['<div class="info_content">' +
                 '<h3> <font color="red">City:</font>' +data[1].siteCity+'</h3>'+
                 '<p> <font color="red">Customer:</font>'+data[1].siteCustomer+'&nbsp;&nbsp;&nbsp'+data[1].siteName +'</p>' + '</div>'],
                 ['<div class="info_content">' +
                 '<h3> <font color="red">City:</font>' +data[2].siteCity+'</h3>'+
                 '<p> <font color="red">Customer:</font>'+data[2].siteCustomer+'&nbsp;&nbsp;&nbsp'+data[2].siteName +'</p>' + '</div>'],
                 ['<div class="info_content">' +
                 '<h3> <font color="red">City:</font>' +data[3].siteCity+'</h3>'+
                 '<p> <font color="red">Customer:</font>'+data[3].siteCustomer+'&nbsp;&nbsp;&nbsp'+data[3].siteName +'</p>' + '</div>']
                 ];*/



                var infoWindowContent = []
                for(var i=0;i<mapData.length;i++){
                    var temparaay = ['<div class="info_content" >' +
                    '<h3> <font color="red">Farm name:</font>' +mapData[i].farmName+'</h3>'+
                    '</br>'+
                    '<p> <font color="red">Farm Model:</font>'+mapData[i].farmModelType+'</p>' +
                    '</br>'+
                    '<p> <font color="red">Power Generated:</font>'+mapData[i].farmGeneratedPower+'</p>' +
                    '</br>'+
                    '<p> <font color="red">Year of Operational :</font>'+mapData[i].farmYearOfoperational+'</p>' +
                    '</br>'+
                    '<p> <font color="red">Warranty:</font>'+mapData[i].farmWarranty+'</p>' +
                    '</br>'+
                    '<p> <font color="red">Farm Region:</font>'+mapData[i].farmRegion+'</p>' +
                    '</div>'];
                    infoWindowContent.push(temparaay);
                }

                // Display multiple markers on a map
                var infoWindow = new google.maps.InfoWindow(), marker, i;

                // Loop through our array of markers & place each one on the map
                for( i = 0; i < markers.length; i++ ) {
                    console.log("each longitude lattidtue is::"+markers[i][1]+":"+markers[i][2]);
                    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                    bounds.extend(position);
                    marker = new google.maps.Marker({
                        position: position,
                        closeBoxURL: "",
                        //icon: iconBase + 'library_maps.png',

                        icon:'images/turbine_flash_icons/wind-turbine-64x64.png',
                        map: map,
                        title: markers[i][0]
                    });

                    // Allow each marker to have an info window
                    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                        return function() {
                            infoWindow.setContent(infoWindowContent[i][0]);
                            infoWindow.open(map, marker);

                        }
                    })(marker, i));

                    // Automatically center the map fitting all markers on the screen
                    map.fitBounds(bounds);

                }

                // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
                var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
                    this.setZoom(4);
                    //this.setZoomIn(10);
                    google.maps.event.removeListener(boundsListener);
                });

                /*$scope.loading = false;*/
                loadingService.stopSpinner(_placeholder);
            });


        }

        /*$scope.mapdata = [
         {
         siteLatitude:'-6.8027028',
         siteLongtitude:'12.6145536',
         siteName:'LUANDA',
         siteCustomer:'CABINDA GULF OIL COMPANY LIMITED',
         siteCity:'LUANDA'
         },
         {
         siteLatitude:'-12.348056',
         siteLongtitude:'13.545556',
         siteName:'BIOPIO STATION',
         siteCustomer:'EMPRESA NACIONAL DE ELECTRICIDADE (ENE)',
         siteCity:'LUANDA'
         },
         {
         siteLatitude:'-7.4556345',
         siteLongtitude:'12.6383965',
         siteName:'Kizomba A & B',
         siteCustomer:'EXXON MOBIL',
         siteCity:'LUANDA'
         },
         {
         siteLatitude:'-7.478955',
         siteLongtitude:'12.7856605',
         siteName:'ANGOLA/SOYO',
         siteCustomer:'OPCO SOCIEDADE OPERACIONAL ANGOLA LNG, SA',
         siteCity:'LUANDA'
         }]*/

        $scope.init_map($scope.mapdata);

    }]);
});
