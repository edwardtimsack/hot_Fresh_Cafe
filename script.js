const orderDetails = document.querySelector('.purchase');
const addOrderBtn = document.querySelector('.add-btn');
const removeOrder = document.querySelector('.remove-order')
const saveOrderBtn = document.querySelector('.save_order');
const totalAmountBtn = document.querySelector('.sum-total');

console.log(orderDetails);
console.log(addOrderBtn);
console.log(saveOrderBtn);
console.log(totalAmountBtn);

addOrderBtn.addEventListener("click", function(event) {
    addNewOrder(event);
});

function addNewOrder(event) {
    event.preventDefault();

    orderDetails.insertAdjacentHTML("beforeend",
        `
        <p class="order-details">Order Details</p>
        <div class="orderItem-container">
            <input type="text" placeholder="Order Item">
        </div>
        
        <div class="price-container">
            <input type="number" placeholder="Price">
        </div>

        <div class="quantity-container">
            <input type="number" placeholder="Quantity">
        </div>

        <div class="remove-container">
            <button class="remove-order">Remove Order</button>
        </div>
        `
    );
}
