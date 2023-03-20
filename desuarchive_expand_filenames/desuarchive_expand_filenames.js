var post_image_filenames = document.querySelectorAll('.post_file_filename');

/*
Needs to be lazy expanded
function expand_filename(post) {
  var title = post.title;
  var folded_title = post.childNodes.innerHTML;
  post.innerHTML = title;
}
*/

function get_element_text(element) {
  var text = element.innerText || element.textContent;
  return text;
}

//const expand_filename = (post) => {
const expand_filename = (event) => {
  console.log('[expand_filename]');

  var post = event.currentTarget.post;
  console.log(event.currentTarget);

  console.log(post);
  var title = post.title;

  //var folded = post.childNodes.innerHTML;
  //post.folded = folded;

  //var folded = get_element_text(post.childNodes);
  //post.folded = folded;

  //var folded = post.childNodes.text;
  //post.folded = folded;

  var folded = post.childNodes.data;
  post.folded = folded;

  console.log('Folded: ' + folded);

  post.innerHTML = title;
}

const fold_filename = (event) => {
  console.log('[fold_filename]');
  console.log(event);

  var target = event.target;
  console.log(target);

  var post = target.post;
  console.log(post);

  var folded = post.folded;
  console.log(folded);

  target.innerHTML = folded;
}

for (index in post_image_filenames) {
  var post = post_image_filenames[index];
  
  console.log(post);
	console.log(post.childNodes);
  
  post.addEventListener("mouseover", expand_filename);
  post.addEventListener("mouseout", fold_filename);
  post.post = post;
}
