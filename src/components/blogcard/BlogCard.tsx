import { ThumbsUp, ThumbsDown, MessageCircle, Bookmark } from "lucide-react";
import { useState } from "react";
import "./BlogCard.css";

type Blog = {
  authorImg: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

type BlogCardProps = {
  blog: Blog;
};


function BlogCard({ blog }: BlogCardProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);

  // Destructure blog data
  const { authorImg, category, date, title, description } = blog;

  return (
    <div className="card">
      {/* Top Section */}
      <div className="top">
        <img src={authorImg} alt="author" />
        <button
          className="save-btn"
          style={saved ? { color: "blue" } : {}}
          onClick={() => setSaved(!saved)}
        >
          {saved ? "Saved" : "Save"} <Bookmark size={14} />
        </button>
      </div>

      {/* Center Section */}
      <div className="center">
        <h3>
          {category} <span>{date}</span>
        </h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="actions">
          <button
            className={liked ? "active" : ""}
            onClick={() => {
              setLiked(!liked);
              setDisliked(false);
            }}
          >
            <ThumbsUp size={16} /> Like
          </button>

          <button
            className={disliked ? "active" : ""}
            onClick={() => {
              setDisliked(!disliked);
              setLiked(false);
            }}
          >
            <ThumbsDown size={16} /> Dislike
          </button>

          <button>
            <MessageCircle size={16} /> Comments
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
