var overlay = document.getElementById("overlayy");
var box = document.getElementById("boxx");

function notshow() {
   
    overlay.style.display = "block";
    box.style.display = "block";     
}

function hide() {
   
    overlay.style.display = "none"; 
    box.style.display = "none";   
}

function clickkkkk(){
    var input1 = document.getElementById("input-1").value
    var input2 = document.getElementById("input-2").value
    var main = document.querySelector(".shortcut-container")
    var newelement = document.createElement("div")
    newelement.setAttribute("class","shortcut")
    newelement.innerHTML = `
    <a href="${input2}" target="_blank">
        <button class="shortcut-btn">${input1.charAt(0).toUpperCase()}</button>
    </a>
    <p class="shortcut-name">${input1}</p>`;
    main.appendChild(newelement);
    overlay.style.display = "none"; 
    box.style.display = "none";   
}

const searchbar = document.querySelector(".searchbar")
const searchinput = document.querySelector(".inputt")

searchbar.addEventListener("submit",function(event){
    event.preventDefault()
     const query = searchinput.value.trim()

     if (query) {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchURL;
      }
      

})


