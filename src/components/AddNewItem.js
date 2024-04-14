import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import styles from "./AddNewItem.module.css";
import { addItem, removeAllItem } from "../action/todolistAction";

const AddNewItem = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const trimUpdateText = item.trim();
    if (trimUpdateText !== "") {
      dispatch(addItem(trimUpdateText));
      setItem("");
    }
  };

  const removeAllHandle = (e) => {
    e.preventDefault();
    dispatch(removeAllItem());
  };

  return (
    <>
      <div>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleForm}>
            <div className={styles.formContainer}>
              <input
                className={styles.textBox}
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                maxLength="16"
                placeholder="Write Here !!"
                required
              />
            </div>   
            <div className={styles.buttons}>
              <button className={`${styles.btn1} ${styles.customBtn}`}>
                {/* <input className="" type="submit" value="Add Item" /> */}
                Add Item
              </button>
              <div className="button-2">
                <button className={`${styles.customBtn} ${styles.btn1}`} onClick={removeAllHandle}>
                  Remove All
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(AddNewItem);
