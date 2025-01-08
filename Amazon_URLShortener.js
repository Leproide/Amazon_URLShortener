// ==UserScript==
// @name         Amazon Short Link Copier
// @namespace    https://github.com/Leproide/Amazon_URLShortener/
// @version      1.0
// @description  Adds a button to copy the short link of Amazon products
// @author       Leproide
// @match        *://www.amazon.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to generate the short link
    function generateShortLink() {
        const currentUrl = window.location.href;
        const match = currentUrl.match(/\/dp\/([A-Z0-9]{10})/); // Find the ASIN
        if (match && match[1]) {
            return `${window.location.origin}/dp/${match[1]}`;
        }
        return null;
    }

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = text;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        const lang = navigator.language || navigator.userLanguage;
        if (lang.startsWith('it')) {
            alert('Link copiato: ' + text);
        } else {
            alert('Link copied: ' + text);
        }
    }

    // Find the product title
    const productTitleElement = document.getElementById('productTitle');
    if (productTitleElement) {
        // Detect browser language
        const lang = navigator.language || navigator.userLanguage;
        const buttonText = lang.startsWith('it') ? 'Copia Link Breve' : 'Copy Short Link';

        // Create the button
        const copyButton = document.createElement('button');
        copyButton.textContent = buttonText;
        copyButton.style.marginTop = '10px';
        copyButton.style.padding = '5px 10px';
        copyButton.style.backgroundColor = '#FA8900';
        copyButton.style.color = 'white';
        copyButton.style.border = 'none';
        copyButton.style.cursor = 'pointer';
        copyButton.style.borderRadius = '4px';
        copyButton.style.display = 'block'; // Place the button on a new line

        // Add click event to the button
        copyButton.addEventListener('click', () => {
            const shortLink = generateShortLink();
            if (shortLink) {
                copyToClipboard(shortLink);
            } else {
                const errorText = lang.startsWith('it') ? 'Errore: impossibile generare il link breve.' : 'Error: Unable to generate the short link.';
                alert(errorText);
            }
        });

        // Insert the button below the product title
        productTitleElement.parentNode.insertBefore(copyButton, productTitleElement.nextSibling);
    }
})();
