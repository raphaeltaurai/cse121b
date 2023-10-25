export function calculateResult(mathExpression) {
    const apiUrl = "http://api.mathjs.org/v4/?expr=";
  
    fetch(apiUrl + encodeURIComponent(mathExpression))
      .then(response => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("result").innerHTML = "Result: " + data.result;
      })
      .catch(error => {
        document.getElementById("result").innerHTML = "Error: There's an issue with the API";
        console.error(error);
      });
  }