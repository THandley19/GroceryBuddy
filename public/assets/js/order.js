$("#cancelOrder").on("click", function() {
  productPage();
});

function productPage() {
  location.replace("http://localhost:3000/products");
}
