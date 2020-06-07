
let slide_1 = document.querySelector(".slide_1");
let slide_2 = document.querySelector(".slide_2");
let germ = document.querySelector(".slide_1 .germ");
let soap = document.querySelector(".slide_1 .soap");
let drag_text = document.querySelector(".slide_1 .drag_text");
let drag = document.querySelector(".slide_1 .drag");

let savlon = document.querySelector(".slide_2 .savlon");
let protikar = document.querySelector(".slide_2 .protikar");



 

slide_1_show();
function slide_1_show(){
	slide_1.className = slide_1.className.replace('hidden', '');
	drag.classList ? drag.classList.add('shake') : drag.className += ' shake';
}

function slide_2_show(){
	slide_1.classList ? slide_1.classList.add('hidden') : slide_1.className += ' hidden';
	savlon.classList ? savlon.classList.add('fadeInUp') : savlon.className += ' fadeInUp';
  protikar.classList ? protikar.classList.add('fadeInUp') : protikar.className += ' fadeInUp';
	slide_2.className = slide_2.className.replace('hidden', '');
}

if (typeof window.orientation !== 'undefined') { dragElementMobile(soap); }else{dragElement(soap);}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
  	drag.className = drag.className.replace('shake', '');
    drag.classList ? drag.classList.add('hidden') : drag.className += ' hidden';

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {    
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    pos5 = elmnt.offsetTop - pos2;
    pos6 = elmnt.offsetLeft - pos1;

    if(pos5<55){
      germ.classList ? germ.classList.add('hideToTop') : germ.className += ' hideToTop';
      elmnt.classList ? elmnt.classList.add('hideZoomOut') : elmnt.className += ' hideZoomOut';
      drag_text.classList ? drag_text.classList.add('hideZoomOut') : drag_text.className += ' hideZoomOut';
      
    	slide_2_show();      

    }
    if (pos6<5) {pos6=10}
    if (pos6>175) {pos6=175}
    if (pos5>155) {pos5=155}
    if (pos5<40) {pos5=40}


    elmnt.style.top = pos5 + "px";
    elmnt.style.bottom = "50px";
    elmnt.style.left = pos6 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function dragElementMobile(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    drag.className = drag.className.replace('shake', '');
    drag.classList ? drag.classList.add('hidden') : drag.className += ' hidden';
    e.preventDefault();

    e = e.touches[0] || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {    
    e = e.touches[0] || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    pos5 = elmnt.offsetTop - pos2;
    pos6 = elmnt.offsetLeft - pos1;

    if(pos5<55){
      germ.classList ? germ.classList.add('hideToTop') : germ.className += ' hideToTop';
      elmnt.classList ? elmnt.classList.add('hideZoomOut') : elmnt.className += ' hideZoomOut';
      drag_text.classList ? drag_text.classList.add('hideZoomOut') : drag_text.className += ' hideZoomOut';
      
      slide_2_show();
      document.ontouchend = closeDragElement;
    }
    if (pos6<5) {pos6=10}
    if (pos6>175) {pos6=175}
    if (pos5>155) {pos5=155}
    if (pos5<40) {pos5=40}

    elmnt.style.top = pos5 + "px";
    elmnt.style.bottom = "50px";
    elmnt.style.left = pos6 + "px";
  }
  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}


