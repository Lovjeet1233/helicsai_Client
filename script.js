// Helics.ai Landing Page JavaScript

// Global variables
let scrollPosition = 0;
let isExpanded = false;
let featureCards = [];
let macScreen = null;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupScrollHandlers();
    setupFAQToggle();
    setupNavigation();
    setupImageFallbacks();
    hideLoadingScreen();
});

// Initialize DOM elements
function initializeElements() {
    macScreen = document.getElementById('mac-screen');
    featureCards = document.querySelectorAll('.feature-card');
    
    // Set initial positions for feature cards
    initializeFeatureCards();
}

// Hide loading screen
function hideLoadingScreen() {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
        }
    }, 2000);
}

// Initialize feature cards with simple starting positions
function initializeFeatureCards() {
    featureCards.forEach((card, index) => {
        // Simple starting position - just below viewport with reduced scale
        card.style.transform = 'translateY(100px) scale(0.8)';
        card.style.opacity = '0';
    });
}

// Setup scroll handlers for Mac screen expansion and feature animations
function setupScrollHandlers() {
    let ticking = false;
    
    // Throttled scroll handler for better performance
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Intersection Observer for feature cards - simple one-by-one animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Get the index from the data attribute or calculate it
                const allCards = Array.from(document.querySelectorAll('.feature-card'));
                const index = allCards.indexOf(entry.target);
                
                setTimeout(() => {
                    entry.target.classList.add('spiral-in');
                    createSpiralParticles(entry.target);
                }, index * 200); // Reduced delay for smoother sequence
            }
        });
    }, {
        threshold: 0.3, // Increased threshold for earlier trigger
        rootMargin: '0px 0px -50px 0px' // Reduced margin for better timing
    });
    
    featureCards.forEach(card => {
        observer.observe(card);
    });
}

// Handle scroll events for Mac screen transformation
function handleScroll() {
    scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const macSection = document.getElementById('mac-section');
    const featuresSection = document.getElementById('features');
    
    if (!macSection || !featuresSection) return;
    
    const macSectionTop = macSection.offsetTop;
    const featuresSectionTop = featuresSection.offsetTop;
    const featuresSectionBottom = featuresSectionTop + featuresSection.offsetHeight;
    
    // Calculate smooth progress for Mac screen scaling
    const expandStart = featuresSectionTop - windowHeight * 0.8;
    const expandEnd = featuresSectionTop - windowHeight * 0.2;
    const shrinkStart = featuresSectionBottom - windowHeight * 0.8;
    const shrinkEnd = featuresSectionBottom - windowHeight * 0.2;
    
    // Smooth Mac screen transformation
    if (scrollPosition < expandStart) {
        // Normal size
        setMacScreenScale(0.8);
    } else if (scrollPosition >= expandStart && scrollPosition <= expandEnd) {
        // Gradually expand
        const progress = (scrollPosition - expandStart) / (expandEnd - expandStart);
        const scale = 0.8 + (progress * 0.2); // From 0.8 to 1.0
        setMacScreenScale(scale);
        if (progress > 0.5) expandMacScreen();
    } else if (scrollPosition > expandEnd && scrollPosition < shrinkStart) {
        // Fully expanded during features
        setMacScreenScale(1.0);
        expandMacScreen();
    } else if (scrollPosition >= shrinkStart && scrollPosition <= shrinkEnd) {
        // Gradually shrink
        const progress = (scrollPosition - shrinkStart) / (shrinkEnd - shrinkStart);
        const scale = 1.0 - (progress * 0.3); // From 1.0 to 0.7
        setMacScreenScale(scale);
        if (progress > 0.7) shrinkMacScreen();
    } else {
        // Small size after features
        setMacScreenScale(0.7);
        shrinkMacScreen();
    }
    
    // Handle scroll-based feature card animations (before intersection observer triggers)
    handleScrollBasedFeatureAnimation();
}

// Set Mac screen scale smoothly
function setMacScreenScale(scale) {
    if (macScreen) {
        macScreen.style.transform = `scale(${scale})`;
        
        // Adjust video overlay opacity based on scale for better readability
        const overlay = document.querySelector('.video-overlay');
        if (overlay) {
            const opacity = Math.min(0.8, 0.3 + (scale - 0.8) * 2); // Darker when expanded
            overlay.style.background = `linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.3}) 0%, rgba(59, 7, 100, ${opacity * 0.5}) 50%, rgba(0, 0, 0, ${opacity}) 100%)`;
        }
    }
}

// Expand Mac screen to fullscreen (smooth)
function expandMacScreen() {
    if (macScreen && !macScreen.classList.contains('expanded')) {
        macScreen.classList.add('expanded');
        macScreen.classList.remove('shrunk');
        isExpanded = true;
        document.body.classList.add('mac-expanded');
    }
}

// Shrink Mac screen smaller than normal (smooth)
function shrinkMacScreen() {
    if (macScreen && !macScreen.classList.contains('shrunk')) {
        macScreen.classList.remove('expanded');
        macScreen.classList.add('shrunk');
        isExpanded = false;
        document.body.classList.remove('mac-expanded');
    }
}

// Return Mac screen to normal size (smooth)
function normalMacScreen() {
    if (macScreen) {
        macScreen.classList.remove('expanded', 'shrunk');
        isExpanded = false;
        document.body.classList.remove('mac-expanded');
    }
}

// Simplified scroll-based feature card preview animations
function handleScrollBasedFeatureAnimation() {
    const cards = document.querySelectorAll('.feature-card:not(.spiral-in)');
    
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Simple distance-based animation
        if (cardTop < windowHeight && cardTop > -rect.height) {
            const progress = Math.max(0, Math.min(1, (windowHeight - cardTop) / windowHeight));
            
            if (progress > 0.1) {
                const translateY = 100 - (progress * 100); // From 100px to 0
                const scale = 0.8 + (progress * 0.2); // From 0.8 to 1.0
                const opacity = Math.min(1, progress * 1.5); // Quick fade in
                
                card.style.transform = `translateY(${translateY}px) scale(${scale})`;
                card.style.opacity = opacity;
            }
        }
    });
}

// Create simplified particles when feature card animates in
function createSpiralParticles(card) {
    const rect = card.getBoundingClientRect();
    const particleCount = 6; // Reduced for better performance
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'spiral-particle';
        
        // Position particle at card center
        particle.style.left = (rect.left + rect.width / 2) + 'px';
        particle.style.top = (rect.top + rect.height / 2) + 'px';
        particle.style.animationDelay = (i * 0.15) + 's';
        
        // Simpler animation
        particle.style.setProperty('--particle-index', i);
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000); // Shorter duration
    }
}

// Setup FAQ toggle functionality
function setupFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Setup smooth scrolling navigation
function setupNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (if you add mobile menu functionality later)
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Update navbar appearance on scroll
    window.addEventListener('scroll', updateNavbar);
}

// Update navbar appearance based on scroll position
function updateNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    if (scrollPosition > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.3)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

// Mobile menu toggle (placeholder for future implementation)
function toggleMobileMenu() {
    // Add mobile menu functionality here
    console.log('Mobile menu toggled');
}

// Setup image fallbacks for feature screenshots
function setupImageFallbacks() {
    const images = document.querySelectorAll('.feature-preview img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Show fallback when image fails to load
            this.style.display = 'none';
            const fallback = this.nextElementSibling;
            if (fallback && fallback.classList.contains('preview-fallback')) {
                fallback.style.display = 'flex';
            }
        });
        
        img.addEventListener('load', function() {
            // Hide fallback when image loads successfully
            const fallback = this.nextElementSibling;
            if (fallback && fallback.classList.contains('preview-fallback')) {
                fallback.style.display = 'none';
            }
        });
    });
}

// Redirect to dashboard function
function redirectToDashboard() {
    // Replace with your actual dashboard URL or route
    window.location.href = './dashboard.html';
    // For React Router: window.location.href = '/dashboard';
    // For external URL: window.location.href = 'https://app.helics.ai/dashboard';
}

// Handle video loading and fallback
function setupVideoFallback() {
    const video = document.querySelector('.dna-video');
    if (video) {
        video.addEventListener('error', function() {
            console.log('Video failed to load, showing static background');
            const overlay = document.querySelector('.video-overlay');
            if (overlay) {
                overlay.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 7, 100, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)';
            }
        });
    }
}

// Utility function to throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility function to debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
function handleResize() {
    // Reset feature card positions on resize
    if (window.innerWidth <= 768) {
        featureCards.forEach(card => {
            if (!card.classList.contains('spiral-in')) {
                card.style.transform = 'translateY(100px) scale(0.9)';
            }
        });
    } else {
        initializeFeatureCards();
    }
}

// Setup resize handler
window.addEventListener('resize', debounce(handleResize, 250));

// Enhanced scroll performance using Intersection Observer for viewport detection
function setupAdvancedScrollObserver() {
    const advancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
            } else {
                entry.target.classList.remove('in-viewport');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Observe all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        advancedObserver.observe(section);
    });
}

// Initialize advanced features
document.addEventListener('DOMContentLoaded', function() {
    setupVideoFallback();
    setupAdvancedScrollObserver();
});

// Performance optimization: Pause animations when not in viewport
function optimizeAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.body.classList.add('reduced-motion');
    }
    
    // Pause/resume animations based on page visibility
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.classList.add('animations-paused');
        } else {
            document.body.classList.remove('animations-paused');
        }
    });
}

// Initialize performance optimizations
optimizeAnimations();

// Expose functions to global scope for HTML onclick events
window.redirectToDashboard = redirectToDashboard;

// Debug helpers (remove in production)
if (window.location.search.includes('debug=true')) {
    window.helicsDebug = {
        scrollPosition: () => scrollPosition,
        isExpanded: () => isExpanded,
        macScreen: () => macScreen,
        featureCards: () => featureCards,
        expandMac: expandMacScreen,
        shrinkMac: shrinkMacScreen,
        normalMac: normalMacScreen
    };
    console.log('Helics.ai Debug Mode Enabled. Use window.helicsDebug for debugging.');
}