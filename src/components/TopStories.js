import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

const TopStories = ({ id }) => {
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

  return <MyCommon story={story} />;
};

export default TopStories;
