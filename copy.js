const copyBtn = document.getElementsByClassName('copy-btn')

for (const copy of copyBtn) {
    copy.addEventListener('click', function () {
        
        const card = copy.closest(".card");
        const number = card.querySelector(".title-num").innerText;

        alert('number has copied:' + ' ' + number);

        const copyCount = parseInt(document.getElementById('copy-count').innerText);

        const totalCopyCount = copyCount + 1;
        
                
        document.getElementById('copy-count').innerText = totalCopyCount;

    })
}
