const firebaseConfig = {
    apiKey: "AIzaSyBM-gOMOQgJFnG7JsRkhrLqJhoopUoOYdU",
    authDomain: "twitter-c83ec.firebaseapp.com",
    databaseURL: "https://twitter-c83ec-default-rtdb.firebaseio.com",
    projectId: "twitter-c83ec",
    storageBucket: "twitter-c83ec.appspot.com",
    messagingSenderId: "1066059751550",
    appId: "1:1066059751550:web:1da70b8e64bddd8b69382f"
  };
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Bem Vindo(a) " +user_name+"!";

  function addRoom(){
    romm_name=documet.getElementById("romm_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"ADICIONANDO NOME DA SALA"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";


  }
  function getData(){
    firebase.database().ref("/").on('value', function(snapshot)
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot)
        {
            childKey = childSnapshot.key;
            Room_names = childKey;
            row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML+=row;
        });

    });
  }
  getData();
  function redirectToRoomName (name)
  {
    localStorage.setItem("room_name", name);
    window.location = "keitter_page.html";
  }
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }