let totalAmount = 0;
const totalDisplay = document.getElementById("total-amount");
const addToCartButton = document.getElementById("add-to-cart-btn");

const checkboxes = document.querySelectorAll(".bundle-checkbox");
checkboxes.forEach((box) => {
  const parentOption = box.closest(".option");
  box.addEventListener("change", () => {
    parentOption.classList.toggle("selected", box.checked);
    calculateTotal();
  });
});

function calculateTotal() {
  totalAmount = 0;
  checkboxes.forEach((box) => {
    if (box.checked) {
      const price = parseFloat(box.closest(".option").getAttribute("data-price"));
      totalAmount += price;
    }
  });
  totalDisplay.textContent = totalAmount.toFixed(2);
}

addToCartButton.addEventListener("click", () => {
  alert(`Added to cart! Total amount: ₹ ${totalAmount.toFixed(2)}`);
});
