# Amazon URL Shortener

## Description
This is a user script for Greasemonkey, Tampermonkey, or similar browser extensions. It adds a button to Amazon product pages that allows users to copy a short link to the product directly to their clipboard.

## Features
- Detects the "product's ASIN" and generates a short link in the format: `https://www.amazon.[domain]/dp/[ASIN]`.
- The button's text and alert messages are localized based on the browser's language (Italian or English).
- Designed to work on all Amazon domains.

## Installation
1. Install a userscript manager such as [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://www.tampermonkey.net/).
2. Create a new script and copy the contents of `Amazon_URLShortener.js` into it.
3. Save the script and navigate to any Amazon product page to see it in action.

## Usage
1. Open an Amazon product page.
2. Find the new button labeled either "Copy Short Link" (English) or "Copia Link Breve" (Italian) below the product title.
3. Click the button to copy the short link to your clipboard.

## Example
### Original URL:
```
https://www.amazon.it/Bticino-SFC810NC16-Magnetotermico-Cortocircuiti-Sovraccarichi/dp/B07P5GTP9J?someParams=true
```

### Shortened URL:
```
https://www.amazon.it/dp/B07P5GTP9J
```

## Compatibility
This script has been tested on the following browsers:
- Firefox
- Chrome

Ensure you have a userscript manager installed for your browser.

## Localization
- **English:** The button text and alerts appear in English for non-Italian browsers.
- **Italiano:** Il testo del pulsante e gli avvisi appaiono in italiano per i browser impostati in lingua italiana.
