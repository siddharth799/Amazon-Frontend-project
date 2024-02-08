// signup scrolldown button
var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
         coll[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
           }
         });
        }

// country list
const greeting = document.getElementById('greeting');
        const languageSelect = document.getElementById('language-select');

        languageSelect.addEventListener('change', function() {
         if (languageSelect.value === 'fr') {
           greeting.textContent = 'FR';
           } else if (languageSelect.value === 'en') {
             greeting.textContent = 'EN';
           }else if(languageSelect.value ==='IT'){
            greeting.textContent='IT';
           }else if(languageSelect.value ==='IN'){
            greeting.textContent='IN';
           }
         });

function myfunction(){
  var x=document.getElementById("mylink");
  if(x.style.display==="block"){
    x.style.display="none";
  }else{
    x.style.display="block";
  }
}

function mynewfunction(){
  var y=document.getElementById("op");
  if(y.style.display==="block"){
    y.style.display="none";
  }else{
    y.style.display="block";
  }
}

   