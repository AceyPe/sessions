const email = document.getElementById("email");


function checkUser() {
    const name = document.getElementById("username").value;

    console.log(name.length)
    if (name.length <= 3)
    {
        document.getElementById("error").innerHTML ="Username can't be less than 4 characters!";
    }
    else{

        document.getElementById("error").innerHTML ="";
    }

}

const btn = document.getElementById("submit");


btn.addEventListener("click", () => {

    checkUser()
})
