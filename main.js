//import products from "./api/products.json" assert { type: "json" };
import { showProductContainer } from "./homeProductCards.js";
// Fetch the products JSON dynamically
fetch('./api/products.json')
  .then(response => response.json())  // Convert to JSON
  .then(data => {
    const products = data;  // Assign the data to 'products'
    showProductContainer(products);  // Now it's safe to use 'products'
  })
  .catch(error => console.error('Error loading JSON:', error));  // Handle errors


  

showProductContainer(products);

