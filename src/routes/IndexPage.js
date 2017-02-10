import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import HeadBar from '../components/HeadBar';
import ItemList from '../components/ItemList';
import FootBar from '../components/FootBar';
import { Carousel } from 'antd';

function IndexPage({items, carousel}) {
  const images = carousel.map((image, i) => {
    return <div key={image.id}><div><img className={styles.carousel} src={image.photoSrc} /></div></div>
  });
  return (
    <div className={styles.normal}>
      <Carousel autoplay>
        {images}
      </Carousel>
      
      <HeadBar />
      <ItemList items={items} />
      <FootBar />
    </div>
  );
}
/*
IndexPage.propTypes = {
};
*/
function mapStateToProps(state) {
  return {
    items: state.app.itemsById,
    carousel: state.app.carousel
  }
}
/**
 * <div className={styles.product_title}>
        <span className={styles.rxdp}>热销单品</span>
      </div>
 */


/*
{items.map((item,i)=>{<Item item={item} key={item.id}/>})}
*/

export default connect(mapStateToProps)(IndexPage);
