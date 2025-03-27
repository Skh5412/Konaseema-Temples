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