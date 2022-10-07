/*
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
*/

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
  var btn_download = event.currentTarget;
  var postToolbar = btn_download.parentElement;
  var imageElement = postToolbar.querySelector('[download]');
  console.log(imageElement);
  
  // console.log(imageElement.dataset);
  var source = imageElement.href;
  var filename = imageElement.download;
  console.log(`Source: ${source}\nFilename: ${filename}`);
  
  downloadFile(source, filename);
}

var css_class_post_toolbar = '.post_file_controls';
var css_class_post_filename = '.post_file_filename';

var toolbar_file_posts = document.querySelectorAll(css_class_post_toolbar);
var toolbar_file_post_filenames = document.querySelectorAll(css_class_post_filename);

console.log(`Post Toolbar: ${toolbar_file_posts.length}`)
console.log(toolbar_file_posts);
console.log(`Post Filenames: ${toolbar_file_post_filenames.length}`)
console.log(toolbar_file_post_filenames);

// Register the callback
// document.addEventListener('click', downloadWithFilename);

for (var postIndex = 0; postIndex < toolbar_file_posts.length; postIndex++) {
  // Make the button
  var btn_download = document.createElement('a');
  btn_download.classList.add('btnr', 'parent');
  btn_download.textContent = 'Download';
  // TODO: Add actual button with icon
  // var btn_download_icon = document.createElement('i');
  // btn_download_icon.classList.add('icon-download-alt');
  // btn_download.append(btn_download_icon)
  
  // Add the callback
  btn_download.addEventListener('click', downloadWithFilename, true);
  console.log(btn_download);

  // Add the btn to every post
  
  // toolbar_file_posts[postIndex].append(btn_download);
  var postToolbar = toolbar_file_posts[postIndex];
  var postFilename = toolbar_file_post_filenames[postIndex];
  //insertAfter(postFilename, btn_download);
  postToolbar.append(btn_download);
}