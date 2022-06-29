import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

export const ShowStories = ({ id }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    const getShowStories = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const json = await response.json();
      setStory(json);
    };
    getShowStories();
  }, [id]);
  return <MyCommon story={story} />;
};
