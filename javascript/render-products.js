let urlparams = new URLSearchParams(location.search);
var id = urlparams.get('productID');
let app = angular.module("AngularApp", ['angularUtils.directives.dirPagination']);
app.controller("DetailController", function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/products.json"
    }).then(
        function success(response) {
            $scope.carts = [];
            var quantity = document.getElementById("quantity");
            $scope.products = response.data;
            $scope.selectProduct = response.data.find(function(value) {
                return value.name == id;
            })
            $scope.add_cart = function(product) {
                if (product) {
                    $scope.carts.push({ name: product.name, price: product.price * quantity.value });
                }
            }
            $scope.total = 0;
            $scope.setTotals = function(cart) {
                if (cart) {
                    $scope.total += (cart.price * 1);
                }
            }
            $scope.remove_cart = function(cart) {
                if (cart) {
                    $scope.carts.splice($scope.carts.indexOf(cart), 1);
                    $scope.total -= cart.price;
                }
            }
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

function openForm() {
    document.getElementById('myForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}