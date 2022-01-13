const getTextBtn = document.getElementById("getText");
const getUsersBtn = document.getElementById("getUsers");
const getPostsBtn = document.getElementById("getPosts");
const outputContainer = document.getElementById("output");
const submitPostForm = document.getElementById("addPost");

/**
 * This is a function that returns data from a .txt file
 * @returns {Promise} A promise
 */
const getText = () => {
  return fetch("../../sample.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      outputContainer.textContent = data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * This is a function that returns data from a .json file
 * @returns {Promise} A promise
 */
const getUsers = () => {
  return fetch("../../users.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "<h2 class='mb-4'>Users</h2>";
      data.map((user) => {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
        </ul>`;
      });
      outputContainer.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "<h2 class='mb-4'>Posts</h2>";
      data.map((post) => {
        output += `
            <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>`;
      });
      outputContainer.innerHTML = output;
    })
    .catch((err) => console.log(err));
};

/**
 * A function that makes a post request to add a post to an external API
 * @param {*} e An event
 * @returns {Promise} A promise
 */
const addPost = (e) => {
  e.preventDefault();
  let title = document.getElementById("title");
  let body = document.getElementById("body");
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  })
    .then((res) => {
      res.ok ? alert("success") : alert("error");
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

getTextBtn.addEventListener("click", getText);
getUsersBtn.addEventListener("click", getUsers);
getPostsBtn.addEventListener("click", getPosts);
submitPostForm.addEventListener("submit", addPost);
