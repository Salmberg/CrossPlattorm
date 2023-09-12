const searchButton = document.getElementById('search_button');
const searchField = document.getElementById('search_text');
const mainElement = document.querySelector('main');

searchButton.addEventListener('click', async () => {

    //1.hämta bildinfo från api

    getImages();

    //2.updatera UI- skapa bilderna

})


const getImages = async () => {

    const baseURL = 'https://www.flickr.com/services/rest';
    const method = 'flickr.photos.search';
    const text = searchField.value;
    const apiKey = 'e4b7593023bc09e6ad8094671d8433f1';

    const url = `${baseURL}?method=${method}&text=${text}&api_key=${apiKey}&format=json&nojsoncallback=1`;
      
    const response = await fetch(url);
    const imageData = await response.json();

    console.log(imageData);

}