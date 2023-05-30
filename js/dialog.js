document.addEventListener('DOMContentLoaded', () => {

    document.body.insertAdjacentHTML('beforeend', `
        <div class = "get-dialog"></div>
    `)

    
    document.querySelector('.get-dialog').addEventListener('click', () => {
        
        document.body.insertAdjacentHTML('beforeend', `
            <div class = "dialog">
                <div class = "dialog-top">
                    <div class = "close-chat" title = "Закрыть чат"></div>
                    <span class = "close-title">Напишите нам</span>
                </div>
                <div class = "dialog-body"></div>
            </div>
        `)
    })


    /*
    document.body.insertAdjacentHTML('beforeend', `
        <div class = "dialog">
            <div class = "dialog-top">
                <div class = "close-chat" title = "Закрыть чат"></div>
                <span class = "close-title">Напишите нам</span>
            </div>
            <div class = "dialog-body"></div>
        </div>
    `)*/






})