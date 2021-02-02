function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var category = document.getElementById("category").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (document.getElementById("category").value == "Who are you?") {
    document.getElementById("category").focus();
    text = "Please Select A Category";
    error_message.innerHTML = text; //set focus back to control
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
}
