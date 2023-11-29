function submitSignUpForm(firstName,lastName,signUpEmailAddress,signUpPassword,) {

  try {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/registerUser", false); // Synchronous request
    xhr.setRequestHeader("Content-Type", "application/json");
  
    var requestBody = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      emailAddress: signUpEmailAddress,
      password: signUpPassword,
    });
  
    xhr.send(requestBody);
  
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      console.log(json);
    } else {
      console.error("Error:", xhr.statusText);
    }
  } catch (error) {
    console.error('Catch block:', error);
  }  
    
}
// try {

    //     var response = fetch('http://127.0.0.1:5000/registerUser', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //     },
    //         body: JSON.stringify({ "firstName": firstName,"lastName":lastName,"emailAddress":signUpEmailAddress,"password":signUpPassword}),
    //       })
    //       .then(response => response.json())
    //       .then(json => console.log(json))
    //       .catch(error => console.error('Error:', error));

    //   } catch (error) {
    //     console.error('Catch block:', error);
    //   }