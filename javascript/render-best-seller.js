function myFunction(x) {
    if (x.matches) {
        fetch("../data/products.json")
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("HTTP error, status: " + response.status)
                }
            })
            .then(function(arr) {
                var div = "";
                var i;

                for (i = 0; i < 10; i++) {
                    div += "<div class='col-12 col-sm-4 col-md-3 col-lg-2dot4 col-xl-2'><a href='" + arr[i].url + "'><div class='card bestseller--item'><div class='card-img-container'><img class='card-img-top bestseller--item-img' src='" + arr[i].icon_url + "'></div><div class='card-body bestseller--item-content'><p class='card-text bestseller--item-name'>" + arr[i].name + "</p><p class='card-text bestseller--item-price'>" + arr[i].price + "₫" + "</p></div></div></a></div>"
                }
                // div += "</div>";
                document.getElementById("bestseller_row").innerHTML = div;
            })
            .catch(function(error) {
                alert("Error: " + error.message);
            });
    } else {
        fetch("../data/products.json")
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("HTTP error, status: " + response.status)
                }
            })
            .then(function(arr) {
                var div = "";
                var i;

                for (i = 0; i < 12; i++) {
                    div += "<div class='col-12 col-sm-4 col-md-3 col-lg-2dot4 col-xl-2'><a href='" + arr[i].url + "'><div class='card bestseller--item'><div class='card-img-container'><img class='card-img-top bestseller--item-img' src='" + arr[i].icon_url + "'></div><div class='card-body bestseller--item-content'><p class='card-text bestseller--item-name'>" + arr[i].name + "</p><p class='card-text bestseller--item-price'>" + arr[i].price + "₫" + "</p></div></div></a></div>"
                }
                // div += "</div>";
                document.getElementById("bestseller_row").innerHTML = div;
            })
            .catch(function(error) {
                alert("Error: " + error.message);
            });
    }
}

var x = window.matchMedia("(max-width: 1200px) and (min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes