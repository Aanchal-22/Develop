requirejs.config({
	"paths":{"angular":"bower_components/angular/angular.min",
			"angular-route":"bower_components/angular-route/angular-route.min",
			"app":"public/script"},
	"shim":{
		"angular-route":{
			'deps':['angular']
		}
	}

});

require(['angular','public/script'],function(){
		angular.element(document).ready(function(){
				angular.bootstrap(document,['myApp']);
	});
});