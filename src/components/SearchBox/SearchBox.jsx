import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchbox}>
      <p>Find contacts by Name</p>
      <input
        id="text"
        className={css.inputfield}
        type="text"
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
}
