// Define a variable to keep track of the current slide state
let currentSlide = 'hero1';

// Function to automatically change to the next slide
function autoChangeSlide() {
    if (currentSlide === 'hero1') {
        nextSlide();
        currentSlide = 'hero2';
    } else if (currentSlide === 'hero2') {
        prevSlide();
        currentSlide = 'hero1';
    }
}

// Start the interval to automatically change the slide every 8 seconds
let intervalId = setInterval(autoChangeSlide, 7000);

// Function to stop the interval when the user interacts with the navigation buttons
function stopAutoChange() {
    clearInterval(intervalId);
}

// Function to resume automatic change after the user stops interacting with the navigation buttons
function resumeAutoChange() {
    intervalId = setInterval(autoChangeSlide, 7000);
}

// Function to change to the next slide
function nextSlide() {
    if (document.getElementById('hero1').style.display !== 'none') {
        document.getElementById('hero1').style.display = 'none';
        document.getElementById('hero2').style.display = 'block';
    } else if (document.getElementById('hero2').style.display !== 'none') {
        document.getElementById('hero2').style.display = 'none';
        document.getElementById('hero1').style.display = 'block';
    }
}

// Function to change to the previous slide
function prevSlide() {
    if (document.getElementById('hero1').style.display !== 'none') {
        document.getElementById('hero1').style.display = 'none';
        document.getElementById('hero2').style.display = 'block';
    } else if (document.getElementById('hero2').style.display !== 'none') {
        document.getElementById('hero2').style.display = 'none';
        document.getElementById('hero1').style.display = 'block';
    }
}

// Add image swapping functionality
// Select all elements with class "pro"
const myProducts = document.querySelectorAll('.fArrivals');

myProducts.forEach((product) => {
    // Main image element
    const image = product.querySelector('img');
    // Image element on hover
    const hoverImage = product.querySelector('.hover-img');

    // Add event listener on product hover
    product.addEventListener('mouseover', () => {
        if (image && hoverImage) {
            image.style.display = 'none'; // Hide the main image
            hoverImage.style.display = 'block'; // Show image on hover
        }
    });

    // Add event listener when product cursor is removed
    product.addEventListener('mouseout', () => {
        if (image && hoverImage) {
            image.style.display = 'block'; // Show the main image
            hoverImage.style.display = 'none'; // Hide the second image when cursor is removed
        }
    });
});
