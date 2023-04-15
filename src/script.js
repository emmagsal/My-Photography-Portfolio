

  function darkMode() {
    let body = document.querySelector("body");
    body.classList.remove("light");
    l

  }
 
 let darkButton = document.querySelector("#dark-mode");
    darkButton.addEventListener("click", darkMode);

  function showLight() {
        let body = document.querySelector("body");
        body.classList.add("light");
        
        
      
    }
    let lightButton = document.querySelector("#light-mode");
    lightButton.addEventListener("click", showLight);