document.addEventListener("DOMContentLoaded", () => {
  const postButton = document.getElementById("post-button");
  const postContent = document.getElementById("post-content");
  const feedItems = document.querySelector(".feed-items");

  postButton.addEventListener("click", () => {
    const content = postContent.value.trim();

    if (content) {
      const newPost = document.createElement("div");
      newPost.classList.add("feed-item");
      newPost.innerHTML = `
        <div class="feed-header">
          <img src="images/user-default.jpg" alt="User Avatar">
          <h4>You</h4>
        </div>
        <div class="feed-content">
          <p>${content}</p>
        </div>
        <div class="feed-actions">
          <button class="like-button"><i class="fas fa-heart"></i> Like</button>
          <button class="comment-button"><i class="fas fa-comment"></i> Comment</button>
        </div>
        <div class="comments">
          <input type="text" placeholder="Write a comment...">
        </div>
      `;
      feedItems.prepend(newPost);
      postContent.value = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    alert("Please log in to access the feed.");
    window.location.href = "login.html";
  }

  // Optional: Verify token on page load
  fetch("http://localhost:3000/feed", {
    headers: { Authorization: token },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Unauthorized access");
      }
    })
    .catch(() => {
      alert("Unauthorized access. Please log in again.");
      localStorage.removeItem("authToken");
      window.location.href = "login.html";
    });
});
