function validateForm(){
  let x = document.getElementById("password").value;
  let y = document.getElementById("passwordConfirm").value;
  let result = x.localeCompare(y);
  let a = usernames[0].toString();
  let b = usernames[1].toString();
  let c = usernames[2].toString();
let e = document.getElementById("username").value;
if(result){
    alert("passwords do not match!");
    return false;
  if(a.localCompare(e)||b.localCompare(e)||c.localCompare(e)){
    alert("Username is already in use, please try another");
    return false;
  }
}
  }
}

const usernames=["Harry", "Elizabeth", "Shana"];

function validateUsername(){
  