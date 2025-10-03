// Get a Joke API PROJECT!


let button = document.querySelector('button')

button.addEventListener("click", getJoke)

function getJoke(){
    let joke = document.querySelector('h2')
    let API_URL = ' https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            joke.innerText = data.joke
        })

}
