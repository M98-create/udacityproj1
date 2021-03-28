

async function handleSubmit(event) {
    event.preventDefault();
    let urltext = document.getElementById("url").value;
    if (Client.checkURL(urltext)) {
        try {
          
          let butsub = document.getElementById("butsub");
          
          
          butsub.disabled = true;
         
          const callapi = await fetch(`http://localhost:8081/scanurl/${urltext}`);
          const apiResponse = await callapi.json();
          
          document.getElementById("Allsentiments").innerHTML = `<table>
          <tr><td>Sentiment</td><td>Result</td></tr>
          <tr><td>Agreement:</td><td>${apiResponse.agreement.toLowerCase()}</td></tr>
          <tr><td>Subjectivity:</td><td>${apiResponse.subjectivity.toLowerCase()}</td></tr>
          <tr><td>Confidence:</td><td>${apiResponse.confidence}</td></tr>
          <tr><td>Irony:</td><td>${apiResponse.irony.toLowerCase()}</td></tr>
          <tr><td>Score Tag:</td><td>${apiResponse.score_tag.toLowerCase()}</td></tr>
          </table>`;
          submitBtn.disabled = false;
    } catch (err) {
      
      butsub.disabled = false;
      
      
      
    }
  } else {
   
    alert("Invalid URL, please enter a valid one.");
    
   
}}
export{handleSubmit} 