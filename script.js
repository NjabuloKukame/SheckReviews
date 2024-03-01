document.getElementById('searchIcon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link
    var searchForm = document.getElementById('searchForm');
    if (searchForm.style.display === 'none' || searchForm.style.display === '') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
});

// Function to display albums based on search term
function displayAlbums(searchTerm) {
    // Convert searchTerm to lowercase for case-insensitive comparison
    searchTerm = searchTerm.toLowerCase().trim();

    // Get all card elements
    var cards = document.querySelectorAll('.card');

    // Loop through each card
    cards.forEach(function(card) {
        var artistName = card.querySelector('.artist-name').textContent.toLowerCase().trim();
        var albumName = card.querySelector('.album-name').textContent.toLowerCase().trim();

        // If the artist name or album name contains the search term, display the card, otherwise hide it
        if (artistName.includes(searchTerm) || albumName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for form submission
document.getElementById('searchFormInner').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var searchTerm = document.getElementById('searchInput').value;
    displayAlbums(searchTerm);
});

//Contact Us Html 
document.addEventListener('DOMContentLoaded', function() {
    // Form fields
    const firstNameField = document.getElementById('first-name');
    const lastNameField = document.getElementById('last-name');
    const phoneField = document.getElementById('phone');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    // Form submit button
    const submitButton = document.querySelector('button[type="submit"]');

    // Function to validate phone number format
    function validatePhoneNumber(phone) {
        // Only allow digits and hyphens
        const phoneRegex = /^[0-9-]+$/;
        if (!phoneRegex.test(phone)) {
            return false;
        }
        
        // Remove hyphens for validation
        const phoneWithoutHyphens = phone.replace(/-/g, '');

        // Validate length and format
        return phoneWithoutHyphens.length === 10;
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to check if all fields are filled
    function checkForm() {
        const firstName = firstNameField.value.trim();
        const lastName = lastNameField.value.trim();
        const phone = phoneField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        if (firstName === '' || lastName === '' || phone === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return false;
        }

        if (!validatePhoneNumber(phone)) {
            alert('Please enter a valid phone number in the format xxx-xxx-xxxx.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    // Add event listener for form submission
    submitButton.addEventListener('click', function(event) {
        if (!checkForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Add event listener for phone field to format input
    phoneField.addEventListener('input', function() {
        const formattedPhone = this.value
            .replace(/\D/g, '') // Remove non-numeric characters
            .slice(0, 10) // Limit to 10 characters
            .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Add hyphens
        this.value = formattedPhone;
    });
});










