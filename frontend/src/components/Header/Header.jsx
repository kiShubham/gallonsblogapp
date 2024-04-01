/* eslint-disable react/prop-types */
import style from "./Header.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Header = ({ isLoggedIn }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const blogNowBtn = () => {
    window.alert("button clicked");
  };
  const logoutFn = async () => {
    localStorage.clear();
    navigate("/");
    enqueueSnackbar("User logged out successfully", { variant: "success" });
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
            onClick={logoutFn}
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
