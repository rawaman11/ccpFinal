document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector("main").style.color = "#fff";
    document.querySelector("h1").style.color = "#fff";
    // document.querySelector("h2").style.color = "#fff";
    // document.querySelector("p").style.color = "#fff";
    // document.querySelector("button").forEach(i =>i.style.color="#fff").style.color = "#fff";
    // document.querySelector("h2").style.color = "#fff";
    // document.querySelector("h3").style.color = "#fff";
    console.log("hello");
 
});
document.getElementById("lightModeToggle").addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("main").style.color = "#000";
    document.querySelector("h1").style.color = "#000";
    // document.querySelector("p").style.color = "#000";
    // document.querySelector("button").forEach(i =>i.style.color="#000").style.color = "#000";
    // document.querySelector("h2").style.color = "#000";
    // document.querySelector("h3").style.color = "#000";
    console.log("bro");

});