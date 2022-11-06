// ==UserScript==
// @name        Redirect to nitter
// @version     1.0
// @description Automatically redirect from twitter to nitter
// @match       https://twitter.com/*
// ==/UserScript==

(function() {
    const nitterInstance = 'nitter.net'
    location.href = `https://${nitterInstance}` + location.pathname // + '&' + location.search
})();
