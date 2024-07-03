function handleSearch() {
    const searchInputElement = document.getElementById('search-input-field');
    const searchInputValue = searchInputElement.value;
    console.log(searchInputElement);
    loadPhone(searchInputValue);
}

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    console.log("Server Response:", res);
    const serverData = await res.json();
    displayPhone(serverData.data);
};

const displayPhone = (data) => {
    console.log(data);
    const cardContainer = document.getElementById("card-section");
    cardContainer.innerHTML = ""; // Clear previous search results

    data.forEach((phone) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
            <div class="card-image">
                <img src=${phone.image} alt="iphone-image " width="300">
            </div>
            <h3 class="card-title">${phone.phone_name}</h3>
            <p class="card-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deserunt repellendus </p>
            <div class="card-price">
                <span>$</span>
                <span id="card-item-price">999</span>
            </div>
            <div class="card-btn">
                <button class="btn">Show Details</button>
            </div>
        `;
        cardContainer.appendChild(productCard);
    });
};

