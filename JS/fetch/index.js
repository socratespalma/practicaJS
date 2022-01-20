const getTextBtn = document.getElementById('getText');
const getUsersBtn = document.getElementById('getUsers');
const getPostsBtn = document.getElementById('getPosts');
const outputContainer = document.getElementById('output');
const submitPostForm = document.getElementById('addPost');
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
/**
 * This is a function that returns data from a .txt file
 * @returns {Promise} A promise
 */
const getText = () =>
  fetch('../../sample.txt')
    .then((res) => res.text())
    .then((data) => {
      outputContainer.textContent = data;
    })
    .catch((err) => {
      console.log(err);
    });

/**
 * This is a function that returns data from a .json file
 * @returns {Promise} A promise
 */
const getUsers = () =>
  fetch('../../users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Users</h2>';
      data.map((user) => {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
        </ul>`;
        // return output;
      });
      outputContainer.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });

const getPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
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

/**
 * A function that makes a post request to add a post to an external API
 * @param {*} e An event
 * @returns {Promise} A promise
 */
const addPost = (e) => {
  e.preventDefault();
  const title = document.getElementById('title');
  const body = document.getElementById('body');
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => {
      res.ok ? alert('success') : alert('error');
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

getTextBtn.addEventListener('click', getText);
getUsersBtn.addEventListener('click', getUsers);
getPostsBtn.addEventListener('click', getPosts);
submitPostForm.addEventListener('submit', addPost);
