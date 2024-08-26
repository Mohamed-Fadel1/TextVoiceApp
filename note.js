let notesContainer = document.querySelector(".notes-container");
let btn = document.getElementById("btn");
let homeBtn = document.getElementById("homeBtn");
let toastBox = document.getElementById("toast-box");

function showData () {
    notesContainer.innerHTML = localStorage.getItem("dataa")
}

showData ()

function saveDataByLocalStorage () {
    localStorage.setItem("dataa" , notesContainer.innerHTML)
}

btn.addEventListener("click" , function () {
    let element = document.createElement("p");
    element.setAttribute("contenteditable" , "true");
    element.classList.add("input-box");
    let img = document.createElement("img")
    img.src = "./images/delete.png"
    notesContainer.appendChild(element).appendChild(img);
    saveDataByLocalStorage ()

})

notesContainer.addEventListener("input" , function () {
    saveDataByLocalStorage ()
})

document.addEventListener("keydown" , function (e) {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault()
    }
    
})

homeBtn.addEventListener("click" , function () {
    window.location.href = "./index.html"
})

notesContainer.addEventListener("click" , function (e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveDataByLocalStorage()
        let toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerHTML = ' <i class="fa-solid fa-circle-check"></i> Deleted Successfully'
        toastBox.appendChild(toast)
        setTimeout(() => {
            toast.remove()
        }, 3000);
        saveDataByLocalStorage ();
    }
})
