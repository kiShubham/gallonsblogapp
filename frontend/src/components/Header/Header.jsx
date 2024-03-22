/* eslint-disable react/prop-types */
import style from "./Header.module.css";
import Button from "@mui/material/Button";

const Header = ({ isLoggedIn }) => {
  const blogNowBtn = () => {
    window.alert("button clicked");
  };

  return (
    <div className={style.header}>
      <p>GallonsBlog</p>
      <div className={style.btn}>
        {isLoggedIn ? (
          <Button
            variant="contained"
            style={{
              borderRadius: "60px",
              backgroundColor: "white",
              border: "none",
              color: "black",
            }}
            onClick={blogNowBtn}
          >
            Log Out
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{
              borderRadius: "60px",
              backgroundColor: "white",
              border: "none",
              color: "black",
            }}
            onClick={blogNowBtn}
          >
            Blog Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
