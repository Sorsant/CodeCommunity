import styles from './search.module.css'
import { search } from '../../test/features/user'
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
            <div className={styles.search} onChange={handleChange}>
                <div className={styles.search_box}>
                    <div className={styles.search_field}>
                        <input className={styles.bar} type='text' placeholder='Search 🔍' />
                        <div className={styles.search_box_icon}>
                            <button className={styles.button} onClick={handleSubmit}>
                                <i className={styles.search_icon}>
                                    <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
