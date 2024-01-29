//Author     : Jose Kurian, Lohit Binu Philip
//Student ID : 100891948, 100894625
//Date       : 27/01/2024

"use strict";

(function() {
    function Start() {
        const projectContainer = document.getElementById('projectContainer');
        const loadMoreBtn = document.getElementById('loadMoreBtn');

        const projects = [
            { title: 'Web Development Portfolio', description: 'A showcase of my web development projects.' +
                    ' Includes responsive web designs and interactive features.', imageUrl: '../images/img1.png' },

            { title: 'Mobile App Design', description: 'Designed a mobile application with a clean and user-friendly' +
                    ' interface. Implemented intuitive navigation and sleek animations.', imageUrl: '../images/img2.jpg' },

            { title: 'E-commerce Website', description: 'Developed an e-commerce platform with secure payment gateways,' +
                    ' product catalog, and user account functionality.', imageUrl: '../images/img3.jpg' },

            { title: 'Data Visualization Dashboard', description: 'Created a data visualization dashboard to present ' +
                    'complex data in an easily understandable format using charts and graphs.', imageUrl: '../images/img4.jpg' },

            { title: 'Blogging Platform', description: 'Built a feature-rich blogging platform with user authentication,' +
                    ' comment system, and a responsive layout for optimal viewing on various devices.', imageUrl: '../images/img5.jpg' },



        ];

        let displayedProjects = 0;
        const projectsPerPage = 2;

        const displayProjects = () => {
            const projectsToDisplay = projects.slice(displayedProjects, displayedProjects + projectsPerPage);
            projectsToDisplay.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectContainer.appendChild(projectCard);
            });
            displayedProjects += projectsPerPage;
            if (displayedProjects >= projects.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        };

        displayProjects();

        loadMoreBtn.addEventListener('click', displayProjects);
    }

    document.addEventListener('DOMContentLoaded', Start);
})();
