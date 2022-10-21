/*tests the password value matches the reentered password value and then tests if the username is already in use*/
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
/*array of currently used usernames*/
const usernames=["Harry", "Elizabeth", "Shana"];

/*function to draw the words on page 2*/
function drawShape(){
  var canvas = document.getElementById('mycanvas');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillSytle="#00F";
    ctx.font='Bold 30px Sans-Serif';
    ctx.strokeText('Coding is Fun!', 40, 100);
    ctx.fillText('Coding is Fun!', 40, 100);
  }else{
    alert('Your Browser does not support this application!')
  }
}

