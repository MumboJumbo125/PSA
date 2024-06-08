var firebaseConfig = {
      apiKey: "AIzaSyAcTu41otIRy2K3P9JUFVeeeDkgkxiOIRM",
      authDomain: "a-problem-solving-app.firebaseapp.com",
      databaseURL: "https://a-problem-solving-app-default-rtdb.firebaseio.com",
      projectId: "a-problem-solving-app",
      storageBucket: "a-problem-solving-app.appspot.com",
      messagingSenderId: "1072962732514",
      appId: "1:1072962732514:web:9e05ddac841de278c5f9bb",
      measurementId: "G-NWFTK0XDLT"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "psa_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});

}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "psa_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location()
}