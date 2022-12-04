let form = document.getElementById('form');
let input = document.getElementById('input');
let message = document.getElementById('message');
let posts = document.getElementById('posts');

// Handling the submit button
form.addEventListener("submit",(event) => {
  event.preventDefault();
  console.log("submit button clicked");
  formValidation();
});

// Form validation doing here
let formValidation = () => {
  if(input.value === ""){
    console.log("form not submit");
    message.innerText = "Post can not be blank!"
  }else{
    console.log("form submit successfully");
    message.innerHTML="";
    // invoking the data acceptor to store post data
    acceptData();

  }
} 


//Accept and store each new post submit
let data ={};
let acceptData = () => {
  //hold the user input post
  data["msg"] = input.value;
  console.log(data);
  //invoking createPost() to upload post on screen
  createPost();
}

// create post form received data and show on screen
// here using our post templet to show message
let createPost = () => {
  posts.innerHTML += 
  `<div>
    <p> ${data.msg} </p>
    <span class="options">
      <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
  </div>`
  //reset here input area after each succesful post
  input.value = "";
}

//handle delete event here
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
}

// handle edit post here 
let editPost = (e) => {
  // console.log(e.parentElement.previousElementSibling);
  input.value = e.parentElement.previousElementSibling.innerHTML;
  // console.log(input.value);
  //removing this old post
  e.parentElement.parentElement.remove();

}






