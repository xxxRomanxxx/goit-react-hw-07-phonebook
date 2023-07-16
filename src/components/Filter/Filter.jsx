import css from './Filter.module.css'
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const Filter = () => {
	const dispatch = useDispatch();
  
	const onFilterChange = evt => dispatch(setFilter(evt.currentTarget.value));  

	return (
		<label className={css.filter}>
			Find contacts by name
			<input type="text" name="filter"className={css.filter__input} onChange={onFilterChange}/>
		</label>
	)
};

export default Filter;