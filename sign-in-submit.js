
function signInSubmit() {

  var userIdValue;

  try {
    var emailAddress = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var xhr = new XMLHttpRequest();
    var pyURL = localStorage.getItem("pythonServerURL");
    pyURL+="signIn";
    xhr.open("POST", pyURL, false); // Synchronous request
    xhr.setRequestHeader("Content-Type", "application/json");

    var requestBody = JSON.stringify({
      emailAddress: emailAddress,
      password: password,
    });

    xhr.send(requestBody);

    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      userIdValue = json['userId'];
    } else {
      console.error("Error:", xhr.statusText);
    }
  } catch (error) {
    console.error('Catch block:', error);
  }

  console.log("User ID value", userIdValue,typeof(userIdValue));

  if (userIdValue != 'None' && typeof(userIdValue) == 'number') {
    localStorage.setItem("userId",userIdValue);
    window.location.href = 'chat.html';
    return userIdValue;
  }

  return "None";

}