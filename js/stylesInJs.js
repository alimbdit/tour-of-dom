const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '15px';
    section.style.paddingLeft= '10px';
    section.style.backgroundColor= 'lightgray';
    section.style.borderRadius= '10px';
}
const secin = document.querySelector('.some-class.more-class.bg-purple');
console.log(secin);

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor= 'yellow';

const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('bg-yellow');
placeContainer.classList.remove('large-text');

document.getElementsByTagName