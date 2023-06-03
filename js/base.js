let buttonClose = document.querySelector('.close-modal');
let buttonOpen = document.querySelector('.mobile-button')
let modalWindow = document.querySelector('.modal-window')
function openModalWindow(event) {
    // показывает backgrount для модального окна
    function showCover() {
        // Создаем елемент div
        let coverDiv = document.createElement('div');
        // добавляем в 
        coverDiv.classList.add('cover-div');
        // добавляем Div в документ
        document.body.append(coverDiv);
    }
    // вызываем функцию
    showCover();
    buttonClose.style.display = 'block'
    modalWindow.style.display = "flex";
    // ставим задержку для смени прозрачности потому что браузер не может обработать одновревенно
    setTimeout(
        () => modalWindow.style.opacity = 1,
        1
    )
    let windowWidth = document.body.clientWidth;
    let windowHeight = document.body.clientHeight;
    let modalWindowWidth = modalWindow.clientWidth;
    let modalWindowHeight = modalWindow.clientHeight;
    let left = windowWidth / 2 - modalWindowWidth / 2;
    let top = windowHeight / 2 - modalWindowHeight / 2;
    modalWindow.style.top = top + "px";
    modalWindow.style.left = left + "px";
}
buttonOpen.addEventListener('click', openModalWindow)
buttonClose.addEventListener('click', function (event) { // создаем кнопку buttonClose при нажатии на которую закривается модальное окно
    let coverdiv = document.querySelector('.cover-div');

    coverdiv.remove();
    modalWindow.style.display = 'none';
    modalWindow.style.opacity = 0;
    buttonClose.style.display = 'none'
})