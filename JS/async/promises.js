// const posts = [
//   { title: "Post one", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;
//       !error ? resolve() : reject("Error: Something went wrong");
//     }, 2000);
//   });
// }

// createPost({ title: "Post three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async / await
// async function init() {
//   await createPost({ title: "Post three", body: "This is post three" });
//   getPosts();
// }

// init();

// Async / await with fetch
// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }

// fetchUsers();

// * Testing with the Fetch API
// function getInfo() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       res.ok ? console.log("Success") : console.log("Not successful");
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// getInfo();

// Promise.all
// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     res.json();
//   })
//   .catch((err) => console.log(err));

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });
