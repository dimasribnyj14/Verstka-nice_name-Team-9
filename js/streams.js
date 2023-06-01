let search = document.querySelector('.search-button')
search.addEventListener('click', function (event) {
    window.location.replace("search.html");
});
let main = document.querySelector('.main-button');
main.addEventListener('click', function (event) {
    window.location.replace("main.html");
});
let messages = document.querySelector('.messages-button');
messages.addEventListener('click', function (event) {
    window.location.replace("messages.html");
});
let stream = document.querySelector('.friend-stream');
stream.addEventListener('click', function (event) {
    window.location.replace("stream.html");
});