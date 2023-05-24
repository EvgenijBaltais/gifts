document.addEventListener('DOMContentLoaded', () => {

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
})


function getClickedElementIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (event.target == arr[i]) return i;
	}
}