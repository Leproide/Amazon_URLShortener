# Amazon URL Shortener

## Description
This is a user script for Greasemonkey, Tampermonkey, or similar browser extensions. It adds a button to Amazon product pages that allows users to copy a short link to the product directly to their clipboard and optionally modifies the URL in the browser's address bar to a shorter format.

## Features
- **Button for Copying Short Links:**
  - Generates a short link in the format: `https://www.amazon.[domain]/dp/[ASIN]`.
  - Detects both `/dp/` and `/gp/product/` URL formats.
  - Localized button text and alert messages based on the browser's language (Italian or English).
  
- **Optional URL Modification:**
  - Automatically shortens the browser's address bar URL to the short link format when enabled.

- **Configuration Options:**
  - `enableButton` (default: `true`): Adds or removes the button for copying the short link.
  - `modifyUrl` (default: `true`): Enables or disables the automatic modification of the browser URL.
  - `popupDuration` (default: `1500`): Popup duration in milliseconds.
 
## Screenshots
- Example of the button below the product title:

![immagine](https://github.com/user-attachments/assets/1dac9578-a020-4e9b-a358-efbe0d23a622)

![immagine](https://github.com/user-attachments/assets/a781e1f9-e059-4dd4-b5e5-556954bc554d)

## Installation
1. Install a userscript manager such as [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://www.tampermonkey.net/).
2. Create a new script and copy the contents of `Amazon_URLShortener.js` into it.
3. Save the script and navigate to any Amazon product page to see it in action.

## Usage
1. Open an Amazon product page.
2. If the button feature is enabled (`enableButton = true`):
   - Find the button labeled either "Copy Short Link" (English) or "Copia Link Breve" (Italian) below the product title.
   - Click the button to copy the short link to your clipboard.
3. If the URL modification feature is enabled (`modifyUrl = true`):
   - The browser's address bar will automatically display the shortened URL.

## Examples
### Original URL:
```
https://www.amazon.it/Bticino-SFC810NC16-Magnetotermico-Cortocircuiti-Sovraccarichi/dp/B07P5GTP9J?someParams=true
```
### Shortened URL:
```
https://www.amazon.it/dp/B07P5GTP9J
```

### Original URL with `/gp/product/`:
```
https://www.amazon.it/gp/product/B09YV1V12P/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1
```
### Shortened URL:
```
https://www.amazon.it/dp/B09YV1V12P
```

## Configuration
You can configure the script by modifying the following variables at the top of the script:
- `const enableButton = true;`
  - Set to `false` to disable the button for copying the short link.
- `const modifyUrl = true;`
  - Set to `false` to prevent automatic modification of the browser URL.
- `const popupDuration = 1500;`
  - Popup duration in milliseconds.

## Compatibility
This script has been tested on the following browsers:
- ♡ Firefox ♡
- Chrome (not on all version, fuck you google)

Ensure you have a userscript manager installed for your browser.

## Localization
- **English:** The button text and alerts appear in English for non-Italian browsers.
- **Italiano:** Il testo del pulsante e gli avvisi appaiono in italiano per i browser impostati in lingua italiana.
