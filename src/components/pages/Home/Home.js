import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import { db } from 'assets/firebase/firebase';
import FoodCategoriesFilter from 'components/organisms/FoodCategoriesFilter/FoodCategoriesFilter';

const Home = (props) => {
  const [categories, setCategories] = useState([]);
  let unsubcribe;
  useEffect(() => {
    const dbRef = db.ref('mealCategories');
    unsubcribe = dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const temporaryData = [];
      for (let id in data) {
        temporaryData.push({ ...data[id] });
      }
      setCategories(temporaryData);
    });

    return () => unsubcribe;
  }, []);
  //console.log(categories);
  return (
    <PageWrapper>
      <FoodCategoriesFilter data={categories} />
    </PageWrapper>
  );
};

Home.propTypes = {};

export default Home;
