function getSubscriptionDetails() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://44.204.237.102:8000/fetchSubscriptionDetails", false); // Synchronous request
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

function getResourceGroupDetails() {
  try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://127.0.0.1:5000/fetchResourceGroupDetails", false); // Synchronous request
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


function getAllVmDetails() {
  try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://44.204.237.102:8000/fetchAllVmDetails", false); // Synchronous request
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

function getVmDetails(vmName,rg) {
  try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://44.204.237.102:8000/fetchVmDetails", false); // Synchronous request
      xhr.setRequestHeader("Content-Type", "application/json");
    
      var requestBody = JSON.stringify({
        userId:localStorage.getItem('userId'),
        vmName:vmName,
        rg:rg

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

function getIpAddress(ipName,rg) {
  try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://44.204.237.102:8000/fetchIpAddress", false); // Synchronous request
      xhr.setRequestHeader("Content-Type", "application/json");
    
      var requestBody = JSON.stringify({
        userId:localStorage.getItem('userId'),
        ipName:ipName,
        rg:rg

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