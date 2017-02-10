import React from 'react';
import styles from './ItemList.css';
import Item from './Item.js';
import { Row, Col } from 'antd'

const ItemList = ({items}) => {

    let listLayout = [];
    for (let i = 0; i < items.length; i += 2) {
        if (i === items.length - 1) {
            listLayout.push(
                <Row>
                    <Col span={12}>
                        <Item item={items[i]} key={items[i].id} />
                    </Col>
                </Row>
            );
        } else {
            listLayout.push(
                <Row key={items[i].id}>
                    <Col span={12}>
                        <Item item={items[i]} key={items[i].id} />
                    </Col>
                    <Col span={12}>
                        <Item item={items[i+1]} key={items[i].id} />
                    </Col>
                </Row>
            );
        }
    }
    return (
        <div className={styles.normal}>
            {listLayout
                /*
                items.map((item,i)=><Item item={item} key={item.id}/>)
                */
            }
        </div>
    );
};

export default ItemList;