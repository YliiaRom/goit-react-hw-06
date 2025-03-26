import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchName = useSelector((state) => state.filters.name);
  const filterContactsWithSearch = () => {
    if (!searchName.trim()) {
      return contacts;
    }
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(searchName.toLowerCase())
    );
  };

  return (
    <div className={css.contactList}>
      {filterContactsWithSearch().map((el, index) => (
        <Contact key={index} user={el} />
      ))}
    </div>
  );
}
