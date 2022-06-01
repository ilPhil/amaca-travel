import style from "./index.module.scss"

export default function CardItem () {
return (
<>

<main>
  <div className={style.card}>
  <img className={style.poster} src="https://www.ansa.it/webimages/ch_620x438/2021/7/22/2950c469bbc8283c68201209f13dd924.jpg"/>
    <div className={style.info}>
      <h1 className={style.title}>Title</h1>
      <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit</p>
    </div>
  </div>
</main>
</>

)
}