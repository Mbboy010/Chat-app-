let form = document.getElementById("form");
let input = document.querySelector("input");
let button = document.getElementById("button");

let user_name = document.getElementById("user_name");





    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getDatabase,
    set,
    ref,
    push,
    child,
    
    onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app`s Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBkotrdeYch2My4nYsF0L2qNr7QY0y9Huw",
      authDomain: "chatting-14252.firebaseapp.com",
      projectId: "chatting-14252",
      storageBucket: "chatting-14252.appspot.com",
      messagingSenderId: "1066335931110",
      appId: "1:1066335931110:web:aac6d08bd3776481698927"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);


form.addEventListener("submit", function(e) {
 
 e.preventDefault();
if (!input.value) {
  return;
 }
 
 const message = document.getElementById("message").value;
 const name = user_name.value
 
 const id = push(child(ref(database), `message`)).key;
 
 set(ref(database, `message/` + id), {
  name: name,
  message: message
 })
 
 document.getElementById("message").value = "";
 
})


const newMsg = ref(database, "message/");
onChildAdded(newMsg, (data) => {
 
 let bodyContent = document.getElementById("bodyContent");
 
 if (data.val().name != user_name.value) {
  
  let receiver = document.createElement("div");
  receiver.setAttribute("class","receive-start");
  let sms_cont = document.createElement("div");
  sms_cont.setAttribute("class","sms_container");
  
  let h1_create = document.createElement("h1");
  
  h1_create.innerText = data.val().message ;
  sms_cont.appendChild(h1_create);
  h1_create.setAttribute("class","h1_create")
  receiver.appendChild(sms_cont)
  
  bodyContent.appendChild(receiver);
  
 } else {
 console.log(data.val().message);
 
 let send = document.createElement("div");
 send.setAttribute("class", "send-end");
 let sms_conting = document.createElement("div");
 sms_conting.setAttribute("class", "sms");
 let h1_create_one = document.createElement("h1");
 h1_create_one.setAttribute("class","h1_create_one");
 sms_conting.appendChild(h1_create_one);
 
 h1_create_one.innerText = data.val().message;
 
 send.appendChild(sms_conting)
 
 bodyContent.appendChild(send);
 }
 
})


let name_selet = document.getElementById("name_selet");
let save = document.getElementById("save");
let forming = document.getElementById("forming");

forming.addEventListener("submit", function (i) {
 i.preventDefault()
 
 if (user_name.value) {
  name_selet.style.top = "-100%"
 } else {
  name_selet.style.top = "0"
 }
 
 
})

