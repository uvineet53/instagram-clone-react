import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

const Posts = ({username,imageUrl,caption}) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="https://picsum.photos/200"
        />
        <h3>{username}</h3>
      </div>
      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      <h4 className="post__text">
        <strong>{username}</strong>: {caption}
      </h4>
    </div>
  );
};

export default Posts;
