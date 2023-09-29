function changePicture(){
    document.getElementById("Mixer").src='https://thumbs.dreamstime.com/z/industrial-food-mixer-industry-81722765.jpg';
}
function changeText(){
    document.getElementById("recipe").innerHTML= "Mix it all together any way ya like"
}
function changeTextBack(){
    document.getElementById("recipe").innerHTML=" "
}
//sets a random absolute position to a html element; receives the html element 
function moveElmRand(elm){ 
    elm.style.position ='absolute'; 
    elm.style.top = Math.floor(Math.random()*90+5)+'%'; 
    elm.style.left = Math.floor(Math.random()*90+5)+'%'; 
   } 
    
   //get the #btn_test 
   var btn_test = document.querySelector('#btn_test'); 
    
   //register to call moveElmRand() on mouseenter event to #btn_test 
   btn_test.addEventListener('mouseenter', function(e){ moveElmRand(e.target);}); 
    
   //register click to #btn_test 
   btn_test.addEventListener('click', function(e){ alert('You are Good.');});
   