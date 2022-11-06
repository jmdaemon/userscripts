// ==UserScript==
// @name        Twitter Redirect
// @version     1.0
// @description Automatically redirects from twitter to nitter
// @match       https://twitter.com/*
// ==/UserScript==

(function() {
    const nitterInstance = 'nitter.net'
    location.href = `https://${nitterInstance}` + location.pathname // + '&' + location.search
})();
