function myFunction(x) {
    if (x.matches) {
        fetch("../data/blog.json")
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

                for (i = 0; i < 2; i++) {
                    div += "<div class='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4'><a href='" + arr[i].url + "'><div class='deblog--item'><div class='card-img-deblog'><img class='deblog--item-img' src='" + arr[i].image + "'></div><div class='deblog--item-content'><p class='deblog--item-name'>" + arr[i].name + "</p></div></div></a></div>"
                }
                // div += "</div>";
                document.getElementById("deblog_col").innerHTML = div;
            })
            .catch(function(error) {
                alert("Error: " + error.message);
            });
    } else {
        fetch("../data/blog.json")
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

                for (i = 0; i < 3; i++) {
                    div += "<div class='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4'><a href='" + arr[i].url + "'><div class='deblog--item'><img class='deblog--item-img' src='" + arr[i].image + "'><p class='deblog--item-name'>" + arr[i].name + "</p></div></a></div>"
                }
                // div += "</div>";
                document.getElementById("deblog_col").innerHTML = div;
            })
            .catch(function(error) {
                alert("Error: " + error.message);
            });
    }
}

var x = window.matchMedia("(max-width: 1200px) and (min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes