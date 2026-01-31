import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <ul className={css.data}>
        <li>
          <IoPersonSharp /> {name}
        </li>
        <li>
          <BsTelephoneFill /> {number}
        </li>
      </ul>
      <button onClick={handleDeleteContact} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
