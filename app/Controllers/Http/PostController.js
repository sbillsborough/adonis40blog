"use strict";

class PostController {
  async index({ view }) {
    return view.render("posts.index", {
      title: "Latest Posts",
    });
  }
}

module.exports = PostController;

// if a view is inside of a folder then use the dot notation to access it eg. "posts.index"
