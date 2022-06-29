import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

export const AskStories = ({ id }) => {
  const [story, setStory] = useState([]);
  const getAskStories = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const json = await response.json();
    setStory(json);
  };
  useEffect(() => {
    getAskStories();
  }, []);

  return <MyCommon story={story} />;
};
