let posts = [];

// Render posts function
function render() {
  document.querySelector("#card-list").innerHTML = "";

  // Sort posts by date
  posts.sort((a, b) => new Date(a.date) - new Date(b.date));

  posts.forEach((item) => {
    const template = document
      .getElementById("postTemplate")
      .content.cloneNode(true);
    template.querySelector(".card-day").innerText = item.day;
    template.querySelector(".card-date").innerText = formatDate(item.date);
    template.querySelector(".card-post-taskname").innerText = item.taskname;
    template.querySelector(".card-post-task").innerText = item.task;

    // Apply strikethrough if marked as done
    if (item.updated) {
      template.querySelector(".card-day").style.textDecoration = "line-through";
      template.querySelector(".card-date").style.textDecoration =
        "line-through";
      template.querySelector(".card-post-taskname").style.textDecoration =
        "line-through";
      template.querySelector(".card-post-task").style.textDecoration =
        "line-through";
    }

    // Event listener for "Done" button
    template.querySelector(".card-strike").addEventListener("click", () => {
      item.updated = !item.updated;

      // Update the backend with the new updated state
      fetch(`/posts/${item.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updated: item.updated }),
      })
        .then(() => render())
        .catch((error) => console.error("Error updating post:", error));
    });

    // Event listener for "Delete" button
    template.querySelector(".card-delete").addEventListener("click", () => {
      fetch(`/posts/${item.id}`, {
        method: "DELETE",
      })
        .then(() => {
          // Remove the post from the local array
          posts = posts.filter((post) => post.id !== item.id);
          render(); // Re-render the posts after deletion
        })
        .catch((error) => console.error("Error deleting post:", error));
    });
    document.querySelector("#card-list").appendChild(template);
  });

  // Update the total count of non-deleted posts
  const OutstandingCount = countOutstandingPosts();
  document.getElementById(
    "OutstandingCount"
  ).innerText = `Outstanding number of tasks to do: ${OutstandingCount}`;
}

// Fetch existing posts
fetch("/posts")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  })
  .then((result) => {
    posts = result.result;
    render();
  })
  .catch((error) => {
    document.getElementById("errormessage").innerHTML = error.message;
  });

// Submit new post
function onPostSubmit(e) {
  e.preventDefault();
  const date = document.getElementById("firsttitle").value;
  const taskname = document.getElementById("bodyInput").value;
  const task = document.getElementById("body1Input").value;

  if (new Date(date) < new Date()) {
    document.getElementById("errormessage").innerHTML =
      "Date must be today or later!";
    return;
  }

  if (date === "" || taskname === "" || task === "") {
    document.getElementById("errormessage").innerHTML =
      "All fields are required!";
    return;
  }

  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.toLocaleString("en-US", { weekday: "long" });

  fetch("/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, day: dayOfWeek, taskname, task }),
  })
    .then((res) => res.json())
    .then((res) => {
      const post = res.result;
      posts.push(post);
      render();
      // Clear the form inputs
      document.getElementById("firsttitle").value = "";
      document.getElementById("bodyInput").value = "";
      document.getElementById("body1Input").value = "";
      document.getElementById("errormessage").innerHTML = "";
    });
}

// Format date
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
}

// Count outstanding posts
function countOutstandingPosts() {
  return posts.filter((post) => !post.updated).length;
}

function setMinDate() {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  document.getElementById("firsttitle").setAttribute("min", today -1);
}

// Call the function when the page loads
window.onload = setMinDate;


render();
