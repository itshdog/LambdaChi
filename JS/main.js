function closeTab(name) {
  var x = document.getElementById(name);
  x.className = "hidden";
  x.style.opacity = "0";
}

function openTab(name) {
  var x = document.getElementById(name);
  if (x.className == "hidden") {
    x.className = "";
    x.style.opacity = "1";
  } else if (x.className == "null") {
    x.className = "hidden";
    x.style.opacity = "0";
  } else if (x.className == '') {
    x.className = "hidden";
    x.style.opacity = "0";
  }
}