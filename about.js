// const button to show alert message that the form was sent
// ajout message d'alerte si tout les input field ne sont pas rempli

function toSubmit() {
    //alert("Formulaire envoyé avec succès");
    if (myform.name.value == "" || myform.name.value == null) {
        alert("name is missing");
        return false;
    }
    if (myform.email.value == "" || myform.email.value == null) {
        alert("Email adress is missing");
        return false;
    }
    if (myform.message.value == "" || myform.message.value == null) {
        alert("Message is missing");
    } else {
        alert("Form was sent successfully");
        return true;
    }



}

function validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const nameRegEx = /[a-z]/;
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameresult = nameRegEx.test(name);
    const emailresult = emailRegEx.test(email);
    if (nameresult == false) {
        alert('Alphabetical characters only');
        return false;
    }
    if (emailresult == false) {
        alert('Please enter a valid email adress')
        return false;
    }
}
//regex

//const name = document.getElementById('name');
//name = [a-z];

//const email = document.getElementById('email');
//email = [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g];

//const message = document.getElementById('message');
//message = [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g];

//let inputValue = "";

//const counting = (sum) => {verificationCountdown.innerHTML = sum +'/3';}