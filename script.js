// card count increase in navbar
const heartIcon = document.getElementsByClassName('heart-icon');
const heartCount = document.getElementsByClassName('heart-count')[0];

for(const icon of heartIcon){
    icon.addEventListener('click', function(){
        const heartValue  = parseInt(heartCount.innerText);
        heartCount.innerText = heartValue + 1;
    })
}
