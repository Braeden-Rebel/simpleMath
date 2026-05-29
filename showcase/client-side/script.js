console.log("Oi!");

var response = await fetch("ParseInterval", {
    method: 'POST',
    body: "(5, 10]"
})

console.log(response);