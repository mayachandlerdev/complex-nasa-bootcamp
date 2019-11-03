const button = document.querySelector('button')
const apiKey = "0e905aafd2ade7dcc42c745c61bf1e51"
button.addEventListener('click', () =>{
fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
    console.log(response)
    console.log(response[0].facility,response[0].city)
//nasa api loop
    let facility = response.facility 
    response.forEach(function(response) {
    const ol = document.querySelector('ol') //grab the ol from dom
    let li = document.createElement('li'); //create an li
    li.appendChild(document.createTextNode(response.facility)); //append text to li
    ol.appendChild(li); //append li to ol
//second api
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${response.city}&APPID=${apiKey}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
    console.log(response)
    console.log(response.main[0].temp)
//second api loop
let weather = response.main.temp
response.forEach(function(response) {
const ol = document.getElementById('list') //grab the ol from dom
let li = document.createElement('li'); //create an li
li.appendChild(document.createTextNode(response.main[0].temp)); //append text to li
ol.appendChild(li); //append li to ol


})
})
})
 })
})