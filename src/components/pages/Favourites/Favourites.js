import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import { ReactComponent as FavouritesIcon } from 'assets/icons/favouriteIcon.svg';
import PageHeader from 'components/molecules/PageHeader/PageHeader';
import Search from 'components/organisms/Search/Search';
import { db } from 'assets/firebase/firebase';
import { useSelector } from 'react-redux';
import FoodBoxItem from 'components/organisms/FoodBoxItem/FoodBoxItem';
import { FoodWrapper } from './Favourites.styled';
import { motion, AnimatePresence } from 'framer-motion';

const Favourites = (props) => {
  const [meals, setMeals] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e) => setSearchValue(e.target.value);

  const auth = useSelector((state) => state.firebase.auth);

  const filteredMeals = meals?.filter((item) =>
    item.mealname.toLowerCase().includes(searchValue.toLowerCase())
  );

  const renderFoodBoxes = filteredMeals.map((item) => (
    <AnimatePresence key={item.mealname}>
      <FoodBoxItem data={item} />
    </AnimatePresence>
  ));

  useEffect(() => {
    const favouriteRef = db.ref(`users/${auth.uid}/favourite`);

    const listener = favouriteRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const temporaryData = [];

      for (let id in data) {
        temporaryData.push(data[id]);
      }
      setMeals(temporaryData);
    });

    return () => favouriteRef.off('value', listener);
  }, []);
  console.log(meals);
  return (
    <PageWrapper>
      <PageHeader text="Ulubione">
        <FavouritesIcon />
      </PageHeader>

      <Search rounded value={searchValue} onChange={handleOnChange} />

      <FoodWrapper layout>{meals && renderFoodBoxes}</FoodWrapper>
    </PageWrapper>
  );
};

Favourites.propTypes = {};

export default Favourites;
