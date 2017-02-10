import React from 'react';
import styles from './HeadBar.css';

const HeadBar =()=>{
    return (
        <div className={styles.normal}>
            <img src="user.png" className={styles.click_pro}/>
            <input className={styles.address_input} 
                type="text" readOnly="true" placeholder="无法获取位置" />
        </div>
    );
};

export default HeadBar;