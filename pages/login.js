var email =document.getElementById("email").value;
var emailvalidation = document.getElementById("emailvalidation");
var password= document.getElementById("password");
var passwordvalidation=document.getElementById("passwordvalidation");


function click(){
    var validEmailregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2})?$/
    if (!validEmailregexp.test(email)) {
        emailvalidation.innerHTML = "Please enter a valid email address.";
        emailvalidation.style.color = "red";
        return false;
      }
      if (validEmailregexp.test(email)) {
        emailvalidation.innerHTML = "Valid email address.";
        emailvalidation.style.color = "green";
      }
}

