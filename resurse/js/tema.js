/*let tema = localStorage.getItem("tema");
if (tema)
    document.body.classList.add("dark");

window.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("dark")) {
        document.getElementById("tema").checked = "true";
    }
    document.getElementById("tema").onclick = function () {
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            localStorage.removeItem("tema");
        }
        else {
            document.body.classList.add("dark");
            localStorage.setItem("tema", "dark");
        }
    }
});*/

let tema = localStorage.getItem("tema");
if (tema === "dark") {
    document.body.classList.add("dark");
} else if (tema === "neon") {
    document.body.classList.add("neon");
}

window.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.getElementsByName("nume");

    if (document.body.classList.contains("dark")) {
        radioButtons[1].checked = true;
    } else if (tema === "neon") {
        radioButtons[2].checked = true;
    } else {
        radioButtons[0].checked = true;
    }

    radioButtons[0].onclick = function() {
        document.body.classList.remove("dark", "neon");
        localStorage.setItem("tema", "light");
    }

    radioButtons[1].onclick = function() {
        document.body.classList.remove("neon");
        document.body.classList.add("dark");
        localStorage.setItem("tema", "dark");
    }

    radioButtons[2].onclick = function() {
        document.body.classList.remove("dark");
        document.body.classList.add("neon");
        localStorage.setItem("tema", "neon");
    }
});


