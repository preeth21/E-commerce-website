//import app,{db} from "../database";

let productListContainer = document.getElementById("productListContainer");
let searchInputItem = document.getElementById("searchInput");
let searchButtonItem = document.getElementById("searchButton");
let carouselExampleIndicatorsItem = document.getElementById("carouselExampleIndicators");
let container1Item = document.getElementById("container1");
let laptopItem= document.getElementById("lap1");
let clothesItem=document.getElementById("clt");
let bookItem=document.getElementById("book");
let mobileItem=document.getElementById("mob");

searchInputItem.addEventListener("keydown", function(event){

    let searchedInput = event.target.value;
    if (event.key === "Enter") {
        let searchResults = productList.filter(eachUser =>
            eachUser.name.includes(searchedInput)
        );
        console.log("heollu");
        for (let product of searchResults) {
            createAndAppendProduct(product);
        }
        carouselExampleIndicatorsItem.classList.add("d-none");
        container1Item.classList.add("d-none");
    }
});

function displaySearchResults(searchResults){
    if (searchResults.length === 0) {
       console.log("No results found");

    } else {
        
        for (let result of searchResults) {
            let id = result.id;
            let name = result.name;
            let gen = result.gen;
            let core=result.core;
            let desc=result.description;
            console.log(id,name,gen);
            //displayBooks(title, imageLink, author);
        }
    }
}

function categoryItems(){
    let url="localhost:3005/laptop";
    let options={
        method:"GET"
    };

    
    //spinnerEl.classList.remove("d-none");
    //searchResultsEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
                return response.json();
        })
        .then(function(jsonData) {
                //spinnerEl.classList.add("d-none");
                //searchResultsEl.classList.remove("d-none");
                displaySearchResults(jsonData);
        })
        .catch(err =>
            console.log(err)
        ) 

}

laptopItem.addEventListener("click",categoryItems)