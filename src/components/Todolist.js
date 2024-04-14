import React from "react";
import AddNewItem from "./AddNewItem"; // Importing AddNewItem component
import Header from "./Header"; // Importing Header component
import ItemList from "./ItemList"; // Importing ItemList component
import UpdateInput from "./UpdateInput"; // Importing UpdateInput component
import styles from "./Todolist.module.css";
const Todolist = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.main}>
          <Header />
          <AddNewItem />
          <ItemList />
        </div>
      </div>

      <UpdateInput />
    </div>
  );
};

export default Todolist;
