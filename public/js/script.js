// WhatsApp Float Animation
document.addEventListener('DOMContentLoaded', function() {
    const whatsappIcon = document.getElementById('whatsappIcon');
    const whatsappBox = document.getElementById('whatsappBox');
    const closeBtn = document.getElementById('closeWhatsappBox');
    
    // Show box after 10 seconds
    setTimeout(() => {
        whatsappBox.classList.add('show');
    }, 60000);
    
    // Toggle box on icon click
    whatsappIcon.addEventListener('click', function() {
        whatsappBox.classList.toggle('show');
    });
    
    // Close box when clicking X
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        whatsappBox.classList.remove('show');
    });
    
    // Hide box when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.whatsapp-float') && whatsappBox.classList.contains('show')) {
            whatsappBox.classList.remove('show');
        }
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle body scroll
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

// Smooth scroll para links do menu
document.querySelectorAll('nav ul li a, .mobile-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para a altura da navbar
                behavior: 'smooth'
            });
            
            // Atualiza a URL sem recarregar a página
            history.pushState(null, null, targetId);
        }
    });
});