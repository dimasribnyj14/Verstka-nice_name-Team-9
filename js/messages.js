let streams = document.querySelector('.streams')
let search = document.querySelector('.search-button')
let main = document.querySelector('.main-button')
main.addEventListener('click', function (event) {
    window.location.replace("main.html");
});
search.addEventListener('click', function (event) {
    window.location.replace("search.html");
});
streams.addEventListener('click', function (event) {
    window.location.replace("streams.html");
});