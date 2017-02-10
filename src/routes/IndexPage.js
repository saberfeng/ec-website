import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import HeadBar from '../components/HeadBar';
import ItemList from '../components/ItemList';
import FootBar from '../components/FootBar';
import { Carousel } from 'antd';

function IndexPage({items, carousel}) {

  const slides = carousel.map(slide => {
    return <div key={slide.id}><img className={styles.slide} src={slide.photoSrc} /></div>
  });

  return (
    <div className={styles.normal}>
      <div className={styles.carousel_container}>
        {slides.length ? <Carousel autoplay>{slides}</Carousel> : null}
      </div>
      <div className={styles.product_title}>
        <span className={styles.rxdp}>热销单品</span>
      </div>
      <div className={styles.wrapper}>
        <HeadBar />
        <ItemList items={items} />
        <FootBar />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    items: state.app.itemsById,
    carousel: state.app.carousel
  }
}


export default connect(mapStateToProps)(IndexPage);
