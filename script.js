document.getElementById("text-input").style.display = "none";
document.getElementById("search-button").addEventListener("click", function toffi(){
    var sw = document.getElementById("text-input");
    if (sw.style.display === "none") {
      sw.style.display = "block";
    } else {
      sw.style.display = "none";
    }
    console.log(sw.style.display);
  });

  document.getElementById("blur").style.display = "none";
  document.getElementById("search-button").addEventListener("click", function toffi(){
      var blur = document.getElementById("blur");
      if (blur.style.display === "none") {
        blur.style.display = "block";
      } else {
        blur.style.display = "none";
      }
      console.log(blur.style.display);
    });
  
    document.getElementById("blur").addEventListener("click", function toffi(){
      var blur = document.getElementById("blur");
      if (blur.style.display === "none") {
        blur.style.display = "block";
      } else {
        blur.style.display = "none";
      }
      console.log(blur.style.display);
    });
  
    document.getElementById("blur").addEventListener("click", function toffi(){
      var sw = document.getElementById("text-input");
      if (sw.style.display === "none") {
        sw.style.display = "block";
      } else {
        sw.style.display = "none";
      }
      console.log(blur.style.display);
    });

  function search() {
    let input = document.getElementById("text-input");
    console.log(input.value);   
    let github_search = "https://github.com/search?q="; 
    window.location.replace(github_search + input.value);
}

let input = document.getElementById("text-input");
input.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        search();
    }
}
);