document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;

    // Construct URL with form data as parameters
    var url = "menu.html?" + "name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone) + "&email=" + encodeURIComponent(email) + "&date=" + encodeURIComponent(date);
    
    // Redirect to the new page with the URL parameters
    window.location.href = url;
});