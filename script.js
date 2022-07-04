// selecting html elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu/classList.remove("active");
}))

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e){
  e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if(emailValue.includes('@')) {
      //all  good
      alert('Thank you for your message');
    } else {
      alert('That does not look like a valid email adress. Please try again.')
    }


  console.log('Email: ', emailValue);
  console.log('Message: ', messageValue);
})
// attaching 'click listener'
// getting user entered values
// javascript validations

