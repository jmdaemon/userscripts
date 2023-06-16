
// ==UserScript==
// @name        desuarchive-expand-filenames
// @namespace   Desuarchive Expand Filenames
// @description Expand post filenames on mouse hover
// @include     *://desuarchive.org/*
// @updateURL   https://github.com/jmdaemon/userscripts/raw/master/ponebooru_download_shortcut/dist/ponebooru_download_shortcut.user.js
// @downloadURL https://github.com/jmdaemon/userscripts/raw/master/ponebooru_download_shortcut/dist/ponebooru_download_shortcut.user.js
// @version     0.1.1
// @author      
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @grant       GM_addStyle
// ==/UserScript==

(function () {
'use strict';

var src = {};

var expand_filename = function expand_filename(event) {
  console.log('[expand_filename]');
  var post = event.currentTarget;
  console.log(event.currentTarget);
  console.log(post);
  var title = post.title;
  post.innerHTML = title;
};
var fold_filename = function fold_filename(event) {
  console.log('[fold_filename]');
  console.log(event);
  var post = event.target;
  console.log(post);
  var folded = post.folded;
  console.log(folded);
  post.innerHTML = folded;
};
function init() {
  var post_image_filenames = document.querySelectorAll('.post_file_filename');
  console.log('[init]');
  var index = 0;
  for (index in post_image_filenames) {
    var post = post_image_filenames[index];

    // Debug messages
    console.log(post);
    console.log(post.childNodes);
    post.addEventListener("mouseover", expand_filename);
    post.addEventListener("mouseout", fold_filename);

    // Save the current folded text
    var folded = post.innerHTML;
    console.log(folded);
    post.folded = folded;
  }
}
init();

return src;

})();
