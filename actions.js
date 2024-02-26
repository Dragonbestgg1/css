document.querySelector('.toggle-btn').addEventListener('click', function() {
    var routes = document.querySelector('.routes');
    if (routes.style.display === "none") {
        routes.style.display = "flex";
    } else {
        routes.style.display = "none";
    }
});
