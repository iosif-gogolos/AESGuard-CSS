function encryptMessage() {
    var message = document.getElementById("messageInput").value;
    var key = "YELLOW SUBMARINE";
    var encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    var formattedEncryptedMessage = formatEncryptedText(encryptedMessage);
    document.getElementById("resultContainer").innerHTML = "<p>Encrypted Message: " + encryptedMessage + "</p>";

    
    var copyButton = document.createElement("button");
    copyButton.id = "copyButton";
    copyButton.innerText = "Copy to Clipboard";
    copyButton.onclick = function() {
        copyToClipboard(encryptedMessage);
    };
    document.getElementById("resultContainer").appendChild(copyButton);
}

function decryptMessage() {
    var encryptedMessage = document.getElementById("messageInput").value;
    var key = "YELLOW SUBMARINE";
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
    var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("resultContainer").innerHTML = "<p>Decrypted Message: " + decryptedMessage + "</p>";
}

function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Message copied to clipboard!");
}

function formatEncryptedText(text) {
    var chunks = [];
    for (var i = 0; i < text.length; i += 40) {
        chunks.push(text.substring(i, i + 40));
    }
    return chunks.join('<br>');
}
