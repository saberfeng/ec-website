import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import HeadBar from '../components/HeadBar';
import ItemList from '../components/ItemList';
import FootBar from '../components/FootBar';
import { Carousel } from 'antd';
import Slider from 'react-slick';


function CustomSlides({slide}) {
  return (<img className={styles.carousel} src={slide.photoSrc} />);
}

function IndexPage({items, carousel}) {
  /*
  const images = carousel.map((image, i) => {
    return <div><img className={styles.carousel} src={image.photoSrc} /></div>
  });
  */
  const slides = carousel.map(slide => {
    return <div><CustomSlides slide={slide} /></div>
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className={styles.normal}>
      {/*
      <Carousel autoplay>
        {images}
      </Carousel>

    <Slider>
      { carousel.map(slide => <div><CustomSlides /></div>) }
    </Slider> 
      */
      }

      {slides.length ? <Carousel autoplay>{slides}</Carousel> : null}

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
