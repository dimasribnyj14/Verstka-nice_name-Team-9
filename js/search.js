let streams = document.querySelector('.streams')
streams.addEventListener('click', function (event) {
    window.location.replace("streams.html");
});
let main = document.querySelector('.main-button');
main.addEventListener('click', function (event) {
    window.location.replace("main.html");
});
let messages = document.querySelector('.messages-button');
messages.addEventListener('click', function (event) {
    window.location.replace("messages.html");
});