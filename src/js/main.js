import 'flowbite'
import '@fortawesome/fontawesome-free/js/all.js';
// ---------- Variables ---------- //
const darkBtn = document.getElementById(`darkBtn`);
const body = document.querySelector(`body`);
const logoImg = document.getElementById('logo');
let darkMode = null;
// ------------------------------- //

// ---------- Get mode from localStorage ---------- //
if (localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode");
}
else {
    darkMode = 'light'
}
// ------------------------------------------------ //

// ---------- SetMode function ---------- //
function setMode(mode) {
    if (mode == 'dark') {
        localStorage.setItem('darkMode', 'dark');
        body.classList.add('dark');
        logoImg.src = './src/images/logoDark.png'
        darkBtn.innerHTML = 'Light Mode'
    }
    if (mode == 'light') {
        localStorage.setItem('darkMode', 'light');
        body.classList.remove('dark');
        logoImg.src = './src/images/logoLight.png'
        darkBtn.innerHTML = 'Dark Mode'
    }
}
// -------------------------------------- //

// ---------- Btn EventListener ---------- //
darkBtn.addEventListener('click', () => {
    if (darkMode == 'light') {
        darkMode = 'dark';
        setMode(darkMode);
    }
    else {
        darkMode = 'light';
        setMode(darkMode);
    }
})
// --------------------------------------- //
setMode(darkMode);