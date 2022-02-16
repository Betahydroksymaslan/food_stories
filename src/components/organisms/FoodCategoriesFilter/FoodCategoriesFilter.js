import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Category, StyledLabel } from './FoodCategoriesFilter.style';
import { useForm } from 'react-hook-form';
import { useMedia } from 'hooks/useMedia';

const FoodCategoriesFilter = ({ data, filterCategories }) => {
  const { register, watch } = useForm();
  const media = useMedia('(max-width: 600px)');

  useEffect(() => {
    const subscription = watch((value) => {
      const filteredData = value.categories
        .filter((item) => Object.values(item)[0] === true)
        .map((item) => Object.keys(item)[0]);
      filterCategories(filteredData);
    });

    return () => subscription.unsubscribe();
  }, []);

  const scroller = useRef(null);

  const listOfCategories = data.map((item, index) => (
    <StyledLabel
      key={item.name}
      isChecked={watch(`categories[${index}].${item.name}`)}
    >
      <img src={item.imagePath} />
      {item.name}
      <Category {...register(`categories[${index}].${item.name}`)} />
    </StyledLabel>
  ));

  useEffect(() => {
    if (!scroller.current || media) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const scrollHorizontalByWheel = (e) => {
      e.preventDefault();
      scroller.current.scrollLeft += e.deltaY;
    };

    const startGrabScrolling = (e) => {
      isDown = true;
      scroller.current.classList.add('active');
      startX = e.pageX - scroller.current.offsetLeft;
      scrollLeft = scroller.current.scrollLeft;
    };

    const handleScrollGrabMoving = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroller.current.offsetLeft;
      const walk = x - startX;
      scroller.current.scrollLeft = scrollLeft - walk * 1.5;
    };

    const endGrabScrolling = () => (isDown = false);

    scroller.current.addEventListener('wheel', scrollHorizontalByWheel);
    scroller.current.addEventListener('mousedown', startGrabScrolling);
    scroller.current.addEventListener('mousemove', handleScrollGrabMoving);
    scroller.current.addEventListener('mouseleave', endGrabScrolling);
    scroller.current.addEventListener('mouseup', endGrabScrolling);

    return () => {
      if (scroller.current) {
        scroller.current.removeEventListener('wheel', scrollHorizontalByWheel);
        scroller.current.removeEventListener('mousedown', startGrabScrolling);
        scroller.current.removeEventListener(
          'mousemove',
          handleScrollGrabMoving
        );
        scroller.current.removeEventListener('mouseleave', endGrabScrolling);
        scroller.current.removeEventListener('mouseup', endGrabScrolling);
      }
    };
  }, [media]);

  return <Wrapper ref={scroller}>{data && listOfCategories}</Wrapper>;
};

FoodCategoriesFilter.propTypes = {
  data: PropTypes.array,
  filterCategories: PropTypes.func,
};

export default FoodCategoriesFilter;
