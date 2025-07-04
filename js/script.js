
const template = document.getElementById("productTemplate");
const productList = document.getElementById("productList");

template.style.display = "none";

solarKitsProducts.forEach((product) => {
    const clone = template.cloneNode(true);

    clone.style.display = "flex";
    clone.removeAttribute("id");

    clone.querySelector("img").src = product.image;
    clone.querySelector("img").alt = product.title;
    clone.querySelector(".card-title").textContent = product.title;
    clone.querySelector(".card-desc").textContent = product.desc;

    productList.appendChild(clone);
});


const integrationTemplate = document.getElementById("integrationTemplate");
const integrationList = document.getElementById("integrationList");

integrationTemplate.style.display = "none";

integrations.forEach(integration => {
    const clone = integrationTemplate.cloneNode(true);
    clone.classList.remove("template");
    clone.removeAttribute("id");
    clone.style.display = "flex";

    clone.querySelector("img").src = integration.image;
    clone.querySelector("img").alt = integration.title;
    clone.querySelector("h2").textContent = integration.title;
    clone.querySelector("p").textContent = integration.desc;

    integrationList.appendChild(clone);
});
