// Wait for the page to load
window.addEventListener('load', function() {
    // Hide loader after 2 seconds
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        document.querySelector('.content').style.display = 'block';
        
        // Remove loader from DOM after fade out
        setTimeout(function() {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500);
    }, 2000);
    
    // Initialize countdown
    initializeCountdown();
});

// Countdown Timer
function initializeCountdown() {
    // Set the date we're counting down to (1 month from now)
    const countDownDate = new Date();
    countDownDate.setMonth(countDownDate.getMonth() + 1);
    
    // Update the countdown every 1 second
    const countdownFunction = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in elements
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "WE'RE LIVE!";
        }
    }, 1000);
}

// Form submission
document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        // Here you would typically send the email to your server
        // For demonstration, we'll show the email being sent to no-reply@sketchhub.co.in
        alert(`Thank you for subscribing! Your email (${email}) has been sent to no-reply@sketchhub.co.in. We'll notify you when we launch.`);
        emailInput.value = '';
        
        // In a real implementation, you would use something like:
        // fetch('your-backend-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         recipient: 'no-reply@sketchhub.co.in'
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Thank you for subscribing! We'll notify you when we launch.');
        //     emailInput.value = '';
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert('There was an error with your submission. Please try again.');
        // });
    }
});

// Wait for the page to load
window.addEventListener('load', function() {
    // Hide loader after 3-5 seconds (random for natural feel)
    const min = 3000;
    const max = 5000;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    
    setTimeout(function() {
        // Fade out loader
        document.querySelector('.loader-wrapper').style.opacity = '0';
        
        // Show content
        document.querySelector('.content').style.display = 'block';
        
        // Remove loader from DOM after fade out
        setTimeout(function() {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500);
    }, delay);
});

// Enhanced flame movement effect
document.addEventListener('mousemove', function(e) {
    const flame = document.querySelector('.flame');
    const loader = document.querySelector('.loader-wrapper');
    
    if (!flame || !loader) return;
    
    const loaderRect = loader.getBoundingClientRect();
    const centerX = loaderRect.left + loaderRect.width / 2;
    const centerY = loaderRect.top + loaderRect.height / 2;
    
    // Calculate angle and distance from center
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + 
        Math.pow(e.clientY - centerY, 2)
    );
    const maxDistance = Math.max(loaderRect.width, loaderRect.height) / 2;
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    
    // Make flame lean towards mouse (more pronounced effect)
    flame.style.transform = `
        translateX(-50%) 
        rotate(${-angle * 0.3}rad)
        scale(${1 + normalizedDistance * 0.1})
    `;
    
    // Adjust flame brightness based on distance
    flame.style.filter = `
        blur(${8 - normalizedDistance * 2}px)
        brightness(${1 + normalizedDistance * 0.3})
    `;
});

// Play temple bell sound when loading starts (optional)
function playBellSound() {
    // This would require a bell sound file
    // const bell = new Audio('temple-bell.mp3');
    // bell.volume = 0.3;
    // bell.play().catch(e => console.log('Auto-play prevented:', e));
}

// Initialize
playBellSound();

// Make flowers spawn continuously
function spawnFlowers() {
    const flowersContainer = document.querySelector('.flowers');
    if (!flowersContainer) return;
    
    setInterval(() => {
        if (document.querySelector('.loader-wrapper').style.opacity !== '0') {
            const flower = document.createElement('div');
            flower.className = 'flower';
            
            // Random properties
            const size = Math.floor(Math.random() * 15) + 10;
            const left = Math.floor(Math.random() * 90) + 5;
            const duration = Math.floor(Math.random() * 20) + 15;
            const delay = Math.floor(Math.random() * 10);
            
            flower.style.width = `${size}px`;
            flower.style.height = `${size}px`;
            flower.style.left = `${left}%`;
            flower.style.top = '120%';
            flower.style.animationDuration = `${duration}s`;
            flower.style.animationDelay = `${delay}s`;
            
            flowersContainer.appendChild(flower);
            
            // Remove flower after animation completes
            setTimeout(() => {
                flower.remove();
            }, duration * 1000);
        }
    }, 1000);
}

// Start flower spawning
spawnFlowers();