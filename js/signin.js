let registration = document.querySelector('.registration');
let signin = document.querySelector('.button-sign-in');
let search = document.querySelector('.search-button');
search.addEventListener('click', function (event) {
    window.location.replace("search.html");
});
registration.addEventListener('click', function (event) {
    window.location.replace("registration.html");
})
signin.addEventListener('click', function (event) {
    window.location.replace("main.html");
})