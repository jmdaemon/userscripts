function downloadFile(url, fileName) {
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });
};

function downloadWithFilename(event) {
  let btn_download = event.currentTarget;
  let postToolbar = btn_download.parentElement;
  let imageElement = postToolbar.querySelector('[download]');
  console.log(imageElement);
  
  let source = imageElement.href;
  let filename = imageElement.download;
  console.log(`Source: ${source}\nFilename: ${filename}`);
  
  downloadFile(source, filename);
}

const css_class_post_toolbar = '.post_file_controls';
const toolbar_file_posts = document.querySelectorAll(css_class_post_toolbar);
console.log(`Post Toolbar: ${toolbar_file_posts.length}`)
console.log(toolbar_file_posts);

for (let postIndex = 0; postIndex < toolbar_file_posts.length; postIndex++) {
  // Create the button
  let btn_download = document.createElement('a');
  btn_download.classList.add('btnr', 'parent');
  btn_download.textContent = 'Download';
  
  // Register the callback
  btn_download.addEventListener('click', downloadWithFilename, true);
  console.log(btn_download);

  // Add the btn to every post
  let postToolbar = toolbar_file_posts[postIndex];
  postToolbar.append(btn_download);
}
