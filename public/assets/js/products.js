$("#productSearch").on("click", function(event) {
  
  var product = $("#searchValue").val().trim();
  event.preventDefault();
  console.log('hello');
  
  $(".products_container").empty();

  // $.ajax("/api/products/" + product, {
  //   type: "GET",
  // }).then(
  //   function(res) {
  //     $(".products_container").empty();

  //     console.log(res);
  //     // location.reload();
  //   }
  // );
});