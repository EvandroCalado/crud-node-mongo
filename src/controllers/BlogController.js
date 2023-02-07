const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../services/BlogService');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json({ data: blogs, status: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await getBlogById(req.params.id);
    res.json({ data: blog, status: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await createBlog(req.body);
    res.json({ data: blog, status: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await deleteBlog(req.params.id);
    res.json({ data: blog, status: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
