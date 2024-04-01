/* eslint-disable no-unused-vars */
import style from "./BlogPage.module.css";
import Button from "@mui/material/Button";
import Header from "../Header/Header";
import { TextareaAutosize } from "@mui/material";
import Blog from "../Blog/Blog";
import { fetchAllblogs, postNewBlog } from "../../api/api";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogArray, setBlogArray] = useState([]);

  const [newBlogTxt, setNewBlogTxt] = useState({
    text: "",
  });

  const handleTextInput = (e) => {
    const { name, value } = e.target;
    setNewBlogTxt((prev) => ({ ...prev, [name]: value }));
  };

  const getAllblogs = async () => {
    try {
      const res = await fetchAllblogs();
      return setBlogArray(res.data.blogData);
      // return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const callFn = async () => {
      const fetch = await getAllblogs();
    };
    callFn();
  }, []);

  const newBlog = async () => {
    try {
      const data = {
        text: newBlogTxt.text,
      };
      setNewBlogTxt({
        text: "",
      });
      // console.log(data);
      const res = await postNewBlog(data);
      // console.log(res);
      // now fetch all latest posted blogs
      return await getAllblogs();
    } catch (error) {
      console.error(error);
    }
  };

  const cancelNewBlog = () => {
    setNewBlogTxt({ text: "" });
  };

  return (
    <div className={style.blogPage}>
      <Header isLoggedIn={true} />

      <div className={style.newBlog}>
        <TextareaAutosize
          className={style.newBlogTxt}
          aria-label="empty textarea"
          placeholder="add new Blog..."
          minRows={3}
          name="text"
          value={newBlogTxt.text}
          onChange={handleTextInput}
        />

        <div className={style.newCommentBtn}>
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={cancelNewBlog}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "white", border: "none", color: "black" }}
            onClick={newBlog}
          >
            post new Blog
          </Button>
        </div>
      </div>
      {blogArray.map((blog) => (
        <Blog key={blog._id} data={blog} fetchBlogs={getAllblogs} />
      ))}
    </div>
  );
};

export default BlogPage;
