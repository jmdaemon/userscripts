
// ==UserScript==
// @name        desuarchive-download
// @namespace   Desuarchive Download
// @description Download files from Desuarchive with filename
// @match       https://desuarchive.org/*
// @version     0.2.0
// @author      Joseph Diza
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @grant       GM_addStyle
// ==/UserScript==

(function () {
'use strict';

function downloadFile(url, fileName) {
  fetch(url, {
    method: 'get',
    mode: 'no-cors',
    referrerPolicy: 'no-referrer'
  }).then(function (res) {
    return res.blob();
  }).then(function (res) {
    var aElement = document.createElement('a');
    aElement.setAttribute('download', fileName);
    var href = URL.createObjectURL(res);
    aElement.href = href;
    aElement.setAttribute('target', '_blank');
    aElement.click();
    URL.revokeObjectURL(href);
  });
}

function downloadWithFilename(event) {
  var btn_download = event.currentTarget;
  var postToolbar = btn_download.parentElement;
  var imageElement = postToolbar.querySelector('[download]');
  var source = imageElement.href;
  var filename = imageElement.download;
  downloadFile(source, filename);
}

var css_class_post_toolbar = '.post_file_controls';
var toolbar_file_posts = document.querySelectorAll(css_class_post_toolbar);

for (var postIndex = 0; postIndex < toolbar_file_posts.length; postIndex++) {
  // Create the button
  var btn_download = document.createElement('a');
  btn_download.classList.add('btnr', 'parent');
  btn_download.textContent = 'Download'; // Register the callback

  btn_download.addEventListener('click', downloadWithFilename, true); // Add the btn to every post

  var postToolbar = toolbar_file_posts[postIndex];
  postToolbar.append(btn_download);
}

})();
