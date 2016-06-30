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
    controllers.controller('qcrCtrl', ['$rootScope', '$scope', '$http','$window','$sce','qcrSearchService', function($rootScope, $scope, $http,$window,$sce,qcrSearchService) {

    	$scope.createWindow=function(src, width, height){
					    var win = window.open(src, "_new", "width="+width+",height="+height);
					    win.addEventListener("resize", function(){
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
			    });	*/
			
			    	// start qct-tabs logic

			    	$('#tab-ul #selected').addClass('div-visible');
					$('#tab-ul li').on('click',function(){
								var i =$(this).parent().children().index(this);
								var liItem=$(this)[0];
								$(".selected-tab").removeClass("selected-tab");
								$(liItem).addClass('selected-tab tabs_bold');

								var divItem=$('#content').children()[i];

								$('.div-visible').addClass('div-invisible');
								$(divItem).removeClass('div-invisible');
								$(divItem).addClass('div-visible');

							})	
			    	
			    		// end qcr-tabs logic
			    		$scope.showHtmTag=false;
			    		$rootScope.hiddenValues="value_hidden";	 
						$rootScope.showOnGO=false;
						$scope.goClicked=function(ncr){

								$rootScope.showOnGO=true;
								$rootScope.hiddenValues="";

								qcrSearchService.getQcrSearchData(ncr).success(function(result) {
									$scope.data=result;
									$scope.DevNotes=$scope.data.ncrSearchDeviation[0].ncrsearchDeviationNotes;
									$scope.DespNotes=$scope.data.ncrSearchDeviation[0].ncrSearchDispNotes;
			                    })

			                   qcrSearchService.getQcrMarkupData(ncr).success(function(res){
			                   	$scope.markupData=res.ncrMarkUpData;
			                   })

			                   qcrSearchService.getQcrAttachment(ncr).success(function(res){
			                   		$scope.attachmentList=res.attachmentList;
			                   })
						}

						/*preview Logic*/
						$scope.fileData = {
                                attachmentPkid : ''
                            };


            $scope.preview = function(rows){
            	//debugger
                 $scope.fileData.attachmentPkid = rows.attachmentPkid;
                   $http.post('http://10.222.194.204/EncrQCRService/service/ncrSearch/previewFile/',$scope.fileData,{responseType:'arraybuffer'})
                    .success(function (response) {
                      var file = new Blob([response], {type: rows.contentType});
                         $scope.url = (window.URL || window.webkitURL).createObjectURL( file );
                          $scope.attachcontent = $sce.trustAsResourceUrl($scope.url);

                    });

                }



						 

           
        }]);
});
