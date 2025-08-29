// Call Buttons
const callButtons = document.getElementsByClassName("call-btn");

for (let btn of callButtons) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const title = card.querySelector(".title-name").innerText;

        const number = card.querySelector(".title-num").innerText;

        const decreaseCount = parseInt(document.getElementById('decrease-count').innerText);

        const decreaseCountTotal = decreaseCount - 20;

        if (decreaseCount < 20) {
            return alert("❌You don't have enough coins ");;
        }

        alert('📞' + title + ' ' + number + '...');

        document.getElementById('decrease-count').innerText = decreaseCountTotal;


        const historyContainer = document.querySelector(".history-count");

        const now = new Date();
        const timeString = now.toLocaleTimeString();


        const historyItem = document.createElement("div");
        historyItem.classList.add(
            "flex",
            "bg-[#FAFAFA]",
            "justify-between",
            "items-center",
            "mt-[16px]",
            "rounded-lg"
        );

        historyItem.innerHTML = `
      <div class="py-[16px] px-[16px]">
        <h1 class="inter text-[16px] font-semibold">${title}</h1>
        <h2 class="hind-madurai text-[18px] mt-1">${number}</h2>
      </div>
      <div class="px-[16px] hind-madurai text-[18px]">
        <h1>${timeString}</h1>
      </div>
    `;

        historyContainer.appendChild(historyItem);


        document.getElementById('clean-history').addEventListener('click', function(){
            historyContainer.innerText = '';
        })


    });

}


