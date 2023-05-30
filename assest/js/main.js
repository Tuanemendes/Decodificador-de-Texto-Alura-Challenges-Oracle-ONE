
function encryptText() {
    const inputText = document.getElementById('input-text').value;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i].toLowerCase();

        if (char === 'e') {
            encryptedText += 'enter';
        } else if (char === 'i') {
            encryptedText += 'imes';
        } else if (char === 'a') {
            encryptedText += 'ai';
        } else if (char === 'o') {
            encryptedText += 'ober';
        } else if (char === 'u') {
            encryptedText += 'ufat';
        } else {
            encryptedText += char;
        }
    }

    document.getElementById('output-text').value = encryptedText;
    document.getElementById('output-text').style.backgroundImage = 'none';
    document.getElementById('messagem1').innerHTML = '';
    document.getElementById('messagem2').innerHTML = '';
    if (encryptedText !== '') {
        document.getElementById('btn-copy-text').style.display = 'block';
    }
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    let decryptedText = inputText;

    decryptedText = decryptedText.replace(/enter/g, 'e');
    decryptedText = decryptedText.replace(/imes/g, 'i');
    decryptedText = decryptedText.replace(/ai/g, 'a');
    decryptedText = decryptedText.replace(/ober/g, 'o');
    decryptedText = decryptedText.replace(/ufat/g, 'u');

    document.getElementById('output-text').value = decryptedText;

    document.getElementById('output-text').style.backgroundImage = 'none';
}

function isEncrypted(text) {
    return text.includes('enter') || text.includes('imes') ||
        text.includes('ai') || text.includes('ober') || text.includes('ufat');
}

function copyText() {
    const outputText = document.getElementById('output-text').value;
    const tempInput = document.createElement('input');
    tempInput.value = outputText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Texto copiado!');
}

function clearText() {

    location.reload();
}


document.getElementById('btn-clear').addEventListener('click', clearText);

document.getElementById('btn-copy-text').addEventListener('click', copyText);

document.querySelector('.c-btn__encrypt').addEventListener('click', encryptText);

document.querySelector('.c-btn__decrypt').addEventListener('click', decryptText);
