import Search from './Search'
import Description from './Description'
import Info from './Info'
import styles from './style.module.css'
import Error from './Error'

function App(){



    return(
        <div className={styles.mainContainer}>
            <Error />
            <div className={styles.part1}>
                <Search />
                <Description />
            </div>
            <div className={styles.part2}>
                <Info />
            </div>
        </div>
    )


}

export default App