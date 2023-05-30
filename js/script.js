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

                        console.log(Object.keys(order).length)

                        Object.keys(order).length === 0 ?
                            window.localStorage.removeItem('order') :
                            window.localStorage.setItem('order', JSON.stringify(order))

                        event.target.parentElement.parentElement.remove()

                        console.log(document.querySelectorAll('.cart-item').length)

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



    if (document.querySelectorAll('.scroll-to').length) {
        
        document.querySelectorAll('.scroll-to').forEach(item => {

            item.addEventListener('click', () => {

                console.log(document.getElementById(item.getAttribute('data-scroll-to')).offsetTop)

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


function getClickedElementIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (event.target == arr[i]) return i;
	}
}