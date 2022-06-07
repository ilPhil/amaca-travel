import style from "./index.module.scss"
import { getActivities } from "../../utils/fetch"
import { useState, useEffect } from "react"


export default function CardItem (title, description) {
 const [activity, setActivity] = useState([]);
 //const activities = getActivities().data
 useEffect(() => {
   getActivities().then((act) => setActivity(act))
 }, []);

const data = activity.data

const formatContentText = (content) => {
  const textArr = content && content.split(' ')
  return content && textArr.splice(1, textArr.length - 2).join(' ')
}

return (
<>
{/* {console.log(data)} */}
{data && data.map((actList) => (
  <div className={style.card} key={actList.uuid} >
  <div>
  <img className={style.poster} src={actList.cover_image_url}/>
    <div className={style.container}>
      <h1 className={style.title}>{actList.title}</h1>
      <p className={style.description}>{formatContentText(actList.about)}</p>
    </div>
  </div>
  </div>

))}
{/*<main>
  <div className={style.card}>
  <img className={style.poster} src="https://www.ansa.it/webimages/ch_620x438/2021/7/22/2950c469bbc8283c68201209f13dd924.jpg"/>
    <div className={style.info}>
      <h1 className={style.title}>Title</h1>
      <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit</p>
    </div>
  </div>
</main>*/}
</>
)
}