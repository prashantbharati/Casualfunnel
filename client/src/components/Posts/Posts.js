import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import * as api from "../../api/index.js";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const tell = async () => {
      const { data } = await api.fetchPosts();
      setPosts(data);
      return data;
    };
    tell();
  }, []);
  const classes = useStyles();
  console.log("received2", posts?.length);
  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
