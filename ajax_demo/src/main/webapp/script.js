$(document).ready(function(){
    $('#loginForm').submit(function(event){
        event.preventDefault(); // Prevent the form from submitting via the browser
        var formData = $(this).serialize(); // Serialize form data
        $.ajax({
            type: 'POST',
            url: 'login', // URL to your servlet
            data: formData,
            success: function(response){
                if(response.trim() === 'success'){ // trim() to remove any extra whitespace
                    $('#message').html('Login successful.');
                    // Redirect or perform any actions upon successful login
                    console.log("success called!");
                    window.location.href = './success.html';
                    
                } else {
                    $('#message').html('Login failed. Please try again.');
                }
            }
        });
    });
});
