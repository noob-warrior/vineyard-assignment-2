// JavaScript for Hobby Interaction Enhancements

// Add a new hobby item to the list
function addHobby() {
    const input = document.getElementById('hobbyInput');
    const hobbyList = document.getElementById('hobbyList');

    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            hobbyList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        hobbyList.appendChild(listItem);

        // Clear the input box
        input.value = '';
    }
}

// Alert on form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Form submitted successfully!');
}

// Display current date and time in the footer
function updateFooterTime() {
    const footerTime = document.getElementById('footerTime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    footerTime.textContent = now.toLocaleDateString('en-US', options);
}

// Update the footer time every second
setInterval(updateFooterTime, 1000);

// Initialize the footer time on page load
updateFooterTime();