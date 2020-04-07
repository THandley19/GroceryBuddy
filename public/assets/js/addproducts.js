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
    $.post("/api/orderproducts", {
      title: title,
      UserId: userID
    }).done(function(data) {
      productList(data);
    })
  } else {
    $("#add_" + id).text("add");
    $(this).attr("data-status", "not_added");
    $(this).addClass("bg-primary");
    $(this).removeClass("bg-warning");
    products.splice(products.indexOf($(this).attr("data-title")), 1);
    $.post("/api/orderproducts/" + title, {
      UserId: userID
    }).done(function(data) {
      productList(data);
    })
  }
  if (products.length === 0) {
    $("#productsInfo").text("You've got nothing in your cart.");
  } else {
    $("#productsInfo").text("");
  }
});

let productList = function (data) {
  console.log(data);
  $("#productContainer").empty();
  for (let i=0; i<data.length;i++) {
    let listItem = $("<li class='list-group-item'>");
    let item = data[i].ProductTitle;
    listItem.text(item);
    $("#productContainer").append(listItem)
  }
};