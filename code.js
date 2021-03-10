window.addEventListener('load', function(){
  var sections = document.querySelectorAll("body > section");
  for (var i = 0; i < sections.length; i=i+2) {
    sections[i].style.top = ((i/2)*100)+ "vh";
    sections[i+1].style.top = ((i/2)*100)+ "vh";

  }
})