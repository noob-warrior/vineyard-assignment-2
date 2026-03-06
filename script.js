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

        input.value = '';
    }
}

function submitForm(event) {
    event.preventDefault(); 
    alert('Form submitted successfully!');
}

function updateFooterTime() {
    const footerTime = document.getElementById('footerTime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    footerTime.textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateFooterTime, 1000);


updateFooterTime();
