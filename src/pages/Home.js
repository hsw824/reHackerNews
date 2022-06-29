import React, { useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import { Top } from "../components/Top";
import TopStories from "../components/TopStories";
import Loader from "../components/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Thumbs } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const Home = () => {
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

  const getId = async () => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/topstories.json`
    );
    const json = await response.json();
    setId(json);
  };

  useEffect(() => {
    getId();
  }, []);

  SwiperCore.use([Thumbs, Pagination]);

  return (
    <div className="Home">
      <MyHeader />
      <h1>
        Current <br /> Total Top 5
      </h1>
      <div className="banner">
        <Swiper pagination={{ clickable: true }}>
          {id.slice(0, 5).map((id, index) => (
            <SwiperSlide key={id}>
              <Top key={index} id={id} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {id.slice(5, itemLists.length + 5).map((id) => (
        <TopStories key={id} id={id} />
      ))}
      <div ref={setTarget} className="Target-Element">
        {isLoaded && <Loader />}
      </div>
    </div>
  );
};

export default Home;
