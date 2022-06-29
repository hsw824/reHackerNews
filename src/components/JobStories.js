import { useEffect, useState } from "react";
import MyCommon from "./MyCommon";

export const JobStories = ({ id }) => {
  const [story, setStory] = useState({});
  const getJobStories = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const json = await response.json();
    setStory(json);
  };
  useEffect(() => {
    getJobStories();
  }, []);
  return <MyCommon story={story} />;
};
