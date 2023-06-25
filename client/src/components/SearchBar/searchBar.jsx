import styles from './search.module.css'
import { search } from '../Redux/Actions/Get/action-get'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const SearchBar = () => {

    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(search(searchString))
    }

    return (
        <div className={styles.divContainer}>
            <form className={` mt-3 ${styles.search}`} role="search" onChange={handleChange}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className={` btn btn-success ${styles.button}`} type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div >
    )
}

export default SearchBar
