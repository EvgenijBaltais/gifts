document.addEventListener('DOMContentLoaded', () => {


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