import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const idSearchInput = nanoid();
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchWrap}>
      <h2>Фільтр пошуку</h2>
      <label htmlFor={idSearchInput}>Find contacts by name</label>
      <input
        id={idSearchInput}
        type="text"
        // value={value}
        onChange={handleChange}
      />
    </div>
  );
}
// export default function SearchBox({ value, onChangeValue }) {
//   const idSearchInput = nanoid();

//   return (
//     <div className={css.searchWrap}>
//       <h2>Фільтр пошуку</h2>
//       <label htmlFor={idSearchInput}>Find contacts by name</label>
//       <input
//         id={idSearchInput}
//         type="text"
//         value={value}
//         onChange={(e) => onChangeValue(e.target.value)}
//       />
//     </div>
//   );
// }
