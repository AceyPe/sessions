
var body;

async function fetching(){

    const request = await fetch("https://api.restful-api.dev/objects");
    body = await request.json();
    console.log(body[0]);
}



function render() {
    fetching();
    
    
    const container = document.querySelector(".container");
    
    container.innerHTML = ` <div class="card">
                            <h2>${body[0].name}</h2>
                            <p>${body[0].id}</p>
                            </div>`

}


console.log('hello body ${}' + body + ' hello');
console.log(`hello ${5*2} hello`);