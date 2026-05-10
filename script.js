    const menuIcon = document.querySelector('.mobile-menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-links a')
    const header=document.querySelector('header');
    
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
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll',()=>{
        if(window.scrollY>lastScrollY && window.scrollY>100){
            header.classList.add('header-hidden');
        }
        else{
            header.classList.remove('header-hidden');
        }
        lastScrollY=window.scrollY;
    })