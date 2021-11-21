import style from './Search.module.css';

const Search = () => {
    return (
        <div className={style.inputField}>
            <div className={style.location}>
                <img src="/assets/icons/location.svg" alt="" />
                <p> Mumbai - 400612</p>
            </div>
            <hr />
            <input type="text" name="search" id="search" placeholder="What are you looking for ?" />
        </div>
    )
}

export default Search;