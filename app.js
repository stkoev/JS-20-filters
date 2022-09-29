let fitlteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

function displayProducts() {
  productsContainer.innerHTML = fitlteredProducts
    .map(({ id, title, image, price }) => {
      return `
    <article class="product" data-id='${id}'>
        <img
        src="${image}"
        alt="${title}"
        class="product-img img"
        />
        <footer>
        <h5 class="product-name">${title}</h5>
        <span class="product-price">$${price}</span>
        </footer>
    </article>
`;
    })
    .join("");
}
// text filter
form.addEventListener("keyup", () => {
  // keyup fired when key released
  const inputValue = searchInput.value;
  fitlteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

displayProducts();
