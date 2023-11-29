function submitCredentials() {
    var subscriptionId = document.getElementById('subscriptionId').value;
    var tenantId = document.getElementById('tenantId').value;
    var clientId = document.getElementById('clientId').value;
    var clientSecret = document.getElementById('clientSecret').value
    console.log(subscriptionId, tenantId, clientId, clientSecret);
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:5000/addCredentials", false); // Synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
      
        var requestBody = JSON.stringify({
          subscriptionId: subscriptionId,
          tenantId: tenantId,
          clientId: clientId,
          clientSecret: clientSecret,
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
    return json;
}