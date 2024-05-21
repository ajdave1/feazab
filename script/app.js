let switchModebtn= document.querySelector(".switch-mode");
let body = document.body;
let upload = document.querySelector(".upload");
switchModebtn.addEventListener('click', ()=>{
    if(body.classList.contains("darkmode"))
    {body.classList.remove("darkmode");
}
    else (body.classList.add("darkmode"))
})
let displayUpload = document.querySelector("#upload-btn");

let closeupload = document.querySelector(".upload-cancel");
displayUpload.addEventListener("click", ()=>{
    console.log("clicked")
   upload.style="top:0";
})

closeupload.addEventListener("click", ()=>{
   upload.style="top:-1200px";
})
let uploadProfile = document.querySelector("#profile-upload");
let profilePicture = document.getElementById("profile-picture");
uploadProfile.onchange = ()=>{
    profilePicture.src= URL.createObjectURL(uploadProfile.files[0])

}
let uploadblog = document.querySelector("#image-blog");
let blogImage = document.getElementById("blog-image-uploaded")
uploadblog.onchange =()=>{
    blogImage.src= URL.createObjectURL(uploadblog.files[0]);
}
let likeb = document.querySelector("#like-button");
let disbtn = document.querySelector("#dislike-button");
let Posts = [];

let addPost = document.querySelector("#save");
let profileimage = document.querySelector("#profile-picture");
let profilename = document.querySelector("#name");
let blogimagenow = document.querySelector("#blog-image-uploaded");
let blogtext= document.querySelector("textarea");

/////////display
let blogimagescreen= document.querySelector("#blog-image");
let profilepicscreen = document.querySelector("#profile-pic");
let profilenamescreen = document.querySelector(".profile-name")
let blogtextscreen = document.querySelector("#blog-text");

addPost.addEventListener("click", ()=>{
    if(profilename.value !="" && blogimagenow.src!="/assets/upload.png" )
    { Posts.push({
        name:profilename.value,
        profile:profileimage.src,
        blog:blogimagenow.src,
        text:blogtext.value,
    }); 
    localStorage.setItem("POSTS",JSON.stringify(Posts));
    console.log(localStorage.getItem("POSTS"));
    document.querySelector("#save").innerHTML= "Saved!"; 
    document.querySelector(".error-screen").innerHTML=""
    setInterval(()=>{
 document.querySelector("#save").innerHTML= "Save";


    },3000)}

    else(
        document.querySelector(".error-screen").innerHTML="Kindly type your name and upload a photograph"
    )
  
    })
    

  document.querySelector("#upload-button").addEventListener('click', function(){
  console.log(Posts)


    for(let i = 0; i <= Posts.length; i++)
  {
     document.querySelector("#blogs").innerHTML+= `
    <div class="card">
    <div class="profile-info">
    <div class="profile-pic"><img src="${Posts[i].profile}" id="profile-pic"></div>
   <div class="profile-name">${Posts[i].name}</div>
</div>
<div class="card-image"><img src="${Posts[i].blog}" id="blog-image"></div>
<div class="caption">
    <p>${Posts[i].text}</p>
 <div class="interact">
 <div id="like"><i class="bx bx-like"></i></div>
 <div id="dislike"><i class="bx bx-dislike"></i></div>
</div> 
<div class="post-interactons">
<div class="like-count">Likes <span id="dislike-count">0</span></div>
<div class="dislike-count"> dislikes <span id="dislike-count"> 0</span></div>
</div>
</div>
</div>
    `;
    document.querySelector("#upload-button").innerHTML="uploaded !"
    setTimeout(function(){
        document.querySelector("#upload-button").innerHTML= "Upload"
    }, 3000)
     

Posts=[];
profilename.value="";
profileimage.src="/assets/profile.jpg";
blogimagenow.src="/assets/upload.png";
blogtext.value="";

}

 
 } )
 let menu = document.querySelector("#menu");
 let openMenu = document.querySelector(".open-menu");
 let closemenu = document.querySelector("#close-menu");
 closemenu.addEventListener('click', ()=>{
    menu.style="right:-260px"
    console.log("navigation menu closed")
 })
 openMenu.addEventListener('click', ()=>{
    menu.style="right:0";
    console.log("navigation menu opened")
 })
 console.log(menu);

 console.log(localStorage.getItem("POSTS"));

;
function whatkey(key){

    let sucmes = document.querySelector(".success-message");
    sucmes.style="display:block";
    sucmes.innerHTML= "Note:providing wrong or non-existing unicode-code will result to an error"

    if(key === "Enter"){   
      let error =  document.querySelector("#error")
        let uniquecode = document.querySelector("#unique-id");
        console.log(uniquecode.value);
          if ( Getvalue.length >= 9){
            uniquecode.value="";
          error.style = "display:none";
         sucmes.classList.add("success-message2");
         sucmes.innerHTML="Succesfully sent";
         setTimeout(()=>{
            sucmes.classList.remove("success-message2");
            sucmes.style="display:none"
         },2000)
         }
         else(error.style="display:block",
        sucmes.classList.remove("success-message2"), sucmes.style="display:none")
       
       

    }
    }



