let products = [];
$(".card-button").on("click", function() {
  let id = $(this).attr("id");
  let title = $(this).attr("data-title");
  let userID = $(this).attr("data-userID");
  if ($(this).attr("data-status") === "not_added") {
    $("#add_" + id).text("remove");
    $(this).attr("data-status", "added");
    $(this).addClass("bg-warning");
    $(this).removeClass("bg-primary");
    
  } else {
    $("#add_" + id).text("add");
    $(this).attr("data-status", "not_added");
    $(this).addClass("bg-primary");
    $(this).removeClass("bg-warning");
    products.splice(products.indexOf($(this).attr("data-title")), 1);
  }
  productList();
  if (products.length === 0) {
    $("#productsInfo").text("You've got nothing in your cart.");
  } else {
    $("#productsInfo").text("");
  }
});

let productList = function () {
  $("#productContainer").empty();
  for (let i=0; i<products.length;i++) {
    let listItem = $("<li class='list-group-item'>");
    let item = products[i];
    listItem.text(item);
    $("#productContainer").append(listItem)
  }
};