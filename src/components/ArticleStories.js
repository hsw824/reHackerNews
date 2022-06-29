import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

export const ArticleStories = ({ id }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const getArticleStories = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const json = await response.json();
      setStory(json);
    };
    getArticleStories();
  }, [id]);
  return <MyCommon story={story} />;
};
