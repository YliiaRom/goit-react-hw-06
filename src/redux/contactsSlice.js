import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// export const addContact = createAction("form/addContact");
// export const setToLocaleStorage = createAction("form/setToLocaleStorage");
// export const deleteContact = createAction("contact/deleteContact");

// const initialState = {
//   contacts: {
//     items: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//   },
// };

// const contactsReducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case "form/addContact": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }
//     case "contact/deleteContact": {
//       return {
//         ...state,
//         items: state.items.filter((el) => el.id !== action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };
// export default contactsReducer;

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
