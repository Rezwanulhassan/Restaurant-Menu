const dishData = [
    { name: "Bangladeshi Thali", price: 9.55 },
    { name: "Indian Thali", price: 8.65 },
    { name: "Dhakia Briyani", price: 15.55 },
    { name: "Nepali Thali", price: 6.45 }
];

// Function to dynamically generate menu items
function renderMenu() {
    const menuList = document.getElementById("menu-list");

    dishData.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        li.onclick = () => addToOrder(item);
        menuList.appendChild(li);
    });
}

// Function to add an item to the order
function addToOrder(item) {
    const orderList = document.getElementById("order-list");
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    orderList.appendChild(li);
}

// Function to calculate the total
function calculateTotal() {
    const totalElement = document.getElementById("total");
    const orderList = document.getElementById("order-list");
    const items = orderList.getElementsByTagName("li");
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        const price = parseFloat(items[i].innerText.split("- $")[1]);
        total += price;
    }

    totalElement.innerText = total.toFixed(2);
}

// Call renderMenu() when the page loads
window.onload = renderMenu;
