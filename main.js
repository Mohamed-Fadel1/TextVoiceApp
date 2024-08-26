let btn = document.querySelector("#listenButton");
let theme = document.getElementById("theme");
let iconElement = document.querySelector("i");
let Converter = document.querySelector("span");

function speakText(id) {
    const text = document.getElementById(id).value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE'; 
    speechSynthesis.speak(utterance);
}

const elements = [
    { id: "textToSpeak", delay: 10000 },            
    { id: "textToSpeak2", delay: 25000 },         
    { id: "textToSpeak3", delay: 50000 },         
    { id: "textToSpeak4", delay: 75000 },        
    { id: "textToSpeak5", delay: 100000 },       
    { id: "textToSpeak6", delay: 125000 },       
    { id: "textToSpeak7", delay: 150000 },      
    { id: "textToSpeak8", delay: 175000 },       
    { id: "textToSpeak9", delay: 200000 },      
    { id: "textToSpeak10", delay: 225000 }       
];

let timerStarted = false; 

function scheduleTexts() {
    elements.forEach(({ id, delay }) => {
        setTimeout(() => speakText(id), delay);
    });
}


const textareas = document.querySelectorAll('textarea');

textareas.forEach((textarea) => {
    textarea.addEventListener('blur', function () {  

        if (!timerStarted) {
            scheduleTexts();  
            setInterval(scheduleTexts, 1800000); 
            timerStarted = true; 
        }

        speakText(this.id);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        iconElement.classList.add("fa-sun");
        iconElement.classList.remove("fa-moon");
        theme.style.color = "orange";
    } else {
        document.body.classList.remove("dark-theme");
        iconElement.classList.add("fa-moon");
        iconElement.classList.remove("fa-sun");
        theme.style.color = "white";
    }
});

theme.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        iconElement.classList.add("fa-sun");
        iconElement.classList.remove("fa-moon");
        iconElement.style.color = "orange";
    } else {
        localStorage.setItem("theme", "light");
        iconElement.classList.add("fa-moon");
        iconElement.classList.remove("fa-sun");
        theme.style.color = "white";
    }
});

let li = document.querySelector("li");
li.style.cursor = "pointer";

li.addEventListener("click", function () {
    window.location.href = "./note.html";
});

let i = 1;
function converter() {
    let title = "Converter";
    Converter.innerText = title.slice(0, i);
    i++;

    if (i > title.length) {
        clearInterval(stopConverter);
    }
}

let stopConverter = setInterval(converter, 300);
