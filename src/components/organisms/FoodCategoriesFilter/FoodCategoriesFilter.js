import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Category, StyledLabel } from './FoodCategoriesFilter.style';
import { useForm } from 'react-hook-form';

const FoodCategoriesFilter = ({ data }) => {
  const { register, watch, getValues } = useForm();

  const categories = getValues('categories');
  const watchAll = watch(`categories`);

  const filteredData = categories?.filter((item) => item.lody === true );

  console.log(watchAll);
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
  return <Wrapper>{data && listOfCategories}</Wrapper>;
};

FoodCategoriesFilter.propTypes = {
  data: PropTypes.array,
};

export default FoodCategoriesFilter;
