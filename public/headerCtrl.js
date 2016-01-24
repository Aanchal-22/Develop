define(['angular',function () {
	var app=angular.module("headerModule",[]);
	app.controller("headerCtrl",["$scope",function($scope){
		$scope.message="hi this is my first angular app";
	}]);
	debugger;
	return app;
}])