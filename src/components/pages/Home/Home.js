import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FoodBoxesWrapper } from './Home.style';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import { db } from 'assets/firebase/firebase';
import FoodCategoriesFilter from 'components/organisms/FoodCategoriesFilter/FoodCategoriesFilter';
import FoodBoxItem from 'components/organisms/FoodBoxItem/FoodBoxItem';
import Search from 'components/organisms/Search/Search';
import { motion, AnimatePresence } from 'framer-motion';

const testIsValueEqual = (obj, tab) => {
  let counter = 0;
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < obj.categoriesArray.length; j++) {
      if (tab[i] === obj.categoriesArray[j]) {
        counter += 1;
        break;
      }
    }
  }
  if (counter === tab.length) {
    return true;
  } else {
    return false;
  }
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  hide: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { y: 200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Home = (props) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const ref = db.ref('mealCategories');
    const listener = ref.on('value', (snapshot) => {
      const data = snapshot.val();
      const temporaryData = [];
      for (let id in data) {
        temporaryData.push({ ...data[id] });
      }
      setCategories(temporaryData);
    });

    return () => ref.off('value', listener);
  }, []);

  useEffect(() => {
    const ref = db.ref('meals');
    const listener = ref.on('value', (snapshot) => {
      const data = snapshot.val();
      let categoriesArray = [];
      const temporaryData = [];
      for (let id in data) {
        for (let deepId in data[id].categories) {
          categoriesArray.push(data[id].categories[deepId].categoryName);
        }
        temporaryData.push({ ...data[id], categoriesArray });
        categoriesArray = [];
      }
      setMeals(temporaryData);
    });

    return () => ref.off('value', listener);
  }, []);
  console.log(meals);
  const onSearchChange = (e) => setSearchValue(e.target.value);

  const filterMeals = meals
    .filter((item) => testIsValueEqual(item, filteredCategories))
    .filter((item) =>
      item.mealname.toLowerCase().includes(searchValue.toLowerCase())
    );

  const renderFoodBoxes = filterMeals.map((meal) => (
    <FoodBoxItem
      key={meal?.mealname}
      data={meal}
      as={motion.div}
      variants={item}
    />
  ));

  return (
    <PageWrapper>
      <Search rounded onChange={onSearchChange} value={searchValue} />
      <FoodCategoriesFilter
        data={categories}
        filterCategories={setFilteredCategories}
      />
      <AnimatePresence>
        <FoodBoxesWrapper
          variants={container}
          initial="hidden"
          animate="show"
          exit="hide"
          layout
          as={motion.div}
        >
          {meals && renderFoodBoxes}
        </FoodBoxesWrapper>
      </AnimatePresence>
    </PageWrapper>
  );
};

Home.propTypes = {};

export default Home;
