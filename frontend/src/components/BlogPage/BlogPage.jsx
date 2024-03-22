import style from "./BlogPage.module.css";
import Button from "@mui/material/Button";
import comment from "../../assets/comment.svg";
import Comment from "../Comment/Comment";
import Header from "../Header/Header";
import { useState } from "react";
import { TextField } from "@mui/material";

const BlogPage = () => {
  const [show, setShow] = useState(true);
  const showComments = () => {
    setShow(!show);
  };

  return (
    <div className={style.blogPage}>
      <Header isLoggedIn={true} />

      <div className={style.newBlog}>
        <TextField
          style={{ width: "100%" }}
          id="standard-basic"
          label="add new Blog..."
          variant="standard"
        />
        <div className={style.newCommentBtn}>
          <Button variant="text" style={{ color: "white" }}>
            cancel
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "white", border: "none", color: "black" }}
          >
            post new Blog
          </Button>
        </div>
      </div>

      <div className={style.blog}>
        <div className={style.username}>username</div>
        <div className={style.blogTxt}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          delectus nam corrupti? Sed doloremque fugit qui reprehenderit culpa
          nemo voluptatum. Officiis corrupti vero amet nostrum non accusantium
          dolore molestiae dignissimos.
        </div>
        <div className={style.commentSection}>
          <div className={style.btns}>
            <Button className={style.expandComments} onClick={showComments}>
              {show ? <>❌</> : <img src={comment} alt="comments" />}
            </Button>
          </div>

          {show ? (
            <div className={style.comment_subSection}>
              <Comment />
              <Comment />
              <div className={style.newComment}>
                <TextField
                  style={{ width: "100%" }}
                  id="standard-basic"
                  label="add new comment..."
                  variant="standard"
                />
                <div className={style.newCommentBtn}>
                  <Button variant="text" style={{ color: "white" }}>
                    cancel
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "black",
                    }}
                  >
                    post new Blog
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
