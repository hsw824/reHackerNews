import { useState, useEffect } from "react";
import MyHeader from "../components/MyHeader";
import { ArticleStories } from "../components/ArticleStories";
import Loader from "../components/Loader";

const Article = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const [id, setId] = useState([]);

  const getArticleId = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/newstories.json`
    );
    const json = await response.json();
    setId(json);
  };
  useEffect(() => {
    getArticleId();
  }, []);
  return (
    <div>
      <MyHeader />
      {id.slice(0, itemLists.length).map((id) => (
        <ArticleStories key={id} id={id} />
      ))}
      <div ref={setTarget} className="Target-Element">
        {isLoaded && <Loader />}
      </div>
    </div>
  );
};

export default Article;
