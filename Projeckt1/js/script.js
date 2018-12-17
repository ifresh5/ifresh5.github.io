

menu.onclick = function myFunction() {
  var x = document.getElementById('topNav');

    if(x.className === "navs") {
      x.className += " responsive"
    } else {
      x.className = "navs"
    }
}
