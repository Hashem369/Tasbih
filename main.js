const root = document.querySelector(":root");

const count = document.querySelector(".front .inside")
document.getElementById("counter").onclick = 
function () {
    count.innerHTML = ++count.innerHTML;
    localStorage.count = count.innerHTML;
}
document.getElementById("clear").onclick = 
function () {
    count.innerHTML = 0;
    localStorage.count = count.innerHTML;
}

const ch_color = document.getElementById("color-ch");
ch_color.oninput = function () {
    root.style.setProperty('--bg-c-inside', ch_color.value);
    localStorage.ch_color = ch_color.value;
}
const main = document.querySelector("main");
const settings = document.querySelector(".settings");
settings.onclick = function () {
    let pop = document.querySelector(".popup");
    if (pop) {
        main.removeChild(pop);
    }
    
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML =
    `<button>x</button>
    <div class="c">
        <label for="bg-c">Background :</label>
        <input type="color" name="bg-c" id="bg-c">
    </div>
    <p>Contact Us</p>
    <p>About</p>`
    main.prepend(popup);
    popup.querySelector(".popup button").onclick =
    function () {
        popup.remove();
    }
    const bgC = document.getElementById("bg-c");
    bgC.oninput = function () {
        root.style.setProperty("--bg-c",bgC.value);
        localStorage.bgC = bgC.value;
    }
    bgC.value = localStorage.bgC || "black";

}
window.onload = function () {
    count.innerHTML = localStorage.count || 0;
    root.style.setProperty('--bg-c-inside', localStorage.ch_color || "#00ff00");
    ch_color.value = localStorage.ch_color || "#00ff00";
    root.style.setProperty("--bg-c",localStorage.bgC || "black");
}