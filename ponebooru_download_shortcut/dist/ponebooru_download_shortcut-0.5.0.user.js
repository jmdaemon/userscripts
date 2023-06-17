
// ==UserScript==
// @name        Ponebooru Download Shortcut
// @namespace   Ponebooru Download Shortcut
// @description Adds a ctrl+d shortcut to download images on various pony boorus
// @include     *://ponerpics.org/*
// @include     *://twibooru.org/*
// @include     *://ponybooru.org/*
// @include     *://derpibooru.org/*
// @updateURL   https://github.com/jmdaemon/userscripts/raw/master/ponebooru_download_shortcut/dist/ponebooru_download_shortcut.user.js
// @downloadURL https://github.com/jmdaemon/userscripts/raw/master/ponebooru_download_shortcut/dist/ponebooru_download_shortcut.user.js
// @version     0.5.0
// @author      
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @grant       GM_addStyle
// ==/UserScript==

(function () {
'use strict';

// Keep track of clicked keys
var isKeyPressed = {
  'd': false // ASCII code for 'd'
};

const DOWNLOAD_BTN_SELECTOR = 'a[title="Download (tags in filename)"]';
function download_via_shortcut(e) {
  // Track down key click
  isKeyPressed[e.key] = true;
  if (isKeyPressed['d'] && e.ctrlKey) {
    e.stopImmediatePropagation(); // Buy time to run next command
    e.preventDefault(); // Prevent browser keyboard shortcut from executing

    var download_btn = document.querySelectorAll(DOWNLOAD_BTN_SELECTOR)[0];
    download_btn.click();
  }
}
document.onkeydown = download_via_shortcut;

// Reset event handling
document.onkeyup = e => {
  isKeyPressed[e.key] = false;
};

})();
