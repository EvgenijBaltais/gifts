document.addEventListener('DOMContentLoaded', () => {

    createChat ()

    // Функции

    function createChat () {
        document.body.insertAdjacentHTML('beforeend', `
            <div class = "get-dialog"></div>
            <div class = "dialog closed-chat">
                <div class = "dialog-top">
                    <div class = "close-chat" title = "Закрыть чат"></div>
                    <span class = "close-title">Напишите нам</span>
                </div>
                <div class = "dialog-body"></div>
            </div>
        `)
    }

    document.querySelector('.get-dialog').addEventListener('click', () => {
        showChat ()
    })

     document.querySelector('.close-chat').addEventListener('click', () => {
        closeChat ()
    })

    function addStep () {
        
    }

    function showChat () {
        document.querySelector('.dialog').classList.remove('closed-chat')
    }

    function closeChat () {
        event.target.parentElement.parentElement.classList.add('closed-chat')
    }



})