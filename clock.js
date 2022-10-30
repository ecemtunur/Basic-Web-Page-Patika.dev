let myName;
myName = prompt("Adınız nedir?")

let nameTag = document.querySelector("#myName")
nameTag.innerHTML = `${myName[0].toUpperCase()}${myName.slice(1).toLowerCase()}`

let timeTag = document.querySelector("#myClock")
timeTag.style.color = "#95c2c3"
timeTag.style.fontSize = "80px"





