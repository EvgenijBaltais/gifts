document.addEventListener('DOMContentLoaded', () => {

    createChat ()

    // Функции

    function createChat () {
        document.body.insertAdjacentHTML('beforeend', `
            <div class = "get-dialog" ${onclick = () => showChat()}></div>
            <div class = "dialog closed-chat">
                <div class = "dialog-top">
                    <div class = "close-chat" title = "Закрыть чат" onclick = "${closeChat}"></div>
                    <span class = "close-title">Напишите нам</span>
                </div>
                <div class = "dialog-body"></div>
            </div>
        `)
    }

    function showChat () {console.log(222)
        //document.querySelector('.dialog').classList.remove('closed-chat')
    }

    function closeChat () {
        //event.target.parentElement.parentElement.classList.add('closed-chat')
    }



})