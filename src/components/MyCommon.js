const MyCommon = ({ story }) => {
  return (
    <div className="common">
      <div className="textBox">
        <a href={story.url}>
          <p>{story.title}</p>
        </a>
      </div>
      <div className="infoBox">
        <span>{story.by}</span>
        <span className="point">
          <img src={"assets/point.svg"} alt={"포인트"} />
          <span>1000</span>
        </span>
        <span className="comment">
          <img src={"assets/comment.svg"} alt={"댓글 수"} />
          <span>1000</span>
        </span>
      </div>
    </div>
  );
};

export default MyCommon;
