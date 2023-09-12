const searchButton = document.getElementById('search_button');
const searchField = document.getElementById('search_text');
const mainElement = document.querySelector('main');
const overlay = document.getElementById('overlay');
const overlayImg = document.querySelector('#overlay img');
const overlayTitle = document.querySelector('#overlay figcaption');


let currentPage = 1;
let isLoading = false;


searchButton.addEventListener('click', async () => {

    mainElement.innerHTML = '';
    loadPage();
})

const loadPage = async () => {
    isLoading = true;
    //1.hämta bildinfo från api
    const imageData = await getImages();

    //2.updatera UI- skapa bilderna
    updateUI(imageData);

    isLoading = false;

}

const updateUI = (data) => {

    data.photos.photo.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageURL(img, 'thumb'));
        imageElement.setAttribute('alt', img.title);

        imageElement.addEventListener('click', () =>{
            openLightBox(img.title, imageURL(img, 'large'));
        })
        mainElement.appendChild(imageElement);

    });

}

const openLightBox = (title, URL) =>{

    overlayImg.setAttribute('src', URL);
    overlayImg.setAttribute('alt', title);

    overlayTitle.innerHTML = title;
    overlay.classList.toggle('show');
}
overlay.addEventListener('click', () => {
    overlay.classList.toggle('show');
})

const getImages = async () => {

    const baseURL = 'https://www.flickr.com/services/rest';
    const method = 'flickr.photos.search';
    const text = searchField.value;
    const apiKey = 'e4b7593023bc09e6ad8094671d8433f1';

    const url = `${baseURL}?method=${method}&page=${currentPage}=&text=${text}&api_key=${apiKey}&format=json&nojsoncallback=1`;
      
    const response = await fetch(url);
    const imageData = await response.json();

    return(imageData);
    //console.log(imageData);

}

const imageURL = (img, size) => {
    let sizeSuffix = 'q';
    if(size== 'large') {sizeSuffix = 'b'};

    const url = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_${sizeSuffix}.jpg`
    return url;
}

const nextPage = async () => {
    currentPage++;

    loadPage();

}


//laddar en ny sida om man scrollar längst ned
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        if(!isLoading){
        nextPage();
        }
    }

})