import { useContext, useEffect } from "react";
import { MyContext } from "../Context/Context";
import styles from './style.module.css'
import { IoMdClose } from "react-icons/io";



function Error() {

    const { error, setError } = useContext(MyContext)

    function handleClick() {
        setError("")
    }

    useEffect(() => {
        if (error) {
            const preventScroll = (event) => {
                event.preventDefault();
            };

            window.addEventListener('wheel', preventScroll, { passive: false });

            //window.addEventListener('touchstart', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });

            return () => {
                window.removeEventListener('wheel', preventScroll, { passive: false });
                //window.removeEventListener('touchstart', preventScroll, { passive: false });
                window.removeEventListener('touchmove', preventScroll, { passive: false });
            };
        }
    }, [error]);

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.error}>
                    <span onClick={handleClick} className={styles.icon2}><IoMdClose /></span>
                    <p>{error}</p>
                </div>
            </div>
        )
    }

}

export default Error