

// Toggle dropdown for mobile nav
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Product search and filter
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".card");

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  productCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const cardCategory = card.dataset.category;

    const matchesSearch = title.includes(searchText);
    const matchesCategory = category === "all" || cardCategory === category;

    card.style.display = matchesSearch && matchesCategory ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
