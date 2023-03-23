

  function darkMode() {
    let body = document.querySelector("body");
    body.classList.remove("light");
    let button = document.querySelector("button");
    button.innerHTML = "Light Mode";
    button.addEventListener("click", showLight);

  }
 
  
  function showLight() {
        let body = document.querySelector("body");
        body.classList.add("light");
        let button = document.querySelector("button");
        button.innerHTML = "Dark Mode";
        button.addEventListener("click", darkMode);
        
      
    }
    let button = document.querySelector("button");
    button.addEventListener("click", showLight);