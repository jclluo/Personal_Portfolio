const initialGreetings = ["Driven by data, inspired by results!", "Aspiring Data Scientist ready to innovate.", "Decoding complexity with advanced analytics."];
const personalStatements = ["a coder.", "a data enthusiast.", "a team player."]; // Statements continued after "I am"
const finalMessage = "Welcome to my portfolio"; // The final message to display

let currentPhase = 0;  // 0 for initial greetings, 1 for personal statements, 2 for final message
let greetingIndex = 0;
let charIndex = 0;
let isDeleting = false;

const greetingElement = document.getElementById('greeting');
const typingSpeed = 30;
const erasingSpeed = 25;
const pauseBetweenGreetings = 1500;
const pauseBeforeStatements = 2500;

function typeGreeting() {
    if (isDeleting) {
        greetingElement.innerHTML = greetingElement.innerHTML.substring(0, greetingElement.innerHTML.length - 1);
        if (greetingElement.innerHTML.length === 0) {
            isDeleting = false;
            charIndex = 0; // Reset character index
            greetingIndex++; // Move to next greeting or statement

            if (currentPhase === 0 && greetingIndex >= initialGreetings.length) {
                currentPhase = 1; // Move to personal statements
                greetingIndex = 0; // Reset index for personal statements
            } else if (currentPhase === 1 && greetingIndex >= personalStatements.length) {
                currentPhase = 2; // Move to final message
                greetingIndex = 0; // Not used in final message, but for consistency
            }
            setTimeout(typeGreeting, pauseBetweenGreetings);
            return;
        }
        setTimeout(typeGreeting, erasingSpeed);
    } else {
        if (currentPhase === 0) {
            // Type initial greetings
            if (charIndex < initialGreetings[greetingIndex].length) {
                greetingElement.innerHTML += initialGreetings[greetingIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeGreeting, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeGreeting, pauseBetweenGreetings);
            }
        } else if (currentPhase === 1) {
            // Type personal statements
            if (charIndex === 0) {
                greetingElement.innerHTML = "I am "; // Start each statement with "I am"
            }
            if (charIndex < personalStatements[greetingIndex].length) {
                greetingElement.innerHTML += personalStatements[greetingIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeGreeting, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeGreeting, pauseBetweenGreetings);
            }
        } else if (currentPhase === 2) {
            // Type final message
            if (charIndex < finalMessage.length) {
                greetingElement.innerHTML += finalMessage.charAt(charIndex);
                charIndex++;
                setTimeout(typeGreeting, typingSpeed);
            } else {
                // Stop the blinking cursor after the final message
                greetingElement.classList.remove('blinking-cursor');
            }
        }
    }
}





$(document).ready(function() {
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var imageUrl = button.attr('src'); 
        var imageAlt = button.attr('alt'); 
        var imageLink = button.attr('data-link'); 

        var modal = $(this);
        modal.find('.modal-title').text(imageAlt); 
        modal.find('.modal-body img').attr('src', imageUrl); 
        modal.find('.modal-body #imageLink').attr('href', imageLink); 
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('section');
//     const titles = document.querySelectorAll('.background-title');

//     function toggleBackgroundTitles() {
//         let currentActive = null;

//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionBottom = sectionTop + section.offsetHeight;
//             const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint of the viewport for activation

//             console.log(`Section: ${section.id}, Top: ${sectionTop}, Bottom: ${sectionBottom}, Scroll: ${scrollPosition}`); // Debugging output

//             // Check if the middle of the screen is within the section
//             if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
//                 titles[index].style.display = 'block'; // Show background title
//                 currentActive = titles[index];
//             } else {
//                 titles[index].style.display = 'none'; // Hide background title
//             }
//         });

//         console.log(`Current Active Title: ${currentActive ? currentActive.id : 'None'}`); // Debug which title is active
//     }

//     window.addEventListener('scroll', toggleBackgroundTitles);
//     toggleBackgroundTitles(); // Initial call to set up titles based on initial scroll position
// });



document.addEventListener('DOMContentLoaded', typeGreeting);
