// Call Buttons

const callBtn = document.getElementsByClassName('call-btn');
const decreaseCount = document.getElementsByClassName('decrease-count');


const titleName = document.getElementsByClassName('title-name');
const titleNum = document.getElementsByClassName('title-num');




// for(const numTitle of titleNum){
//     return numTitle;
// }

for (const call of callBtn) {
    call.addEventListener('click', function () {
        for (const nameTitle of titleName) {
            alert (titleName)
            return nameTitle;
        }
    })
}