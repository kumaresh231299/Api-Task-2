document.addEventListener('DOMContentLoaded', function () {
    //Here Dom we are accessing the html elements  
    const factContainer = document.getElementById('catFact');
    const factButton = document.getElementById('factButton');

    //Button click to get Api result.
    factButton.addEventListener('click', () => {
        fetch('https://meowfacts.herokuapp.com/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                factContainer.textContent = data.data[0];
            })
            .catch(error => {
                alert("There was a problem with the fetch operation:", error)
                factContainer.textContent = 'Failed to fetch meow fact. Please try again later.';
                
            });
    });
});
