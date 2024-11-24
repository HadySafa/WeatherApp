import styles from './style.module.css'
import { useContext, useEffect } from "react"
import { MyContext } from "../Context/Context"
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { FiWind } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

function Info() {

    const { data } = useContext(MyContext)

    function checkVisibility(visibility) {

        let text = "";

        if (visibility >= 10) {
            text = "Very safe to drive.";
        } else if (visibility >= 5) {
            text = "Safe to drive, but remain alert.";
        } else if (visibility >= 2) {
            text = "Reduce speed, drive with caution.";
        } else if (visibility >= 1) {
            text = "Hazardous, reduce speed, use headlights.";
        } else {
            text = "Very poor, drive extremely cautiously.";
        }

        return visibility + " km - " + text
    }

    function checkHumidity(humidity) {

        let text = "";

        if (humidity >= 70) {
            text = "High humidity";
        } else if (humidity >= 40) {
            text = "Moderate humidity";
        } else {
            text = "Low humidity";
        }

        return humidity + " % - " + text

    }

    return (
        <>
            {
                data
                    ?
              
                        <section className={styles.infoContainer}>
                            <div className={styles.info}>
                                <h2>
                                    <LiaTemperatureLowSolid />
                                    Temperature
                                </h2>
                                <div className={styles.infoSubContainer}>
                                    <div>
                                        <p>{(data.main.feels_like - 273.15).toFixed(2)}°</p>
                                        <p>Feels Like</p>
                                    </div>
                                    <div>
                                        <p>{(data.main.temp_min - 273.15).toFixed(2)}°</p>
                                        <p>Min</p>
                                    </div>
                                    <div>
                                        <p>{(data.main.temp_max - 273.15).toFixed(2)}°</p>
                                        <p>Max</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <h2>
                                    <FiWind />
                                    Wind
                                </h2>
                                <div className={styles.infoSubContainer}>
                                    <div>
                                        <p>{data.wind.speed} m/s</p>
                                        <p>Speed</p>
                                    </div>
                                    <div>
                                        <p>{data.wind.deg}°</p>
                                        <p>Degrees</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <h2>
                                    <MdOutlineVisibility />
                                    Visibility
                                </h2>
                                <p>{checkVisibility(data.visibility / 1000)}</p>
                            </div>

                            <div className={styles.info}>
                                <h2>
                                    <WiHumidity />
                                    Humidity
                                </h2>
                                <p>{checkHumidity(data.main.humidity)}</p>
                            </div>
                        </section>
              

                    : null
            }
        </ >
    )

}

export default Info