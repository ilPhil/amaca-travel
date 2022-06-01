import Image from "next/image";
import styles from "./style.module.scss";

const PixelHero = () => {

    const img = ["https://imgur.com/f5Gngui.jpg"]
    

    return(
        <div className={styles.wrapper2}>

        <div className={styles.wrapper2__pixelHero}>
        {img.map((image,index) => (<Image className={styles.wrapper2__img} src={image} alt="" key={index} layout="fill" />))}
        </div>

        <div className={styles.wrapper2__text}>
            test
        </div>
        <div className={styles.wrapper2__text2}>
            press
        </div>
        <button>pixel</button>

        </div>
    )
}

export default PixelHero;