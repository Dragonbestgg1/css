document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.querySelector('.toggle-btn');
    var routes = document.querySelector('.routes');
    var body = document.body;

    function checkDeviceWidth() {
        if(window.innerWidth > 900) {
            routes.style.flexDirection = 'row';
            if(routes.classList.contains('hide')) {
                routes.classList.remove('hide');
                routes.classList.add('show');
            }
            body.classList.remove('no-scroll');
        } else {
            routes.style.flexDirection = 'column';
            if(!routes.classList.contains('show')) {
                body.classList.remove('no-scroll');
            }
        }
    }

    if(toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            if (routes.classList.contains('show')) {
                routes.classList.remove('show');
                routes.classList.add('hide');
                body.classList.remove('no-scroll');
            } else {
                routes.classList.remove('hide');
                routes.classList.add('show');
                body.classList.add('no-scroll');
            }
        });
    }

    window.addEventListener('resize', checkDeviceWidth);
    checkDeviceWidth(); // Call the function initially to set the correct flex-direction
});
