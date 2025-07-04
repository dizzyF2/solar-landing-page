
const template = document.getElementById("productTemplate");
const productList = document.getElementById("productList");

template.style.display = "none";

products.forEach((product) => {
    const clone = template.cloneNode(true);

    clone.style.display = "flex";
    clone.removeAttribute("id");

    clone.querySelector("img").src = product.image;
    clone.querySelector("img").alt = product.title;
    clone.querySelector(".card-title").textContent = product.title;
    clone.querySelector(".card-desc").textContent = product.desc;

    productList.appendChild(clone);
});
