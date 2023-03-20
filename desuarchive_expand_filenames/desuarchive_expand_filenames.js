//const expand_filename = (post) => {
const expand_filename = (event) => {
  console.log('[expand_filename]');

  var post = event.currentTarget;
  console.log(event.currentTarget);

  console.log(post);
  var title = post.title;

  //var folded = post.childNodes.innerHTML;
  //post.folded = folded;

  //var folded = get_element_text(post.childNodes);
  //post.folded = folded;

  //var folded = post.childNodes.text;
  //post.folded = folded;

  //var folded = post.childNodes.data;
  //post.folded = folded;

  //console.log('Folded: ' + folded);

  post.innerHTML = title;
}

const fold_filename = (event) => {
  console.log('[fold_filename]');
  console.log(event);

  var post = event.target;
  console.log(post);

  var folded = post.folded;
  console.log(folded);

  post.innerHTML = folded;
}

function init() { 
  var post_image_filenames = document.querySelectorAll('.post_file_filename');
  console.log('[init]');
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
