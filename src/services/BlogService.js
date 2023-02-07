const Blog = require('../models/Blog');

exports.getAllBlogs = async () => {
  return await Blog.find();
};

exports.getBlogById = async (id) => {
  return Blog.findById(id);
};

exports.createBlog = async (blog) => {
  return await Blog.create(blog);
};

exports.updateBlog = async (id, blog) => {
  return await Blog.findByIdAndUpdate(id, blog);
};

exports.deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};
