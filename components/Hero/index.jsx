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
    {
      title: "Amsterdam",
      src: "https://images.musement.com/cover/0002/15/amsterdam_header-114429.jpeg",
      currentIndex: 1,
      // uuid: '416f5475-3384-11ea-a8ce-06c1426e0cac',
    },
    {
      title: "Roma",
      src: "https://images.musement.com/cover/0002/37/rome-jpg_header-136539.jpeg",
      currentIndex: 2,
      // uuid: '416f1e06-3384-11ea-a8ce-06c1426e0cac',
    },
    {
      title: "Parigi",
      src: "https://images.musement.com/cover/0002/49/paris-jpeg_header-148745.jpeg",
      currentIndex: 3,
      // uuid: '416f4727-3384-11ea-a8ce-06c1426e0cac',
    },
    {
      title: "New York",
      src: "https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg",
      currentIndex: 4,
      // uuid: '416f52ad-3384-11ea-a8ce-06c1426e0cac',
    },
    {
      title: "Praga",
      src: "https://images.musement.com/cover/0002/45/prague_header-144616.jpeg",
      currentIndex: 5,
      // uuid: '416f6125-3384-11ea-a8ce-06c1426e0cac',
    },
  ];

  const imgSwipe = (e) => {
    setFade(true);

    if (e.target.id === "r-button") {
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
        <ul className={styles.wrapper__text}>
          {images &&
            images.map((item, index) => {
              if (imgPos === index) {
                return (
                  <li className={styles.wrapper__title} key={index}>
                    {" "}
                    {item.title}{" "}
                  </li>
                );
              }
            })}
        </ul>

        <Image
          className={styles.wrapper__image}
          src={images[imgPos]}
          layout="fill"
        />

        <div className={styles.wrapper__btnleft}>
          <button ref={leftBtn} onClick={imgSwipe}>
            <img
              className={styles.arrow}
              src="/freccia-l.ico"
              alt="Arrow Icon"
            ></img>
          </button>
        </div>

        <div className={styles.wrapper__btnright}>
          <button id="r-button" ref={rightBtn} onClick={imgSwipe}>
            <img
              id="r-button" 
              className={styles.arrow}
              src="/freccia-r.ico"
              alt="Arrow Icon"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
