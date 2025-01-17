document.addEventListener("DOMContentLoaded", () => {
  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cart = document.querySelector(".cart");

  let cartCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      cart.textContent = `🛒 Cart (${cartCount})`;

      // Optional: Notify the user
      alert("Item added to cart!");
    });
  });

  // Hero button scroll to products
  const shopNowButton = document.querySelector(".shop-now");
  const productsSection = document.querySelector(".products");

  shopNowButton.addEventListener("click", () => {
    productsSection.scrollIntoView({ behavior: "smooth" });
  });
});
