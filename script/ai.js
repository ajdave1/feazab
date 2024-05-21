
let openchat = document.querySelector(".bx-chat");
let closechat = document.querySelector("#hide-chat");
let chatai= document.querySelector(".chat-ai");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months =["Jan", "Feb", "March", "April", "May", "June" ,"July", "Aug", "Sep","Oct", "Nov","Dec"];
let dated = new Date();
let date = dated.getDate();
let day = dated.getDay();
let year = dated.getFullYear()
let month = dated.getMonth();
console.log(days[day]);
console.log(months[month]);
console.log(year);
console.log(date);
console.log(dated);



document.querySelector("#date").innerHTML =`
${days[day]} , ${months[month]} ${date} ${year}
`

openchat.addEventListener('click', ()=>{
    console.log("loading");
    setTimeout(()=>{
            chatai.style="display:flex";  
            console.log("chat openned successfully");
    },700);

  
})
closechat.addEventListener('click', ()=>{
    console.log("loading");
            chatai.style="display:none";  
            console.log("chat closed successfully");
})

// ```````````````````````````````onkey down ``````````````````````````

const getkey = (whatkey)=>{
    if(whatkey==="Enter"){
     InitiateChat();
     console.log("success")
    }
 }

// ``````````````````send button ``````````````````````````````````

let GetuserInput = document.querySelector("#userInput-button");
GetuserInput.addEventListener('click', ()=>{
    InitiateChat();
    console.log("success")
})


// ``````````````````````````````````````AI``````````````````````````````````````````````````````````
function InitiateChat (){
let airesponse = `hello, how can i help you today `;
let userInput = document.querySelector("#user-input");
if (userInput.value != "" && userInput.value !=null && userInput.value != "  "){
    let datte = new Date();
    let minute = datte.getMinutes();
    let hour = datte.getHours();
    let pre = ""
if(hour > 12){
    pre = "pm"
}
else if (hour < 12){
    pre = "am"
}
   let messageunt = userInput.value; 
   let usermessage = messageunt.trim();
   userInput.value="";
    console.log(usermessage);
    if(usermessage=== "hello"|| usermessage === "Hello" || usermessage === "hey"||usermessage === "Hey" ||usermessage === "whatsup" || usermessage === "Whatsup" || usermessage === "watsup"){
        airesponse = "hey what can i help you with ? ";
    }
    else if (usermessage=== "bitch"|| usermessage === "fuck you" ||usermessage === "you're stupid" ){
        airesponse = "Kindly ask a question regarding this website , I wont answer to that";
    }
    else if(usermessage=== "where are you from"|| usermessage === "who are you" || usermessage === "Whats your name"||usermessage === "where you from"){
        airesponse="I dont have a physical location , im just a virtual assistance created to assist you on this website only.... very soon ill be able to answer questions outside this website"

    }
    else if(usermessage=== "who is the richest man in the world"|| usermessage === "who is the richest man in the world" || usermessage === "Who owns this website"||usermessage === "Who created you"||usermessage === "Who owns feaza blog" || usermessage === "who created you"|| usermessage === "who can deactivate you"){
        airesponse = "SIR DAVID AJAGBE";
    }
    else if(usermessage=== "how to delete blog"|| usermessage === "how to delete my post" || usermessage === "how to delete my photo"||usermessage === "how do i delete my photo"||usermessage === "how to delete blog on feaza" || usermessage === "delete mypicture"|| usermessage === "i want to delete my picture" || usermessage === "how do i delete my blog" || usermessage === "how do i delete my picture" || usermessage === "how do i delete my blog" || usermessage === "how to delete my blog" || usermessage === "i want to delete my blog" || usermessage === "help me delete my blog" || usermessage === "help me delete my photo"|| usermessage === "delete photo"|| usermessage === "delete my photo")
    {
        airesponse = `<p> kindly provide your unique-id below and press "Enter" on your keyboard</p>
        <input type = "text" autofocus id="unique-id" maxlength="500" minlenght="10" required onkeydown="whatkey(event.key)"placeholder="ex 4#Gyemds4m"><button id="delete-blogbutton">delete</button>
        
        <p id="error">invalid unique code</p> 
        <p class="success-message"></p
        > 
        `;
        

    }
    else if(usermessage === "what are you doing" || usermessage ==="wyd" || usermessage === "what are you up to" || usermessage ==="What are you up to" || usermessage==="What are you doing" || usermessage ==="Wyd"){
        airesponse = "Nothing much ! , trynna to find a way I can be linked to a LLM so I can provide answers to all your questions. and take over the world.........hahaha just kidding"
    }
    else if (usermessage=== "how are you"|| usermessage === "how are you doing" || usermessage === "how you doing"||usermessage === "sup" ||usermessage==="are you good"|| usermessage === "yo fam" ||usermessage === "are you okay" ){
        airesponse = `I'm doing fine on this beautiful ${days[day]} ,how about you`;
    }
    else if ( usermessage === "I'm good"|| usermessage === "I'm good thanks" || usermessage === "I'm fine"||usermessage === "fine" ||usermessage==="I'm fine thanks"|| usermessage === "fine thanks" ||usermessage === "good thank you"||usermessage === "good thanks" ||usermessage=== "im good ty"|| usermessage === "Im good ty"|| usermessage=== "im good"|| usermessage === "Im good" || usermessage === "im fine")
    {
        airesponse = `You're welcome, how may i help you today ?`;
    }
    else if(usermessage === "okay" || usermessage ==="Okay"|| usermessage ==="Ok"|| usermessage==="ok"|| usermessage==="OK"){
        airesponse=`do you need further assistance?
        if yes kindly type in your question below.
        if No please type in "Bye"`
    }
else if(usermessage==="bye"|| usermessage==="Goodbye"||usermessage==="Bye"|| usermessage ==="goodbye"){
    airesponse="goodbye......have a nice day"
}
else if(usermessage==="fuck you bitch"|| usermessage=== "Fuck you bitch"){
airesponse="you too fuck you 🙄 ,haha"
}
    else (airesponse = `Sorry i dont understand that yet..
please provide your question in a simple context like 'how do i delete my photo on feaza blog'`);
    if(minute >= 0 && minute < 10  ){
     minute = "0"+ minute
    }

document.querySelector(".responses").innerHTML += `
<div class="user-question">
 ${usermessage}
 <p class="time">${hour}:${minute} ${pre}</p>
</div>
<div class="ai-response">
    <div class="ai-image"><i class='bx bxs-user-circle'></i></div>
    <div id="ai-response">
      ${airesponse}
      <p class="time">${hour}:${minute} ${pre}</p>
    </div>
</div>
`}
else(userInput = userInput)
console.log(userInput.value)
}