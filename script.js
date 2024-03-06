document.addEventListener('DOMContentLoaded', function() {
    const googleSearchFrame = document.getElementById('googleSearchFrame');

    function resizeIframe() {
        googleSearchFrame.style.height = window.innerHeight - 60 + 'px'; // Adjusted for header height
    }

    // Resize iframe when the window size changes
    window.addEventListener('resize', resizeIframe);

    // Initial resize of the iframe
    resizeIframe();
});
