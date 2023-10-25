function giveResult(mathExpression) {
    fetch("http://api.mathjs.org/v4/" + encodeURIComponent(mathExpression))
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
            document.getElementById("result").innerHTML = "Error: There's an issue with the API";
            console.error(error);
        });
}