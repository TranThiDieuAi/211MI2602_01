var app = angular.module("AngularApp", []);
app.controller('ProductController', function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/products.json"
    }).then(function mySuccess(response) {
            $scope.products = response.data;
        },
        function myError(response) {
            $scope.dataError = response.statusText;
        });
})
app.controller('UserController', function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/users.json"
    }).then(function mySuccess(response) {
            $scope.users = response.data;
        },
        function myError(response) {
            $scope.dataError = response.statusText;
        });
})