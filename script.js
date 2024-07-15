function generator(){
var length=12;
var characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  var password="";

  for(var i=0;i<length;i++){
    var random=Math.floor(Math.random()*characters.length);
    password+=characters[random];
  }
  document.getElementById('password').value=password;
}