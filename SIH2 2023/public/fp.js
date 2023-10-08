document.getElementById("forgotpassword").addEventListener("submit",(event)=>{
    event.preventDefault()
})

function forgotPass(){

    const email = document.getElementById("email").value

    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset Link Sent To Your Email Id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}