import React from 'react';
import { Link } from 'dva/router';
import styles from './Item.css';

const Item = ({item}) => {
    const {
        id,
        photoSrc, 
        name, 
        desc, 
        oriPrice, 
        curPrice, 
        isSoldOut,
        text
    } = item;

    return (
        <figure className={styles.normal}>
            <div className={styles.photoWrapper}>
                <Link to={`/item/${id}`}>
                    <img src={photoSrc} alt={desc} className={styles.photo} />
                </Link>
            </div>

            <figcaption className={styles.caption}>
                <div className={styles.name}>{name}</div>
                <p>{desc}</p>
                <img src="" alt="the alt" className={styles.addButton} />
                <div className={styles.foot}>
                    <span className={styles.oriPrice}>{`￥${oriPrice}`}</span>
                    <span className={styles.curPrice}>{`￥${curPrice}`}</span>
                </div>
                <div className={styles.isSoldOut}>{isSoldOut?'今日估清':''}</div>
            </figcaption>
        </figure>
    );
};

export default Item;