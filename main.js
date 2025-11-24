const text = "A Computer Science Undergraduate Specializing in Intelligence System"
const speed1 = 70; 
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed1);
  }
}

window.onload = type;

