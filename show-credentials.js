function getEncryptedCredentials() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:5000/fetchEncryptedCredentials", false); // Synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
      
        var requestBody = JSON.stringify({
          userId:localStorage.getItem('userId')
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
      return json
}

function showDecryptedCredentials(){
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:5000/fetchDecryptedCredentials", false); // Synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
      
        var requestBody = JSON.stringify({
          userId:localStorage.getItem('userId')
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
      return json
    
}