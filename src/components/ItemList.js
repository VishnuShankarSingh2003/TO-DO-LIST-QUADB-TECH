import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
// Importing specific action methods from 'todolistAction'
import { selectItem, removeItem } from "../action/todolistAction";
// Importing icons from Material-UI
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./ItemList.module.css";
const ItemList = () => {
  // Getting todolist state from centralized state
  const myState = useSelector((state) => state.todolistReducer.todolist);

  // Dispatch method from 'react-redux'
  const dispatch = useDispatch();

  // Item select action handler
  const selectHandle = (item, itemId) => {
    // Dispatch selectItem action
    dispatch(selectItem(item, itemId));
    // Remove class to update-row
    document.getElementById("update-row").classList.remove("d-none");
  };

  return (
    <>
      <div className="mr-5">
        <div className={styles.items}>
          <ul className={styles.ul}>
            {myState.map((item, itemId) => (
              <li key={itemId} className={styles.li}>
                {item}
                <span onClick={() => dispatch(removeItem(itemId))} >
                  <span className="delete-outline-icon float-right ">
                    <DeleteOutlineIcon />
                  </span>
                  <span className="delete-icon">
                    <DeleteIcon />
                  </span>
                </span>
                <span
                  onClick={() => selectHandle(item, itemId)}
                  className="change-edit-icon  "
                >
                  <span className="edit-outlined-icon float-right">
                    <EditOutlinedIcon />
                  </span>
                  <span className="edit-icon float-right">
                    <EditIcon />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default memo(ItemList);
