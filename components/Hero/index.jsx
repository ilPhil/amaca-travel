import Image from "next/image";
import { useState, useRef } from "react";
import styles from "./style.module.scss";

const Hero = () => {
  const [imgPos, setImgPos] = useState(0);
  const [isFade, setFade] = useState(false);

  const rightBtn = useRef();
  const leftBtn = useRef();
  const imageEl = useRef();

  const images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--1-min-min.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--2-min-min.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--5-min-min.jpg",
  ];

  
  const imgSwipe = (e) => {
    setFade(true);

    if (e.target.textContent === ">") {
      imgPos < images.length - 1
        ? setImgPos((prev) => (prev += 1))
        : setImgPos(0);
    } else {
      imgPos > 0
        ? setImgPos((prev) => (prev -= 1))
        : setImgPos(images.length - 1);
    }

    setTimeout(() => {
      setFade(false);
    }, 100);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.wrapper__hero} ${isFade && styles.fade}`}
        ref={imageEl}
      >
        <Image
          className={styles.wrapper__image}
          src={images[imgPos]}
          layout="fill"
        />
      

      <div className={styles.wrapper__btnleft}>
        <button ref={leftBtn} onClick={imgSwipe}>
          {"<"}
        </button>
        </div>

        <div className={styles.wrapper__btnright}>
        <button ref={rightBtn} onClick={imgSwipe}>
          {">"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default Hero;