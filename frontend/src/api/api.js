import axios from "axios";

export const BACKEND_ENDPOINT = "http://localhost:5000"; //https abi nhi kiya backend me

// ==========================> Auth

export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${BACKEND_ENDPOINT}/auth/register`, data);
    return res; //{ message: "User registered successfully", userId: user._id }
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${BACKEND_ENDPOINT}/auth/login`, data);
    return res;
    //  {  message: "user login successfully",
    //   token: check.token,
    //   user: check.getUser,
    // }
  } catch (e) {
    console.error(e);
  }
};

//===========================> blogs routes
const token = localStorage.getItem("token");
const headerObj = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

export const fetchAllblogs = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${BACKEND_ENDPOINT}/blogs`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const postNewBlog = async (data) => {
  try {
    const res = await axios.post(`${BACKEND_ENDPOINT}/blogs`, data, headerObj);
    // userid is attaching automatically in backend;
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const updateBlog = async (id, updateData) => {
  try {
    const res = await axios.put(
      `${BACKEND_ENDPOINT}/blogs/${id}`,
      updateData,
      headerObj
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await axios.delete(
      `${BACKEND_ENDPOINT}/blogs/${id}`,
      headerObj
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

//  ===================> comment routes

export const postNewComment = async (data, blogId) => {
  try {
    const res = await axios.post(
      `${BACKEND_ENDPOINT}/comments/${blogId}`,
      data,
      headerObj
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getBlogComment = async (blogId) => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/comments/${blogId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//=================================================================================>endpoint
