let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const companiesDOM = document.querySelector(".companies");

function displayProducts() {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h5>Sorry, no such product!</h5>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
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
displayProducts();

// text filter
form.addEventListener("keyup", () => {
  // keyup fired when key released
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// display buttons
function displayButtons() {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `
        <buton class="company-btn" data-id='${company}'>${company}</buton>
        `;
    })
    .join("");
}
displayButtons();

companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
      displayProducts();
    } else {
      filteredProducts = products.filter(
        (product) => product.company === el.dataset.id
      );
      displayProducts();
    }
    searchInput.value = "";
    displayProducts();
  }
});
