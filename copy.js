const copyBtn = document.getElementsByClassName('copy-btn')

for (const copy of copyBtn) {
    copy.addEventListener('click', function () {
        const copyCount = parseInt(document.getElementById('copy-count').innerText);

        const totalCopyCount = copyCount + 1;

        document.getElementById('copy-count').innerText = totalCopyCount;
    })
}


