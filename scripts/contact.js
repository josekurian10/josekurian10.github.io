//Author     : Jose Kurian, Lohit Binu Philip
//Student ID : 100891948, 100894625
//Date       : 27/01/2024

"use strict";

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('contactForm');

        form.onsubmit = function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            let name = form.elements['name'].value;
            let email = form.elements['email'].value;
            let subject = form.elements['subject'].value;
            let message = form.elements['message'].value;

            // Display form data in alert or modal
            alert(`Thank you for your message, ${name}! 
                  Email: ${email}
                  Subject: ${subject}
                  Message: ${message}
                  You will be redirected to the Home page in 5 seconds.`);

            // Wait for 5 seconds (5000 milliseconds), then redirect
            setTimeout(function() {
                window.location.href = 'index.html'; // Redirect to the Home page
            }, 5000);

            // Reset the form (optional, depending on your needs)
            form.reset();
        };
    });

    function displayProjects() {
        // Your displayProjects function code
    }

    function Start() {
        var loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', displayProjects);
        }
    }

    Start();
})();

