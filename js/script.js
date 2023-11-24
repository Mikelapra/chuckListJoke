const jokeList = document.getElementById("jokeList");
const fetchJoke = document.getElementById("fetchJoke");

const registroChiste = JSON.parse(localStorage.getItem("registroChiste")) || {}

let contador = localStorage.getItem("contador") || 0

fetchJoke.addEventListener("click", ()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error ("Error");
        }
        return respuesta.json() 
    })
    .then ((data) => {
    contador ++;
    localStorage.setItem("contador", contador)
    registroChiste[`chiste${contador}`] = data.value
    localStorage.setItem("registroChiste", JSON.stringify(registroChiste))
    jokeList.innerHTML += `<li>${data.value}`
    printuser()
})
})

function printuser () {
    const chiste = JSON.parse(localStorage.getItem("registroChiste"));
    const claveChistes = Object.keys(chiste)
    claveChistes.forEach ((llave) => {
        jokeList.innerHMTL += `<li>${claveChistes[llave]}</li>`
    })
}
// console.log(jokeList)