let signin = document.querySelector('.signin');
let registration = document.querySelector('.registration');
let search = document.querySelector('.search-button')
search.addEventListener('click', function (event) {
    window.location.replace("search.html");
});
signin.addEventListener('click', function (event) {
    window.location.replace("signin.html");
})
registration.addEventListener('click', function (event) {
    window.location.replace("main.html");
})