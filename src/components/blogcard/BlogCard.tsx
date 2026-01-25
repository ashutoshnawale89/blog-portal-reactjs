import { ThumbsUp, ThumbsDown, MessageCircle, Bookmark } from "lucide-react";
import { useState } from "react";
import "./BlogCard.css";

function BlogCard() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="card">
      {/* Top Section */}
      <div className="top">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.DddVc_GnX93lvAb8aTj7tAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="author"
        />
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
          Tech Insights <span>Jan 24, 2026</span>
        </h3>
        <h2>
          How React is Changing Modern Web Development
        </h2>
        <p>
          React makes it painless to create interactive UIs. Learn how
          component-based architecture improves performance and scalability.
        </p>
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
