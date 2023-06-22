document.addEventListener('DOMContentLoaded', () => {

    // Все по корзине товаров и добавлению в нее

    if (document.querySelector('.cart')) {

        if (window.localStorage.getItem('order')) {
            document.querySelector('.cart').classList.add('full-cart')
        }
    }

    if (document.querySelectorAll('.item-order-btn')) {

        let order = {}

        document.querySelectorAll('.item-order-btn').forEach(item => {

            order = {id:2}

            item.addEventListener('click', () => {

                window.localStorage.setItem('order', JSON.stringify(order))

                if (!document.querySelector('.full-cart')) {
                    document.querySelector('.cart').classList.add('full-cart')
                }
            })
        })
    }

    // Страница корзины

    if (document.querySelector('.cart-wrapper')) {

        // Если нет заказа в корзине

        if (!window.localStorage.getItem('order')) {

            setTimeout(() => {

                emptyCartInfo()
            }, 500)
        }

        // Если есть заказ в корзине

        let order

        if (window.localStorage.getItem('order')) {

            order = JSON.parse(window.localStorage.getItem('order'))

            setTimeout(() => {

                for (let key in order) {

                    document.querySelector('.cart-wrapper').insertAdjacentHTML('afterbegin', `
                        <div class = "cart-item">
                            <div class = "cart-id">2</div>
                            <div class = "cart-pic">2</div>
                            <div class = "cart-title">1</div>
                            <div class = "cart-weight">4</div>
                            <div class = "cart-amount">5</div>
                            <div class = "cart-plus">2</div>
                            <div class = "cart-remove">
                                <div class = "cart-close" title = "Удалить"></div>
                            </div>
                        </div>
                    `)
                }

                document.querySelector('.cart-wrapper').insertAdjacentHTML('beforeend', `
                    <div class = "cart-item-final">
                        <div class = "cart-item-info">Итого: </div>
                    </div>
                `)


                // Удаление столбца

                document.querySelectorAll('.cart-close').forEach(item => {

                    item.addEventListener('click', () => {

                        for (let key in order) {
                            order[key] == +event.target.parentElement.parentElement.querySelector('.cart-id').innerText ? delete order[key] : ''
                        }

                        Object.keys(order).length === 0 ?
                            window.localStorage.removeItem('order') :
                            window.localStorage.setItem('order', JSON.stringify(order))

                        event.target.parentElement.parentElement.remove()

                        if (!document.querySelectorAll('.cart-item').length) {

                            document.querySelector('.cart-item-final').remove()
                            document.querySelector('.cart').classList.remove('full-cart')
                            emptyCartInfo ()
                        }
                    })
                })
                document.querySelector('.cart-preloader').remove()
            }, 500)
        }


        function emptyCartInfo () {

            document.querySelector('.cart-wrapper').insertAdjacentHTML('afterbegin', `
                <p class="simply-text">В корзине пока пусто...</p>
                <a href = "/">На главную</a>
                <a href = "/catalog/">В каталог</a>
            `)
            document.querySelector('.cart-preloader') ? document.querySelector('.cart-preloader').remove() : ''
        }
    }


    // Слайдер в товаре
    

    if (document.querySelector('.glide')) {

        let duration = 400,
            icons = document.querySelectorAll('.product-icon-item'),
            glide = new Glide('.glide', {
                        type: 'carousel',
                        perView: 1,
                        keyboard: true,
                        animationDuration: duration
                    })
    
        glide.mount()

        glide.on('run', () => {

            icons.forEach(item => {
                item.classList.contains('active') ? item.classList.remove('active') : ''
            })

            icons[glide.index].classList.add('active')
        })

        document.querySelectorAll('.product-icon-item').forEach(item => {
            
            item.addEventListener('click', () => {
                console.log(event.target.getAttribute('data-glide-dir'))
                glide.go(event.target.getAttribute('data-glide-dir'))
            })
        })
    }


    // Всплывающие формы

    (function() {

        if (!document.querySelector('.top-button-ins')) return false

        document.querySelector('.top-button-ins').addEventListener('click', () => {

            let form = `<div class = "overlay">

                    <div class = "form-order">
                        <div class = "close-form"></div>
                        <p class = "form-order-title">Отправить заявку</p>
                        <p class = "form-order-subtitle">И мы свяжемся с Вами в кратчайшие сроки</p>
                        <form class = "order-form" name = "order-form">
                            <div class = "form-order-wrapper">
                                <div class = "form-order-item">
                                    <input type = "text" class = "form-order-input" name = "name" placeholder = "Ваше имя">
                                </div>
                                <div class = "form-order-item">
                                    <input type = "text" class = "form-order-input" name = "email" placeholder = "Ваш Email">
                                </div>
                                <div class = "form-order-item form-order-item-phone">
                                    <input type = "text" class = "form-order-input form-order-input-phone" name = "phone" placeholder = "Ваш телефон">
                                </div>
                                <div class = "form-order-item">
                                    <textarea class = "form-order-textarea" placeholder = "Текст сообщения"></textarea>
                                </div>

                                <div class="contact-method">
                                    <p class = "contact-method-title">Какой способ связи для Вас предпочтительнее?</p>
                                        <form name = "contact-method-form" class = "contact-method-form">
                                            <label class="contact-label">
                                                <input type="radio" name="radio" checked />
                                                <span>Телефон</span>
                                            </label>
                                            <label class="contact-label">
                                                <input type="radio" name="radio" />
                                                <span>Whatsapp</span>
                                            </label>
                                            <label class="contact-label">
                                                <input type="radio" name="radio" />
                                                <span>Telegramm</span>
                                            </label>
                                            <label class="contact-label">
                                                <input type="radio" name="radio" />
                                                <span>Не важно</span>
                                            </label>
                                        </form>
                                </div>

                                <div class = "form-order-submit">
                                    <button type = "button" class = "form-order-btn btn">Заказать!</button>
                                </div>

                                <div class = "form-order-agree">
                                    * Нажимая на кнопку "Заказать!", Вы даете согласие на обработку персональных данных
                                </div>
                            </div>
                        </form>
                    </div>
                </div>`

            document.body.insertAdjacentHTML('beforeend', form)
            body_lock()

            // Маска телефона

            let im = new Inputmask("+7 (999) 999-99-99")
                im.mask(document.querySelector('.form-order-input-phone'))

            // Отправка формы

            document.querySelector('.form-order-btn').addEventListener('click', () => {

                let form = event.target.parentElement.parentElement

                if (!form.querySelector('input[name="phone"]').inputmask.isComplete()) {console.log(88)

                    form.querySelector('input[name="phone"]').style = 'border-color: red'
                    return false
                }
            })

            // Сброс полей

            document.querySelector('.form-order-input-phone').addEventListener('click', () => {
                event.target.style = 'border-color: #000'
            })

            document.querySelector('.form-order-input-phone').addEventListener('input', () => {
                event.target.style = 'border-color: #000'
            })


            document.querySelector('.overlay').addEventListener('click', () => {

                if (event.target.classList.contains('overlay') || event.target.classList.contains('close-form')) {

                    body_unlock()
                    document.querySelector('.overlay').remove()
                }
            })
        })

    })()

    // Всплывающие формы, конец


    if (document.querySelectorAll('.scroll-to').length) {
        
        document.querySelectorAll('.scroll-to').forEach(item => {

            item.addEventListener('click', () => {

                window.scrollTo({
                    top: document.getElementById(item.getAttribute('data-scroll-to')).offsetTop,
                    behavior: 'smooth'
                })
            })
        })
    }


    // Скроллинг и фиксация меню

    let navHeight = document.querySelector('.nav').clientHeight

    document.addEventListener('scroll', () => {

        window.scrollY > navHeight ? document.querySelector('.nav').classList.add('nav-static') : document.querySelector('.nav').classList.remove('nav-static')
    })

})


function body_lock() {

    let body = document.body;
    if (!body.classList.contains('scroll-locked')) {
        let bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.classList.add('scroll-locked');
        body.style.top = "-" + bodyScrollTop + "px";
        body.setAttribute("data-popup-scrolltop", bodyScrollTop)
    }
}

function body_unlock() {
    let body = document.body;
    if (body.classList.contains('scroll-locked')) {
        let bodyScrollTop = document.body.getAttribute("data-popup-scrolltop");
        body.classList.remove('scroll-locked');
        body.style.top = "";
        body.removeAttribute("data-popup-scrolltop")
        window.scrollTo(0, bodyScrollTop)
    }
}


function getClickedElementIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (event.target == arr[i]) return i;
	}
}