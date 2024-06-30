import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.SearchBox}>
            <p className={css.text}>Find contacts by name</p>
            <input className={css.input}
                type="text"
                name="search"
                value={value}
                onChange={e => onFilter(e.target.value)}
            />
        </div>
    );
}
