const posts = [
  {
    day: "Sunday",
    date: "2024-10-12",
    taskname: "Finish Mini Project",
    task: "Prepare for çPresentation",
    id: 6,
    updated: true,
  },
  {
    day: "Monday",
    date: "2024-10-14",
    taskname: "Mini Project Due 6pm",
    task: "Presentation",
    id: 1,
    updated: false,
  },
  {
    day: "Friday",
    date: "2024-10-18",
    taskname: "Team Meeting 10am",
    task: "Weekly Meeting - Prepare Stats",
    id: 2,
    updated: false,
  },
  {
    day: "Tuesday",
    date: "2024-10-15",
    taskname: "Lunch with Bestie 1pm",
    task: "Have FUN!",
    id: 3,
    updated: false,
  },
  {
    day: "Friday",
    date: "2024-10-25",
    taskname: "Project",
    task: "Complete first day reporting",
    id: 4,
    updated: false,
  },
  {
    day: "Thursday",
    date: "2024-10-24",
    taskname: "Project Starts",
    task: "Preparation",
    id: 5,
    updated: false,
  },
];

const getPosts = () => {
  return posts;
};

const addPost = (post) => {
  const nextId =
    posts.length === 0 ? 1 : Math.max(...posts.map((post) => post.id)) + 1;
  const resultPost = { ...post, id: nextId, updated: false };
  posts.push(resultPost);
  return resultPost;
};

const changePostStatus = (id) => {
  const idIndex = posts.findIndex((post) => post.id == id);
  if (idIndex < 0) throw new Error("Post not found");
  posts.splice(idIndex, 1);
};

const updatePostState = (id, updated) => {
  const post = posts.find((p) => p.id == id);
  if (post) {
    post.updated = updated;
  } else {
    throw new Error("Post not found");
  }
};


module.exports = {
  getPosts,
  addPost,
  changePostStatus,
  updatePostState,
};
