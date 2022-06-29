import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

export const ArticleStories = ({ id }) => {
  const [story, setStory] = useState([]);

  const getArticleStories = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const json = await response.json();
    setStory(json);
  };
  useEffect(() => {
    getArticleStories();
  }, []);
  return <MyCommon story={story} />;
};
