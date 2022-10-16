function validateForm(){
  let x = document.getElementById("password").value;
  let y = document.getElementById("passwordConfirm").value;
  let result = x.localeCompare(y);
  let e = document.getElementById("username").value;
if(result){
    alert("passwords do not match!");
    return false;}
else if(usernames.includes(e)){
    alert("Username is already in use, please try another");
    return false;}
else{
  return true;}
  }

const usernames=["Harry", "Elizabeth", "Shana"];