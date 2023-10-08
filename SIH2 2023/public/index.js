firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }
})

function logout(){
    firebase.auth().signOut()
}



// image uploading youtube

 const image_input = document.querySelector("#image_input");

 var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
    })
    reader.readAsDataURL(this.files[0])
    document.getElementById("post").style.display = "contents"
})








const fileInput = document.getElementById('image_input');
fileInput.onchange = haha = async()=>{
  const selectedFile = await fileInput.files[0];
  console.log(selectedFile);
  var path = URL.createObjectURL(selectedFile);
  console.log(path)
  return path;
}










function getwindow(){
    mywindow = window.open("https://www.sih.gov.in/","","height=300px, width=500px,top=300px,left=500px");
}






