// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch API data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading text
        dataContainer.innerHTML = '';

        // Create a list
        const userList = document.createElement('ul');

        // Loop through users and add to list
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run function after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
