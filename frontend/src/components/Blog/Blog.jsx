/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Button from "@mui/material/Button";
import comment from "../../assets/comment.svg";
import Comment from "../Comment/Comment";
import { TextField, TextareaAutosize } from "@mui/material";
import style from "./Blog.module.css";
import { useState } from "react";
import {
  postNewComment,
  getBlogComment,
  updateBlog,
  deleteBlog,
  deleteAllComments,
} from "../../api/api";
import { useSnackbar } from "notistack";

const Blog = ({ data, fetchBlogs }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const [newCo, setNewCo] = useState({ text: "" });
  const [getCommentsArray, setCommentArray] = useState([]);
  const [updatetheBlog, setUpdateBlog] = useState({ text: "", bool: false });

  const deleteTheBlog = async (id) => {
    try {
      await deleteBlog(id); // delete the blog
      await deleteAllComments(id); // delete the comments realted to blog

      enqueueSnackbar("blog deleted", {
        variant: "success",
      });
      return fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const updateBlogfn = async (id, text) => {
    try {
      const updateData = { text: text };
      setUpdateBlog({ text: "", bool: false });

      const res = await updateBlog(id, updateData);
      enqueueSnackbar("blog updated", {
        variant: "success",
      });
      return fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewCo((prev) => ({ ...prev, [name]: value }));
  };
  const handleBlogChange = (e) => {
    let { name, value } = e.target;
    setUpdateBlog((prev) => ({ ...prev, [name]: value }));
  };

  const getAllComments = async (id) => {
    try {
      const res = await getBlogComment(id); //blogId
      return res.data; //{}
    } catch (error) {
      console.error;
    }
  };

  const showComments = async (id, bool = true) => {
    if (bool) setShow(!show);

    const fetch = await getAllComments(id);
    // console.log(fetch.commentData);
    setCommentArray(fetch.commentData); //[{},{}array of objects]
  };

  const newComment = async (id) => {
    try {
      let data = {
        text: newCo.text,
      };
      if (!data.text.length) {
        enqueueSnackbar("enter some comment before pressing comment button", {
          variant: "warning",
        });
      }
      const res = await postNewComment(data, id);
      // return res;
      setNewCo((prev) => ({ ...prev, text: "" }));
      return await showComments(id, false); // refetch all comments ;
      //
    } catch (error) {
      console.error;
    }
  };

  const cancelComment = async () => {
    setNewCo((prev) => ({ ...prev, text: "" }));
  };
  const cancelUpdateBlog = async () => {
    setUpdateBlog((prev) => ({ ...prev, bool: false }));
  };

  const updateBlogBtn = async () => {
    setUpdateBlog((prev) => ({ ...prev, bool: true }));
  };

  const authorized = (userId) => {
    const logInId = localStorage.getItem("uid");
    if (userId === logInId) return true;
    // if loginuserid is same as bloguserid then give permession to edit and delete
    return false;
  };

  return (
    <div className={style.blog} key={data._id}>
      <div className={style.username}>
        <p key={data.userId}>{data.username}</p>
        <div className={style.editDeleteBtn}>
          {authorized(data.userId) ? (
            <>
              <Button variant="contained" onClick={updateBlogBtn}>
                edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteTheBlog(data._id)}
              >
                delete
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {updatetheBlog.bool ? (
        //check is the user is authorized to make change userid checkk ?
        <div className={style.newComment}>
          <TextareaAutosize
            className={style.newBlogTxt}
            aria-label="empty textarea"
            defaultValue={data.text}
            minRows={4}
            style={{ width: "100%" }}
            name="text"
            // value={updatetheBlog.text}
            onChange={handleBlogChange}
          />
          <div className={style.newCommentBtn}>
            <Button
              variant="text"
              style={{ color: "white" }}
              onClick={cancelUpdateBlog}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
              }}
              onClick={() => updateBlogfn(data._id, updatetheBlog.text)} // username ki jarurat nhi h//only blog id
            >
              update
            </Button>
          </div>
        </div>
      ) : (
        <div className={style.blogTxt}>{data.text}</div>
      )}

      <div className={show ? style.commentSection_1 : style.commentSection}>
        <div className={style.btns}>
          <Button
            className={style.expandComments}
            onClick={() => showComments(data._id)}
          >
            {show ? <>❌</> : <img src={comment} alt="comments" />}
          </Button>
        </div>

        {show ? (
          <div className={style.comment_subSection}>
            {getCommentsArray.map((comment) => (
              <Comment data={comment} key={comment._id} /> //ye reh gya h ;
            ))}
            <div className={style.newComment}>
              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="add new comment..."
                variant="standard"
                value={newCo.text}
                name="text"
                onChange={handleChange}
              />
              <div className={style.newCommentBtn}>
                <Button
                  variant="text"
                  style={{ color: "white" }}
                  onClick={cancelComment}
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                  }}
                  onClick={() => newComment(data._id)} // username ki jarurat nhi h//only blog id
                >
                  comment
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Blog;
