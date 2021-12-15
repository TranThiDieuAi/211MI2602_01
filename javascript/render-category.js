fetch("../data/category_product.json")
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

        for (i = 0; i < arr.length; i++) {
            div += "<div class='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'><a href='" + arr[i].url + "'><div class='category--item'><img src='" + arr[i].icon_url + "'><div class='category--item-name'>" + arr[i].name + "</div></div></a></div>"
        }
        // div += "</div>";
        document.getElementById("category_row").innerHTML = div;
    })
    .catch(function(error) {
        alert("Error: " + error.message);
    });