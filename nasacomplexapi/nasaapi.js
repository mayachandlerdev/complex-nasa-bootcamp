const button = document.querySelector('button')
const apiKey = '6014e812525dbd1722079900cd1eebdd'
button.addEventListener('click', () =>{
fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    //for facility
    .then(response => {
    response.forEach(function(x){
    console.log(x.facility)
    let ol = document.querySelector('#facility') 
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(x.facility));
    ol.appendChild((document.createTextNode(x.facility)))
    })
//////////////////////////////////////////////////////////////
    //for latitude
    latitude = 
    response.forEach(function(response){
        console.log(response.location.latitude)
        })
    

    longitude = 
    response.forEach(function(response){
    console.log(response.location.longitude)
    })
    /////////////

    //nasa api loop
    // response.forEach(function(response){
    // const ol = document.getElementById('facility') 
    // let li = document.createElement('li');
    // li.appendChild(document.createTextNode(response.facility));
    // ol.appendChild(li); //append li to ol
    // li.appendChild(document.createTextNode(response.facility, response.latitude)); //append text to li
    // ol.appendChild(li); //append li to ol
 /////////////////////////////////////////////////////////////////
//  let lat = response.location.latitude


    //second api
fetch(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

    console.log(response)

//second api loop
response.forEach(function(latitude) {
const ol = document.getElementById('list') //grab the ol from dom
let li = document.createElement('li'); //create an li
li.appendChild(document.createTextNode(latitude)); //append text to li
ol.appendChild(li); //append li to ol
})
 })
 })
 })


