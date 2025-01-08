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
        alert('Link copied: ' + text);
    }

    // Find the product title
    const productTitleElement = document.getElementById('productTitle');
    if (productTitleElement) {
        // Create the button
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy Short Link';
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
                alert('Error: Unable to generate the short link.');
            }
        });

        // Insert the button below the product title
        productTitleElement.parentNode.insertBefore(copyButton, productTitleElement.nextSibling);
    }
})();
