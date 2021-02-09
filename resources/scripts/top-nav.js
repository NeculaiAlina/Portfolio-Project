//left-bar navigation

const topMenu = document.querySelectorAll(".top-menu .menu-item");

topMenu.forEach((li) => {
  li.addEventListener("click", function () {
    for (let i = 0; i < topMenu.length; i++) {
      topMenu[i].classList.remove("menu-hover");
    }
    li.classList.add("menu-hover");
  });
});
