async function getWishes() {

    // Reach out to the API
    const response = await fetch("http://localhost:3000/wishes");

    // Extract the wishes data from the response
    const wishes = await response.json();

    // Return the data
    return wishes;
};

async function displayWishes() {

    // Get the wishes data
    const wishes = await getWishes();

    // Get a reference for list-of-wishes
    const listOfWishes = document.getElementById("list-of-wishes");

    for (wish of wishes) {

        const element = document.createElement("li");
        element.textContent = wish["name"] + ": " + wish["wish"];
        listOfWishes.appendChild(element);

    }
}   

async function createWish(e) {

    e.preventDefault();

    // Extract the data into an object
    const data = {
        name: e.target.name.value,
        wish: e.target.wish.value
    }

    // Set the options for the fetch request
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    // Make a fetch request sending the data
    const response = await fetch("http://localhost:3000/wishes", options);

    if (response.status == 201) {
        alert("Current wish created");
        window.location.reload();
    }
}

displayWishes();

const form = document.getElementById('create-wish');
form.addEventListener('submit', createWish);