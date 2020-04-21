// this is for the hamburger menu to open & close the nav
const toggleHamburger = () => {
  let menu = document.getElementById("menu")

  menu.classList.toggle("hideMenu")
}


// Firebase authentication

let form = document.getElementById("signUpForm")

const signUp = (event) => {
  event.preventDefault()

  let email = event.target.email.value
  let password = event.target.password.value

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    
    if (errorCode) {
      console.log(errorMessage)
    }
  })
  .then(authUser => {
    console.log(authUser)
  })
}

form.addEventListener("submit", signUp)