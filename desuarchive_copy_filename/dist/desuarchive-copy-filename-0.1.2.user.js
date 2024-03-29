
// ==UserScript==
// @name        Desuarchive Copy Filename
// @namespace   Desuarchive Copy Filename
// @description Button to copy post filenames
// @include     *://desuarchive.org/*
// @updateURL   https://github.com/jmdaemon/userscripts/raw/master/ponebooru_download_shortcut/dist/ponebooru_download_shortcut.user.js
// @downloadURL https://github.com/jmdaemon/userscripts/raw/master/ponebooru_download_shortcut/dist/ponebooru_download_shortcut.user.js
// @version     0.1.2
// @author      
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @grant       GM_addStyle
// ==/UserScript==

(function () {
'use strict';

var src = {};

function fallback_copy_to_clipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }
  document.body.removeChild(textArea);
}
function copy_to_clipboard(text) {
  if (!navigator.clipboard) {
    fallback_copy_to_clipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function () {
    console.log('Async: Copying to clipboard was successful!');
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}
function copy_filename() {
  var post = parent.childNodes[3];
  var filename = post.title;
  copy_to_clipboard(filename);
  console.log("Copied \"" + filename + "\" to clipboard!");
}
function init() {
  var css_class_post_toolbar = '.post_file_controls';
  var toolbar_file_posts = document.querySelectorAll(css_class_post_toolbar);
  var postIndex = 0;
  for (postIndex in toolbar_file_posts) {
    // Create the button
    var btn_copy = document.createElement('a');
    btn_copy.classList.add('btnr', 'parent');
    btn_copy.textContent = 'Copy';

    // Register the callback
    btn_copy.addEventListener('click', copy_filename, true);

    // Add the btn to every post
    var postToolbar = toolbar_file_posts[postIndex];
    postToolbar.append(btn_copy);
  }
}
init();

return src;

})();
