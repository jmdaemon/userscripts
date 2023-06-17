// Keep track of clicked keys
var isKeyPressed = {
    'd': false, // ASCII code for 'd'
};

const DOWNLOAD_BTN_SELECTOR = 'a[title="Download (tags in filename)"]';

function download_via_shortcut(e) {
  // Track down key click
  isKeyPressed[e.key] = true;

  if (isKeyPressed['d'] && e.ctrlKey) {
    // Disable browser shortcuts temporarily
    e.stopImmediatePropagation();

    var download_btn = document.querySelectorAll(DOWNLOAD_BTN_SELECTOR)[0];
    download_btn.click();
  }
}

document.onkeydown = download_via_shortcut;

// Reset event handling
document.onkeyup = (e) => {
  isKeyPressed[e.key] = false;
};
