const typeDiv = document.querySelector('#type-container')
const imgDiv = document.querySelector('#img-container')
const loader = document.querySelector('#loader')
const btn = document.querySelector('#new-dog-btn')

const url = 'https://api.thedogapi.com/v1/images/search'

btn.addEventListener('click', () => {

    loader.style.display = 'block'
    imgDiv.innerHTML = ''
    typeDiv.innerHTML = ''

    fetch(url)
        .then(response => response.json())
        .then(json => {
            let img = document.createElement('img')
            img.src = json[0].url;
            img.classList.add('images')
            imgDiv.appendChild(img)

            if (json[0].breeds[0] !== undefined) {
                let type = document.createElement('h2')
                type.innerText = `My type is ${json[0].breeds[0].name}`
                type.classList.add('the-type')
                typeDiv.appendChild(type)
            }
            loader.style.display = 'none'
        })
})