function checkname()
{
    let nameinput = document.getElementById("username");
    if (nameinput.value.trim() === "") {
        setError(nameinput, "Username Required");
    }
    else {
        setSuccess(nameinput)


    }
}

function checkpwd() {
    let pwdinput = document.getElementById("password");
    if (pwdinput.value.trim() === "") {
        setError(pwdinput, "Password Required");

    }
    else {
        setSuccess(pwdinput)


    }
}
function errorcolor(){
    
}




//funcrtion are used ever where to sho error msg in <small> tag
function setError(input, message) {
    let submitbutton = document.getElementById("button")
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.className = 'smallshown';
    small.innerText = message;
    submitbutton.disabled = true

}
function setSuccess(input) {
    let submitbutton = document.getElementById("button")
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.className = "smallhidden"
    small.innerHTML = ""
    submitbutton.disabled = false
}
//till here
function checkvalidation() {
    checkname();
    checkpwd();
}