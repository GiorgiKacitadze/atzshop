// ქართის ჯს 

let cart = document.querySelector('.cart');

let rr_show = document.querySelector('.rr_show');


cart.addEventListener('click', rrshowclass);


function rrshowclass(){
    rr_show.classList.toggle('rr_show')

}


// სარჩევი რესპონსივზე

let bb = document.getElementById('bb');

let search = document.querySelector('.search');

let s_show = document.querySelector('.s_show');



bb.addEventListener('click', searchshow)


function searchshow(){

search.classList.toggle('s_show');

}


// რეინჯის სლაიდერი

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}






