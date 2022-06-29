import { useEffect, useState } from "react";
import { AskStories } from "../components/AskStories";
import Loader from "../components/Loader";
import MyHeader from "../components/MyHeader";

const Ask = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  useEffect(() => {
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting && !isLoaded) {
        observer.unobserve(entry.target);
        await getMoreItem();
        observer.observe(entry.target);
      }
    };

    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, isLoaded]);

  const [id, setId] = useState([]);

  const getAskId = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/askstories.json`
    );
    const json = await response.json();
    setId(json);
  };

  useEffect(() => {
    getAskId();
  }, []);

  return (
    <div>
      <MyHeader />
      {id.slice(0, itemLists.length).map((id) => (
        <AskStories key={id} id={id} />
      ))}
      <div ref={setTarget} className="Target-Element">
        {isLoaded && <Loader />}
      </div>
    </div>
  );
};

export default Ask;
