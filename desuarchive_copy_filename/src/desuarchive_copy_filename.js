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
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

//const copy_filename = (event) => {
function copy_filename(event) {
  console.log(event);
  //let post = event.currentTarget
  console.log(event.target);
  console.log(event.target.parentNode.parentNode);
  let parent = event.target.parentNode.parentNode;
  //let post = parent.closest('.post_file_filename')
  let post = parent.childNodes[3];
  let filename = post.title;
  console.log(filename);
  copy_to_clipboard(filename);
  console.log(`Copied ${filename} to clipboard!`);
}

function init() { 
  const css_class_post_toolbar = '.post_file_controls';
  const toolbar_file_posts = document.querySelectorAll(css_class_post_toolbar);

  let postIndex = 0;
  for (postIndex in toolbar_file_posts) {
    // Create the button
    let btn_copy = document.createElement('a');
    btn_copy.classList.add('btnr', 'parent');
    btn_copy.textContent = 'Copy';
    
    // Register the callback
    btn_copy.addEventListener('click', copy_filename, true);

    // Add the btn to every post
    let postToolbar = toolbar_file_posts[postIndex];
    postToolbar.append(btn_copy);
  }
}
init();
