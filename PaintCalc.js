const prompt = require('prompt-sync')();
let TotalWall = [""]
let TotalWindow = [""]
let Height
let Width
let WallArea = 0
AreaFunc = function() {
  let Area = Height * Width
  return Area
}

HeightFunc = function() {
  let Height = parseFloat(prompt("?"))
  return Height
}

WidthFunc = function() {
  let Width = parseFloat(prompt("?"))
  return Width
}

console.log("Welcome to the PAINT CALCULATOR")
console.log(" We'll need to collect some data so give us a minute")
console.log("So firstly what we need...")

let WallNumber = parseInt(prompt('How Many Walls Does the Room have? Please ensure no non-euclidian rooms'))

for (i = 0, i < WallNumber; i++) {
  console.log(`Please enter the height of the $(i+1) Wall`)
  Height = HeightFunc()
  console.log(`Please enter the width of the $(i + 1) Wall`)
  Width = WidthFunc()
  TotalWall.push(AreaFunc(Height, Width)
}

console.log(TotalWall)
for (let x in TotalWall) {
  WallArea = WallArea + TotalWall[x]
}

let WindowNumber = parseInt(prompt('How Many Windows Does the Room have? Please ensure no non-euclidian rooms'))

for (i = 0, i < WindowNumber; i++) {
  console.log(`Please enter the height of the $(i+1) Window`)
  Height = HeightFunc()
  console.log(`Please enter the width of the $(i + 1) Window`)
  Width = WidthFunc()
  TotalWindow.push(AreaFunc(Height, Width)
}

for (let x in TotalWindow) {
  WindowArea = WindowArea + TotalWindow[x]
}
