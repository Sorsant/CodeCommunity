import styles from './search.module.css'
import { search } from '../Redux/Actions/ActionHome'
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
        <div>
            <form className={` mt-2 ${styles.searchbar}`} role="search" onChange={handleChange}>
                <input className="form-control form-control-lg me-2 col-12" type="search" aria-label="Search"></input>
                <button className={` btn btn-lg btn-success ${styles.button}`} type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div >
    )
}

export default SearchBar
