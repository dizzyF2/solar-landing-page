 /*  header mobile nav bar */

const menuBtn = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('show');
    }
});


 /*  Solar kits section */
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


 /*  Innovator section */
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


 /*  Values section */
const valueTemplate = document.getElementById("valueTemplate");
const valueList = document.getElementById("valueList");

valueTemplate.style.display = "none";

values.forEach((item) => {
    const clone = valueTemplate.cloneNode(true);
    clone.classList.remove("template");
    clone.removeAttribute("id");
    clone.style.display = "flex";

    clone.querySelector("img").src = item.icon;
    clone.querySelector("img").alt = item.title;
    clone.querySelector(".value-title").textContent = item.title;
    clone.querySelector(".value-desc").textContent = item.desc;

    valueList.appendChild(clone);
});
