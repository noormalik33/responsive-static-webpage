// Wait for page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Button click functionality
    const clickButton = document.getElementById('clickButton');
    const message = document.getElementById('message');
    
    clickButton.addEventListener('click', function() {
        message.textContent = 'Hello! You clicked the button!';
        message.className = 'success';
    });
    
    // Form submission functionality
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing page
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const messageText = document.getElementById('messageText').value;
        
        // Basic validation
        if (name && email && messageText) {
            // Success message
            formResult.textContent = 'Thank you, ' + name + '! Your message has been sent.';
            formResult.className = 'success';
            
            // Clear form
            contactForm.reset();
        } else {
            // Error message
            formResult.textContent = 'Please fill in all fields.';
            formResult.className = 'error';
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Smooth scroll to section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple input validation
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            // Remove error styling when user starts typing
            if (this.value.trim() !== '') {
                this.style.borderColor = '#007bff';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });
    
    // Change button text on hover
    clickButton.addEventListener('mouseenter', function() {
        this.textContent = 'Click Now!';
    });
    
    clickButton.addEventListener('mouseleave', function() {
        this.textContent = 'Click Me!';
    });
    
});