import { useEffect, useState } from "react";

export const Top = ({ id, index }) => {
  const [story, setStory] = useState([]);
  const getStory = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const json = await response.json();
    setStory(json);
  };
  useEffect(() => {
    getStory();
  }, []);

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
