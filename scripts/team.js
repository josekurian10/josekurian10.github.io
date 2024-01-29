//Author     : Jose Kurian, Lohit Binu Philip
//Student ID : 100891948, 100894625
//Date       : 27/01/2024

"use strict";

(function() {

    function displayProjects() {
    }

    function Start() {

    }

    $(document).ready(function() {
        // Event listener for team member click
        $('.team-member').on('click', function() {
            let targetModal = $(this).data('target');
            $(targetModal).modal('show');
        });

        // Close modal when close button is clicked
        $('.modal .close').on('click', function() {
            $(this).closest('.modal').modal('hide');
        });

        var loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', displayProjects);
        }
    });

    document.addEventListener('DOMContentLoaded', Start);
})();
