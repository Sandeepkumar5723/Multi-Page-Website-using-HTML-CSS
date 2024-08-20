document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById('preloader');
    var mainContent = document.getElementById('main-content');
    setTimeout(function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000); 
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            contentSections.forEach(section => section.style.display = 'none');
            navLinks.forEach(nav => nav.classList.remove('active'));
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';
            this.classList.add('active');
        });
    });
});
