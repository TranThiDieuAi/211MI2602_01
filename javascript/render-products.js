let urlparams = new URLSearchParams(location.search);
var id = urlparams.get('productID');
let app = angular.module("AngularApp", []);
app.controller("DetailController", function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/products.json"
    }).then(
        function success(response) {

            $scope.products = response.data;

            $scope.selectProduct = response.data.find(function(value) {
                return value.name == id;
            })
        },
        function error(response) {
            $scope.error = response.statusText;
        }
    )
})

function decreaseNumber() {
    var quantity = document.getElementById("quantity");
    var price = document.getElementById("price")
    var total_amount = document.getElementById("amount");

    if (quantity.value <= 0) {
        quantity.value = 0;
    } else {
        quantity.value = parseInt(quantity.value) - 1;
    }
    // total amount
    total_amount.innerHTML = quantity.value * parseInt(price.innerText) + ".000đ"
}

function increaseNumber() {
    var quantity = document.getElementById("quantity");
    var price = document.getElementById("price")
    var total_amount = document.getElementById("amount");
    quantity.value = parseInt(quantity.value) + 1;
    total_amount.innerHTML = quantity.value * parseInt(price.innerText) + ".000đ"
}