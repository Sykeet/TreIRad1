var usersData = localStorage.getItem("users");


if (usersData) {

  var users = JSON.parse(usersData);


  for (var key in users) {
    if (users.hasOwnProperty(key)) {
      document.getElementById("output").innerHTML += key + "<br>";
    }
  }
} else {
  document.getElementById("output").innerHTML = "No data in localStorage.";
}