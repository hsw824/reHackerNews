import { useEffect, useState } from "react";

const Top = ({ id, index }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const getStory = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const json = await response.json();
      setStory(json);
    };
    getStory();
  }, [id]);

  return (
    <section>
      <h3>0{index + 1}</h3>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <span>{story.by}</span>
    </section>
  );
};

export default Top;
