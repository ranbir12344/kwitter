
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyB-pfjSyfUHlE9Z6zk_lc5I3hWfssdTjdA",
      authDomain: "classtest-c1c45.firebaseapp.com",
      databaseURL: "https://classtest-c1c45-default-rtdb.firebaseio.com",
      projectId: "classtest-c1c45",
      storageBucket: "classtest-c1c45.appspot.com",
      messagingSenderId: "993809285466",
      appId: "1:993809285466:web:aa24f3b7086e744ba5f363",
      measurementId: "G-N1T5SE0HCP"
    };
    
    // Initialize Firebase
     app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=user_name;
function addRoom()
{

      room_name=document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
      });
      localStorage.setItem("addroom",room_name);
      window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name-"+ Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});
}    
getData();



function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("addroom",name);
window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}





















