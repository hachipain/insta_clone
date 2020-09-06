import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Core.module.css";
import { AppDispatch } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncNewPosts,
  selectOpenNewPost,
  fetchPostStart,
  fetchPostEnd,
  resetOpenNewPost,
} from "../post/postSlice";
import { File } from "../types";
import TextField from "@material-ui/core/TextField";
import { editNickName } from "../auth/authSlice";
import { IconButton } from "@material-ui/core";
import { MdAddAPhoto } from "react-icons/all";
import Button from "@material-ui/core/Button";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",

    width: 280,
    height: 220,
    padding: "50px",
    zIndex: 100,

    transform: "translate(-50%, -50%)",
  },
};

const NewPost: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const openNewPost = useSelector(selectOpenNewPost);

  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const handlerEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  const newPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const packet = { title: title, img: image };

    await dispatch(fetchPostStart());
    await dispatch(fetchAsyncNewPosts(packet));
    await dispatch(fetchPostEnd());
    setTitle("");
    setImage(null);
    await dispatch(resetOpenNewPost());
  };
  return (
    <>
      <Modal
        isOpen={openNewPost}
        onRequestClose={async () => {
          await dispatch(resetOpenNewPost());
        }}
        style={customStyles}
      >
        <form className={styles.core_signUp}>
          <h1 className={styles.core_title}>instagram clone</h1>
          <br />

          <TextField
            placeholder="Please enter caption"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            id="imageInput"
            hidden={true}
            onChange={(e) => setImage(e.target.files![0])}
          />
          <br />
          <IconButton onClick={handlerEditPicture}>
            <MdAddAPhoto />
          </IconButton>
          <br />
          <Button
            disabled={!title || !image}
            variant="contained"
            color="primary"
            type="submit"
            onClick={newPost}
          >
            New post
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default NewPost;
