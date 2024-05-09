     // Function to get URL parameters
     function getUrlParams() {
        var params = {};
        var urlParams = new URLSearchParams(window.location.search);
        urlParams.forEach(function(value, key) {
            params[key] = value;
        });
        return params;
    }

    // Get URL parameters
    var params = getUrlParams();

    // Display form data
    var displayData = document.getElementById("display-data");
    displayData.innerHTML += "<p><strong>Name:</strong> " + params.name + "</p>";
    displayData.innerHTML += "<p><strong>Mobile Number:</strong> " + params.phone + "</p>";
    displayData.innerHTML += "<p><strong>Email:</strong> " + params.email + "</p>";
    displayData.innerHTML += "<p><strong>Date:</strong> " + params.date + "</p>";