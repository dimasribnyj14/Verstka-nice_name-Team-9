let buttonChatClose = document.querySelector('.chat-modal-close');
let buttonChatOpen = document.querySelector('.chat-open');
let modalWindowChat = document.querySelector('.modal-window-chat');
function openModalWindowChat(event) {
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
    buttonChatClose.style.display = 'block'
    modalWindowChat.style.display = "flex";
    // ставим задержку для смени прозрачности потому что браузер не может обработать одновревенно
    setTimeout(
        () => modalWindow.style.opacity = 1,
        1
    )
    let windowWidth = document.body.clientWidth;
    let windowHeight = document.body.clientHeight;
    let modalWindowWidth = modalWindowChat.clientWidth;
    let modalWindowHeight = modalWindowChat.clientHeight;
    let left = windowWidth / 2 - modalWindowWidth / 2;
    let top = windowHeight / 2 - modalWindowHeight / 2;
    modalWindowChat.style.top = top + "px";
    modalWindowChat.style.left = left + "px";
}
buttonChatOpen.addEventListener('click', openModalWindowChat)
buttonChatClose.addEventListener('click', function (event) { // создаем кнопку buttonClose при нажатии на которую закривается модальное окно
    let coverdiv = document.querySelector('.cover-div');

    coverdiv.remove();
    modalWindowChat.style.display = 'none';
    buttonChatClose.style.display = 'none'
})