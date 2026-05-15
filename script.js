    const menuIcon = document.querySelector('.mobile-menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');
    const header = document.querySelector('header');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');  


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

    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });



