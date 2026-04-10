const navbarEl = document.querySelector('.navbar');
    const collapseEl = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Inisialisasi Bootstrap Collapse
    const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });

    // 1. Efek Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbarEl.classList.add('scrolled');
        } else {
            navbarEl.classList.remove('scrolled');
        }
    });

    // 2. Kontrol Menu Terbuka
    collapseEl.addEventListener('show.bs.collapse', () => {
        navbarEl.classList.add('menu-open');
    });

    collapseEl.addEventListener('hide.bs.collapse', () => {
        setTimeout(() => {
            navbarEl.classList.remove('menu-open');
        }, 400); 
    });

    // 3. Klik Link (Active State & Auto-Close)
    navLinks.forEach((link) => {
        link.addEventListener('click', function() {
            // Set Active
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Tutup otomatis di mobile
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });