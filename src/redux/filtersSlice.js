import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// export const changeFilter = createAction("searchBox/changeFilter");
// const initialState = {
//   filters: {
//     name: "",
//   },
// };

// const filterReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "searchBox/changeFilter": {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
// export default filterReducer;
const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = slice.actions;
export default slice.reducer;
