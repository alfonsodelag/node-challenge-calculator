const express = require("express");
const app = express();
const port = 3000;
const getNumber = (numbers) => {
    return [numbers.value1, numbers.value2];
};
// suma

const newVisitor = (req, res, next) => {
    const date = new Date().toLocaleString();
    // entra al objeto peticion y accesa el valor url
    const page = req.url;
    console.log("New Visitor on page " + page + " at " + date)
    // ! Todos los middleware usan "next()"
    next();
}

/* newVisitor es un middleware. 
El middleware es una funcion que se ejecutan entre la peticion y la respuesta 
Siempre que uses .use() es porque estás usando un Middleware*/
app.use(newVisitor)

app.get("/add", (req, res) => {
    const numbers = getNumber(req.query);
    const result = +numbers[0] + +numbers[1];
    res.send(result.toString());
});
// resta
app.get("/substract", (req, res) => {
    const numbers = getNumber(req.query);
    const result = +numbers[0] - +numbers[1];
    res.send(result.toString());
});
//multiplicación
app.get("/multiply", (req, res) => {
    const numbers = getNumber(req.query);
    const result = +numbers[0] * +numbers[1];
    res.send(result.toString());
});
//división
app.get("/divide", (req, res) => {
    const numbers = getNumber(req.query);
    const result = +numbers[0] / +numbers[1];
    res.send(result.toString());
});


app.listen(port, () => {
    console.log("App is running on port " + port);
});