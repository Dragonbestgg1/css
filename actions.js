document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.querySelector('.toggle-btn');
    var routes = document.querySelector('.routes');
    let body = document.body;
    let redirect = document.querySelectorAll('.redirect');

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
    if(redirect){
        for (let i=0; i < redirect.length; i++) {
            redirect[i].addEventListener('click', function(){
                if (routes.classList.contains('show')) {
                    routes.classList.remove('show');
                    routes.classList.add('hide');
                    body.classList.remove('no-scroll');
                }
            });
        }
    }

    window.addEventListener('resize', checkDeviceWidth);
    checkDeviceWidth(); 
});

