function checkfname() 
{
    var isName = /^[a-zA-Z]+$/;
    let fnameValue = document.getElementById("firstname")
    if (fnameValue.value.trim() === "") {
        setError(fnameValue, "FirstName required");
    }
    else if (!isName.test(fnameValue.value.trim())) {
        setError(fnameValue, 'Name cannot be a numbers or special characters');
    }
    else {
        setSuccess(fnameValue);
    }
}

function checklname() 
{
    var isName = /^[a-zA-Z]+$/;
    let LnameValue = document.getElementById("lastname")
    if (LnameValue.value.trim() === "") {
        setError(LnameValue, "Lastname Required");
    }
    else if (!isName.test(LnameValue.value.trim())) {
        setError(LnameValue, 'Name cannot contain numbers or special characters');
    }
    else {
        setSuccessFor(LnameValue);
    }
}

function checkpassword() 
{
    var isPassword = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,20}$/;
    let cpasswordValue = document.getElementById("newpassword")
    if (cpasswordValue.value.trim() === "") {
        setError(cpasswordValue, " password Required");
    }
    else if (!isPassword.test(cpasswordValue.value.trim())) {
        setError(cpasswordValue, 'Password should only contain 8-20 characters and contains combination of uppercase and lowercase');
    }
    else {
        setSuccess(cpasswordValue);
    }
}
function checkemail() 
{
    var isMail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let mailValue = document.getElementById("email");
    if (mailValue.value.trim() === '') {
        setError(mailValue, 'Email Required');
    }
    else if (!isMail.test(mailValue.value.trim())) {
        setError(mailValue, 'Email ID is not valid');

    }
    else {
        setSuccess(mailValue);
    }
}
function checkbio() 
{
    let addValue = document.getElementById("bio")
    if (addValue.value.trim() === "") {
        setError(addValue, "Please write something");
    }
    else {
        setSuccess(addValue);
    }
}

function checkaccount(){
    var getSelectedValue = document.querySelector('input[name="accounttype"]:checked');   
    if(getSelectedValue !== null) {   
        setSuccess(getSelectedValue) ;  
    }else{  
            setError(getSelectedValue,"Nothing selected");  
} 
}
function Validate() {
    var ddlFruits = document.getElementById("referrer").value;
    if (ddlFruits === "0") {
        //If the "Please Select" option is selected display error.
    
       setError(ddlFruits,"Select Any option");
    }
    else 
    {
        setSuccess(ddlFruits);
    }
}
function fileValidation() {
    var fileInput = document.getElementById('profilepicture');
     
    var filePath = fileInput.value;
 
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
    else
    {
     
        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(
                    'imagePreview').innerHTML =
                    '<img src="' + e.target.result
                    + '"/>';
            };
             
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}
function validateTerms()
{
    const checked = document.querySelector('#termsandconditions:checked');
    if(checked !== null )
    {
        
        setError(checked,"Agree Mandatory");
    }
    else{
        setSuccess(checked);
    }
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
    checkfname();
    checklname();
    checkpassword();
    checkemail();
    checkbio();
    validateTerms();
    checkaccount();
    Validate();
    fileValidation();
}