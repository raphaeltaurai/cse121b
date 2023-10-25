function giveResult(mathExpression, apiEndpoint, errorMessage) {
  fetch(apiEndpoint + encodeURIComponent(mathExpression))
      .then((response) => {
          if (!response.ok) {
              throw new Error("API request failed");
          }
          return response.json();
      })
      .then((data) => {
          document.getElementById("result").innerHTML = data.result;
      })
      .catch((error) => {
          document.getElementById("result").innerHTML = "Error: " + errorMessage;
          console.error(error);
      });
}