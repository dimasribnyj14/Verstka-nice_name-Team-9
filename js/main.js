let streams = document.querySelector('.streams')
let search = document.querySelector('.search-button')
search.addEventListener('click', function (event) {
    window.location.replace("search.html");
});
streams.addEventListener('click', function (event) {
    window.location.replace("streams.html");
});
let messages = document.querySelector('.messages-button');
messages.addEventListener('click', function (event) {
    window.location.replace("messages.html");
});