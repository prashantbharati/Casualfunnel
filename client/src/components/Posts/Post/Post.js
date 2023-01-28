import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core/";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import * as api from "../../../api/index.js";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const deletePost = async (id) => {
    try {
      console.log("reached delete");
      const { data } = await api.deletePost(id);
      console.log("done delete", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6" className={classes.spacing}>
          {post.name}
        </Typography>
        <Typography variant="body2" className={classes.spacing}>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.data.result?.googleId === post?.creator ||
        user?.data.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            onClick={() => setCurrentId(post._id)}
            style={{ color: "white" }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.content}
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.data.result?.googleId === post?.creator ||
          user?.data.result?._id === post?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => deletePost(post._id)}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
