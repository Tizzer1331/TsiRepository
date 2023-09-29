function changePicture(){
    document.getElementById("Mixer").src='https://thumbs.dreamstime.com/z/industrial-food-mixer-industry-81722765.jpg';
}
function changeText(){
    document.getElementById("recipe").innerHTML= "Mix it all together any way ya like"
}
function changeTextBack(){
    document.getElementById("recipe").innerHTML=" "
}
let spaceButton = document.getElementById("spaceButton")
spaceButton.addEventListener("click", evt  =>{
    console.log("hi")
   let  ranDate = randomDate()
    let spaceDiv=document.getElementById ("spaceImage")

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + ranDate)
    .then (res =>res.json())
    .then(space=> {
            console.log(space)
        spaceDiv.innerHTML = `<h3> The Cake is Out of this world</h3>
        <img src="${space.url}" alt="failed" />`
        
    })
})

function randomDate() {
    let day
    let year =1995+Math.floor(Math.random()*28)
    let month = 1 +Math.floor(Math.random()*13)
    switch(month){
        case(1):
        case(3):
        case(5):
        case(7):
        case(8):
        case(10):
        case(12):
            day=(Math.floor(Math.random()*31))+1
            break;
        case(2):
            day=(Math.floor(Math.random()*28))+1
            break;
        case(4):
        case(6):
        case(9):
        case(11):
        day=(Math.floor(Math.random()*30))+1
        break;
    }
    console.log(day)
    let date = year + "-" + month + "-" + day
    return date;
  }


