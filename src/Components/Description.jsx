import { useContext, useEffect } from "react"
import { MyContext } from "../Context/Context"
import styles from './style.module.css'
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";


function Description() {

    const { data } = useContext(MyContext)

    function changeFormat(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        return time
    }

    return (
        <section className={styles.container}>
            {
                data
                    ?
                    <>
                        <h2>{data?.name}</h2>
                        <div className={styles.subContainer1}>
                            <h3>{(data.main.temp - 273.15).toFixed(2)}°</h3>
                            <p>{data.weather[0].description}</p>
                        </div>
                        <div className={styles.subContainer2}>
                            <div className={styles.time}>
                                <h2>
                                    <span><LuSunrise /></span>
                                    Sunrise
                                </h2>
                                <p>{changeFormat(data.sys.sunrise)} am</p>
                            </div>
                            <div className={styles.time}>
                                <h2>
                                    <span><LuSunset /></span>
                                    Sunset
                                </h2>
                                <p>{changeFormat(data.sys.sunset)} pm</p>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </section>
    )

}

export default Description