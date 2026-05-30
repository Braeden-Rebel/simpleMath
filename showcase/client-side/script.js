console.log("Oi!");

var response = await fetch("ParseInterval", {
    method: 'POST',
    body: "(5, 10]"
})

var data = await response.json();
console.log(data.valid);