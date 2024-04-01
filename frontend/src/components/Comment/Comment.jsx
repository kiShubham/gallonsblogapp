/* eslint-disable react/prop-types */
import style from "./Comment.module.css";

const Comment = ({ data }) => {
  return (
    <>
      {data ? (
        <div className={style.comment}>
          <div className={style.commentUser}>{data.username}</div>
          <div className={style.txt}>{data.text}</div>
        </div>
      ) : (
        <>be first to comment</>
      )}
    </>
  );
};

export default Comment;
