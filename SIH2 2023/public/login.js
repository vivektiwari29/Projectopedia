document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        location.replace("index.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function Guest(){
    firebase.auth().signInAnonymously()
    .then(() => {
        alert("Click Ok To Sign In as Guest")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });  
}