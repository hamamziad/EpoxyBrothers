document.addEventListener("DOMContentLoaded", () => {

console.log("H3 Epoxy Website Loaded");

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", () => {

console.log("Navigating to:", link.textContent);

});

});

});