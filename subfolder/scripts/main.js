document.getElementById("calculate").addEventListener("click", function() {
    var mathExpression = document.getElementById("math").value;
    giveResult(mathExpression, "http://api.mathjs.org/v4/?expr=", "There's an issue with the API");
});