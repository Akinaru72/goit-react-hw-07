import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  const hanleDeleteContact = () => {
    const deleteContactAction = deleteContact(id);
    dispatch(deleteContactAction);
  };

  // console.log("Contact Data:", { name, number });
  return (
    <div className={css.item}>
      <div>
        <p className={css.context}>
          <FaUser />
          {name}
        </p>
        <p className={css.context}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button onClick={hanleDeleteContact} className={css.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
