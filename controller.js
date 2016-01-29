var app = angular.module("myApp", []);
app.controller("myController", ["$scope", function($scope) {

    $scope.details = [{
        name: "a",
        status: "good"
    }, {
        name: "b",
        status: "poor"
    }, {
        name: "d",
        status: "bad"
    }, {
        name: "a",
        status: "poor"
    }, {
        name: "d",
        status: "satisfactory"
    }, {
        name: "e",
        status: "bad"
    }, {
        name: "c",
        status: "poor"
    }, {
        name: "b",
        status: "good"
    }, {
        name: "c",
        status: "good"
    }]


    $scope.customResults = function() {
        var a = [];
        var statusCheck = ["good", "satisfactory", "poor", "bad"];

        angular.forEach($scope.details, function(value) {
            if (a.length === 0) {
                a.push(value);
            } else {
                var flag = true;
                angular.forEach(a, function(item, index) {
                    if (item.name == value.name) {
                        if (statusCheck.indexOf(item.status) > statusCheck.indexOf(value.status)) {
                            a[index] = value;
                        }
                        flag = false;
                        return;
                    }
                });
                if (flag) {
                    a.push(value);
                }
            }

        });
        return a;
    }
}]);
