import React from 'react';
import styles from './FootBar.css';

const NavBar =()=>{
    return (
        <div className={styles.normal}>
            <img src="/img/user.png" />
            <div className={styles.cart_bar}>
                <span>￥</span>
                <span className={styles.total_fee}></span>
                <span className={styles.delivery_fee}>满￥38起送</span>
            </div>
        </div>
    );
}

export default NavBar;