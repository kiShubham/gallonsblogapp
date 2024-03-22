/* eslint-disable react/prop-types */
import style from "./Comment.module.css";

const Comment = ({ comments = "a" }) => {
  return (
    <>
      {comments.length ? (
        <div className={style.comment}>
          <div className={style.commentUser}>Username</div>
          <div className={style.txt}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur distinctio obcaecati voluptate totam praesentium
            debitis.
          </div>
        </div>
      ) : (
        <>be first to comment</>
      )}
    </>
  );
};

export default Comment;
