console.log("in the cart");

window.onload = () => {
  const data = localStorage.getItem("cart");
  if (data) {
    const cartArr = JSON.parse(data);
    loadCartList(cartArr);
    totalCost();
  }
};

function loadCartList(products) {
  // loop through the cart
  products.forEach((product) => {
    // get container
    const list = document.getElementById("list");

    // create Element
    let cartItem = createCartItem(product);

    // appaend to container
    list.appendChild(cartItem);
  });
}

// change Qyantity Of Items
function handleChangeQuantity(id, value) {
  const quantity = Number(value);
  const data = localStorage.getItem("cart");
  const cartArr = JSON.parse(data);
  const newCart = cartArr.map((item) => {
    if (item.id !== id) return item;
    let newItem = item;
    newItem.quantity = quantity;
    return newItem;
  });

  localStorage.setItem("cart", JSON.stringify(newCart));
  totalCost();
}
// remove items
function handleRemove(id) {
  const data = localStorage.getItem("cart");

  const cartArr = JSON.parse(data);

  const newCart = cartArr.filter((item) => item.id !== id);
  //   loadCartList(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
  location.reload();
}

/* Creaet Li for cart */
function createCartItem(item) {
  const cartItem = document.createElement("li");
  cartItem.classList.add("flex", "py-6");
  cartItem.innerHTML = `<div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img
        src="../${item.imageSrc}"
        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
        class="h-full w-full object-cover object-center"
      />
    </div>
`;

  const cartItemMain = document.createElement("div");
  cartItemMain.classList.add("ml-4", "flex", "flex-1", "flex-col");
  cartItemMain.innerHTML = ` <div>
        <div
          class="flex justify-between text-base font-medium text-gray-900"
        >
          <h3>
            <a href="${item.linkToDetails}">${item.title}</a>
          </h3>
          <p class="ml-4">Rs. ${item.price}</p>
        </div>
        <p class="mt-1 text-sm text-gray-500">Salmon</p>
      </div>`;

  const cartFotter = document.createElement("div");

  const quantity = document.createElement("input");
  quantity.type = "number";
  quantity.value = item.quantity;
  quantity.min = 1;
  quantity.classList.add("p-1", "w-fit", "mt-4", "mr-7");
  quantity.addEventListener("change", (e) =>
    handleChangeQuantity(item.id, e.target.value)
  );

  const dltBtn = document.createElement("button");
  dltBtn.innerText = "Remove";
  dltBtn.classList.add(
    "p-2",
    "bg-red-600",
    "rounded-md",
    "text-white",
    "hover:shadow-lg"
  );
  dltBtn.addEventListener("click", () => handleRemove(item.id));

  cartFotter.appendChild(quantity);
  cartFotter.append(dltBtn);
  cartItemMain.appendChild(cartFotter);
  cartItem.appendChild(cartItemMain);
  return cartItem;
}

function totalCost() {
  const data = localStorage.getItem("cart");
  products = JSON.parse(data);
  const totalCost = products.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  let totalCostElement = document.getElementById("total-cost");
  totalCostElement.innerText = totalCost;
}
