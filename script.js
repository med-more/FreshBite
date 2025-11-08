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

    
})