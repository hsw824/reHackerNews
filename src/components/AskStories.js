import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

export const AskStories = ({ id }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const getAskStories = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const json = await response.json();
      setStory(json);
    };
    getAskStories();
  }, [id]);

  return <MyCommon story={story} />;
};
