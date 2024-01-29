"use strict";

// IIFE - Immediately Invoked Function Expression
(function() {

    function Start() {
        // Change 'Blog' to 'News'
        var blogLink = document.querySelector('.navbar-nav .nav-item a[href="blog.html"]');
        if (blogLink) {
            blogLink.textContent = 'News';
            blogLink.href = 'news.html'; // Update the href if you have a separate News page
        }

        // Add 'Careers' link
        var navbarList = document.querySelector('.navbar-nav');
        if (navbarList) {
            var careersLi = document.createElement('li');
            careersLi.className = 'nav-item';
            var careersLink = document.createElement('a');
            careersLink.className = 'nav-link';
            careersLink.href = 'careers.html'; // Point this to your actual Careers page URL
            careersLink.textContent = 'Careers';
            careersLi.appendChild(careersLink);
            navbarList.appendChild(careersLi);
        }
    }

    // Ensure Start is called when the page loads
    document.addEventListener('DOMContentLoaded', Start);

})(); // End of IIFE
