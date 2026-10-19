document.addEventListener('DOMContentLoaded', function () {

    // Mobile menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items')

    toggleButton.addEventListener('click', function (){
        mobileMenu.classList.toggle('active');
    });

    // Video modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer')

    // Open modal when clicked
    videoButton.addEventListener('click', function (){
        // show modal
        modal.style.display = 'block';

        // Replace src attribure with the video URL
        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

        // Close Modal on close button click
        closeButton.addEventListener('click', function (){
            modal.style.display = 'none'
            videoPlayer.src = '';
        });

        // Close modal on outter click
        window.addEventListener('click', function (event){
            if (event.target == modal){
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    });
});

// Naviagtion background on scroll
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {navbar.classList.remove('navbar--scroll');
    }
});