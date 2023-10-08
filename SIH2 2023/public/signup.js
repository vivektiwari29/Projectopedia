document.getElementById("signUpForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        location.replace("index.html")
    }
})

function signUp(){

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    });

}