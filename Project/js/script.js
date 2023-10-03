let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// push products
const products = [
  {
    id: "2231",
    title: "Web Development",
    imageSrc: "image/Webdevelopment.png",
    disc: "Course by Pradnya Manmode",
    date: "april 2022",
    linkToDetails: "roses.html",
    price: 999,
  },
  {
    id: "2f31",
    title: "Data Structure and Algorithms",
    imageSrc: "image/data-structures-and-algorithms-light-blue-concept-icon-2JA40EX.jpg",
    disc: "Course by Pradnya Manmode",
    date: "april 2022",
    linkToDetails: "DSA.html",
    price: 999,
  },
  {
    id: "7231",
    title: "Data Analysis",
    imageSrc: "image/Data Analyst.png",
    disc: "Course by Pradnya Manmode",
    date: "april 2022",
    linkToDetails: "DataAnalysis.html",
    price: 999,
  },
  {
    id: "2_031",
    title: "AI & Machine Learning",
    imageSrc: "image/AI & ML.png",
    disc: "Course by Pradnya Manmode",
    date: "april 2022",
    linkToDetails: "AI&ML.html",
    price: 999,
  },
];

const container = document.getElementById("product-container");

async function onClick(item) {
  let arr = new Array();
  item.quantity = 1;
  const products = await localStorage.getItem("cart");

  if (products) {
    arr = JSON.parse(products);
    arr.push(item);
    const cartItems = JSON.stringify(arr);
    localStorage.setItem("cart", cartItems);
    return;
  }

  arr.push(item);
  const cartItems = JSON.stringify(arr);
  localStorage.setItem("cart", cartItems);
}

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("box");
  productElement;
  productElement.innerHTML = `
  <div class="image">
            <img src="${product.imageSrc}">
          </div>
          <div class="content">
            <div class="icon">
              <a href="#"> <i class="fas fa-rupee-sign"></i> ${product.price}</a>
              <a href="#"> <i class="fas fa-shipping-fast"></i> +Shipping </a>
            </div>
            <h3> ${product.title}</h3>
            <p>
              ${product.disc}<br />
              ${product.date}
            </p>
            <a href="${product.linkToDetails}" class="btn">
              buy now <span class="fas fa-chevron-right"></span>
            </a>
          </div>
  `;

  const addToCart = document.createElement("button");
  addToCart.innerText = "Add to Cart";
  addToCart.classList.add("btn");
  addToCart.addEventListener("click", () => onClick(product));
  productElement.appendChild(addToCart);
  container.appendChild(productElement);
});
