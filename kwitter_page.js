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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name")

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }
  function getData()
  {
    firebase.database().ref("/"+room_name).on('value', function(snapshot){
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if(childKey != "purpose"){
            firebase_message_id = childKey;
            message_data = childData;
name = massage_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";

message_with_tag = "<h4 class='massage_h4'>" + massage + "</h4>";
like_button ="<button class='btn bnt-warning' id="+firebase_message_id+" value="+ like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtidas: "+ like +"</span></button><hr>";
row = name_with_tag + massage_with_tag + span_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

        }
    });   
    });
  }

  getData();
  function updateLike(message_id){
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({
      like : updated_Like
    });
  }

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }









