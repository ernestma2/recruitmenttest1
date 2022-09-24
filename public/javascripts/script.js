function login(){
    var main = document.querySelector('.mainContainer');
    var login = `
    <label> Username</label>
    <input type="text" name="Username" id="username"><br>
    <label> Password</label>
    <input type="text" name="Password" id="password"><br>
    <button onclick="handleLogin()"> Submit</button>
    <button onclick="back()"> Back </button>
    `

    main.innerHTML = login;
}

function back(){
    var main = document.querySelector('.mainContainer');
    var original = `        <button onclick="login()">Login</button>
    <button onclick="Register()"> Regsiter</button>`
    main.innerHTML = original;
}

async function handleLogin(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const url ='/auth/login?userName='+userName+'&password='+password;

    const response = await fetch(url);

    const json = await response.json();
    console.log(json)

    if(json.success===true){
        alert('Logged In')
    }else{
        alert(json.error)
    }


}

function Register(){
    var main = document.querySelector('.mainContainer');

    var loginForm = `
    <h1> Registrartion Form </h1>
    <label id="userLabel"> Username </label>
    <input type="text" name="Username" id="username"><br>
    <label> Password </label>
    <input type="text" name="Password" id="password"><br>
    <button onclick="handleRegister()"> Register </button>
    <button onclick="back()"> Back </button>
    `
    main.innerHTML = loginForm
}

function handleRegister(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // CREATES XMLHTTP OBJECT for communicating with the backend
    var xhttp = new XMLHttpRequest();
    const backendUrl ='/auth/register?userName='+userName+'&password='+password;

    console.log(backendUrl)

    xhttp.open("GET", backendUrl, true);
    xhttp.send();

    // The code when we get the response from backend
    xhttp.onreadystatechange = () => {
        if (xhttp.status == 200 && xhttp.readyState == 4){
            var response = xhttp.responseText;
            //  we will write below after doing backend
            if (response === 'Success'){
                document.querySelector('.Success').innerText = "Register Successful";
            }
            else {
                document.querySelector('.Success').innerText = "Register Failure";
            }
        }
    }
}