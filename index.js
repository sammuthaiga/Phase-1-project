 $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {                
       $(".header").removeClass("active");
    }
});




const URL = "http://localhost:3000/items";

function fetchItems() {
fetch(URL)
.then((response) => response.json())
.then((data) => {
    data.forEach(items => {
        const li = document.createElement("li");
        li.textContent = items.title;
        li.addEventListener("click", (event) => {
            event.preventDefault()
            const buttonContent = document.querySelector("button#buy-items")
            buttonContent.textContent = "Buy items"
            const title = document.getElementById("currentItems");
            title.textContent = items.title;
            const img = document.getElementById("item-pic");
            img.src = items.image;
            const category = document.getElementById("category");
            category.textContent = items.category;
            const description = document.getElementById("description");
            description.textContent = items.description;
            const rate = document.getElementById("rate");
            rate.textContent = items.rate
            // const count = document.getElementById("count");
            // count.textContent = items.count - items_sold

               const count = document.querySelector("div#items-counter");
         count.textContent = items.count - items.count_sold
        
         document.querySelector("ul#items").appendChild(li)
 
            
        })
        document.querySelector("ul#items").appendChild(li)
    });
})
}
fetchItems()
function allItems() {
    fetch(URL)
    .then((response) => response.json())
    .then ((data) => {
        document.querySelector("items").textContent = data.title
        document.querySelector("#description").textContent =
        data.description
        document.querySelector("#item-pic").setAttribute("src", `${data.image}`)
        document.querySelector("#category").textContent = data.category
        document.querySelector("#rating").textContent = data.rating
        document.querySelector("#rate").textContent = data.rate
        document.querySelector("#count").innerHTML = data.count 
        document.querySelector("ul#items").firstElementChild.remove()

         //document.querySelector("div#count").textcontent = data.count - data.count_sold

         document.querySelector("div#items-counter").textContent = data.count - data.items_sold
       
        
    })
}
allItems()

function buyItem() {
    const button =document.querySelector("button#buy-items")
    button.addEventListener("click", function(){
        const currentLi = document.querySelector("div#count")
        const number = parseInt(currentLi.textContent)

        if(number >=1){
            currentLi.textContent = currentLi.textContent -1
        }
        else{document.querySelector("button#buy-items").textContent = "Sold Out"
            alert("All items have been bought!")}
    })
}
buyItem()



     const form = document.getElementById("forPost");
     form.addEventListener('submit', function (e){
         e.preventDefault()
        
    fetch(URL, {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            title : "men's shoes",
            price : "65",
            description : "black leather",
            category : "men's clothing",
            image : "",
            rate : "6",
            count : "29"
            
        })
    }).then(response => {
        return response.json
    }).then((data) => {
        
            
          /*   document.querySelector("#forPost").textContent = data.form */

            data.title = document.getElementById('#title').value
            data.price = document.getElementById('#price').value
            data.description = document.getElementById('#category').value
            data.image = document.getElementById('#image-url').value
            data.rate = document.getElementById('#rate').value
            data.count = document.getElementById('#count').value  
        }) 
        .catch(error => console.log(error ))

    })


    let post= document.getElementById("post");
    post.addEventListener("click", function(){
        let commentBoxValue= document.getElementById("comment-box").value;
     
        let li = document.createElement("li");
        let text = document.createTextNode(commentBoxValue);
        li.appendChild(text);
        document.getElementById("unordered").appendChild(li);
     
    });


/* const infoForm = document.getElementById("info-form");
infoForm.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event)

 */
/* const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");

let searchQuery;

searchBar.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && searchBar.value != "") {
        location.href = 'container1/items/li.html';
        searchQuery = searchBar.value;
    }
    
    console.log(searchQuery)
})


 

/* const items = [];
let i = 0;

while (i === electronics.length) {
    console.log(scores[i]);
    i++;
} */ 
// function getCards ()