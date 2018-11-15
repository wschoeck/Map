scaleItem = function() {
  console.log("Hallo");
  document.getElementById("firstA").classList.add("zoomen");
  document.getElementById("firstAbackground").classList.add("zoomen");
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
  document.getElementById("firstAbackground").classList.remove("zoomen");
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
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("layertwoPicture").classList.remove("hidden");
    document.getElementById("layertwoC").classList.remove("hidden");
    document.getElementById("typolayertwocopy").classList.remove("hidden");
    document.getElementById("layertwoIllu").classList.remove("hidden");
    document.getElementById("layertwoLokal").classList.remove("hidden");
    document.getElementById("layertwoIlluWein").classList.remove("hidden");
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
  document.getElementById("layertwoPicture").classList.add("hidden");
  document.getElementById("layertwoC").classList.add("hidden");
  document.getElementById("typolayertwocopy").classList.add("hidden");
  document.getElementById("layertwoIllu").classList.add("hidden");
  document.getElementById("footer").classList.add("hidden");
  document.getElementById("layertwoLokal").classList.add("hidden");
  document.getElementById("layertwoIlluWein").classList.add("hidden");
  setTimeout(function(){
    document.getElementById("typoplus").classList.remove("additionhidden");
    document.getElementById("kreisminus").classList.remove("hidden");
}, 1000);

}


back.addEventListener("click", zoomback);


let kreisloadtwo = document.getElementById("kreisloadtwo");

let zoomloadtwo = function() {
  document.getElementById("kreisloadtwo").classList.add("zoom");
  document.getElementById("typoplusthree").classList.add("additionhidden");
  document.getElementById("footer").classList.add("hidden");
  setTimeout(function(){
    document.getElementById("layerthree").classList.remove("hidden");
    document.getElementById("backthree").classList.remove("backhidden");
    document.getElementById("typolayertwo").classList.add("loadhidden");
    document.getElementById("typolayertwocopy").classList.add("loadhidden");
    document.getElementById("layerthreeC").classList.remove("hidden");
    document.getElementById("layerthreeD").classList.remove("hidden");
    document.getElementById("kreisload").classList.add("plushidden");
}, 1000);
}


kreisloadtwo.addEventListener("click", zoomloadtwo);


let backthree = document.getElementById("backthree");


let zoombackthree = function() {
  console.log("Hallo");
  document.getElementById("kreisloadtwo").classList.remove("zoom");
  document.getElementById("backthree").classList.add("backhidden");
  document.getElementById("layerthree").classList.add("hidden");
  document.getElementById("typolayertwo").classList.remove("loadhidden");
  document.getElementById("typolayertwocopy").classList.remove("loadhidden");
  document.getElementById("layerthreeC").classList.add("hidden");
  document.getElementById("layerthreeD").classList.add("hidden");
  document.getElementById("kreisload").classList.remove("plushidden");
  document.getElementById("footer").classList.remove("hidden");
  setTimeout(function(){
    document.getElementById("typoplusthree").classList.remove("additionhidden");
}, 1000);

}


backthree.addEventListener("click", zoombackthree);
