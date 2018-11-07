scaleItem = function() {
  console.log("Hallo");
  document.getElementById("firstA").classList.add("zoomen");
  document.getElementById("firstA").classList.add("zindex");
  kreisminus.classList.remove("hidden");
  kreisload.classList.remove("plushidden");

}

scaletypo.addEventListener("click", scaleItem);


let kreisminus = document.getElementById("kreisminus");

zoomOut = function()

{
  if(document.getElementById("kreisminus")) {
  firstA.classList.remove("zoomen");
  kreisminus.classList.add("hidden");
  kreisload.classList.add("plushidden");
  }
}

kreisminus.addEventListener("click", zoomOut);


let kreisload = document.getElementById("kreisload");


let zoomload = function() {
  console.log("Hallo");
  document.getElementById("kreisload").classList.add("zoom");
  document.getElementById("kreisminus").classList.add("hidden");
  setTimeout(function(){
    document.getElementById("kreisloadhidden").classList.remove("loadhidden");
}, 1000);
  document.getElementById("back").classList.remove("backhidden");
  document.getElementById("typoplus").classList.add("additionhidden");

}


kreisload.addEventListener("click", zoomload);


let back = document.getElementById("back");


let zoomback = function() {
  console.log("Hallo");
  document.getElementById("kreisload").classList.remove("zoom");
  document.getElementById("kreisloadhidden").classList.add("loadhidden");
  document.getElementById("back").classList.add("backhidden");
  setTimeout(function(){
    document.getElementById("typoplus").classList.remove("additionhidden");
    document.getElementById("kreisminus").classList.remove("hidden");
}, 1000);

}


back.addEventListener("click", zoomback);
