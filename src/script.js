  function showLight() {
        let body = document.querySelector("body");
        body.classList.add("light");
    }
    let button = document.querySelector("button");
    button.addEventListener("click", showLight);