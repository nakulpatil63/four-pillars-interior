/* ==========================================================================
   Four Pillars Interior - Premium Interactive Javascript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* --------------------------------------------------
       1. Image Fallbacks
       Checks if custom generated images load properly; if they fail (e.g. offline preview), 
       they gracefully substitute high-quality Unsplash interior photos.
       -------------------------------------------------- */
    const imageTags = document.querySelectorAll('.service-img-tag, .portfolio-img-tag, #hero-bg, #about-img-main');
    
    // Explicit list of fallbacks for reference
    const fallbacks = {
        'hero_kitchen': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
        'luxury_wardrobe': 'https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=1200&q=80',
        'living_room_tv': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    };

    // Hero background image error checking
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        const testImg = new Image();
        const localPath = heroBg.style.backgroundImage.slice(5, -2).replace(/["']/g, "");
        testImg.src = localPath;
        testImg.onerror = () => {
            heroBg.style.backgroundImage = `url('${fallbacks.hero_kitchen}')`;
        };
    }

    /* --------------------------------------------------
       2. Premium Loading Screen Animation
       Simulates asset parsing, counts progress, and triggers page entrance animation.
       -------------------------------------------------- */
    const loader = document.getElementById('loader');
    const loaderProgress = document.getElementById('loader-progress');
    const loaderText = document.getElementById('loader-text');
    const loaderLogo = document.getElementById('loader-logo');
    let progress = 0;

    // Fast simulation of asset loading
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Fade out loader logo and bar
            gsap.to([loaderLogo, '#loader-progress-bar', loaderText], {
                opacity: 0,
                y: -20,
                duration: 0.5,
                stagger: 0.1,
                onComplete: () => {
                    // Slide up loader background screen
                    loader.style.opacity = '0';
                    loader.style.pointerEvents = 'none';
                    
                    // Trigger hero contents reveal
                    triggerHeroEntrance();
                }
            });
        }
        if (loaderProgress) {
            loaderProgress.style.width = `${progress}%`;
        }
    }, 120);

    /* --------------------------------------------------
       3. Interactive Custom Cursor Glow
       Smoothly moves custom cursor light behind elements.
       -------------------------------------------------- */
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorGlow, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: 'power3.out'
            });
        });

        // Hover expand indicator
        const interactives = document.querySelectorAll('a, button, select, input, textarea, .portfolio-item, .faq-btn');
        interactives.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering-interactive');
            });
            elem.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering-interactive');
            });
        });
    }

    /* --------------------------------------------------
       4. Scroll-Triggered Navigation Header & Indicators
       Toggles header design, handles back-to-top button, and page progress bar.
       -------------------------------------------------- */
    const header = document.getElementById('main-header');
    const logoText = document.getElementById('logo-text');
    const logoSub = document.getElementById('logo-sub');
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollProgressBar = document.getElementById('scroll-progress');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Progress bar percentage width
        if (scrollProgressBar && docHeight > 0) {
            const pct = (scrollTop / docHeight) * 100;
            scrollProgressBar.style.width = `${pct}%`;
        }

        // Header style toggling
        if (scrollTop > 80) {
            header.classList.add('glass-header');
            // Change text colors to coordinate with dark background
            header.classList.remove('py-6');
            header.classList.add('py-4');
        } else {
            header.classList.remove('glass-header');
            header.classList.remove('py-4');
            header.classList.add('py-6');
        }

        // Back To Top show/hide
        if (backToTopBtn) {
            if (scrollTop > window.innerHeight) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-6', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
            }
        }

        // Active section link highlighting
        let currentSectionId = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.clientHeight;
            if (scrollTop >= secTop && scrollTop < secTop + secHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-nav');
            }
        });
    });

    // Smooth Back To Top Click Action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* --------------------------------------------------
       5. Mobile Hamburger Overlay Menu
       -------------------------------------------------- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerTop = document.getElementById('burger-top');
    const burgerMid = document.getElementById('burger-mid');
    const burgerBot = document.getElementById('burger-bot');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileCta = document.getElementById('mobile-menu-cta');
    let isMobileMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        const toggleMobileMenu = () => {
            isMobileMenuOpen = !isMobileMenuOpen;
            if (isMobileMenuOpen) {
                // Open menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                
                // Animate hamburger to X
                burgerTop.style.transform = 'translateY(6px) rotate(45deg)';
                burgerMid.style.opacity = '0';
                burgerBot.style.transform = 'translateY(-6px) rotate(-45deg)';
                
                // Lock page scroll
                document.body.classList.add('overflow-hidden');

                // Animate nav links in sequentially
                gsap.to(mobileLinks, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 0.2
                });
                gsap.to(mobileCta, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.7,
                    ease: 'power3.out'
                });
            } else {
                // Close menu
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                
                // Restore hamburger lines
                burgerTop.style.transform = 'none';
                burgerMid.style.opacity = '1';
                burgerBot.style.transform = 'none';
                
                // Unlock page scroll
                document.body.classList.remove('overflow-hidden');

                // Reset links state
                gsap.set([mobileLinks, mobileCta], { opacity: 0, y: 20 });
            }
        };

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Close menu upon selecting any link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMobileMenuOpen) toggleMobileMenu();
            });
        });
    }

    /* --------------------------------------------------
       6. Hero Page Entrance Animation
       Triggers GSAP fade-in of titles and overlays upon loader completing.
       -------------------------------------------------- */
    function triggerHeroEntrance() {
        const tl = gsap.timeline();
        
        // Parallax zoom initial state
        gsap.to('#hero-bg', {
            scale: 1,
            duration: 2.5,
            ease: 'power2.out'
        });

        tl.to('#hero-tagline', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2
        })
        .to('#hero-title', {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out'
        }, '-=0.6')
        .to('#hero-sub', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.7')
        .to('#hero-buttons', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.6');
    }

    // Set initial offsets for hero items to slide cleanly in
    gsap.set('#hero-tagline', { opacity: 0, x: -30 });
    gsap.set(['#hero-title', '#hero-sub', '#hero-buttons'], { opacity: 0, y: 30 });

    /* --------------------------------------------------
       7. Statistics Animated Counters
       Updates the numbers dynamically as they scroll into view.
       -------------------------------------------------- */
    const statCounters = document.querySelectorAll('.counter-number');
    
    if (statCounters.length > 0) {
        statCounters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            
            // Set initial state
            counter.innerText = '0';

            gsap.fromTo(counter, 
                { textContent: 0 },
                {
                    textContent: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Trigger container fade-up
        gsap.to('.stat-counter-item', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '#statistics',
                start: 'top 90%'
            }
        });
    }

    /* --------------------------------------------------
       8. Portfolio Masonry Grid & Interactive Lightbox
       Handles filtering items and clicking open detailed images.
       -------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let activeItemsList = [...portfolioItems];
    let activeIndex = 0;

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button styles
            filterBtns.forEach(b => b.classList.remove('active-filter'));
            btn.classList.add('active-filter');

            const filterValue = btn.getAttribute('data-filter');

            // Hide/Show items
            portfolioItems.forEach(item => {
                const cat = item.getAttribute('data-category');
                if (filterValue === 'all' || cat === filterValue) {
                    item.style.display = 'block';
                    gsap.fromTo(item, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });
                } else {
                    item.style.display = 'none';
                }
            });

            // Update lightbox items tracking
            activeItemsList = [...portfolioItems].filter(item => {
                const cat = item.getAttribute('data-category');
                return filterValue === 'all' || cat === filterValue;
            });
        });
    });

    // Lightbox Logic
    const openLightbox = (index) => {
        activeIndex = index;
        const currentItem = activeItemsList[activeIndex];
        const imgTag = currentItem.querySelector('img');
        const titleTag = currentItem.querySelector('h4');

        if (imgTag && lightboxImg) {
            lightboxImg.src = imgTag.src;
            lightboxCaption.innerText = titleTag ? titleTag.innerText : '';
            lightbox.classList.remove('opacity-0', 'pointer-events-none');
            document.body.classList.add('overflow-hidden');
        }
    };

    const closeLightbox = () => {
        lightbox.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden');
    };

    const nextImage = () => {
        let nextIndex = activeIndex + 1;
        if (nextIndex >= activeItemsList.length) nextIndex = 0;
        openLightbox(nextIndex);
    };

    const prevImage = () => {
        let prevIndex = activeIndex - 1;
        if (prevIndex < 0) prevIndex = activeItemsList.length - 1;
        openLightbox(prevIndex);
    };

    // Attach portfolio items click handlers
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = activeItemsList.indexOf(item);
            openLightbox(index);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

    // Escape and Arrow key listener for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('opacity-0')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });

    /* --------------------------------------------------
       9. Testimonials Slider
       -------------------------------------------------- */
    const testimonialTrack = document.getElementById('testimonial-track');
    const testimonials = document.querySelectorAll('#testimonial-track > div');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotElements = document.querySelectorAll('.slider-dot');
    
    let currentSlide = 0;
    const totalSlides = testimonials.length;

    const updateSlider = (index) => {
        currentSlide = index;
        if (testimonialTrack) {
            testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Update dots
        dotElements.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('bg-gold', 'active-dot');
                dot.classList.remove('bg-white/20');
            } else {
                dot.classList.remove('bg-gold', 'active-dot');
                dot.classList.add('bg-white/20');
            }
        });
    };

    const showNextSlide = () => {
        let nextIdx = currentSlide + 1;
        if (nextIdx >= totalSlides) nextIdx = 0;
        updateSlider(nextIdx);
    };

    const showPrevSlide = () => {
        let prevIdx = currentSlide - 1;
        if (prevIdx < 0) prevIdx = totalSlides - 1;
        updateSlider(prevIdx);
    };

    if (nextBtn) nextBtn.addEventListener('click', showNextSlide);
    if (prevBtn) prevBtn.addEventListener('click', showPrevSlide);

    // Dots click listeners
    dotElements.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });

    // Auto sliding testimonial every 7 seconds
    let sliderTimer = setInterval(showNextSlide, 7000);
    const resetSliderTimer = () => {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(showNextSlide, 7000);
    };

    if (nextBtn) nextBtn.addEventListener('click', resetSliderTimer);
    if (prevBtn) prevBtn.addEventListener('click', resetSliderTimer);
    dotElements.forEach(dot => dot.addEventListener('click', resetSliderTimer));

    /* --------------------------------------------------
       10. FAQ Accordions
       -------------------------------------------------- */
    const faqBtns = document.querySelectorAll('.faq-btn');

    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.parentElement;
            const answerContainer = faqItem.querySelector('.faq-answer-container');
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';

            // Close all other open accordion items
            faqBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    const otherItem = otherBtn.parentElement;
                    const otherContainer = otherItem.querySelector('.faq-answer-container');
                    if (otherContainer) {
                        otherContainer.style.maxHeight = '0px';
                        otherContainer.style.opacity = '0';
                    }
                }
            });

            // Toggle current item
            if (isExpanded) {
                btn.setAttribute('aria-expanded', 'false');
                answerContainer.style.maxHeight = '0px';
                answerContainer.style.opacity = '0';
            } else {
                btn.setAttribute('aria-expanded', 'true');
                answerContainer.style.maxHeight = `${answerContainer.scrollHeight}px`;
                answerContainer.style.opacity = '1';
            }
        });
    });

    /* --------------------------------------------------
       11. Consultation Form Validation
       Clientside script validating fields and revealing custom success.
       -------------------------------------------------- */
    const form = document.getElementById('consultation-form');
    const formSuccess = document.getElementById('form-success');
    const resetFormBtn = document.getElementById('form-reset-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // 1. Name validation
            const nameInput = document.getElementById('form-name');
            const nameErr = nameInput.parentElement.querySelector('.form-error-msg');
            if (nameInput.value.trim() === '') {
                nameErr.classList.remove('opacity-0');
                nameInput.classList.add('border-red-500');
                isValid = false;
            } else {
                nameErr.classList.add('opacity-0');
                nameInput.classList.remove('border-red-500');
            }

            // 2. Phone validation (10 digits)
            const phoneInput = document.getElementById('form-phone');
            const phoneErr = phoneInput.parentElement.querySelector('.form-error-msg');
            const phonePattern = /^[6-9]\d{9}$/; // Indian mobile numbers check
            if (!phonePattern.test(phoneInput.value.trim())) {
                phoneErr.classList.remove('opacity-0');
                phoneInput.classList.add('border-red-500');
                isValid = false;
            } else {
                phoneErr.classList.add('opacity-0');
                phoneInput.classList.remove('border-red-500');
            }

            // 3. Email validation (Optional, validate only if filled)
            const emailInput = document.getElementById('form-email');
            const emailErr = emailInput.parentElement.querySelector('.form-error-msg');
            if (emailInput.value.trim() !== '') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value.trim())) {
                    emailErr.classList.remove('opacity-0');
                    emailInput.classList.add('border-red-500');
                    isValid = false;
                } else {
                    emailErr.classList.add('opacity-0');
                    emailInput.classList.remove('border-red-500');
                }
            } else {
                emailErr.classList.add('opacity-0');
                emailInput.classList.remove('border-red-500');
            }

            // 4. Service validation
            const serviceSelect = document.getElementById('form-service');
            const serviceErr = serviceSelect.parentElement.querySelector('.form-error-msg');
            if (serviceSelect.value === '') {
                serviceErr.classList.remove('opacity-0');
                serviceSelect.classList.add('border-red-500');
                isValid = false;
            } else {
                serviceErr.classList.add('opacity-0');
                serviceSelect.classList.remove('border-red-500');
            }

            // Form Submit Trigger
            if (isValid) {
                // Hide form layout
                form.classList.add('hidden');
                // Show custom success screen with GSAP fade-in
                formSuccess.classList.remove('hidden');
                gsap.fromTo(formSuccess, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5 });
                
                // Reset form fields
                form.reset();
            }
        });

        // Handle Reset Submission Button
        if (resetFormBtn) {
            resetFormBtn.addEventListener('click', () => {
                formSuccess.classList.add('hidden');
                form.classList.remove('hidden');
                gsap.fromTo(form, { opacity: 0 }, { opacity: 1, duration: 0.4 });
            });
        }
    }

    /* --------------------------------------------------
       12. GSAP Scroll Trigger Animations
       Fine-tuning entrance reveals for cards, texts, and sections.
       -------------------------------------------------- */
    if (typeof gsap !== 'undefined') {
        
        // 1. Why Choose Us Section Cards Reveal
        gsap.from('.why-card', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#why-choose',
                start: 'top 75%'
            }
        });

        // 2. About Section Contents Reveal
        gsap.to('#about-images', {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 70%'
            }
        });

        gsap.to('#about-content', {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 70%'
            }
        });

        // 3. Service Cards Reveal
        gsap.from('.service-card', {
            opacity: 0,
            y: 45,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#services',
                start: 'top 75%'
            }
        });

        // 4. Design Process Step Elements Reveal
        const processItems = document.querySelectorAll('.process-step-item');
        processItems.forEach(item => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // 5. Portfolio Masonry Grid Items Reveal
        gsap.from('.portfolio-item', {
            opacity: 0,
            scale: 0.95,
            y: 30,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#portfolio',
                start: 'top 75%'
            }
        });
    }

});
