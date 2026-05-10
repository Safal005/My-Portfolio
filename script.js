    const menuIcon = document.querySelector('.mobile-menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-links a')
    
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    navLinks.forEach(link=>{
        link.addEventListener('click', ()=>{
            mobileMenu.classList.remove('active');
        })
    })