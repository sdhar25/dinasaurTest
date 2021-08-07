console.log('script js loaded');

document.querySelector('#btnLoad').addEventListener('click', () => {
    getDinoName();
    getDinoImage();
});

async function getDinoName(){
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoname = data[0].join(' ');
    console.log(dinoname);
    document.querySelector("#dinoName").textContent = dinoname;
}


async function getDinoImage(){
    const response = await fetch('/dinoimage');
    const data = await response.json();

    let dinoImage = data.value[Math.floor(Math.random() * (data.value).length)].thumbnailUrl;
    //data.value[0].thumbnailUrl;
    //data.value[Math.floor(Math.random() * (data.value).length)];
    console.log(dinoImage);
    if(document.querySelector('#dinoImage') !== null){
        document.querySelector('#dinoImage').remove();
    }

    let img = document.createElement('img');
    img.src = dinoImage;
    img.id = 'dinoImage';
    document.querySelector('body').appendChild(img);
}