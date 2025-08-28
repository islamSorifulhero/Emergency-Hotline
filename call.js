// Call Buttons
const callButtons = document.getElementsByClassName("call-btn");

for (let btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const title = card.querySelector(".title-name").innerText;

    const number = card.querySelector(".title-num").innerText;

    const decreaseCount = parseInt(document.getElementById('decrease-count').innerText);

    const decreaseCountTotal = decreaseCount - 20;

    if(decreaseCount < 20){
        return alert("❌You don't have enough coins ");;
    }

    alert('📞' + title + ' ' + number + '...');

    document.getElementById('decrease-count').innerText  = decreaseCountTotal;

  });
}

