// HERO SLIDES FUNCTIONS
var slideImg = document.getElementById("slideImg");

var images = new Array(
    "royal crown 4.jpg",
    "royal crown 1.jpg",
    "royal crown 20.jpg",
    "royal crown 2.jpg"
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}



// FOR COLOR THEME TOGGLE

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png"
    }
}