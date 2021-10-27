function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField
    movie.appendChild(movieTitle)
    let unorderedList = document.querySelector('ul')
    unorderedList.appendChild(movie)
    inputField = ''
}

const formSelect = document.querySelector('form')
formSelect.addEventListener('submit', addMovie)