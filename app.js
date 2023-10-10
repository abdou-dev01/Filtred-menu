import menu from "./data.js";

const sectionCenter = document.querySelector(".section-center");

const btnContianer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  showProduct(menu);
  createBtn(menu);
});

function showProduct(menuItems) {
  let menuProduct = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  menuProduct = menuProduct.join("");
  sectionCenter.innerHTML = menuProduct;
}

function createBtn(btnItem) {
  const btn = btnItem.reduce(
    function (acc, cur) {
      if (!acc.includes(cur.category)) {
        acc.push(cur.category);
      }
      return acc;
    },
    ["all"]
  );

  let btnInnerHtml = btn.map(function (btnItem) {
    return `<button class="filter-btn" type="button" data-categorie="${btnItem}">${btnItem}</button>`;
  });
  btnInnerHtml = btnInnerHtml.join("");
  btnContianer.innerHTML = btnInnerHtml;

  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function (btns) {
    btns.addEventListener("click", function (e) {
      const clicked = e.currentTarget.dataset.categorie;
      const flitredMenu = menu.filter(function (item) {
        if (clicked === item.category) {
          return item;
        }
      });
      if (clicked === "all") {
        showProduct(menu);
      } else {
        showProduct(flitredMenu);
      }
    });
  });
}
