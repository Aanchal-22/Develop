define(["angular-route","../public/headerCtrl"],function(){
	
	var app=angular.module('myApp',['headerModule']);
debugger;	

	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:"public/header.html",
			controller:"headerCtrl"
		});
	}]);

	return app;	
});