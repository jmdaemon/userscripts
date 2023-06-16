
// Keep track of clicked keys
var isKeyPressed = {
    'd': false, // ASCII code for 'b'
};

document.onkeydown = (keyDownEvent) => {
 //Prevent default key actions, if desired
 keyDownEvent.preventDefault();

  // Track down key click
 isKeyPressed[keyDownEvent.key] = true;

  if (isKeyPressed['d'] && keyDownEvent.ctrlKey) {
    var download_btn = document.querySelectorAll('a[title="Download (tags in filename)"]')[0];
    download_btn.click();
  }
};

document.onkeyup = (keyUpEvent) => {

 // Prevent default key actions, if desired
 keyUpEvent.preventDefault();

 // Track down key release
 isKeyPressed[keyDownEvent.key] = false;
};

//document.querySelectorAll('a[title="Download (tags in filename)"]');
