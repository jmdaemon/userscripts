var post_image_filenames = document.querySelectorAll('.post_file_filename');

/*
Needs to be lazy expanded
function expand_filename(post) {
  var title = post.title;
  var folded_title = post.childNodes.innerHTML;
  post.innerHTML = title;
}
*/

//const expand_filename = (post) => {
const expand_filename = (event) => {
  var post = event.currentTarget.post;
  var title = post.title;
  var folded_title = post.childNodes.innerHTML;
  post.innerHTML = title;
}

for (index in post_image_filenames) {
  var post = post_image_filenames[index];
  
  console.log(post);
	console.log(post.childNodes);
  
	//post.addEventListener("mouseover", expand_filename(post));
  post.addEventListener("mouseover", expand_filename);
  post.post = post;
}
