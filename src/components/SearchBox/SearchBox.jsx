import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.inputField}
        type="type"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
export default SearchBox;
