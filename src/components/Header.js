import React, { memo } from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (<>

        <div className={styles.container}>
                <h1 className='text-center my-auto'>To Do List</h1>
        </div>
    </>)
}

export default memo(Header);
