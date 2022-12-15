const URL = "http://localhost:3000/items";
function fetchItems() {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(items => {
            const li = document.createElement('li');
            li.textContent = items.title;
            li.addEventListener("click", (event) => {
                event.preventDefault()
                const buttonContent = document.querySelector("button#buy-items")
                buttonContent.textContent = "Buy items"
                const title = document.getElementById("items-title");
                title.textContent = items.title;
                const category = document.getElementById("category");
                category.textContent = items.category;
                const img = document.getElementById("items-image");
                img.src = items.image;
                const rating = document.getElementById("rating");
                rating.textContent = items.rating;
                const rate = document.getElementById("rate");
                rate.textContent = items[rating][rate];
                const count = document.getElementById("count");
                count.textContent = items[rating][count];
                const description = document.getElementById("description");
                description.textContent = items.description;
                const price = document.getElementById("price");
                price.textContent = `Ksh ${items.price} only`;
                const counter = document.querySelector("div#items-counter");
                counter.textcontent = items[rating][count] - items[rating][count_sold]
            })
            document.querySelector("ul#items").appendChild(li)
            
        })
    })
}
fetchItems()
function items() {fetch(URL)
    .then(response => response.json())
    .then(data => {
        document.querySelector("h3#category").textContent = data.title
        document.querySelector("div.category").textContent = data.category
        document.querySelector("div.description").
        textContent = data.description
        document.querySelector("img#items-image").setAttribute("src" `${data.image}`)
        document.querySelector("#price").textContent = data.price
        document.querySelector("#rating").textContent = data.rating
        document.querySelector("#rate").textContent = data[rating][rate]
        document.querySelector ("ul#items").firstElementChild.remove()
        document.querySelector("div#items-counter").textContent = data[rating][count] - data[rating][count_sold]
        })
}
items()
function buyItems(){
    const button = document.querySelector("button#buy-items")
    button.addEventListener("click", function()
    {const currentLi = document.querySelector("div#items-counter")
    const number = parseInt(currentLi.textContent)

    if(number >=1){
        currentLi.textContent = currentLi.textContent-1
    }
    else {document.querySelector("button#buy-items").textContent = "Sold Out"
        alert("All items have been bought!")}

}
    
)
}
buyItems()