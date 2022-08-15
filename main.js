const formElement = document.querySelector(".form")


formElement.addEventListener("submit" , event => {
    event.preventDefault()
    formElement.reset()
    
})
const logiinButtonElement = document.querySelector("#logiin")
console.log(logiinButtonElement);   

logiinButtonElement.addEventListener("click" , event => {
    console.log(inputElement.value)
    inputElement.reset
    const newLiElement = document.createElement("li")
    newLiElement.textContent = inputElement.value
    nav_listElement.appendChild (newLiElement)
    inputElement.value = null
})
const inputElement = document.querySelector("#nameInput")
const nav_listElement = document.querySelector("#nav_list")
console.log(inputElement)
