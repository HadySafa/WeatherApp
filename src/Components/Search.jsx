import { useContext,useRef } from "react"
import { MyContext } from "../Context/Context"
import { IoMdSearch } from "react-icons/io";
import styles from './style.module.css'

function Search(){

    const {setSearchValue} = useContext(MyContext)
    const input = useRef();

    function handleSearch(){
        setSearchValue(input.current.value)
    }

    return(
        <div className={styles.searchContainer}>
            <input ref={input} className={styles.input} type="text" placeholder="Search a city"/>
            <button onClick={handleSearch} className={styles.icon}><IoMdSearch /></button>
        </div>
    )
}

export default Search