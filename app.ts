
const totalPrice = document.querySelector("#total-price")
const cart:any = []
document.querySelectorAll(".add-to-cart").forEach((button)=>{
    button.addEventListener("click", ()=>{
        const product = button.closest("product")
        if(product){
            const name = product.getAttribute("data-name")
            const price = product.getAttribute("data-price")
            addToCart(name, price)
        }
    }
)
}
)
const addToCart = (productName: any, productPrice: any) => {
const existingCard = cart.find((item:any) => item.name === productName)
if(existingCard){
    existingCard.quantity += 1
}else{
    name : productName
    price : parseFloat(productPrice)
    quantity: 1
}
updateCart()
}
const updateCart = () => {
    const cartItems = document.querySelector("#cart-items")
    if(cartItems){
        cartItems.innerHTML = ""
    }
    let total = 0;
     if (Array.isArray(cart) && cart.length > 0) {
    cart.forEach(item => {
        const list = document.createElement("list")
        list.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
        cartItems?.appendChild(list)
        total += item.price * item.quantity
    })}
if(totalPrice){
    totalPrice.textContent = `$${total.toFixed(2)}`
}
}