// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // fetch to api
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    const dogContainer = document.querySelector('#dog-image-container')
    const breedContainer = document.querySelector('#dog-breeds')
    
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(doggyData => {
        //console.log(doggyData.message)
        renderImages(doggyData.message)
    })
   
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogObj => {
        console.log(dogObj.message)
        renderBreeds(dogObj.message)
    })
        
    const renderImages = (doggyArray) => {
        doggyArray.forEach( (dogImage) => {
            const image = document.createElement('img')
            image.src = dogImage
            dogContainer.append(image)
        })
    }

    const renderBreeds = (doggyObj) => {
        for (let key in doggyObj) {
            const breed = document.createElement('li')
            breed.textContent = key
            breedContainer.append(breed)
        }
    }

})

