
function myFunction() {
    document.getElementById("myload").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
  
  var elements = document.getElementsByClassName("myClass");
  for (var i = 0; i < elements.length; i++) {
    setTimeout(myFunction, 4000);
  }
  