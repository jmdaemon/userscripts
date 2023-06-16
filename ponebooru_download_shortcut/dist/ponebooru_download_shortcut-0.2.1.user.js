
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
// @version     0.2.1
// @author      
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @grant       GM_addStyle
// ==/UserScript==

(function () {
'use strict';

// Keep track of clicked keys
var isKeyPressed = {
  'd': false // ASCII code for 'b'
};

document.onkeydown = keyDownEvent => {
  //Prevent default key actions, if desired
  keyDownEvent.preventDefault();

  // Track down key click
  isKeyPressed[keyDownEvent.key] = true;
  if (isKeyPressed['d'] && keyDownEvent.ctrlKey) {
    var download_btn = document.querySelectorAll('a[title="Download (tags in filename)"]')[0];
    download_btn.click();
  }
};
document.onkeyup = keyUpEvent => {
  // Prevent default key actions, if desired
  keyUpEvent.preventDefault();

  // Track down key release
  isKeyPressed[keyDownEvent.key] = false;
};

//document.querySelectorAll('a[title="Download (tags in filename)"]');

})();
