import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import * as api from "../../api/index.js";
import Pagination from "../Pagination/Pagination";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [posts, setPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const tell = async () => {
      const { data } = await api.fetchPosts();
      setPosts(data);
      return data;
    };
    tell();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts?.slice(firstPostIndex, lastPostIndex);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} posts={currentPosts} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              posts={posts}
              setPosts={setPosts}
            />
          </Grid>
          <Grid item>
            <Pagination
              totalPosts={posts?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
