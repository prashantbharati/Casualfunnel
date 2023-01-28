import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import * as api from "../../api/index.js";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const tell = async () => {
      const { data } = await api.fetchPosts();
      setPosts(data);
      return data;
    };
    tell();
  }, []);

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
            <Posts setCurrentId={setCurrentId} posts={posts} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              posts={posts}
              setPosts={setPosts}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
