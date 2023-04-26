const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".nav-menu__list");

if (window.innerWidth < 575) {
    menuToggle.classList.add("show");
    menuItems.style.display = "none";
}

const showMenu = document.querySelector(".menu-toggle.show");
// Create an array of menu item labels
const menuItemLabels = ["Обо мне", "Занятия", "Запись"];

showMenu.addEventListener("click", () => {
    menuToggle.classList.toggle("show");
    // Check if the new menu items already exist
    const newMenuItems = document.querySelector(".menu-items");
    if (newMenuItems) {
        // If they exist, remove them
        newMenuItems.remove();
    } else {
        // If they don't exist, create them
        const newMenuItems = document.createElement("div");
        newMenuItems.classList.add("menu-items");

        newMenuItems.style.display = "flex";
        newMenuItems.style.flexDirection = "column";
        newMenuItems.style.fontSize = "18px";
        newMenuItems.style.fontWeight = "bold";

        // Create a new div element for each menu item label
        menuItemLabels.forEach((label) => {
            const menuItem = document.createElement("div");
            menuItem.textContent = label;
            menuItem.style.marginTop = "15px";
            newMenuItems.appendChild(menuItem);
        });

        menuToggle.insertAdjacentElement("afterend", newMenuItems);
    }
});

// Add event listener to new menu items to hide them and show the sandwich menu when clicked
document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (targetElement.matches(".menu-items div")) {
        targetElement.parentElement.remove();
        menuToggle.classList.add("show");
        menuItems.style.display = "none";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 575) {
        menuToggle.classList.add("show");
        menuItems.style.display = "none";
        if (menuItemsContainer) {
            menuItemsContainer.remove();
            menuItemsContainer = null;
        }
    }
    if (window.innerWidth >= 575) {
        menuToggle.classList.remove("show");
        menuItems.style.display = "flex";
    }
});
