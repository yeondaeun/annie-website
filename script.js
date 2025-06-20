// Annie Diary Website Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
    console.log('Annie website loaded! 🎉');
    
    // Initialize all interactive features
    initFloatingElements();
    initPhoneMockups();
    initFeatureCards();
    initSteps();
    initCallButton();
    initSmoothScrolling();
});

// Floating Elements Interactions
function initFloatingElements() {
    const phoneIcons = document.querySelectorAll('.phone-icon');
    const hearts = document.querySelectorAll('.heart');
    const bubbles = document.querySelectorAll('.bubble');
    
    // Phone icons click effect
    phoneIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.background = 'rgba(255,255,255,0.5)';
            
            setTimeout(() => {
                this.style.animation = '';
                this.style.transform = '';
                this.style.background = '';
            }, 500);
        });
    });
    
    // Hearts click effect
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            // Create explosion effect
            for (let i = 0; i < 6; i++) {
                createFloatingHeart(this);
            }
        });
    });
    
    // Bubbles click effect
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            // Create pop effect
            this.style.transform = 'scale(3)';
            this.style.opacity = '0';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.opacity = '';
            }, 300);
        });
    });
}

// Create floating heart animation
function createFloatingHeart(source) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = source.getBoundingClientRect().left + 'px';
    heart.style.top = source.getBoundingClientRect().top + 'px';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartExplosion 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    // Random direction
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = -100 - Math.random() * 100;
    
    heart.style.setProperty('--random-x', randomX + 'px');
    heart.style.setProperty('--random-y', randomY + 'px');
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add heart explosion animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes heartExplosion {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--random-x), var(--random-y)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Phone Mockups Interactions
function initPhoneMockups() {
    const phoneMockups = document.querySelectorAll('.phone-mockup');
    
    phoneMockups.forEach(phone => {
        phone.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.05)';
        });
        
        phone.addEventListener('mouseleave', function() {
            if (this === phoneMockups[0]) {
                this.style.transform = 'rotate(-3deg) scale(1)';
            } else {
                this.style.transform = 'rotate(3deg) scale(1)';
            }
        });
    });
    
    // Annie avatar interaction
    const annieAvatar = document.querySelector('.annie-avatar');
    if (annieAvatar) {
        annieAvatar.addEventListener('click', function() {
            // Annie greeting animation
            this.style.animation = 'none';
            this.style.transform = 'scale(1.2) rotate(10deg)';
            
            // Show greeting message
            showTemporaryMessage('안녕하세요! Annie예요 😊', this);
            
            setTimeout(() => {
                this.style.animation = 'avatar-bounce 3s ease-in-out infinite';
                this.style.transform = '';
            }, 1000);
        });
    }
}

// Feature Cards Interactions
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 20px 60px rgba(102,126,234,0.4), 0 0 50px rgba(102,126,234,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
        
        card.addEventListener('click', function() {
            // Card flip effect
            this.style.transform = 'translateY(-15px) rotateY(180deg)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) rotateY(0deg)';
            }, 600);
        });
    });
}

// Steps Interactions
function initSteps() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        step.addEventListener('click', function() {
            // Highlight step sequence
            steps.forEach(s => s.style.opacity = '0.5');
            
            // Animate through steps
            let currentStep = 0;
            const interval = setInterval(() => {
                if (currentStep <= index) {
                    steps[currentStep].style.opacity = '1';
                    steps[currentStep].style.transform = 'rotate(0deg) scale(1.1)';
                    
                    setTimeout(() => {
                        steps[currentStep].style.transform = '';
                    }, 300);
                    
                    currentStep++;
                } else {
                    clearInterval(interval);
                    // Reset all steps
                    setTimeout(() => {
                        steps.forEach(s => s.style.opacity = '1');
                    }, 1000);
                }
            }, 500);
        });
    });
}

// Call Button Interactions
function initCallButton() {
    const callButton = document.querySelector('.call-button');
    const ctaCallButton = document.querySelector('.cta-call');
    
    if (callButton) {
        callButton.addEventListener('click', function() {
            // Simulate call animation
            this.style.animation = 'none';
            this.style.transform = 'scale(1.3)';
            this.style.background = '#45a049';
            
            showTemporaryMessage('📞 전화 연결 중...', this);
            
            setTimeout(() => {
                this.style.animation = 'call-pulse 2s infinite';
                this.style.transform = '';
                this.style.background = '';
            }, 2000);
        });
    }
    
    // CTA Call button with actual phone functionality
    if (ctaCallButton) {
        ctaCallButton.addEventListener('click', function(e) {
            // Add click effect even for tel: links
            this.style.transform = 'translateY(-12px) scale(1.05)';
            showTemporaryMessage('📞 전화앱을 실행합니다!', this);
            
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to show temporary messages
function showTemporaryMessage(message, relativeElement) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.position = 'absolute';
    messageDiv.style.background = 'rgba(0,0,0,0.8)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '10px 20px';
    messageDiv.style.borderRadius = '20px';
    messageDiv.style.fontSize = '14px';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.pointerEvents = 'none';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.opacity = '0';
    messageDiv.style.transition = 'opacity 0.3s ease';
    
    // Position relative to the element
    const rect = relativeElement.getBoundingClientRect();
    messageDiv.style.top = (rect.top + window.scrollY - 60) + 'px';
    messageDiv.style.left = (rect.left + rect.width / 2) + 'px';
    
    document.body.appendChild(messageDiv);
    
    // Fade in
    setTimeout(() => {
        messageDiv.style.opacity = '1';
    }, 100);
    
    // Fade out and remove
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 2000);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.features-section, .how-it-works, .cta-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});

// Add fadeInUp animation
const fadeInUpStyle = document.createElement('style');
fadeInUpStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInUpStyle);

// Voice wave interactive effect
function initVoiceWaves() {
    const voiceWaves = document.querySelectorAll('.voice-wave');
    
    voiceWaves.forEach(wave => {
        wave.addEventListener('click', function() {
            const bars = this.querySelectorAll('.wave-bar');
            
            // Create random wave pattern
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.transform = 'scaleY(' + (Math.random() * 3 + 1) + ')';
                    bar.style.background = '#ff6b9d';
                    
                    setTimeout(() => {
                        bar.style.transform = '';
                        bar.style.background = '';
                    }, 200);
                }, index * 50);
            });
        });
    });
}

// Initialize voice waves on load
document.addEventListener('DOMContentLoaded', initVoiceWaves);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        showTemporaryMessage('🎉 Annie가 기뻐해요! 숨겨진 기능 발견!', document.querySelector('.logo'));
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 4000);
        
        konamiCode = [];
    }
});