document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(){
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link){
            link.addEventListener('click', function(){
                navMenu.classList.remove('active');
            });
        });
    }


    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    if (categoryButtons.length > 0 && menuCards.length > 0) {
        categoryButtons.forEach(function(button){
            button.addEventListener('click', function(){
                categoryButtons.forEach(function(btn){
                    btn.classList.remove('active');
                });

                this.classList.add('active');

                const category = this.getAttribute('data-category');

                menuCards.forEach(function(card){
                    const cardCategory = card.getAttribute('data-category');

                    if (category === 'all'  || cardCategory === category) {
                        card.style.display = 'block';
                    } else{
                        card.style.display = 'none';
                    }
                });
            });;
        })
    }

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            const successMessage = document.getElementById('successMessage');

            let isValid = true;

            nameError.classList.remove('show');
            if (name === '') {
                nameError.classList.add('show');
                isValid = false;
            }

            emailError.classList.remove('show');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                emailError.textContent = 'L\'email est obligatoire';
                emailError.classList.add('show');
                isValid = false;
            } else if (!emailPattern.test(email)){
                emailError.textContent = 'L\'email est invalide';
                emailError.classList.add('show');
                isValid = false;
            }

            messageError.classList.remove('show');
            if (message === '') {
                messageError.classList.add('show');
                isValid = false;
            }

            if (isValid) {
                successMessage.classList.remove('show');
                setTimeout(function(){
                    successMessage.classList.add('show');

                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';

                    setTimeout(function(){
                        successMessage.classList.remove('show');
                    }, 5000)
                }, 100)
            }
        });
    }

    const scrollButton = document.querySelector('.scroll-button[href="#menu-du-jour"]');

    if (scrollButton) {
        scrollButton.addEventListener('click', function(e){
            e.preventDefault();

            const target = document.getElementById('menu-du-jour');

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
})