// ==UserScript==
// @name         Amazon URL Shortener
// @namespace    https://github.com/Leproide/Amazon_URLShortener/
// @version      1.2
// @description  Adds a button to copy the short link of Amazon products and optionally modifies the URL in the address bar
// @author       Leproide
// @match        *://www.amazon.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Configuration: Enable or disable features
    const enableButton = true; // true to add the copy button, false to disable it
    const modifyUrl = true;    // true to modify the browser URL, false to leave it unchanged

    // Function to generate the short link
    function generateShortLink() {
        const currentUrl = window.location.href;
        let match = currentUrl.match(/\/dp\/([A-Z0-9]{10})/); // Find the ASIN in /dp/
        if (!match) {
            match = currentUrl.match(/\/gp\/product\/([A-Z0-9]{10})/); // Find the ASIN in /gp/product/
            if (match) {
                return `${window.location.origin}/dp/${match[1]}`;
            }
        } else {
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

    // Modify the URL in the address bar if enabled
    if (modifyUrl) {
        const shortLink = generateShortLink();
        if (shortLink) {
            window.history.replaceState(null, '', shortLink);
        }
    }

    // Add the copy button if enabled
    if (enableButton) {
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
            copyButton.style.marginBottom = '4px'; // Add spacing below the button
            copyButton.style.padding = '8px 16px';
            copyButton.style.backgroundColor = '#ffa41c';
            copyButton.style.color = '#111';
            copyButton.style.border = '1px solid #ffa41c';
            copyButton.style.cursor = 'pointer';
            copyButton.style.borderRadius = '20px';
            copyButton.style.display = 'block'; // Ensure the button is on a new line
            copyButton.style.fontSize = '14px';
            copyButton.style.textAlign = 'center';
            copyButton.style.textDecoration = 'none';
            copyButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.15)';

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
    }
})();
