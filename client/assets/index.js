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

displayWishes();