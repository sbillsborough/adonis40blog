"use strict";

class PostController {
  async index({ view }) {
    const posts = [
      { title: "Post One", body: "This is post one" },
      { title: "Post Two", body: "This is post two" },
      { title: "Post Three", body: "This is post three" },
    ];

    return view.render("posts.index", {
      title: "Latest Posts",
      posts: posts,
    });
  }
}

module.exports = PostController;

// if a view is inside of a folder then use the dot notation to access it eg. "posts.index"
