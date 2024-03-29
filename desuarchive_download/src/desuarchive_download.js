function downloadWithFilename(event) {
  let btn_download = event.currentTarget;
  let postToolbar = btn_download.parentElement;
  let imageElement = postToolbar.querySelector('[download]');
  
  let source = imageElement.href;
  let filename = imageElement.download;
  
  GM_download(source, filename);
}

function main() {
  const css_class_post_toolbar = '.post_file_controls';
  const toolbar_file_posts = document.querySelectorAll(css_class_post_toolbar);

  for (let postIndex = 0; postIndex < toolbar_file_posts.length; postIndex++) {
    // Create the button
    let btn_download = document.createElement('a');
    btn_download.classList.add('btnr', 'parent');
    btn_download.textContent = 'Download';
    
    // Register the callback
    btn_download.addEventListener('click', downloadWithFilename, true);

    // Add the btn to every post
    let postToolbar = toolbar_file_posts[postIndex];
    postToolbar.append(btn_download);
  }
}
main();
